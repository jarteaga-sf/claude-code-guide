import { ClaudeLogo, CursorLogo, SaleoLogo } from './ToolLogos'

const logos = {
  claude: ClaudeLogo,
  cursor: CursorLogo,
  saleo: SaleoLogo,
}

// --- Per-tool mini visuals ---

function TerminalVisual() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
      <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
        <div className="w-[7px] h-[7px] rounded-full bg-red-400/70" />
        <div className="w-[7px] h-[7px] rounded-full bg-yellow-400/70" />
        <div className="w-[7px] h-[7px] rounded-full bg-green-400/70" />
      </div>
      <div className="bg-[#1E1E1E] px-3 pb-3 pt-1 flex flex-col gap-1.5">
        <p className="text-[10px] font-mono text-[#E5E7EB]">
          <span className="text-[#6EE7B7]">&gt;</span> Build a lead scoring flow
        </p>
        <div className="border-l-2 border-[#D97706]/60 pl-2 flex flex-col gap-0.5">
          <p className="text-[10px] font-mono text-[#D97706]">
            Created LeadScoringFlow.flow
          </p>
          <p className="text-[10px] font-mono text-[#D97706]">
            Added 4 scoring criteria
          </p>
          <p className="text-[10px] font-mono text-[#D97706]">
            Deployed to org
          </p>
        </div>
        <p className="text-[10px] font-mono text-[#E5E7EB]">
          <span className="text-[#6EE7B7]">&gt;</span> Now add email alerts<span className="inline-block w-[5px] h-[12px] bg-[#6EE7B7]/70 ml-0.5 align-middle animate-pulse" />
        </p>
      </div>
    </div>
  )
}

function EditorVisual() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
      {/* Tab bar */}
      <div className="bg-[#252526] px-2 py-1 flex items-center gap-0.5">
        <div className="px-2.5 py-1 rounded-t text-[10px] font-mono text-[#E5E7EB] bg-[#1E1E1E]">
          scoreCard.js
        </div>
        <div className="flex-1" />
        <div className="px-1.5 py-0.5 text-[8px] font-mono text-[#9CA3AF] bg-[#1E1E1E] rounded">
          Agent
        </div>
      </div>
      {/* Split: code + chat */}
      <div className="flex">
        {/* Code pane */}
        <div className="bg-[#1E1E1E] px-2.5 py-2 flex-1 border-r border-[#333]">
          <p className="text-[9px] font-mono">
            <span className="text-[#C586C0]">const</span>{' '}
            <span className="text-[#9CDCFE]">score</span>{' '}
            <span className="text-[#D4D4D4]">=</span>{' '}
            <span className="text-[#DCDCAA]">calcScore</span>
            <span className="text-[#D4D4D4]">(lead);</span>
          </p>
          <div className="rounded bg-[#264F78]/40 px-1 py-0.5 -mx-1 mt-0.5">
            <p className="text-[9px] font-mono text-[#6B9955] italic">
              if (score &gt; 80) notify(rep);
            </p>
          </div>
        </div>
        {/* Chat pane */}
        <div className="bg-[#181818] px-2 py-2 w-[45%] flex flex-col gap-1.5">
          <p className="text-[8px] font-mono text-[#9CA3AF]">
            Add a threshold check
          </p>
          <p className="text-[8px] font-mono text-[#7C9FE0] leading-snug">
            Added if (score &gt; 80) block with rep notification.
          </p>
        </div>
      </div>
    </div>
  )
}

function BrowserVisual() {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm">
      {/* Browser chrome */}
      <div className="bg-[#F1F1F1] px-3 py-1.5 flex items-center gap-2">
        <div className="flex gap-1">
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
          <div className="w-[7px] h-[7px] rounded-full bg-[#ccc]" />
        </div>
        <div className="flex-1 bg-white rounded px-2 py-0.5">
          <span className="text-[9px] text-[#999]">salesforce.com/lightning/...</span>
        </div>
      </div>
      {/* SF record mockup */}
      <div className="bg-white px-3 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-[#032D60]">Acme Corp</span>
          <span className="text-[9px] text-[#999]">Account</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#666]">Revenue</span>
            <span className="text-[10px] font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-1.5 py-0.5 rounded">$4.2M</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-[#666]">Industry</span>
            <span className="text-[10px] font-semibold text-[#7C3AED] bg-[#7C3AED]/10 px-1.5 py-0.5 rounded">Healthcare</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const setupLevels = {
  easy: { label: 'Easy setup', dots: 1, color: '#16a34a' },
  moderate: { label: 'Moderate setup', dots: 2, color: '#d97706' },
  advanced: { label: 'Advanced setup', dots: 3, color: '#64748b' },
}

function SetupLevel({ level }) {
  const { label, dots, color } = setupLevels[level]
  return (
    <div className="px-4 pb-4 pt-1 mt-auto border-t border-[var(--color-border)] mx-4 flex items-center justify-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-[6px] h-[6px] rounded-full"
            style={{
              backgroundColor: n <= dots ? color : 'transparent',
              border: `1.5px solid ${n <= dots ? color : '#d1d5db'}`,
            }}
          />
        ))}
      </div>
      <span className="text-[11px] text-[var(--color-text-muted)]">{label}</span>
    </div>
  )
}

const miniVisuals = {
  claude: TerminalVisual,
  cursor: EditorVisual,
  saleo: BrowserVisual,
}

export default function ToolCards({ cards }) {
  return (
    <div className="grid sm:grid-cols-3 gap-5 my-8 items-stretch">
      {cards.map((card, i) => {
        const Logo = logos[card.logo]
        const Visual = miniVisuals[card.logo]
        return (
          <div
            key={i}
            className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-xl shadow-[var(--shadow-card)] overflow-hidden transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col"
          >
            {/* Logo + name + tagline */}
            <div className="pt-5 pb-2 flex flex-col items-center gap-1.5">
              {Logo && <Logo size={40} />}
              <h4 className="font-[var(--font-heading)] text-[17px] font-semibold text-[var(--color-heading)]">
                {card.name}
              </h4>
              {card.tagline && (
                <p className="text-[13px] text-[var(--color-text-muted)] italic">{card.tagline}</p>
              )}
            </div>
            {/* Role badge */}
            {card.role && (
              <div className="flex justify-center px-4 pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
                  {card.role}
                </span>
              </div>
            )}
            {/* Mini visual */}
            <div className="px-4 pb-3 flex-1">
              {Visual && <Visual />}
            </div>
            {/* Proof point */}
            <div className="px-4 pb-3">
              <p className="text-[13px] text-[var(--color-text)] leading-snug text-center">
                {card.bestFor}
              </p>
            </div>
            {/* Setup level */}
            {card.setup && <SetupLevel level={card.setup} />}
          </div>
        )
      })}
    </div>
  )
}
