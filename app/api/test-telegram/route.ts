import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json({
      ok: false,
      error: "Env vars missing",
      token: token ? "✅ есть" : "❌ нет",
      chatId: chatId ? "✅ есть" : "❌ нет",
    })
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: "✅ Тест AquaVista — заявки работают!",
    }),
  })

  const data = await res.json()
  return NextResponse.json({ ok: res.ok, telegram: data })
}
