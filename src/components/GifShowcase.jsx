import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const stepColors = [
  'from-[var(--color-accent)] to-[var(--color-heading)]',
  'from-[var(--color-heading)] to-[#4a3f8a]',
  'from-[#4a3f8a] to-[var(--color-accent)]',
]

export default function GifShowcase({ src, alt, caption, explanation, step }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Media area */}
      <div className="bg-[var(--color-terminal-bg)] aspect-video flex items-center justify-center">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-4 text-[var(--color-terminal-dim)] px-6">
            {step && (
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stepColors[(step - 1) % stepColors.length]} flex items-center justify-center`}>
                <span className="text-[28px] font-bold text-white">{step}</span>
              </div>
            )}
            <p className="text-[15px] text-[var(--color-terminal-text)] font-medium text-center">{caption}</p>
            <span className="text-[12px] font-[var(--font-mono)] text-[var(--color-terminal-dim)] border border-dashed border-[var(--color-terminal-dim)]/30 rounded px-3 py-1">
              GIF coming soon
            </span>
          </div>
        )}
      </div>

      {/* Caption + expandable explanation */}
      <div className="p-4">
        <p className="text-[15px] font-semibold text-[var(--color-text)]">{caption}</p>
        {explanation && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 mt-2 text-[13px] text-[var(--color-accent)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
          >
            What happened
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
        {expanded && (
          <p className="mt-2 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
            {explanation}
          </p>
        )}
      </div>
    </div>
  )
}
