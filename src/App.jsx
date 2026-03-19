import Layout from '@/components/Layout'
import Section from '@/components/Section'
import TerminalPanel from '@/components/TerminalPanel'
import KeyTakeaway from '@/components/KeyTakeaway'
import DeepCut from '@/components/DeepCut'
import QuickReference from '@/components/QuickReference'
import ToolCards from '@/components/ToolCards'
import ScenarioTable from '@/components/ScenarioTable'
import FeatureCards from '@/components/FeatureCards'
import KeyboardReference from '@/components/KeyboardReference'
import StepFlow from '@/components/StepFlow'
import WorkflowPipeline from '@/components/WorkflowPipeline'
import TabbedToolSection from '@/components/TabbedToolSection'
import SpectrumBar from '@/components/SpectrumBar'
import ValueCards from '@/components/ValueCards'
import GifShowcase from '@/components/GifShowcase'
import TryItPrompts from '@/components/TryItPrompts'
import ContestBanner from '@/components/ContestBanner'
import HabitCards from '@/components/HabitCards'
import TierDivider from '@/components/TierDivider'
import PresentationDeck from '@/components/PresentationDeck'

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

import { vibeCoding, whySesCare, toolsAtAGlance } from '@/content/big-picture'
import { claudeCode, cursor, saleo } from '@/content/tools'
import { liveDemo, fullPipeline, quickReference } from '@/content/action'

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

function Prose({ paragraphs }) {
  if (!paragraphs) return null
  return (
    <div className="space-y-5 text-[var(--color-text-prose)] leading-[1.7]">
      {paragraphs.map((p, i) => (
        <p key={i} className={i === 0 ? 'text-[19px] font-[420]' : 'text-[18px]'}><RichText text={p} /></p>
      ))}
    </div>
  )
}

function TabContent({ content }) {
  return (
    <>
      <Prose paragraphs={content.prose} />
      {content.habitCards && <HabitCards cards={content.habitCards} />}
      {content.terminal && (
        <TerminalPanel
          title={content.terminal.title}
          steps={content.terminal.steps}
          expandable={content.terminal.expandable}
        />
      )}
      {content.features && <FeatureCards features={content.features} />}
      {content.keyboardRef && <KeyboardReference keyboardRef={content.keyboardRef} />}
      {content.stepFlow && <StepFlow stepFlow={content.stepFlow} />}
      {content.artifactTable && (
        <div className="my-8 rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
          <table className="w-full text-[15px]">
            <thead>
              <tr className="bg-[var(--color-border-light)]">
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Category</th>
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Examples</th>
                <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">How Cursor Uses It</th>
              </tr>
            </thead>
            <tbody>
              {content.artifactTable.map((row, i) => (
                <tr key={i} className={`border-t border-[var(--color-border)] ${i % 2 === 1 ? 'bg-[var(--color-border-light)]/50' : ''}`}>
                  <td className="px-4 py-2 font-medium text-[var(--color-text)]">{row.category}</td>
                  <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.examples}</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)] hidden sm:table-cell">{row.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {content.deepCut && (
        <DeepCut title={content.deepCut.title}>
          <p><RichText text={content.deepCut.content} /></p>
        </DeepCut>
      )}
      {content.takeaway && (
        <KeyTakeaway><RichText text={content.takeaway} /></KeyTakeaway>
      )}
    </>
  )
}

function ToolSection({ data }) {
  const tabs = data.tabs.map((tab) => ({
    label: tab.label,
    render: <TabContent content={tab.content} />,
  }))

  return (
    <Section id={data.id} label={data.label} title={data.title} subtitle={data.subtitle} hideDivider={data.hideDivider}>
      <TabbedToolSection tabs={tabs} />
    </Section>
  )
}

function CollapsibleScenarios({ scenarios }) {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center gap-2 mt-8 mb-2 text-[15px] font-semibold text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-text)] transition-colors w-full text-left">
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        When to Use Which
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ScenarioTable scenarios={scenarios} />
      </CollapsibleContent>
    </Collapsible>
  )
}

const presentationSections = [vibeCoding, whySesCare, toolsAtAGlance]

export default function App() {
  return (
    <Layout>
      {({ onSlideChange }) => (
        <>
          {/* Fullscreen Presentation Deck -- Big Picture tier */}
          <PresentationDeck
            sections={presentationSections}
            onSlideChange={onSlideChange}
            scrollTargetId="tools-tier"
          />

          <TierDivider label="The Tools" id="tools-tier" />

          {/* Tier 2: The Tools */}
          <ToolSection data={claudeCode} />
          <ToolSection data={cursor} />
          <ToolSection data={saleo} />

          <TierDivider label="See It in Action" />

          {/* Tier 3: See It in Action */}
          <Section id={liveDemo.id} label={liveDemo.label} title={liveDemo.title} subtitle={liveDemo.subtitle}>
            <Prose paragraphs={liveDemo.prose} />
            <div className="space-y-6 my-8">
              {liveDemo.gifShowcases.map((gif, i) => (
                <GifShowcase key={i} {...gif} step={gif.step || i + 1} />
              ))}
            </div>
            <TryItPrompts prompts={liveDemo.tryItPrompts} />
            <div className="mt-8 bg-[var(--color-border-light)] rounded-lg p-5">
              <h4 className="font-[var(--font-heading)] text-[16px] font-semibold text-[var(--color-text)] mb-3">
                {liveDemo.caveats.title}
              </h4>
              <ul className="space-y-2">
                {liveDemo.caveats.points.map((point, i) => (
                  <li key={i} className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed flex gap-2">
                    <span className="text-[var(--color-text-muted)] flex-shrink-0">--</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <KeyTakeaway><RichText text={liveDemo.takeaway} /></KeyTakeaway>
          </Section>

          <Section id={fullPipeline.id} label={fullPipeline.label} title={fullPipeline.title} subtitle={fullPipeline.subtitle} hideDivider>
            <Prose paragraphs={fullPipeline.prose} />
            <WorkflowPipeline pipeline={fullPipeline.pipeline} />
            <KeyTakeaway><RichText text={fullPipeline.takeaway} /></KeyTakeaway>
          </Section>

          <TierDivider label="Keep Going" />

          {/* Tier 4: Keep Going */}
          <Section id={quickReference.id} label={quickReference.label} title={quickReference.title} subtitle={quickReference.subtitle}>
            <QuickReference data={quickReference} />
            <div className="mt-8">
              <h3 className="font-[var(--font-heading)] text-[20px] tracking-[-0.015em] mb-3">Best Practices</h3>
              <div className="space-y-2">
                {quickReference.bestPractices.map((practice, i) => (
                  <div key={i} className="flex gap-2.5 px-3 py-2 bg-[var(--color-bg-white)] rounded-lg shadow-[var(--shadow-card)]">
                    <CheckCircle2 size={16} className="text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[var(--color-text-secondary)]"><RichText text={practice} /></span>
                  </div>
                ))}
              </div>
            </div>
            <ContestBanner
              title={quickReference.contest.title}
              description={quickReference.contest.description}
              cta={quickReference.contest.cta}
            />
            <KeyTakeaway>{quickReference.takeaway}</KeyTakeaway>
          </Section>
        </>
      )}
    </Layout>
  )
}
