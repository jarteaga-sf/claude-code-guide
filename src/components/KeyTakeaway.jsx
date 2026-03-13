export default function KeyTakeaway({ children }) {
  return (
    <div className="mt-10 border-l-2 border-[var(--color-accent)] bg-[var(--color-takeaway-bg)] rounded-r-lg px-6 py-4 shadow-[var(--shadow-soft)]">
      <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)] mb-1">
        Key Takeaway
      </p>
      <p className="text-[18px] text-[var(--color-text)] font-medium leading-[1.6]">
        {children}
      </p>
    </div>
  )
}
