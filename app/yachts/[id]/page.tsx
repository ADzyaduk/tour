import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { yachts, type Yacht } from "@/lib/data"
import { ImageGallery } from "@/components/ui/ImageGallery"
import { ServiceTestimonials } from "@/components/shared/ServiceTestimonials"
import { Button } from "@/components/ui/button"
import { Check, Anchor, Users, Ruler, ArrowLeft, Phone } from "lucide-react"

const typeLabel: Record<Yacht["type"], string> = {
  sailing: "Парусная яхта",
  motor: "Моторная яхта",
  catamaran: "Катамаран",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const yacht = yachts.find((y) => y.id === id)
  if (!yacht) return {}
  return {
    title: `${yacht.name} — AquaVista`,
    description: yacht.description,
  }
}

export function generateStaticParams() {
  return yachts.map((y) => ({ id: y.id }))
}

export default async function YachtDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const yacht = yachts.find((y) => y.id === id)
  if (!yacht) notFound()

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-navy pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-white/40 text-xs mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/yachts" className="hover:text-white/70 transition-colors">
              Яхты
            </Link>
            <span>/</span>
            <span className="text-white/65">{yacht.name}</span>
          </nav>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
            {/* Left: info */}
            <div>
              <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3">
                {yacht.nameRu}
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
                <span className="text-gold italic">{yacht.name}</span>
              </h1>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-sm">
                  <Ruler className="w-3.5 h-3.5 text-teal" />
                  {yacht.length} фут
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-sm">
                  <Users className="w-3.5 h-3.5 text-teal" />
                  до {yacht.capacity} чел
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-sm">
                  <Anchor className="w-3.5 h-3.5 text-gold" />
                  {typeLabel[yacht.type]}
                </span>
              </div>

              <p className="text-white/65 leading-relaxed max-w-xl">
                {yacht.fullDescription}
              </p>
            </div>

            {/* Right: price + CTA */}
            <div className="lg:min-w-[240px] flex flex-col items-start lg:items-end gap-4">
              {/* Price card */}
              <div className="bg-white/6 border border-white/12 rounded-2xl px-6 py-5 text-left lg:text-right w-full lg:w-auto">
                <p className="text-white/45 text-xs uppercase tracking-widest mb-1">
                  Аренда от
                </p>
                <p className="font-display text-4xl font-semibold text-white leading-none">
                  {yacht.pricePerDay.toLocaleString("ru-RU")} ₽
                </p>
                <p className="text-white/45 text-sm mt-1">/ сутки</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 w-full lg:w-auto">
                <Button
                  asChild
                  className="bg-coral hover:bg-coral-dark text-white border-0 h-11 px-8 font-medium shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all w-full lg:w-auto"
                >
                  <Link href="/contacts">Забронировать</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/25 text-white hover:bg-white/8 hover:border-white/40 bg-transparent h-11 px-8 gap-2 w-full lg:w-auto"
                >
                  <Link href="/yachts">
                    <ArrowLeft className="w-4 h-4" />
                    Все яхты
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      <section className="bg-navy pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ImageGallery images={yacht.images} alt={yacht.name} />
        </div>
      </section>

      {/* ── Features & Highlights ────────────────────────── */}
      <section className="bg-sand py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="font-display text-3xl font-light text-navy mb-6">
                Оснащение и{" "}
                <span className="text-gold italic">удобства</span>
              </h2>
              <ul className="space-y-3">
                {yacht.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal" />
                    </span>
                    <span className="text-navy/80 text-sm leading-relaxed">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-3xl font-light text-navy mb-6">
                Что <span className="text-gold italic">включено</span>
              </h2>
              <ul className="space-y-3">
                {yacht.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gold" />
                    </span>
                    <span className="text-navy/80 text-sm leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ServiceTestimonials serviceId={yacht.id} />

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-navy py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Готовы выйти в море?
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white mb-6">
            Хотите арендовать{" "}
            <span className="text-gold italic">{yacht.name}</span>?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-coral hover:bg-coral-dark text-white border-0 h-12 px-10 font-medium shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all"
            >
              <Link href="/contacts">Оставить заявку</Link>
            </Button>
            <a
              href="tel:+79881234567"
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              +7 988 123-45-67
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
