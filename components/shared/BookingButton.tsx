"use client"

import { useState } from "react"
import { BookingModal } from "@/components/shared/BookingModal"

interface BookingButtonProps {
  serviceName: string
  serviceType: "yacht" | "excursion"
  children: React.ReactNode
  className?: string
}

export function BookingButton({ serviceName, serviceType, children, className }: BookingButtonProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceType={serviceType}
        serviceName={serviceName}
      />
    </>
  )
}
