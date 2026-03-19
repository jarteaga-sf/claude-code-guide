import { useState, useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { createSlideRenderers } from './SlideLayouts'

const slideRenderers = createSlideRenderers(false)

export default function SlideCarousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), [slides.length])
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handler = (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }

    el.addEventListener('keydown', handler)
    return () => el.removeEventListener('keydown', handler)
  }, [next, prev])

  const render = slideRenderers[slides[current].layout]

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="mt-4 mb-6 rounded-xl border border-[var(--color-border)]/60 bg-gradient-to-b from-[var(--color-border-light)]/40 to-transparent overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:ring-offset-2 focus:ring-offset-[var(--color-bg-white)]"
    >
      {/* Slide area */}
      <div className="relative min-h-[400px] md:min-h-[440px] flex items-center justify-center py-6">
        {/* Navigation arrows */}
        <button
          onClick={prev}
          disabled={current === 0}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-bg-white)] border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-opacity duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-default hover:shadow-md z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="text-[var(--color-text-secondary)]" />
        </button>

        {/* Slide content with crossfade */}
        <div className="w-full px-14 md:px-18 animate-in fade-in duration-300" key={current}>
          {render ? render(slides[current]) : null}
        </div>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-bg-white)] border border-[var(--color-border)] shadow-sm flex items-center justify-center transition-opacity duration-200 cursor-pointer disabled:opacity-20 disabled:cursor-default hover:shadow-md z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="text-[var(--color-text-secondary)]" />
        </button>
      </div>

      {/* Bottom bar: dots + counter */}
      <div className="flex items-center justify-center gap-3 pb-5 pt-2">
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                i === current
                  ? 'w-6 h-2 bg-[var(--color-accent)]'
                  : 'w-2 h-2 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[12px] text-[var(--color-text-muted)] font-medium ml-2">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  )
}
