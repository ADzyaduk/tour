"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Star } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUpVariants, imageZoom } from "@/lib/animations"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Excursion } from "@/lib/data"

const categoryColors: Record<Excursion["category"], string> = {
  sightseeing: "bg-gold/15 text-gold border-gold/25",
  cultural: "bg-amber-500/15 text-amber-400 border-amber-400/25",
  adventure: "bg-coral/15 text-coral border-coral/25",
  nature: "bg-teal/15 text-teal border-teal/25",
}

const categoryLabels: Record<Excursion["category"], string> = {
  sightseeing: "Обзорная",
  cultural: "Культурная",
  adventure: "Экстрим",
  nature: "Природа",
}

interface ExcursionCardProps {
  excursion: Excursion
  index?: number
}

export function ExcursionCard({ excursion, index = 0 }: ExcursionCardProps) {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
      className="group bg-white rounded-2xl overflow-hidden border border-sand-dark shadow-[0_2px_12px_rgba(10,22,40,0.06)] hover:shadow-[0_12px_40px_rgba(10,22,40,0.14)] transition-shadow duration-300"
    >
      {/* Image */}
      <Link href={`/excursions/${excursion.id}`} className="block">
      <div className="relative h-52 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={imageZoom}
        >
          <Image
            src={excursion.image}
            alt={excursion.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Overlay badges */}
        <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${categoryColors[excursion.category]}`}
          >
            {categoryLabels[excursion.category]}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-navy/70 backdrop-blur-sm rounded-full px-2.5 py-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-white text-xs font-medium">
            {excursion.rating}
          </span>
        </div>
        {excursion.featuredLabel && (
          <div className="absolute bottom-3 left-3 bg-gold/90 backdrop-blur-sm text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
            {excursion.featuredLabel}
          </div>
        )}
      </div>
      </Link>

      {/* Body */}
      <div className="p-5">
        <Link href={`/excursions/${excursion.id}`} className="block">
          <h3 className="font-display text-xl font-semibold text-navy leading-tight mb-2 group-hover:text-teal-dark transition-colors">
            {excursion.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {excursion.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal" />
            {excursion.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-teal" />
            до {excursion.maxPeople} чел
          </span>
        </div>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-navy font-semibold text-lg">
              {excursion.price.toLocaleString("ru-RU")} ₽
            </span>
            <span className="text-muted-foreground text-xs ml-1">/ чел</span>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-coral hover:bg-coral-dark text-white border-0 text-xs font-medium px-4 shadow-md shadow-coral/20 hover:shadow-coral/35 transition-all"
          >
            <Link href={`/excursions/${excursion.id}`}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
