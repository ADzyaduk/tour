"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Compass, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 600], [0, 160])
  const opacityContent = useTransform(scrollY, [0, 400], [1, 0])
  const yContent = useTransform(scrollY, [0, 400], [0, -60])

  return (
    <section className="relative h-screen min-h-150 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <Image
          src="/img/hero.jpg"
          alt="Черноморское побережье"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-navy/70 via-navy/40 to-navy/80 pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-navy/30 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ opacity: opacityContent, y: yContent }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-px w-10 bg-gold/60" />
          <span className="text-gold text-xs font-medium tracking-[0.25em] uppercase">
            Черноморское побережье
          </span>
          <div className="h-px w-10 bg-gold/60" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] max-w-5xl"
        >
          Море, горы
          <br />
          и <span className="text-gold italic">незабываемые</span> впечатления
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-6 text-white/70 text-base sm:text-lg max-w-lg leading-relaxed font-body"
        >
          Экскурсии по Сочи и Абхазии, аренда яхт и морские прогулки на черноморском побережье.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-8 mt-8 mb-10"
        >
          {[
            { value: "9+", label: "Экскурсий" },
            { value: "3", label: "Яхты" },
            { value: "500+", label: "Гостей" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-semibold text-gold">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs tracking-widest uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-8 h-12 shadow-xl shadow-coral/30 hover:shadow-coral/50 transition-all gap-2"
          >
            <Link href="/excursions">
              <Compass className="w-4 h-4" />
              Смотреть экскурсии
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 bg-transparent backdrop-blur-sm h-12 px-8 font-medium gap-2"
          >
            <Link href="/yachts">
              <Anchor className="w-4 h-4" />
              Яхты и прогулки
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{ opacity: opacityContent }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
          Листать
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
