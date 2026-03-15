import Link from "next/link"
import { Anchor, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { SocialLinks } from "@/components/shared/SocialLinks"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                <Anchor className="w-4.5 h-4.5 text-gold" strokeWidth={1.5} />
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Aqua<span className="text-gold">Vista</span>
              </span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Экскурсии по Сочи и Абхазии, аренда яхт и морские прогулки на черноморском побережье.
            </p>
            {/* Socials */}
            <SocialLinks />
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-display text-gold text-base font-semibold mb-5 tracking-wide">
              Навигация
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Главная" },
                { href: "/excursions", label: "Экскурсии" },
                { href: "/yachts", label: "Яхты и прогулки" },
                { href: "/contacts", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 hover:text-gold text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-display text-gold text-base font-semibold mb-5 tracking-wide">
              Услуги
            </h4>
            <ul className="space-y-3">
              {[
                "Экскурсии по Абхазии",
                "Горные туры",
                "Морские прогулки",
                "Аренда яхт",
                "Групповые поездки",
                "Индивидуальные туры",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/55 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display text-gold text-base font-semibold mb-5 tracking-wide">
              Контакты
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm leading-relaxed">
                  Сочи, Адлер
                  <br />
                  Порт Имеретинский
                </span>
              </li>
              <li>
                <a
                  href="tel:+79881234567"
                  className="flex items-center gap-3 text-white/55 hover:text-gold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal shrink-0" />
                  +7 988 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@aquavista.com"
                  className="flex items-center gap-3 text-white/55 hover:text-gold text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal shrink-0" />
                  hello@aquavista.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <span>© {new Date().getFullYear()} AquaVista. Все права защищены.</span>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-white/60 transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
