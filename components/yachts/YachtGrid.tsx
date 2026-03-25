"use client"

import { useState } from "react"
import { YachtCard } from "./YachtCard"
import type { Yacht } from "@/lib/data"

const tabs = [
  { key: "all" as const, label: "Все" },
  { key: "adler" as const, label: "Адлер" },
  { key: "sochi" as const, label: "Сочи" },
]

export function YachtGrid({ yachts }: { yachts: Yacht[] }) {
  const [port, setPort] = useState<"all" | "adler" | "sochi">("all")

  const filtered = port === "all" ? yachts : yachts.filter((y) => y.port === port)

  return (
    <div>
      {/* Port filter tabs */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setPort(tab.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              port === tab.key
                ? "bg-navy text-white shadow-md"
                : "bg-sand-dark text-navy/60 hover:bg-sand-dark/80 hover:text-navy"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-xs opacity-60">
              {tab.key === "all"
                ? yachts.length
                : yachts.filter((y) => y.port === tab.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((yacht, i) => (
          <YachtCard key={yacht.id} yacht={yacht} index={i} />
        ))}
      </div>
    </div>
  )
}
