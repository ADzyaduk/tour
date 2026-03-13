"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  alt?: string
}

export function ImageGallery({ images, alt = "Фото" }: ImageGalleryProps) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const hasMultiple = images.length > 1

  const prev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    },
    [images.length]
  )

  const next = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setLightboxIndex((i) => (i + 1) % images.length)
    },
    [images.length]
  )

  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false)
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightbox, images.length])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightbox(true)
  }

  if (images.length === 0) return null

  return (
    <>
      {/* Main gallery */}
      <div className="space-y-3">
        {/* Main image */}
        <div
          className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => openLightbox(active)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={images[active]}
                  alt={`${alt} ${active + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={active === 0}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300 pointer-events-none" />

          {/* Expand icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <Expand className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Counter badge */}
          {hasMultiple && (
            <div className="absolute top-3 right-3 bg-navy/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/15">
              {active + 1} / {images.length}
            </div>
          )}

          {/* Inline prev/next on main image */}
          {hasMultiple && (
            <>
              <button
                aria-label="Предыдущее фото"
                onClick={(e) => { e.stopPropagation(); setActive((i) => (i - 1 + images.length) % images.length) }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy/80"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Следующее фото"
                onClick={(e) => { e.stopPropagation(); setActive((i) => (i + 1) % images.length) }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-navy/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-navy/80"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {hasMultiple && (
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                aria-label={`Фото ${i + 1}`}
                onClick={() => setActive(i)}
                className={`relative h-16 sm:h-20 w-24 sm:w-28 shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${
                  i === active
                    ? "ring-2 ring-[#C9A96E] ring-offset-2 ring-offset-white opacity-100"
                    : "opacity-55 hover:opacity-80"
                }`}
              >
                <Image
                  src={src}
                  alt={`${alt} миниатюра ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/92 z-50 flex flex-col"
            onClick={() => setLightbox(false)}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 shrink-0" onClick={(e) => e.stopPropagation()}>
              <span className="text-white/60 text-sm font-body">
                {lightboxIndex + 1} / {images.length}
              </span>
              <button
                aria-label="Закрыть"
                onClick={() => setLightbox(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main image area */}
            <div className="flex-1 relative flex items-center justify-center px-14 sm:px-20 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full max-h-[75vh]"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={images[lightboxIndex]}
                    alt={`${alt} ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev/next arrows */}
              {hasMultiple && (
                <>
                  <button
                    aria-label="Предыдущее фото"
                    onClick={prev}
                    className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy border border-white/20 flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    aria-label="Следующее фото"
                    onClick={next}
                    className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white text-white hover:text-navy border border-white/20 flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom thumbnail strip */}
            {hasMultiple && (
              <div className="shrink-0 px-4 sm:px-6 py-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex gap-2 justify-center overflow-x-auto scrollbar-hide">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      aria-label={`Фото ${i + 1}`}
                      onClick={() => setLightboxIndex(i)}
                      className={`relative h-12 sm:h-14 w-16 sm:w-20 shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                        i === lightboxIndex
                          ? "ring-2 ring-[#C9A96E] opacity-100"
                          : "opacity-40 hover:opacity-70"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${alt} миниатюра ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
