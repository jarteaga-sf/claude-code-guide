import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '@/hooks/useIntersectionObserver'

const tiers = [
  {
    label: 'Start Here',
    sections: [
      { id: 'what-is-vibe-coding', title: 'What is Vibe Coding?' },
      { id: 'what-is-claude-code', title: 'What It Does' },
      { id: 'where-it-runs', title: 'Where It Runs' },
      { id: 'getting-started', title: 'Install It' },
      { id: 'claude-md', title: 'Set It Up' },
    ],
  },
  {
    label: 'Use It Well',
    sections: [
      { id: 'plan-mode', title: 'Think First, Build Second' },
      { id: 'permissions', title: 'Stay Safe, Move Fast' },
      { id: 'context-management', title: 'Memory & Context' },
      { id: 'prompting', title: 'Writing Good Prompts' },
    ],
  },
  {
    label: 'Go Deeper',
    sections: [
      { id: 'custom-commands', title: 'Customize It' },
      { id: 'multi-agent', title: 'Multiple Agents' },
      { id: 'patterns', title: 'What Works, What Doesn\'t' },
      { id: 'quick-reference', title: 'Cheat Sheet' },
    ],
  },
]

const allSectionIds = tiers.flatMap((t) => t.sections.map((s) => s.id))

export { tiers, allSectionIds }

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(allSectionIds)

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  const nav = (
    <nav className="py-6 px-4">
      <div className="mb-6 px-2">
        <p className="font-[var(--font-heading)] text-[17px] text-[var(--color-text)]">Coding with AI</p>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-0.5">A Guide for Salesforce SEs</p>
      </div>
      {tiers.map((tier) => (
        <div key={tier.label} className="mb-5">
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)] px-2 mb-2">
            {tier.label}
          </p>
          <ul className="space-y-0.5">
            {tier.sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left text-[15px] px-2 py-1.5 rounded transition-colors cursor-pointer ${
                    activeId === section.id
                      ? 'text-[var(--color-text)] bg-[var(--color-border-light)] border-l-2 border-[var(--color-accent)] pl-3'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-border-light)]'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block fixed left-0 top-[3px] w-[260px] h-[calc(100vh-3px)] bg-[var(--color-bg-white)] border-r border-[var(--color-border)] overflow-y-auto z-40">
        {nav}
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-3 left-3 z-50 p-2 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)] shadow-sm cursor-pointer"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
          />
          <aside className="md:hidden fixed left-0 top-0 w-[280px] h-full bg-[var(--color-bg-white)] border-r border-[var(--color-border)] overflow-y-auto z-50 shadow-xl">
            {nav}
          </aside>
        </>
      )}
    </>
  )
}
