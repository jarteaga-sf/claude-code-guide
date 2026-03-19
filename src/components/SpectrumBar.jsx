import { useState } from 'react'
import { ClaudeLogo, CursorLogo } from './ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
}

export default function SpectrumBar({ items }) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="my-10">
      {/* Desktop: horizontal */}
      <div className="hidden sm:block">
        <div className="relative h-3 rounded-full bg-gradient-to-r from-[var(--color-border)] via-[var(--color-accent)] to-[var(--color-heading)] mx-8">
          {items.map((item, i) => (
            <button
              key={i}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer group"
              style={{ left: `${item.position}%` }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
              <div className={`w-5 h-5 rounded-full border-2 border-white shadow-md transition-transform duration-200 flex items-center justify-center ${
                activeIndex === i ? 'scale-125' : 'group-hover:scale-110'
              } ${item.logo ? 'bg-white' : 'bg-[var(--color-heading)]'}`}>
                {item.logo && logos[item.logo] && (() => {
                  const Logo = logos[item.logo]
                  return <Logo size={12} />
                })()}
              </div>
            </button>
          ))}
        </div>
        {/* Always-visible labels */}
        <div className="relative mt-5 mx-8 h-16">
          {items.map((item, i) => {
            const isActive = activeIndex === i
            // Top row: first and last only. Bottom row: the three inner labels.
            const isTop = i === 0 || i === items.length - 1
            // Edge labels: align left/right instead of center to prevent clipping
            const isFirst = item.position === 0
            const isLast = item.position === 100
            const translate = isFirst ? 'translate-x-0' : isLast ? '-translate-x-full' : '-translate-x-1/2'
            return (
              <div
                key={i}
                className={`absolute ${isTop ? 'top-0' : 'top-8'} ${translate} transition-colors duration-200`}
                style={{ left: `${item.position}%` }}
              >
                <span className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'bg-[var(--color-heading)] text-white'
                    : 'bg-[var(--color-border-light)] text-[var(--color-text-muted)]'
                }`}>
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
        {activeIndex !== null && (
          <div className="mt-2 text-center animate-in fade-in duration-200">
            <p className="text-[14px] text-[var(--color-text-secondary)]">{items[activeIndex].description}</p>
          </div>
        )}
      </div>

      {/* Mobile: vertical list */}
      <div className="sm:hidden space-y-3">
        {items.map((item, i) => {
          const Logo = item.logo ? logos[item.logo] : null
          return (
            <div
              key={i}
              className="flex items-start gap-3 px-4 py-3 rounded-lg bg-[var(--color-border-light)]/60 border-l-2 border-transparent"
              style={{ borderImage: `linear-gradient(to bottom, var(--color-accent), var(--color-heading)) 1` }}
            >
              <div className={`w-6 h-6 rounded-full border-2 border-[var(--color-border)] flex-shrink-0 flex items-center justify-center mt-0.5 ${
                item.logo ? 'bg-white' : 'bg-[var(--color-heading)]'
              }`}>
                {Logo && <Logo size={12} />}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-[var(--color-text)]">{item.label}</p>
                <p className="text-[13px] text-[var(--color-text-secondary)] mt-0.5">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
