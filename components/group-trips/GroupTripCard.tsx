"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUpVariants, imageZoom } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import type { GroupTrip } from "@/lib/data"

interface GroupTripCardProps {
  trip: GroupTrip
  index?: number
}

export function GroupTripCard({ trip, index = 0 }: GroupTripCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
      className="group bg-white rounded-2xl overflow-hidden border border-sand-dark shadow-[0_2px_12px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.14)] transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <Link href={`/yachts/group/${trip.id}`} className="block relative h-52 overflow-hidden shrink-0">
        <motion.div
          className="absolute inset-0"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={imageZoom}
        >
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

        {/* Port badge top-left */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm bg-teal/15 text-teal border-teal/25">
            <Anchor className="w-3 h-3" />
            {trip.port}
          </span>
        </div>

        {/* Duration badge top-right */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm bg-gold/15 text-gold border-gold/25">
            <Clock className="w-3 h-3" />
            {trip.duration}
          </span>
        </div>

        {/* Featured label */}
        {trip.featuredLabel ? (
          <div className="absolute bottom-3 left-3">
            <span className="bg-gold/90 backdrop-blur-sm text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
              {trip.featuredLabel}
            </span>
          </div>
        ) : null}
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <Link href={`/yachts/group/${trip.id}`} className="block mb-2">
          <h3 className="font-display text-xl font-semibold text-navy leading-tight group-hover:text-teal-dark transition-colors">
            {trip.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {trip.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-teal" />
            {trip.port}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal" />
            {trip.duration}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-navy font-semibold text-lg">
              {trip.pricePerTicket.toLocaleString("ru-RU")} ₽
            </span>
            <span className="text-muted-foreground text-xs ml-1">/ билет</span>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-coral hover:bg-coral-dark text-white border-0 text-xs font-medium px-4 shadow-md shadow-coral/20 hover:shadow-coral/35 transition-all"
          >
            <Link href={`/yachts/group/${trip.id}`}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
