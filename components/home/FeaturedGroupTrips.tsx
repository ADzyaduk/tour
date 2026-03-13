"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUpVariants, staggerContainer } from "@/lib/animations"
import { GroupTripCard } from "@/components/group-trips/GroupTripCard"
import { groupTrips } from "@/lib/data"

export function FeaturedGroupTrips() {
  return (
    <section className="py-20 lg:py-28 bg-navy px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <motion.p
              variants={fadeUpVariants}
              className="text-teal text-xs font-medium tracking-[0.2em] uppercase mb-3 flex items-center gap-2"
            >
              <span className="inline-block w-6 h-px bg-teal" />
              Морские прогулки
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="font-display text-4xl sm:text-5xl font-light text-white"
            >
              Прогулки
              <br />
              <span className="text-gold italic">На яхте</span>
            </motion.h2>
          </div>
          <motion.div variants={fadeUpVariants}>
            <Link
              href="/yachts#group-trips"
              className="inline-flex items-center gap-2 text-white/70 hover:text-gold font-medium text-sm transition-colors group"
            >
              Все прогулки
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groupTrips.map((trip, i) => (
            <GroupTripCard key={trip.id} trip={trip} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
