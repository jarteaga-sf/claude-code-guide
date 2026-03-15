import { ClaudeLogo, CursorLogo, SaleoLogo } from './ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
}

function InfoPair({ label, value }) {
  return (
    <div>
      <span className="text-[13px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">{label}</span>
      <p className="text-[15px] text-[var(--color-text-secondary)] mt-0.5">{value}</p>
    </div>
  )
}

export default function ToolCards({ cards }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4 my-8">
      {cards.map((card, i) => {
        const Logo = logos[card.logo]
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 space-y-4"
          >
            <div className="flex items-center gap-3">
              {Logo && <Logo size={28} />}
              <h4 className="font-[var(--font-heading)] text-[18px] font-semibold text-[var(--color-text)]">{card.name}</h4>
            </div>
            <div className="space-y-3">
              <InfoPair label="Where" value={card.where} />
              <InfoPair label="Best for" value={card.bestFor} />
              <InfoPair label="How" value={card.how} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
