import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-background px-4">
      <div className="text-center">
        <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3">
          Страница не найдена
        </p>
        <h1 className="font-display text-6xl sm:text-8xl font-light text-gold italic mb-4">
          404
        </h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Запрашиваемая страница не существует или была перемещена.
        </p>
      </div>
      <Link
        href="/"
        className="px-8 py-3 rounded-xl bg-navy text-white text-sm font-medium hover:bg-navy/90 transition-colors"
      >
        На главную
      </Link>
    </main>
  )
}
