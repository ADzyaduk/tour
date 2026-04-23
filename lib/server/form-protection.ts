import { NextRequest, NextResponse } from "next/server"

const DEFAULT_ALLOWED_ORIGINS = [
  "https://aquavista.ru",
  "https://www.aquavista.ru",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const getAllowedOrigins = (): Set<string> => {
  const configuredOrigins = process.env.ALLOWED_FORM_ORIGINS
    ?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)

  return new Set(
    configuredOrigins && configuredOrigins.length > 0
      ? configuredOrigins
      : DEFAULT_ALLOWED_ORIGINS
  )
}

const getRequestOrigin = (request: NextRequest): string | null => {
  const origin = request.headers.get("origin")
  if (origin) {
    return origin
  }

  const referer = request.headers.get("referer")
  if (!referer) {
    return null
  }

  try {
    return new URL(referer).origin
  } catch {
    return null
  }
}

const getClientIp = (request: NextRequest): string => {
  const forwardedFor = request.headers.get("x-forwarded-for")
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown"
}

const pruneExpiredEntries = (now: number): void => {
  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }
}

const checkRateLimit = (
  request: NextRequest
): { allowed: true } | { allowed: false; retryAfterSeconds: number } => {
  const now = Date.now()
  pruneExpiredEntries(now)

  const key = `${request.nextUrl.pathname}:${getClientIp(request)}`
  const existing = rateLimitStore.get(key)

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return { allowed: true }
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    }
  }

  existing.count += 1
  rateLimitStore.set(key, existing)

  return { allowed: true }
}

export const getTrimmedString = (value: unknown): string =>
  typeof value === "string" ? value.trim() : ""

export const protectPublicFormRoute = (
  request: NextRequest,
  body: Record<string, unknown>
): NextResponse | null => {
  const honeypot = getTrimmedString(body.website)
  if (honeypot) {
    return NextResponse.json({ ok: true })
  }

  const origin = getRequestOrigin(request)
  if (!origin || !getAllowedOrigins().has(origin)) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 })
  }

  const rateLimit = checkRateLimit(request)
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    )
  }

  return null
}
