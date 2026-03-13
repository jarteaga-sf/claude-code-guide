export default function Section({ id, label, title, subtitle, children }) {
  return (
    <section id={id} className="min-h-screen py-24 px-6 flex items-start justify-center">
      <div className="w-full max-w-[660px]">
        {label && (
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3">
            {label}
          </p>
        )}
        <h2 className="font-[var(--font-heading)] text-[30px] md:text-[40px] leading-[1.15] text-[var(--color-text)] mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[20px] text-[var(--color-text-secondary)] mb-10 leading-[1.5]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
