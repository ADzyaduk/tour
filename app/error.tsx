"use client"

import Link from "next/link"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background px-4">
      <div className="text-center">
        <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3">
          Ошибка
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-navy mb-4">
          Что-то пошло не так
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Попробуйте обновить страницу или вернитесь на главную.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-2.5 rounded-xl bg-navy text-white text-sm font-medium hover:bg-navy/90 transition-colors"
        >
          Попробовать снова
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-xl border border-navy/20 text-navy text-sm font-medium hover:bg-sand-dark transition-colors"
        >
          На главную
        </Link>
      </div>
    </main>
  )
}
