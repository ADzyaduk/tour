import { Phone } from "lucide-react"

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 6.526-1.694 7.988c-.127.576-.461.716-.934.445l-2.578-1.899-1.244 1.198c-.138.138-.253.253-.519.253l.185-2.629 4.782-4.32c.208-.185-.046-.287-.323-.103L7.94 14.668l-2.53-.791c-.55-.172-.561-.55.115-.815l9.623-3.711c.457-.166.857.103.714.814z" />
    </svg>
  )
}

function MaxIcon({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/maxlogo.svg" alt="" aria-hidden="true" className={className} />
  )
}

interface SocialLinksProps {
  telegramHref?: string
  maxHref?: string
  className?: string
  iconClassName?: string
  buttonClassName?: string
}

export function SocialLinks({
  telegramHref = "#",
  maxHref = "#",
  className,
  buttonClassName,
}: SocialLinksProps) {
  const base =
    buttonClassName ??
    "w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/40 transition-all"

  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <a href={telegramHref} aria-label="Telegram" className={base}>
        <TelegramIcon className="w-4 h-4" />
      </a>
      <a href={maxHref} aria-label="Max" className={base}>
        <MaxIcon className="w-4 h-4" />
      </a>
      <a href="tel:+79881234567" aria-label="Позвонить" className={base}>
        <Phone className="w-4 h-4" />
      </a>
    </div>
  )
}
