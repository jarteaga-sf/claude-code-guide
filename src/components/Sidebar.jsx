import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useActiveSection } from '@/hooks/useIntersectionObserver'

const tiers = [
  {
    label: 'Start Here',
    sections: [
      { id: 'why-ai-tools', title: 'Why This Matters' },
      { id: 'tools-at-a-glance', title: 'The 3 Tools' },
      { id: 'when-to-use-which', title: 'When to Use Which' },
    ],
  },
  {
    label: 'Build & Code',
    sections: [
      { id: 'claude-code-overview', title: 'Claude Code' },
      { id: 'claude-code-setup', title: 'Getting Started' },
      { id: 'claude-code-workflows', title: 'Claude Code Workflows' },
      { id: 'cursor-overview', title: 'Cursor' },
    ],
  },
  {
    label: 'Demo & Present',
    sections: [
      { id: 'cursor-workflows', title: 'Cursor Workflows' },
      { id: 'saleo-overview', title: 'Saleo' },
      { id: 'saleo-workflows', title: 'Building Better Demos' },
    ],
  },
  {
    label: 'Go Deeper',
    sections: [
      { id: 'combining-tools', title: 'Using Them Together' },
      { id: 'best-practices', title: 'What Works, What Doesn\'t' },
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
        <p className="font-semibold text-[15px] text-[var(--color-heading)]">A field guide for Salesforce SEs</p>
      </div>
      {tiers.map((tier) => (
        <div key={tier.label} className="mb-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)] px-2 mb-2">
            {tier.label}
          </p>
          <ul className="space-y-0.5">
            {tier.sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left text-[15px] px-2 py-1.5 rounded transition-colors cursor-pointer ${
                    activeId === section.id
                      ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/8 border-l-2 border-[var(--color-accent)] pl-3 font-medium'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-heading)] hover:bg-[var(--color-border-light)]'
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
      <aside className="hidden md:block fixed left-0 top-[56px] w-[260px] h-[calc(100vh-56px)] bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border)] overflow-y-auto z-40">
        {nav}
      </aside>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-[68px] left-3 z-50 p-2 rounded-lg bg-[var(--color-bg-white)] border border-[var(--color-border)] shadow-sm cursor-pointer"
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
