import { ClaudeLogo, CursorLogo, SaleoLogo } from './ToolLogos'

export default function Hero() {
  return (
    <div className="pt-12 md:pt-20 pb-8 md:pb-12 px-6 md:px-10 flex justify-center">
      <div className="w-full max-w-[780px] text-center">
        <h1 className="text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.035em] text-[var(--color-heading)] mb-4">
          Build faster. Demo sharper.
        </h1>
        <p className="text-[18px] md:text-[20px] text-[var(--color-text-muted)] font-[350] leading-[1.5] mb-10">
          A hands-on guide to three tools that turn a week of prep into an afternoon.
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <ClaudeLogo size={40} />
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">Claude Code</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <CursorLogo size={40} />
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">Cursor</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <SaleoLogo size={40} />
            </div>
            <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">Saleo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
