"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { SlidersHorizontal } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ExcursionFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all" || value === "default") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    router.push(`/excursions?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
      <div className="flex items-center gap-2 text-muted-foreground text-sm shrink-0">
        <SlidersHorizontal className="w-4 h-4" />
        <span>Фильтры:</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {/* Category */}
        <Select
          value={searchParams.get("category") ?? "all"}
          onValueChange={(v) => updateParam("category", v)}
        >
          <SelectTrigger className="w-40 h-9 text-sm bg-white border-border">
            <SelectValue placeholder="Категория" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="sightseeing">Обзорные</SelectItem>
            <SelectItem value="cultural">Культурные</SelectItem>
            <SelectItem value="adventure">Экстрим</SelectItem>
            <SelectItem value="nature">Природа</SelectItem>
          </SelectContent>
        </Select>

        {/* Duration */}
        <Select
          value={searchParams.get("duration") ?? "all"}
          onValueChange={(v) => updateParam("duration", v)}
        >
          <SelectTrigger className="w-37.5 h-9 text-sm bg-white border-border">
            <SelectValue placeholder="Длительность" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Любая</SelectItem>
            <SelectItem value="short">Короткая (&lt;3ч)</SelectItem>
            <SelectItem value="half">Полдня (3–5ч)</SelectItem>
            <SelectItem value="full">Весь день (6ч+)</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select
          value={searchParams.get("sort") ?? "default"}
          onValueChange={(v) => updateParam("sort", v)}
        >
          <SelectTrigger className="w-40 h-9 text-sm bg-white border-border">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">По умолчанию</SelectItem>
            <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
            <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
            <SelectItem value="rating-desc">Высокий рейтинг</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
