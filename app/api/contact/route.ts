import { NextRequest, NextResponse } from "next/server"

const subjectLabels: Record<string, string> = {
  general: "Общий вопрос",
  excursion: "Бронирование экскурсии",
  yacht: "Аренда яхты",
  event: "Частное мероприятие",
  other: "Другое",
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json()

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Bot not configured" }, { status: 500 })
    }

    const subjectLabel = subjectLabels[subject] ?? subject
    const phoneStr = phone ? `\n📞 *Телефон:* ${phone}` : ""

    const text = [
      "📬 *Новая заявка с сайта AquaVista*",
      "",
      `👤 *Имя:* ${name}`,
      `📧 *Email:* ${email}`,
      phoneStr,
      `📌 *Тема:* ${subjectLabel}`,
      "",
      `💬 *Сообщение:*`,
      message,
    ]
      .filter((line) => line !== undefined)
      .join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
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
