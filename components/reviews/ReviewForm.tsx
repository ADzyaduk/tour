"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle, AlertCircle, Loader2, Send, Star, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SERVICE_TYPES = [
  { value: "excursion", label: "Экскурсия" },
  { value: "yacht", label: "Яхта" },
  { value: "group", label: "Морская прогулка" },
]

const SERVICE_OPTIONS: Record<string, { value: string; label: string }[]> = {
  excursion: [
    { value: "abhaziya-zolotoe-koltso", label: "Золотое кольцо Абхазии" },
    { value: "krasnaya-polyana-5-v-1", label: "Красная Поляна 5 в 1" },
    { value: "33-vodopada-adygejskoe-shou", label: "33 водопада и адыгейское шоу" },
    { value: "obzornaya-sochi-macesta-agura", label: "Обзорная по Сочи" },
    { value: "skajpark", label: "Скайпарк" },
    { value: "kvadrocikly-zapovednik", label: "Квадроциклы по заповедным местам" },
    { value: "dzhip-tur-psaho", label: "Джип-тур по каньону Псахо" },
    { value: "olimpijskij-park-shou-fontanov", label: "Олимпийский парк и шоу фонтанов" },
    { value: "sochi-gora-ahun", label: "Сочи и гора Ахун" },
  ],
  yacht: [
    { value: "y1", label: "Athena — Парусная яхта" },
    { value: "y2", label: "Poseidon — Моторная яхта" },
    { value: "y3", label: "Calypso — Катамаран" },
    { value: "y4", label: "Olympus — Парусная яхта" },
    { value: "y5", label: "Zephyr — Моторная яхта" },
    { value: "y6", label: "Nereid — Катамаран" },
  ],
  group: [
    { value: "sea-cruise-90", label: "Морская прогулка 1,5 часа" },
    { value: "sea-cruise", label: "Морская прогулка" },
    { value: "sea-fishing", label: "Морская рыбалка" },
  ],
}

const reviewSchema = z.object({
  name: z.string().min(2, "Введите не менее 2 символов"),
  rating: z.number().min(1, "Выберите оценку").max(5),
  serviceType: z.string().min(1, "Выберите тип услуги"),
  serviceId: z.string().min(1, "Выберите конкретную услугу"),
  text: z
    .string()
    .min(20, "Отзыв должен содержать не менее 20 символов")
    .max(1000, "Отзыв не должен превышать 1000 символов"),
  consent: z.literal(true, { error: "Необходимо ваше согласие" }),
})

type ReviewFormValues = z.infer<typeof reviewSchema>
type SubmitState = "idle" | "submitting" | "success" | "error"

export function ReviewForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")
  const [hovered, setHovered] = useState(0)

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { name: "", rating: 0, serviceType: "", serviceId: "", text: "", consent: undefined as unknown as true },
  })

  const serviceType = form.watch("serviceType")
  const rating = form.watch("rating")
  const serviceOptions = SERVICE_OPTIONS[serviceType] ?? []

  async function onSubmit(data: ReviewFormValues) {
    setSubmitState("submitting")

    const typeLabelMap: Record<string, string> = {
      excursion: "Экскурсия",
      yacht: "Яхта",
      group: "Морская прогулка",
    }
    const serviceLabel =
      SERVICE_OPTIONS[data.serviceType]?.find((o) => o.value === data.serviceId)?.label ?? data.serviceId
    const service = `${typeLabelMap[data.serviceType] ?? data.serviceType}: ${serviceLabel}`

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, rating: data.rating, text: data.text, service }),
      })
      const json = await res.json()
      setSubmitState(json.ok ? "success" : "error")
    } catch {
      setSubmitState("error")
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-[0_2px_16px_rgba(10,22,40,0.07)] p-6 sm:p-8 max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {submitState === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mb-5">
              <CheckCircle className="w-8 h-8 text-teal" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy mb-2">
              Спасибо за отзыв!
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Мы получили ваш отзыв и опубликуем его после проверки.
            </p>
          </motion.div>
        ) : submitState === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 rounded-full bg-coral/15 flex items-center justify-center mb-5">
              <AlertCircle className="w-8 h-8 text-coral" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-navy mb-2">
              Ошибка отправки
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
              Не удалось отправить отзыв. Попробуйте ещё раз.
            </p>
            <button
              onClick={() => setSubmitState("idle")}
              className="text-teal text-sm underline underline-offset-2 hover:text-teal-dark transition-colors"
            >
              Попробовать снова
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="font-display text-2xl font-light text-navy mb-6">
              Оставьте <span className="text-gold italic">отзыв</span>
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy text-sm font-medium">Ваше имя *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Как вас зовут"
                          className="bg-sand border-border focus:border-teal h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                {/* Rating */}
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy text-sm font-medium">Оценка *</FormLabel>
                      <div className="flex gap-1 pt-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <button
                            key={n}
                            type="button"
                            onMouseEnter={() => setHovered(n)}
                            onMouseLeave={() => setHovered(0)}
                            onClick={() => field.onChange(n)}
                            className="p-0.5 transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-7 h-7 transition-colors ${
                                n <= (hovered || field.value)
                                  ? "text-gold fill-gold"
                                  : "text-border fill-border"
                              }`}
                            />
                          </button>
                        ))}
                        {(hovered || rating) > 0 && (
                          <span className="ml-2 text-sm text-muted-foreground self-center">
                            {["", "Плохо", "Неплохо", "Хорошо", "Отлично", "Превосходно"][
                              hovered || rating
                            ]}
                          </span>
                        )}
                      </div>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                {/* Service Type */}
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy text-sm font-medium">Тип услуги *</FormLabel>
                      <Select
                        onValueChange={(val) => {
                          field.onChange(val)
                          form.setValue("serviceId", "")
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-sand border-border focus:border-teal h-11">
                            <SelectValue placeholder="Выберите тип" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICE_TYPES.map((t) => (
                            <SelectItem key={t.value} value={t.value}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                {/* Specific Service */}
                <AnimatePresence>
                  {serviceType && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FormField
                        control={form.control}
                        name="serviceId"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy text-sm font-medium">
                              {serviceType === "excursion"
                                ? "Экскурсия"
                                : serviceType === "yacht"
                                ? "Яхта"
                                : "Прогулка"}{" "}
                              *
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-sand border-border focus:border-teal h-11">
                                  <SelectValue placeholder="Выберите" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceOptions.map((o) => (
                                  <SelectItem key={o.value} value={o.value}>
                                    {o.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-coral text-xs" />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Text */}
                <FormField
                  control={form.control}
                  name="text"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy text-sm font-medium">Ваш отзыв *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Расскажите о своих впечатлениях..."
                          className="bg-sand border-border focus:border-teal resize-none min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                {/* Consent */}
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <label className="flex items-start gap-2.5 cursor-pointer select-none">
                        <span className="relative mt-0.5 shrink-0">
                          <input
                            type="checkbox"
                            checked={!!field.value}
                            onChange={(e) => field.onChange(e.target.checked || undefined)}
                            className="sr-only"
                          />
                          <span
                            className="flex w-4 h-4 rounded-sm border items-center justify-center transition-all duration-150"
                            style={{
                              background: field.value ? "#0ABFBC" : "#fff",
                              borderColor: fieldState.error ? "#E05A3A" : field.value ? "#0ABFBC" : "#cbd5e1",
                            }}
                          >
                            {field.value && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                          </span>
                        </span>
                        <span className="text-xs text-navy/50 leading-relaxed">
                          Я согласен(а) на обработку персональных данных в соответствии с{" "}
                          <a href="/privacy" target="_blank" rel="noopener" className="text-teal underline hover:opacity-80">
                            Политикой конфиденциальности
                          </a>
                        </span>
                      </label>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full bg-coral hover:bg-coral-dark text-white border-0 h-12 font-medium text-sm gap-2 shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all"
                >
                  {submitState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить отзыв
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
