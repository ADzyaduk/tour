import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, rating, text, service } = body

    if (
      typeof name !== "string" || name.trim().length < 2 ||
      typeof text !== "string" || text.trim().length < 10 || text.length > 1000 ||
      typeof rating !== "number" || !Number.isFinite(rating)
    ) {
      return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 })
    }

    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_REVIEWS_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      return NextResponse.json({ ok: false, error: "Bot not configured" }, { status: 500 })
    }

    const clampedRating = Math.min(5, Math.max(1, Math.round(rating)))
    const stars = "⭐".repeat(clampedRating)
    const serviceStr = service && typeof service === "string" ? `\nУслуга: ${service}` : ""

    const message = [
      `${stars} Новый отзыв на AquaVista`,
      "",
      `Имя: ${name.trim()}`,
      `Оценка: ${clampedRating}/5`,
      serviceStr,
      "",
      "Отзыв:",
      text.trim(),
    ]
      .filter((line) => line !== undefined)
      .join("\n")

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
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
