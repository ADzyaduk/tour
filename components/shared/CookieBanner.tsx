"use client"

import { useSyncExternalStore } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield } from "lucide-react"
import Link from "next/link"

const CONSENT_KEY = "aq_cookie_consent"
const CONSENT_EVENT = "aq-cookie-consent-change"
const UNKNOWN_CONSENT = "__unknown__"
const UNSET_CONSENT = "__unset__"

const subscribe = (onStoreChange: () => void): (() => void) => {
  const handleChange = (): void => {
    onStoreChange()
  }

  window.addEventListener("storage", handleChange)
  window.addEventListener(CONSENT_EVENT, handleChange)

  return () => {
    window.removeEventListener("storage", handleChange)
    window.removeEventListener(CONSENT_EVENT, handleChange)
  }
}

const getClientSnapshot = (): string =>
  window.localStorage.getItem(CONSENT_KEY) ?? UNSET_CONSENT

const getServerSnapshot = (): string => UNKNOWN_CONSENT

const notifyConsentChange = (): void => {
  window.dispatchEvent(new Event(CONSENT_EVENT))
}

export function CookieBanner() {
  const consent = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )
  const visible = consent === UNSET_CONSENT

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted")
    notifyConsentChange()
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected")
    notifyConsentChange()
  }

  if (consent === UNKNOWN_CONSENT) return null

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div
            className="border-t border-gold/30 px-4 py-4 sm:py-5"
            style={{ background: "#0A1628" }}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Icon + text */}
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <Shield
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "#C9A84C" }}
                  strokeWidth={1.5}
                />
                <p className="text-white/65 text-sm leading-relaxed">
                  Мы используем файлы cookie для корректной работы сайта.{" "}
                  <Link
                    href="/privacy"
                    className="underline hover:opacity-80 transition-opacity"
                    style={{ color: "#C9A84C" }}
                  >
                    Политика конфиденциальности
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-2.5 shrink-0 w-full sm:w-auto">
                <button
                  onClick={reject}
                  className="flex-1 sm:flex-none px-5 h-10 rounded-xl text-sm font-medium text-white/70 border transition-all duration-200 hover:text-white hover:border-white/40"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                >
                  Только необходимые
                </button>
                <button
                  onClick={accept}
                  className="flex-1 sm:flex-none px-5 h-10 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
                  style={{
                    background: "#E05A3A",
                    boxShadow: "0 4px 20px rgba(224,90,58,0.3)",
                  }}
                >
                  Принять все
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
