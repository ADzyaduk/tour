"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Users, Star, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import {
  fadeUpVariants,
  slideInLeft,
  slideInRight,
  imageZoom,
  staggerContainer,
} from "@/lib/animations"
import { Button } from "@/components/ui/button"

const features = [
  {
    Icon: Anchor,
    title: "Опытные капитаны",
    desc: "Лицензированные экипажи с многолетним опытом в черноморских водах.",
  },
  {
    Icon: Users,
    title: "Приватный чартер",
    desc: "Только ваша компания на борту — без посторонних.",
  },
  {
    Icon: Star,
    title: "Сервис 5 звёзд",
    desc: "Внимание к каждой детали от отплытия до возвращения.",
  },
  {
    Icon: Sparkles,
    title: "Индивидуальный маршрут",
    desc: "Маршрут составляется под ваши желания и интересы.",
  },
]

export function YachtShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={slideInLeft}
              className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
            >
              <span className="inline-block w-6 h-px bg-teal" />
              Наш флот
            </motion.p>
            <motion.h2
              variants={slideInLeft}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
            >
              Ваш личный
              <br />
              <span className="text-gold italic">отдых на море</span>
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              className="text-white/60 leading-relaxed mb-8 max-w-md"
            >
              Тщательно отобранные яхты, обслуживаемые по высшим стандартам. Каждый выход в море — это особенное событие с профессиональной командой.
            </motion.p>

            {/* Features grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {features.map(({ Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUpVariants}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-gold/25 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium mb-0.5">
                      {title}
                    </div>
                    <div className="text-white/50 text-xs leading-relaxed">
                      {desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <Button
                asChild
                className="bg-gold hover:bg-gold-light text-navy border-0 font-semibold px-8 h-12 shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all gap-2 group"
              >
                <Link href="/yachts">
                  Выбрать яхту
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={imageZoom}
              className="relative h-80 sm:h-96 lg:h-130 rounded-2xl overflow-hidden img-golden-hour"
            >
              <Image
                src="/img/yachts/sochi/indigo/indigo1.webp"
                alt="Парусная яхта Индиго в Сочи"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent z-20" />
            </motion.div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -left-5 sm:-bottom-8 sm:-left-8 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-sand-dark"
            >
              <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                Аренда от
              </div>
              <div className="font-display text-3xl font-semibold text-navy">
                6 000 ₽
                <span className="text-sm font-body text-muted-foreground ml-1">
                  / час
                </span>
              </div>
            </motion.div>

            {/* Decorative teal dot cluster */}
            <div className="absolute -top-6 -right-6 w-24 h-24 opacity-30 pointer-events-none hidden lg:block">
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-teal"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
