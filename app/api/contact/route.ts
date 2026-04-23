import { NextRequest, NextResponse } from "next/server"
import {
  getTrimmedString,
  protectPublicFormRoute,
} from "@/lib/server/form-protection"

const subjectLabels: Record<string, string> = {
  general: "Общий вопрос",
  excursion: "Бронирование экскурсии",
  yacht: "Аренда яхты",
  event: "Частное мероприятие",
  other: "Другое",
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>
    const protectionResponse = protectPublicFormRoute(req, body)
    if (protectionResponse) {
      return protectionResponse
    }

    const { name, email, phone, subject, message } = body
    const normalizedEmail = getTrimmedString(email)

    if (
      typeof name !== "string" || name.trim().length < 2 ||
      (normalizedEmail.length > 0 && !normalizedEmail.includes("@")) ||
      typeof subject !== "string" || subject.trim().length === 0 ||
      typeof message !== "string" || message.trim().length < 10 || message.length > 1000
    ) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Bot not configured" }, { status: 500 })
    }

    const subjectLabel = subjectLabels[subject] ?? subject
    const phoneStr = phone && typeof phone === "string" ? `\nТелефон: ${phone}` : ""
    const emailStr = normalizedEmail ? `Email: ${normalizedEmail}` : ""

    const text = [
      "Новая заявка с сайта AquaVista",
      "",
      `Имя: ${name.trim()}`,
      emailStr,
      phoneStr,
      `Тема: ${subjectLabel}`,
      "",
      "Сообщение:",
      message.trim(),
    ]
      .filter(Boolean)
      .join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error("Telegram error:", err)
      return NextResponse.json({ ok: false, error: "Telegram error" }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("Contact API error:", e)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
