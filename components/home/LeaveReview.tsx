"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquarePlus, ChevronDown } from "lucide-react"
import { fadeUpVariants } from "@/lib/animations"
import { ReviewForm } from "@/components/reviews/ReviewForm"

export function LeaveReview() {
  const [open, setOpen] = useState(false)

  return (
    <section className="bg-sand py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-teal" />
            Поделитесь впечатлениями
            <span className="inline-block w-6 h-px bg-teal" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-navy mb-4">
            Были у нас? <span className="text-gold italic">Расскажите</span>
          </h2>
          <p className="text-navy/55 text-sm leading-relaxed max-w-md mx-auto mb-6">
            Ваш отзыв поможет другим путешественникам и важен для нас. Публикуем все настоящие отзывы.
          </p>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy/20 text-navy/70 text-sm font-medium hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Оставить отзыв
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex"
            >
              <ChevronDown className="w-4 h-4" />
            </motion.span>
          </button>
        </motion.div>

        {/* Form */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ReviewForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
