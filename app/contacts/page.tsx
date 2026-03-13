import { ContactForm } from "@/components/contacts/ContactForm"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata = {
  title: "Контакты — AquaVista",
  description:
    "Свяжитесь с AquaVista для бронирования экскурсии или аренды яхты в Сочи.",
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <div className="bg-navy py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Свяжитесь с нами
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-light text-white">
            Планируем ваш{" "}
            <span className="text-gold italic">отдых</span>
          </h1>
          <p className="text-white/55 mt-4 max-w-md mx-auto leading-relaxed">
            Наша команда готова помочь с выбором экскурсии или яхты. Оставьте заявку — ответим в течение 24 часов.
          </p>
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy mb-5">
                Как нас найти
              </h2>
              <ul className="space-y-4">
                {[
                  {
                    Icon: MapPin,
                    label: "Адрес",
                    value: "Адлер, Морской бульвар, 1\nПорт Имеретинский",
                  },
                  {
                    Icon: Phone,
                    label: "Телефон",
                    value: "+7 988 123-45-67",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: "hello@aquavista.ru",
                  },
                  {
                    Icon: Clock,
                    label: "Режим работы",
                    value: "Пн–Сб: 9:00 – 20:00\nВс: 10:00 – 18:00",
                  },
                ].map(({ Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5 tracking-wide uppercase">
                        {label}
                      </div>
                      <div className="text-navy text-sm font-medium whitespace-pre-line leading-relaxed">
                        {value}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-52 bg-navy/5 relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--teal) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="relative text-center p-6">
                <div className="w-10 h-10 rounded-full bg-teal/20 border-2 border-teal/40 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-teal" />
                </div>
                <p className="text-navy font-medium text-sm">Порт Имеретинский</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Адлер, Сочи
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-border p-6 sm:p-8 shadow-[0_2px_20px_rgba(10,22,40,0.06)]">
              <h2 className="font-display text-2xl font-semibold text-navy mb-1">
                Напишите нам
              </h2>
              <p className="text-muted-foreground text-sm mb-7">
                Расскажите о желаемом опыте — мы позаботимся обо всём остальном.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
