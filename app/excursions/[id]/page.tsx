import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, MapPin, Users, Star, Check, ArrowLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { excursions } from "@/lib/data"
import { ImageGallery } from "@/components/ui/ImageGallery"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const excursion = excursions.find((e) => e.id === id)
  if (!excursion) return {}
  return {
    title: `${excursion.title} — AquaVista`,
    description: excursion.description,
  }
}

const categoryLabel: Record<string, string> = {
  sightseeing: "Обзорная",
  cultural: "Культурная",
  adventure: "Экстрим",
  nature: "Природа",
}

export default async function ExcursionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const excursion = excursions.find((e) => e.id === id)
  if (!excursion) notFound()

  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <div className="bg-navy pt-24 pb-12 lg:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center flex-wrap gap-1.5 text-white/40 text-xs mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Главная
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/excursions" className="hover:text-white/70 transition-colors">
              Экскурсии
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60 line-clamp-1">{excursion.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: content */}
            <div>
              {/* Badges */}
              <div className="flex items-center flex-wrap gap-2.5 mb-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border bg-teal/15 text-teal border-teal/25">
                  {categoryLabel[excursion.category] ?? excursion.category}
                </span>
                {excursion.city && (
                  <span className="flex items-center gap-1.5 text-white/50 text-xs">
                    <MapPin className="w-3 h-3" />
                    {excursion.city}
                  </span>
                )}
                {excursion.featuredLabel && (
                  <span className="bg-gold/90 text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
                    {excursion.featuredLabel}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-light text-white leading-[1.1] mb-6">
                {excursion.title}
              </h1>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8">
                  <Clock className="w-4 h-4 text-teal shrink-0" />
                  <div>
                    <div className="text-white/40 text-xs">Длительность</div>
                    <div className="text-white text-sm font-medium">{excursion.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8">
                  <Users className="w-4 h-4 text-teal shrink-0" />
                  <div>
                    <div className="text-white/40 text-xs">Группа</div>
                    <div className="text-white text-sm font-medium">до {excursion.maxPeople} чел</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8">
                  <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                  <div>
                    <div className="text-white/40 text-xs">Рейтинг</div>
                    <div className="text-white text-sm font-medium">
                      {excursion.rating} ({excursion.reviewCount} отз.)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8">
                  <MapPin className="w-4 h-4 text-teal shrink-0" />
                  <div>
                    <div className="text-white/40 text-xs">Город</div>
                    <div className="text-white text-sm font-medium">{excursion.city ?? "Сочи"}</div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pl-1">
                <span className="font-display text-4xl font-semibold text-white">
                  {excursion.price.toLocaleString("ru-RU")} ₽
                </span>
                <span className="text-white/50 text-sm ml-2">/ чел</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-8 h-12 shadow-xl shadow-coral/30 hover:shadow-coral/50 transition-all"
                >
                  <Link href="/contacts">Забронировать</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-6 font-medium gap-2"
                >
                  <Link href="/excursions">
                    <ArrowLeft className="w-4 h-4" />
                    Назад
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative">
              <div className="relative h-72 sm:h-96 lg:h-115 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={excursion.image}
                  alt={excursion.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      {excursion.images.length > 1 && (
        <div className="bg-navy pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ImageGallery images={excursion.images} alt={excursion.title} />
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div className="bg-sand py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Full description */}
          <div className="mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-light text-navy mb-6">
              Подробное <span className="text-gold italic">описание</span>
            </h2>
            <p className="text-navy/70 leading-relaxed text-base sm:text-lg">
              {excursion.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-navy mb-6">
              Включено в <span className="text-gold italic">программу</span>
            </h2>
            <ul className="space-y-3">
              {excursion.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-teal" />
                  </div>
                  <span className="text-navy/75 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-navy py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal/8 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold/8 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="relative z-10">
          <h3 className="font-display text-3xl sm:text-4xl font-light text-white mb-4">
            Готовы к <span className="text-gold italic">приключению?</span>
          </h3>
          <p className="text-white/55 mb-8 max-w-md mx-auto leading-relaxed">
            Оставьте заявку — мы подтвердим бронирование и ответим на все вопросы.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-10 h-12 shadow-xl shadow-coral/30 hover:shadow-coral/50 transition-all"
          >
            <Link href="/contacts">Забронировать экскурсию</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
