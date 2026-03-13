import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function DeepCut({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-8 rounded-lg bg-[var(--color-deepcut-bg)] shadow-[var(--shadow-soft)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-left cursor-pointer"
      >
        <span className="text-[17px] font-semibold text-[var(--color-text-secondary)]">
          Deep Cut: {title}
        </span>
        <ChevronDown
          size={16}
          className={`text-[var(--color-text-muted)] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-[17px] text-[var(--color-text-secondary)] leading-[1.6]">
          {children}
        </div>
      )}
    </div>
  )
}
