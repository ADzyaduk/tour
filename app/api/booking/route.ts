import { NextRequest, NextResponse } from "next/server"
import {
  getTrimmedString,
  protectPublicFormRoute,
} from "@/lib/server/form-protection"

export async function POST(request: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: "Telegram not configured" }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 })
  }

  const protectionResponse = protectPublicFormRoute(request, body)
  if (protectionResponse) {
    return protectionResponse
  }

  const { serviceName, serviceType, name, phone } = body as Record<string, string>
  const normalizedName = getTrimmedString(name)
  const normalizedPhone = getTrimmedString(phone)
  const normalizedServiceName = getTrimmedString(serviceName)

  if (normalizedName.length < 2) {
    return NextResponse.json({ ok: false, error: "name required" }, { status: 400 })
  }
  if (!normalizedPhone) {
    return NextResponse.json({ ok: false, error: "phone required" }, { status: 400 })
  }

  const typeLabel = serviceType === "yacht" ? "Яхта" : "Экскурсия"

  const text = [
    "Новая заявка на бронирование",
    "",
    `Тип: ${typeLabel}`,
    `Услуга: ${normalizedServiceName.slice(0, 200)}`,
    `Имя: ${normalizedName.slice(0, 100)}`,
    `Телефон: ${normalizedPhone.slice(0, 50)}`,
  ].join("\n")

  const tgRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    }
  )

  if (!tgRes.ok) {
    return NextResponse.json({ ok: false, error: "Telegram error" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
