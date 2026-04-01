"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react"
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

const contactSchema = z.object({
  name: z.string().min(2, "Введите не менее 2 символов"),
  email: z.string().email("Введите корректный email").optional().or(z.literal("")),
  phone: z.string().min(1, "Введите номер телефона"),
  subject: z.string().min(1, "Выберите тему"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать не менее 10 символов")
    .max(1000, "Сообщение не должно превышать 1000 символов"),
})

type ContactFormValues = z.infer<typeof contactSchema>

type SubmitState = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle")

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setState("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setState(json.ok ? "success" : "error")
    } catch {
      setState("error")
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-12 px-6"
          >
            <div className="w-16 h-16 rounded-full bg-coral/15 flex items-center justify-center mb-5">
              <AlertCircle className="w-8 h-8 text-coral" />
            </div>
            <h3 className="font-display text-3xl font-semibold text-navy mb-2">
              Ошибка отправки
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed mb-6">
              Не удалось отправить сообщение. Попробуйте ещё раз или позвоните нам напрямую.
            </p>
            <button
              onClick={() => setState("idle")}
              className="text-teal text-sm underline underline-offset-2 hover:text-teal-dark transition-colors"
            >
              Попробовать снова
            </button>
          </motion.div>
        ) : state === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-12 px-6"
          >
            <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mb-5">
              <CheckCircle className="w-8 h-8 text-teal" />
            </div>
            <h3 className="font-display text-3xl font-semibold text-navy mb-2">
              Сообщение отправлено!
            </h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Спасибо за обращение! Мы ответим вам в течение 24 часов.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy text-sm font-medium">
                          Имя и фамилия *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ваше имя"
                            className="bg-sand border-border focus:border-teal h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-coral text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy text-sm font-medium">
                          Телефон *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+7 988 123-45-67"
                            className="bg-sand border-border focus:border-teal h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-coral text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email + Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy text-sm font-medium">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-sand border-border focus:border-teal h-11"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-coral text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy text-sm font-medium">
                          Тема *
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-sand border-border h-11 text-sm">
                              <SelectValue placeholder="Выберите тему" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">
                              Общий вопрос
                            </SelectItem>
                            <SelectItem value="excursion">
                              Бронирование экскурсии
                            </SelectItem>
                            <SelectItem value="yacht">Аренда яхты</SelectItem>
                            <SelectItem value="event">
                              Частное мероприятие
                            </SelectItem>
                            <SelectItem value="other">Другое</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-coral text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy text-sm font-medium">
                        Сообщение *
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Расскажите об интересующей вас экскурсии или прогулке — даты, количество человек, пожелания..."
                          className="bg-sand border-border focus:border-teal resize-none min-h-32.5 text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-coral text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full bg-coral hover:bg-coral-dark text-white border-0 h-12 font-medium text-sm gap-2 shadow-lg shadow-coral/25 hover:shadow-coral/40 transition-all"
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить
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
