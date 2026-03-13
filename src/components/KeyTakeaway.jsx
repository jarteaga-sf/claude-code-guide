export default function KeyTakeaway({ children }) {
  return (
    <div className="mt-10 border-l-3 border-[var(--color-accent)] bg-[var(--color-takeaway-bg)] rounded-r-lg px-6 py-4">
      <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-1">
        Key Takeaway
      </p>
      <p className="text-[18px] text-[var(--color-text)] font-medium leading-[1.6]">
        {children}
      </p>
    </div>
  )
}
