"use client"

import Image from "next/image"
import Link from "next/link"
import { Anchor, Users, Ruler, Banknote, Check } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUpVariants, imageZoom } from "@/lib/animations"
import { Button } from "@/components/ui/button"
import type { Yacht } from "@/lib/data"

const typeColors: Record<Yacht["type"], string> = {
  sailing: "bg-teal/15 text-teal border-teal/30",
  motor: "bg-gold/15 text-gold border-gold/30",
  catamaran: "bg-coral/15 text-coral border-coral/30",
}

const typeLabel: Record<Yacht["type"], string> = {
  sailing: "Парусная",
  motor: "Моторная",
  catamaran: "Катамаран",
}

interface YachtCardProps {
  yacht: Yacht
  index?: number
}

export function YachtCard({ yacht, index = 0 }: YachtCardProps) {
  return (
    <motion.article
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      custom={index}
      className="group bg-white rounded-2xl overflow-hidden border border-sand-dark shadow-[0_2px_16px_rgba(10,22,40,0.07)] hover:shadow-[0_16px_48px_rgba(10,22,40,0.14)] transition-shadow duration-300 flex flex-col"
    >
      {/* Image */}
      <Link href={`/yachts/${yacht.id}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={imageZoom}
          >
            <Image
              src={yacht.image}
              alt={yacht.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

          {/* Type badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${typeColors[yacht.type]}`}
            >
              {typeLabel[yacht.type]}
            </span>
          </div>

          {/* Name overlay at bottom */}
          <div className="absolute bottom-3 left-4">
            <h3 className="font-display text-2xl font-semibold text-white drop-shadow-lg">
              {yacht.name}
            </h3>
            <p className="text-white/70 text-xs mt-0.5">{yacht.nameRu}</p>
          </div>
        </div>
      </Link>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
          {yacht.description}
        </p>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { Icon: Ruler, label: "Длина", value: `${yacht.length} фут` },
            { Icon: Users, label: "Гостей", value: `до ${yacht.capacity} чел` },
            { Icon: Anchor, label: "Тип", value: typeLabel[yacht.type] },
            {
              Icon: Banknote,
              label: "Аренда от",
              value: `${yacht.pricePerHour.toLocaleString("ru-RU")} ₽`,
            },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-sand"
            >
              <div className="w-7 h-7 rounded-lg bg-teal/12 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-teal" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="text-navy text-xs font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {yacht.features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-sand-dark px-2.5 py-1 rounded-full"
            >
              <Check className="w-3 h-3 text-teal" />
              {f}
            </span>
          ))}
          {yacht.features.length > 4 && (
            <span className="inline-flex items-center text-xs text-teal px-2.5 py-1 rounded-full bg-teal/10">
              +{yacht.features.length - 4} ещё
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <span className="text-navy font-semibold text-xl">
              {yacht.pricePerHour.toLocaleString("ru-RU")} ₽
            </span>
            <span className="text-muted-foreground text-xs ml-1">/ час</span>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-coral hover:bg-coral-dark text-white border-0 font-medium px-5 shadow-md shadow-coral/20 hover:shadow-coral/35 transition-all"
          >
            <Link href={`/yachts/${yacht.id}`}>Подробнее</Link>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
