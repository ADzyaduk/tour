"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, Compass } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/8 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/8 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 mb-6"
          >
            <Compass className="w-3.5 h-3.5 text-gold" />
            <span className="text-gold text-xs font-medium tracking-wide">
              Готовы отправиться?
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
          >
            Начните своё
            <br />
            <span className="text-gold italic">черноморское приключение</span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="text-white/55 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10"
          >
            Экскурсии, аренда яхт, морские прогулки — ваш идеальный отдых начинается с одного сообщения.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-8 h-12 shadow-xl shadow-coral/30 gap-2 group"
            >
              <Link href="/contacts">
                Начать планирование
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent h-12 px-8 font-medium"
            >
              <Link href="/excursions">Смотреть экскурсии</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
