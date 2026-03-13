"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Anchor, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/excursions", label: "Экскурсии" },
  { href: "/yachts", label: "Яхты" },
  { href: "/contacts", label: "Контакты" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || pathname !== "/"
          ? "bg-navy border-b border-gold/20 shadow-[0_4px_30px_rgba(10,22,40,0.3)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <Anchor className="w-4 h-4 text-gold" strokeWidth={1.5} />
            </div>
            <span className="font-display text-xl font-semibold text-white tracking-wide">
              Aqua<span className="text-gold">Vista</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium tracking-wide transition-colors rounded-lg",
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white hover:bg-white/8"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79881234567"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+7 988 123 45 67</span>
            </a>
            <Button
              asChild
              size="sm"
              className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-5 shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all"
            >
              <Link href="/contacts">Забронировать</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-navy border-l border-gold/20 p-0"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <Anchor className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    <span className="font-display text-lg font-semibold text-white">
                      Aqua<span className="text-gold">Vista</span>
                    </span>
                  </Link>
                  <SheetClose className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
                    <X className="w-5 h-5" />
                  </SheetClose>
                </div>

                {/* Nav links */}
                <nav className="flex-1 px-4 py-6 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all",
                          pathname === link.href
                            ? "bg-gold/15 text-gold border border-gold/25"
                            : "text-white/75 hover:text-white hover:bg-white/8"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="px-4 py-6 border-t border-gold/15 space-y-3">
                  <a
                    href="tel:+79881234567"
                    className="flex items-center gap-2 px-4 py-2.5 text-white/60 hover:text-white text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +7 988 123-45-67
                  </a>
                  <Button
                    asChild
                    className="w-full bg-coral hover:bg-coral-dark text-white border-0 font-medium h-11"
                  >
                    <Link href="/contacts" onClick={() => setMobileOpen(false)}>
                      Забронировать
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
