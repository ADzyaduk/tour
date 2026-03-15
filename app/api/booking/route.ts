import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({ error: "Telegram not configured" }, { status: 500 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const { serviceName, serviceType, name, phone, date } = body as Record<string, string>

  if (!name || String(name).trim().length < 2) {
    return NextResponse.json({ error: "name required" }, { status: 400 })
  }
  if (!phone || !String(phone).trim()) {
    return NextResponse.json({ error: "phone required" }, { status: 400 })
  }
  if (!date) {
    return NextResponse.json({ error: "date required" }, { status: 400 })
  }

  const typeLabel = serviceType === "yacht" ? "Яхта" : "Экскурсия"

  const text = [
    "Новая заявка на бронирование",
    "",
    `Тип: ${typeLabel}`,
    `Услуга: ${String(serviceName).slice(0, 200)}`,
    `Имя: ${String(name).trim().slice(0, 100)}`,
    `Телефон: ${String(phone).trim().slice(0, 50)}`,
    `Дата: ${String(date)}`,
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
    return NextResponse.json({ error: "Telegram error" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
