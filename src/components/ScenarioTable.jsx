export default function ScenarioTable({ scenarios }) {
  return (
    <div className="my-8 rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
      <table className="w-full text-[15px]">
        <thead>
          <tr className="bg-[var(--color-border-light)]">
            <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)]">Scenario</th>
            <th className="text-left px-4 py-2 font-semibold text-[var(--color-text-secondary)] whitespace-nowrap">Reach for</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((row, i) => (
            <tr key={i} className="border-t border-[var(--color-border)]">
              <td className="px-4 py-2 text-[var(--color-text-secondary)]">{row.scenario}</td>
              <td className="px-4 py-2 font-medium text-[var(--color-accent)] whitespace-nowrap">{row.tool}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
