import { YachtCard } from "@/components/yachts/YachtCard"
import { CTABanner } from "@/components/home/CTABanner"
import { GroupTripCard } from "@/components/group-trips/GroupTripCard"
import { yachts, groupTrips } from "@/lib/data"

export const metadata = {
  title: "Яхты — AquaVista",
  description:
    "Приватный чартер парусных яхт, моторных яхт и катамаранов на черноморском побережье. Аренда яхт в Сочи и Адлере.",
}

export default function YachtsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-navy py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-teal/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Приватный чартер
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white">
            Наш <span className="text-gold italic">флот</span>
          </h1>
          <p className="text-white/55 mt-4 max-w-lg mx-auto leading-relaxed">
            Шесть тщательно отобранных яхт. Каждая — плавучий санктуарий,
            готовый унести вас туда, куда зовёт море.
          </p>

          {/* Quick stats */}
          <div className="flex items-center justify-center gap-10 mt-10">
            {[
              { value: "6", label: "Яхт" },
              { value: "38–72", label: "Футов" },
              { value: "4–14", label: "Гостей" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl font-semibold text-gold">
                  {s.value}
                </div>
                <div className="text-white/45 text-xs tracking-widest uppercase mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {yachts.map((yacht, i) => (
            <YachtCard key={yacht.id} yacht={yacht} index={i} />
          ))}
        </div>
      </div>

      {/* Group trips section */}
      <div id="group-trips" className="bg-sand px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-teal" />
              Групповые прогулки
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-navy">
              Морские <span className="text-gold italic">прогулки</span>
            </h2>
            <p className="text-navy/55 mt-3 max-w-lg leading-relaxed text-sm">
              Групповые выходы в море — отличный способ ощутить атмосферу черноморского побережья без аренды всей яхты.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupTrips.map((trip, i) => (
              <GroupTripCard key={trip.id} trip={trip} index={i} />
            ))}
          </div>
        </div>
      </div>

      <CTABanner />
    </main>
  )
}
