import { Zap, Search, MessageSquare } from 'lucide-react'

const iconMap = {
  Zap,
  Search,
  MessageSquare,
}

export default function ValueCards({ cards }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4 my-8">
      {cards.map((card, i) => {
        const Icon = iconMap[card.icon]
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            {Icon && (
              <div className="w-9 h-9 rounded-lg bg-[var(--color-border-light)] flex items-center justify-center mb-3">
                <Icon size={18} className="text-[var(--color-accent)]" />
              </div>
            )}
            <h4 className="font-[var(--font-heading)] text-[16px] font-semibold text-[var(--color-text)] mb-1.5">
              {card.title}
            </h4>
            <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
              {card.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
