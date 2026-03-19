import { Award } from 'lucide-react'

export default function ContestBanner({ title, description, cta }) {
  return (
    <div className="mt-10 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 rounded-xl p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
          <Award size={20} className="text-[var(--color-accent)]" />
        </div>
        <div>
          <h3 className="font-[var(--font-heading)] text-[20px] font-semibold text-[var(--color-heading)] mb-2">
            {title}
          </h3>
          <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-4">
            {description}
          </p>
          {cta && (
            <span className="inline-block px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white text-[14px] font-medium">
              {cta}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
