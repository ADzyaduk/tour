"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Anchor, Compass, Check, Loader2, AlertCircle } from "lucide-react"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType: "yacht" | "excursion"
  serviceName: string
}

type FormState = "idle" | "loading" | "success" | "error"

const serviceLabel = { yacht: "Яхта", excursion: "Экскурсия" }
const ServiceIcon = ({ type }: { type: "yacht" | "excursion" }) =>
  type === "yacht" ? (
    <Anchor className="w-3.5 h-3.5" />
  ) : (
    <Compass className="w-3.5 h-3.5" />
  )

export function BookingModal({
  isOpen,
  onClose,
  serviceType,
  serviceName,
}: BookingModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [formState, setFormState] = useState<FormState>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const reset = useCallback(() => {
    setName("")
    setPhone("")
    setFormState("idle")
    setErrors({})
  }, [])

  const handleClose = useCallback(() => {
    if (formState === "loading") return
    onClose()
    setTimeout(reset, 300)
  }, [formState, onClose, reset])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    if (isOpen) window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, handleClose])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  function validate() {
    const e: Record<string, string> = {}
    if (!name.trim() || name.trim().length < 2) e.name = "Введите имя (мин. 2 символа)"
    if (!phone.trim()) e.phone = "Введите номер телефона"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormState("loading")
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ serviceName, serviceType, name: name.trim(), phone: phone.trim() }),
      })
      if (!res.ok) throw new Error()
      setFormState("success")
    } catch {
      setFormState("error")
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-sm text-navy placeholder-navy/30 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
        : "border-slate-200 focus:border-teal focus:ring-2 focus:ring-teal/15"
    }`

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Форма бронирования"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-md rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(10,22,40,0.45)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Header ── */}
              <div
                className="relative px-6 pt-6 pb-5 overflow-hidden"
                style={{ background: "#0A1628" }}
              >
                {/* Decorative shimmer lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute -top-8 -left-8 w-64 h-64 rounded-full opacity-[0.06]"
                    style={{ background: "radial-gradient(circle, #1DB8A0, transparent 70%)" }}
                  />
                  <div
                    className="absolute -bottom-4 right-0 w-48 h-48 rounded-full opacity-[0.05]"
                    style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
                  />
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 h-px opacity-[0.06]"
                      style={{ top: `${30 + i * 18}%`, background: "linear-gradient(90deg, transparent, #1DB8A0, transparent)" }}
                    />
                  ))}
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  disabled={formState === "loading"}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all disabled:opacity-30"
                  aria-label="Закрыть"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Service type */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ background: "rgba(29,184,160,0.15)", color: "#1DB8A0", borderColor: "rgba(29,184,160,0.3)" }}>
                    <ServiceIcon type={serviceType} />
                    {serviceLabel[serviceType]}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl font-light text-white leading-tight">
                  Забронировать
                </h2>

                {/* Service name chip */}
                <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#1DB8A0" }} />
                  <span className="text-white text-sm font-medium leading-none">{serviceName}</span>
                </div>
              </div>

              {/* ── Body ── */}
              <div className="bg-white flex-1">
                <AnimatePresence mode="wait">

                  {/* Success state */}
                  {formState === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="px-6 py-10 flex flex-col items-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                        style={{ background: "rgba(29,184,160,0.12)" }}
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        >
                          <Check className="w-8 h-8" style={{ color: "#1DB8A0" }} />
                        </motion.div>
                      </motion.div>
                      <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "#0A1628" }}>
                        Заявка отправлена!
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                        Мы свяжемся с вами в ближайшее время.
                      </p>
                      <button
                        onClick={handleClose}
                        className="mt-7 px-8 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
                        style={{ background: "#0A1628" }}
                      >
                        Закрыть
                      </button>
                    </motion.div>
                  )}

                  {/* Form state */}
                  {formState !== "success" && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="px-6 pt-5 pb-6 space-y-4"
                    >
                      {/* Error banner */}
                      <AnimatePresence>
                        {formState === "error" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm"
                            style={{ background: "rgba(224,90,58,0.08)", color: "#E05A3A", border: "1px solid rgba(224,90,58,0.2)" }}
                          >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            Ошибка отправки. Попробуйте ещё раз.
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                          Ваше имя <span style={{ color: "#E05A3A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => { setName(e.target.value); setErrors(p => ({ ...p, name: "" })) }}
                          placeholder="Иван Иванов"
                          autoComplete="name"
                          className={inputClass("name")}
                          style={{ color: "#0A1628" } as React.CSSProperties}
                        />
                        {errors.name && <p className="text-xs mt-1" style={{ color: "#E05A3A" }}>{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-medium mb-1.5" style={{ color: "#475569" }}>
                          Телефон <span style={{ color: "#E05A3A" }}>*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: "" })) }}
                          placeholder="+7 900 000-00-00"
                          autoComplete="tel"
                          className={inputClass("phone")}
                          style={{ color: "#0A1628" } as React.CSSProperties}
                        />
                        {errors.phone && <p className="text-xs mt-1" style={{ color: "#E05A3A" }}>{errors.phone}</p>}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full h-12 rounded-xl text-white font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 mt-1 disabled:opacity-70"
                        style={{ background: formState === "loading" ? "#c44e2e" : "#E05A3A", boxShadow: "0 4px 20px rgba(224,90,58,0.3)" }}
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Отправка...
                          </>
                        ) : (
                          "Перезвоните мне"
                        )}
                      </button>

                      <p className="text-center text-xs" style={{ color: "#94a3b8" }}>Мы свяжемся с вами в течение 15 минут</p>

                      <p className="text-center text-xs" style={{ color: "#94a3b8" }}>
                        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
