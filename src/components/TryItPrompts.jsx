import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

function PromptCard({ title, prompt, description }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-[var(--color-bg-white)] border border-[var(--color-border)] rounded-lg shadow-[var(--shadow-card)] p-5 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="font-[var(--font-heading)] text-[16px] font-semibold text-[var(--color-text)]">
          {title}
        </h4>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-[var(--color-border-light)] transition-colors cursor-pointer flex-shrink-0"
          title="Copy prompt"
        >
          {copied ? (
            <Check size={14} className="text-[var(--color-accent)]" />
          ) : (
            <Copy size={14} className="text-[var(--color-text-muted)]" />
          )}
        </button>
      </div>
      <p className="text-[13px] text-[var(--color-text-muted)] mb-3">{description}</p>
      <div className="bg-[var(--color-terminal-bg)] rounded-md px-4 py-3">
        <p className="text-[14px] font-[var(--font-mono)] text-[var(--color-terminal-text)] leading-relaxed whitespace-pre-wrap">
          {prompt}
        </p>
      </div>
    </div>
  )
}

export default function TryItPrompts({ prompts }) {
  return (
    <div className="space-y-4 my-8">
      {prompts.map((p, i) => (
        <PromptCard key={i} {...p} />
      ))}
    </div>
  )
}
