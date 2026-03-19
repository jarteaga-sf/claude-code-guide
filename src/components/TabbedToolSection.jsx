import { useState } from 'react'

export default function TabbedToolSection({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label)

  return (
    <div className="mt-8">
      <div className="flex bg-[var(--color-border-light)] rounded-lg p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`flex-1 text-[14px] px-3 py-2 rounded-md font-medium transition-all cursor-pointer ${
              activeTab === tab.label
                ? 'bg-[var(--color-bg-white)] text-[var(--color-text)] shadow-[var(--shadow-card)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        activeTab === tab.label ? (
          <div key={tab.label}>{tab.render}</div>
        ) : null
      ))}
    </div>
  )
}
