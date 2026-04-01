"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { fadeUpVariants, staggerContainer } from "@/lib/animations"

const faqs = [
  {
    question: "Нужно ли бронировать заранее?",
    answer: "Рекомендуем бронировать заранее, особенно в высокий сезон. Оставьте заявку — менеджер свяжется с вами и подберёт удобное время.",
  },
  {
    question: "Что включено в стоимость экскурсии?",
    answer: "Транспорт, услуги гида и входные билеты по маршруту. Питание и личные расходы — за счёт гостей, если не указано иное.",
  },
  {
    question: "Можно ли отменить или перенести бронирование?",
    answer: "Да, мы всегда идём навстречу. Свяжитесь с менеджером — вместе найдём удобное решение.",
  },
  {
    question: "Берёте ли детей на экскурсии?",
    answer: "Да, дети welcome! Уточните при бронировании особенности маршрута — подберём то, что подойдёт всей семье.",
  },
  {
    question: "Где происходит отправление?",
    answer: "Обычно из Адлера или Сочи — точное место встречи уточняется при подтверждении. По запросу организуем трансфер от вашего отеля.",
  },
  {
    question: "Что взять с собой?",
    answer: "Удобную обувь, воду и лёгкий перекус. Для морских прогулок — купальник и солнцезащитный крем. Подробный список пришлём при подтверждении.",
  },
  {
    question: "Как оплатить?",
    answer: "Небольшая предоплата при бронировании, остаток — на месте. Принимаем наличные и карты.",
  },
  {
    question: "Что если погода испортится?",
    answer: "Безопасность гостей — приоритет. При неблагоприятных условиях перенесём на ближайшую возможную дату или вернём оплату.",
  },
  {
    question: "Как арендовать яхту только для своей компании?",
    answer: "Выберите яхту из нашего флота, укажите желаемое время — и яхта будет только вашей. Маршрут составляем под вас.",
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
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
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 pl-5 pr-0 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg sm:text-xl font-medium text-navy group-hover:text-gold transition-colors duration-200">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-navy/15 flex items-center justify-center text-gold group-hover:border-gold group-hover:bg-gold/5 transition-all duration-200">
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
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section className="py-20 lg:py-28 bg-sand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Частые вопросы
            <span className="inline-block w-6 h-px bg-teal" />
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="font-display text-4xl sm:text-5xl font-light text-navy"
          >
            Всё что вы
            <br />
            <span className="text-gold italic">хотели знать</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl border border-navy/8 shadow-[0_2px_20px_rgba(10,22,40,0.06)] px-6 sm:px-8 divide-y-0"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
