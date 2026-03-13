export const section9 = {
  id: 'custom-commands',
  label: 'Power User',
  title: 'Customize It',
  subtitle: "Teach Claude your team's workflows.",
  prose: [
    "**Custom commands** are simple text files that tell Claude what to do. You write instructions in plain English, save them in a folder, and run them with a slash — like `/fix-issue` or `/review-code`. They turn your team's best practices into one-step actions.",
    "**Skills** are reference files that Claude pulls in only when needed. Unlike CLAUDE.md (which loads every session), skills stay out of the way until they're relevant. Good for specialized how-tos your team has documented.",
    "**Hooks** are automatic actions that happen at key moments: before Claude saves a file (check formatting), after it changes code (run tests), or before it saves your work to version history (clean everything up). Quality checks that run themselves."
  ],
  terminal: {
    title: 'Custom Command in Action',
    steps: [
      { type: 'output', content: '-- The command (a simple text file) --' },
      { type: 'command', content: 'cat .claude/commands/fix-issue.md' },
      { type: 'output', content: 'Read the GitHub issue number provided.' },
      { type: 'output', content: 'Find the relevant code. Write a fix.' },
      { type: 'output', content: 'Add tests. Make sure they pass.' },
      { type: 'output', content: '' },
      { type: 'output', content: '-- Using it --' },
      { type: 'command', content: '/fix-issue #142' },
      { type: 'claude-thinking', content: 'Reading issue #142...' },
      { type: 'claude-response', content: 'Fixed. Updated the code, added 3 tests. All passing.' },
    ],
  },
  takeaway: "**Commands** = your shortcuts. **Skills** = Claude's reference library. **Hooks** = automatic quality checks.",
}

export const section10 = {
  id: 'multi-agent',
  label: 'Power User',
  title: 'Multiple Agents',
  subtitle: 'One Claude is good. A coordinated team of Claudes is better.',
  prose: [
    "Claude can launch **helpers** that work alongside it. Think of it like delegating — the main Claude builds the visible parts of the app while a helper handles the data and storage at the same time.",
    "The pattern that works: let the main Claude decide when to split the work. Give helpers **clear task descriptions**, not titles. \"Build the profile page\" works better than \"You are a design specialist\" every time.",
    "Claude Code also works inside **GitHub**. Tag `@claude` on a code review and it will automatically check the changes and leave comments — like having an extra reviewer on your team."
  ],
  terminal: {
    title: 'Working in Parallel',
    steps: [
      { type: 'output', content: '> build user profiles with photo upload' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Two independent pieces. Splitting the work...' },
      { type: 'output', content: '' },
      { type: 'output', content: '[Main Claude]  Building the profile page...' },
      { type: 'output', content: '[Helper]       Building photo storage...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: 'Both done. Everything connected. Tests passing.' },
    ],
  },
  deepCut: {
    title: "Why giving agents fake personas doesn't help",
    content: "It's tempting to tell a helper \"You are an expert in X.\" In practice, Claude already knows all of these tools deeply. Giving it a narrow label can actually limit its ability to solve problems that touch multiple areas. A clear task beats a title every time."
  },
  takeaway: "Helpers shine for parallel, independent work. For most tasks, one well-directed Claude is enough.",
}

export const section11 = {
  id: 'patterns',
  label: 'Power User',
  title: 'What Works, What Doesn\'t',
  subtitle: "What experienced users have figured out.",
  prose: [
    "**What consistently works:** plan first, build second. Keep sessions short and focused. Update your CLAUDE.md as you learn what works — it gets better over time. Let hooks (automatic checks) handle formatting — don't waste AI on cleanup.",
    "**What to avoid:** overloading CLAUDE.md with too many instructions (this actually makes Claude worse at following any of them). Forgetting to check `/context` during long sessions (when memory fills up, quality drops fast). Approving changes without reading what changed.",
    "**Power-user tips:** use `claude --resume` to continue past sessions. Voice input works well for faster prompting. When Claude can't open a link, copy the page content and paste it directly."
  ],
  takeaway: "Plan first. Keep sessions focused. Read what changed before approving. That's 80% of being great at this.",
}

export const section12 = {
  id: 'quick-reference',
  label: 'Power User',
  title: 'Cheat Sheet',
  subtitle: 'Everything you need on one screen.',
  commands: [
    { command: '/help', description: 'See all commands', when: 'Anytime' },
    { command: '/plan', description: 'Plan without changing anything', when: 'Before big changes' },
    { command: '/model', description: 'Switch between fast and smart', when: 'Balancing speed vs. depth' },
    { command: '/context', description: 'Check memory usage', when: 'Long sessions' },
    { command: '/compact', description: 'Free up memory', when: 'Memory getting full' },
    { command: '/clear', description: 'Start fresh', when: 'New task' },
    { command: '/init', description: 'Generate CLAUDE.md', when: 'New project' },
    { command: '/rewind', description: 'Undo changes', when: 'After mistakes' },
    { command: '/config', description: 'Adjust settings', when: 'Customizing behavior' },
    { command: '/doctor', description: 'Fix problems', when: 'Something seems off' },
  ],
  shortcuts: [
    { key: 'Tab', action: 'Accept a suggestion' },
    { key: 'Up', action: 'Repeat last prompt' },
    { key: 'Ctrl+R', action: 'Search past prompts' },
    { key: 'Shift+Tab x2', action: 'Enter Plan Mode' },
    { key: 'Esc x2', action: 'Undo last change' },
  ],
  models: [
    { model: 'Opus 4.6', use: 'Hard problems, big-picture thinking, tricky bugs' },
    { model: 'Sonnet 4.6', use: 'Fast everyday work, simple changes' },
    { model: 'Haiku 4.5', use: 'Quick answers, small tasks' },
  ],
  paths: [
    { path: '~/.claude/CLAUDE.md', description: 'Your personal instructions (all projects)' },
    { path: '.claude/commands/', description: 'Your custom shortcuts' },
    { path: '.claude/skills/', description: 'Reference docs Claude loads when needed' },
    { path: '.claude/settings.json', description: 'Project-specific settings' },
  ],
  pricing: [
    { plan: 'Pro', price: '$20/mo', notes: 'Good starting point' },
    { plan: 'Max', price: '$100-200/mo', notes: 'Heavy use' },
    { plan: 'Teams', price: '$25/seat', notes: 'Organizations' },
    { plan: 'API', price: 'Pay per use', notes: 'Build your own tools with Claude' },
  ],
  takeaway: 'Bookmark this section. Come back to it.',
}
