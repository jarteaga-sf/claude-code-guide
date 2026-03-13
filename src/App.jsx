import Layout from '@/components/Layout'
import Section from '@/components/Section'
import TerminalPanel from '@/components/TerminalPanel'
import KeyTakeaway from '@/components/KeyTakeaway'
import DeepCut from '@/components/DeepCut'
import QuickReference from '@/components/QuickReference'

import { section0, section1, section2, section3, section4 } from '@/content/foundations'
import { section5, section6, section7, section8 } from '@/content/workflows'
import { section9, section10, section11, section12 } from '@/content/power-user'

function RichText({ text }) {
  const parts = text.split(/(\*\*.*?\*\*|`[^`]+`)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[var(--color-text)]">{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="font-[var(--font-mono)] text-[0.9em] bg-[var(--color-border-light)] px-1.5 py-0.5 rounded">{part.slice(1, -1)}</code>
    }
    return part
  })
}

function ContentSection({ data }) {
  return (
    <Section
      id={data.id}
      label={data.label}
      title={data.title}
      subtitle={data.subtitle}
    >
      {data.prose && (
        <div className="space-y-6 text-[18px] text-[var(--color-text-prose)] leading-[1.6]">
          {data.prose.map((p, i) => (
            <p key={i}><RichText text={p} /></p>
          ))}
        </div>
      )}
      {data.terminal && (
        <TerminalPanel
          title={data.terminal.title}
          steps={data.terminal.steps}
          expandable={data.terminal.expandable}
        />
      )}
      {data.deepCut && (
        <DeepCut title={data.deepCut.title}>
          <p><RichText text={data.deepCut.content} /></p>
        </DeepCut>
      )}
      {data.takeaway && (
        <KeyTakeaway><RichText text={data.takeaway} /></KeyTakeaway>
      )}
    </Section>
  )
}

export default function App() {
  return (
    <Layout>
      <ContentSection data={section0} />
      <ContentSection data={section1} />
      <ContentSection data={section2} />
      <ContentSection data={section3} />
      <ContentSection data={section4} />
      <ContentSection data={section5} />
      <ContentSection data={section6} />
      <ContentSection data={section7} />
      <ContentSection data={section8} />
      <ContentSection data={section9} />
      <ContentSection data={section10} />
      <ContentSection data={section11} />

      <Section
        id={section12.id}
        label={section12.label}
        title={section12.title}
        subtitle={section12.subtitle}
      >
        <QuickReference data={section12} />
        <KeyTakeaway>{section12.takeaway}</KeyTakeaway>
      </Section>
    </Layout>
  )
}
