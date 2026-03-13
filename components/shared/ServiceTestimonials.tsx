import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

interface Props {
  serviceId: string
}

export function ServiceTestimonials({ serviceId }: Props) {
  const items = testimonials.filter((t) => t.serviceId === serviceId).slice(0, 4)

  if (items.length === 0) return null

  return (
    <section className="bg-sand-dark py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Отзывы гостей
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-navy">
            Что говорят{" "}
            <span className="text-gold italic">наши гости</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-border shadow-[0_2px_12px_rgba(10,22,40,0.06)]"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>
              <blockquote className="text-navy/75 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy font-semibold text-xs shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-navy font-medium text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
