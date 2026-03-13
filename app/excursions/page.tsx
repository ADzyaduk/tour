import { Suspense } from "react"
import { ExcursionFilters } from "@/components/excursions/ExcursionFilters"
import { ExcursionCard } from "@/components/excursions/ExcursionCard"
import { excursions, type Excursion } from "@/lib/data"

export const metadata = {
  title: "Экскурсии — AquaVista",
  description:
    "Все экскурсии по Сочи и Абхазии: горные туры, природные маршруты, обзорные поездки и активный отдых.",
}

function filterAndSort(
  list: Excursion[],
  category: string | null,
  duration: string | null,
  sort: string | null
): Excursion[] {
  let result = [...list]

  if (category && category !== "all") {
    result = result.filter((e) => e.category === category)
  }

  if (duration && duration !== "all") {
    result = result.filter((e) => {
      if (duration === "short") return e.durationHours < 3
      if (duration === "half") return e.durationHours >= 3 && e.durationHours <= 5
      if (duration === "full") return e.durationHours >= 6
      return true
    })
  }

  if (sort) {
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price)
    if (sort === "rating-desc") result.sort((a, b) => b.rating - a.rating)
  }

  return result
}

export default async function ExcursionsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; duration?: string; sort?: string }>
}) {
  const { category = null, duration = null, sort = null } = await searchParams
  const filtered = filterAndSort(excursions, category, duration, sort)

  return (
    <main className="min-h-screen">
      {/* Hero header */}
      <div className="bg-navy pt-36 pb-16 lg:pt-44 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Откройте для себя
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white">
            Наши{" "}
            <span className="text-gold italic">экскурсии</span>
          </h1>
          <p className="text-white/55 mt-4 max-w-lg mx-auto leading-relaxed">
            От рассветных морских прогулок до вечерних культурных маршрутов —
            каждый тур создан, чтобы остаться в памяти навсегда.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Suspense fallback={null}>
            <ExcursionFilters />
          </Suspense>
          <span className="text-muted-foreground text-sm shrink-0">
            Найдено: {filtered.length} {filtered.length === 1 ? "экскурсия" : filtered.length >= 2 && filtered.length <= 4 ? "экскурсии" : "экскурсий"}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((excursion, i) => (
              <ExcursionCard key={excursion.id} excursion={excursion} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-3xl text-navy mb-2">
              Экскурсии не найдены
            </p>
            <p className="text-muted-foreground">
              Попробуйте изменить параметры фильтра.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
