import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, rating, text, service } = await req.json()

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_REVIEWS_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Bot not configured" }, { status: 500 })
    }

    const stars = "⭐".repeat(Math.min(5, Math.max(1, Number(rating))))
    const serviceStr = service ? `\n🚤 *Услуга:* ${service}` : ""

    const message = [
      `${stars} *Новый отзыв на AquaVista*`,
      "",
      `👤 *Имя:* ${name}`,
      `⭐ *Оценка:* ${rating}/5`,
      serviceStr,
      "",
      `💬 *Отзыв:*`,
      text,
    ]
      .filter((line) => line !== undefined)
      .join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
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
    console.error("Review API error:", e)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
