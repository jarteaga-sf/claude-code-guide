import { useState } from 'react'

const toolColors = {
  'Claude Code': { bg: '#D97757', text: '#FFFFFF' },
  'Cursor': { bg: '#1A1A1A', text: '#FFFFFF' },
  'Saleo': { bg: '#7C3AED', text: '#FFFFFF' },
}

function getToolKey(tool) {
  if (tool.includes('Claude Code')) return 'Claude Code'
  if (tool.includes('Cursor')) return 'Cursor'
  if (tool.includes('Saleo')) return 'Saleo'
  return null
}

const filters = ['All', 'Claude Code', 'Cursor', 'Saleo']

export default function ScenarioTable({ scenarios }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const filtered = activeFilter === 'All'
    ? scenarios
    : scenarios.filter((s) => getToolKey(s.tool) === activeFilter)

  return (
    <div className="my-8">
      <div className="flex flex-wrap gap-2 mb-5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setActiveFilter(f); setSelectedIndex(null) }}
            className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
              activeFilter === f
                ? 'bg-[var(--color-heading)] text-white'
                : 'bg-[var(--color-border-light)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((row, i) => {
          const toolKey = getToolKey(row.tool)
          const color = toolColors[toolKey] || { bg: '#64748B', text: '#FFFFFF' }
          const isSelected = selectedIndex === i

          return (
            <button
              key={i}
              onClick={() => setSelectedIndex(isSelected ? null : i)}
              className={`w-full text-left flex items-center justify-between gap-4 px-4 py-3 rounded-lg transition-all cursor-pointer border ${
                isSelected
                  ? 'border-[var(--color-border)] shadow-md bg-[var(--color-bg-white)]'
                  : 'border-transparent bg-[var(--color-border-light)]/60 hover:bg-[var(--color-border-light)]'
              }`}
            >
              <span className={`text-[15px] ${isSelected ? 'text-[var(--color-text)]' : 'text-[var(--color-text-secondary)]'}`}>
                {row.scenario}
              </span>
              <span
                className="text-[13px] font-semibold px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0 transition-colors"
                style={isSelected ? { backgroundColor: color.bg, color: color.text } : { backgroundColor: 'transparent', color: 'var(--color-text-muted)' }}
              >
                {row.tool}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
