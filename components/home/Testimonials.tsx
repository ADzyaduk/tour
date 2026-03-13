"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/animations"
import { testimonials } from "@/lib/data"

function pickRandom4() {
  return [...testimonials].sort(() => Math.random() - 0.5).slice(0, 4)
}

export function Testimonials() {
  const [items, setItems] = useState(() => testimonials.slice(0, 4))

  useEffect(() => {
    setItems(pickRandom4())
  }, [])

  return (
    <section className="py-20 lg:py-28 bg-sand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2"
          >
            <span className="inline-block w-6 h-px bg-teal" />
            Отзывы гостей
            <span className="inline-block w-6 h-px bg-teal" />
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-4xl sm:text-5xl font-light text-navy"
          >
            Что говорят
            <br />
            <span className="text-gold italic">наши гости</span>
          </motion.h2>
        </motion.div>

        {/* Scrollable on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {items.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
              className="snap-start shrink-0 w-[82vw] sm:w-72 lg:w-auto bg-white rounded-2xl p-6 border border-border shadow-[0_2px_12px_rgba(10,22,40,0.06)] hover:shadow-[0_8px_30px_rgba(10,22,40,0.1)] transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-3.5 h-3.5 text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-navy/75 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-navy font-semibold text-xs shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-navy font-medium text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
