"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeUpVariants, staggerContainer } from "@/lib/animations"

interface FaqItem {
  q: string
  a: string
}

function FAQItem({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUpVariants}
      custom={index}
      className="relative border-b border-navy/10 last:border-b-0"
    >
      {/* Gold left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-300 ${
          isOpen ? "bg-gold opacity-100" : "bg-gold opacity-0"
        }`}
      />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 pl-5 pr-0 text-left group"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Свернуть ответ" : "Развернуть ответ"}
      >
        <span className="font-display text-lg sm:text-xl font-medium text-navy group-hover:text-gold transition-colors duration-200 text-balance">
          {item.q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full border border-navy/15 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/5 transition-all duration-200"
          aria-hidden="true"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="minus"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Minus className="w-3.5 h-3.5" />
              </motion.span>
            ) : (
              <motion.span
                key="plus"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Plus className="w-3.5 h-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pl-5 pb-5 text-navy/70 text-sm sm:text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function ExcursionFAQ({ faq }: { faq: FaqItem[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-white rounded-2xl border border-navy/8 shadow-[0_2px_20px_rgba(10,22,40,0.06)] px-6 sm:px-8"
    >
      {faq.map((item, i) => (
        <FAQItem key={i} item={item} index={i} />
      ))}
    </motion.div>
  )
}
