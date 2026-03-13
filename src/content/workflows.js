export const section5 = {
  id: 'plan-mode',
  label: 'Workflows',
  title: 'Think First, Build Second',
  subtitle: 'The difference between useful AI and AI that creates more work.',
  prose: [
    "Hit **Shift+Tab twice** (or type `/plan`). Claude switches to planning mode: it can look at everything but won't change anything yet.",
    "Why this matters: without it, Claude might charge ahead on the wrong approach. Plan Mode forces a simple workflow — **plan, review, approve, then build.** You stay in control.",
    "For bigger tasks, have Claude write its plan to a file. This becomes a **checklist that carries over between sessions.** Pick up a multi-day project exactly where you left off."
  ],
  terminal: {
    title: 'Plan Mode in Action',
    steps: [
      { type: 'output', content: '> /plan' },
      { type: 'output', content: '[Plan Mode - looking only, no changes]' },
      { type: 'output', content: '' },
      { type: 'output', content: '> add a login system to this app' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Looking at the project...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: "Here's my plan:" },
      { type: 'output', content: '1. Set up the login system' },
      { type: 'output', content: '2. Create sign-in and sign-out pages' },
      { type: 'output', content: '3. Protect pages that need a login' },
      { type: 'output', content: '4. Update 3 existing pages' },
      { type: 'output', content: '' },
      { type: 'output', content: 'New files: 4 | Changed files: 5' },
      { type: 'output', content: 'Shall I proceed?' },
    ],
  },
  takeaway: "For anything beyond a one-file change, start in Plan Mode. Always.",
}

export const section6 = {
  id: 'permissions',
  label: 'Workflows',
  title: 'Stay Safe, Move Fast',
  subtitle: 'How to let Claude move fast without breaking things.',
  prose: [
    "By default, Claude asks permission before changing files or running commands. Safe, but annoying — constant pop-ups lead to **\"approval fatigue\"** where you stop reading what you're approving.",
    "Fix this with `/permissions` to pre-approve safe commands, or use **sandbox mode** so Claude works freely inside a protected space. Anthropic reports ~84% fewer permission pop-ups with these turned on.",
    "Your safety net: **checkpoints.** Claude saves your work before every change. Hit **Esc twice** to undo. Unlimited undo. This means you can try big, ambitious things — knowing you can always snap back to how it was before."
  ],
  terminal: {
    title: 'Permissions & Undo',
    steps: [
      { type: 'output', content: '-- Without configured permissions --' },
      { type: 'claude-response', content: 'I need to run: npm test' },
      { type: 'output', content: '[Allow? y/n]' },
      { type: 'claude-response', content: 'I need to change: src/auth.ts' },
      { type: 'output', content: '[Allow? y/n]  ...this gets old fast' },
      { type: 'output', content: '' },
      { type: 'output', content: '-- With sandbox mode --' },
      { type: 'command', content: 'claude --sandbox' },
      { type: 'claude-response', content: 'Sandbox mode. I can work freely inside your project.' },
      { type: 'output', content: '' },
      { type: 'output', content: '-- Undoing a change --' },
      { type: 'output', content: '[Esc Esc] Rolled back. 2 files restored.' },
    ],
  },
  takeaway: "Checkpoints mean you can be ambitious. Try big changes knowing you can always undo.",
}

export const section7 = {
  id: 'context-management',
  label: 'Workflows',
  title: 'Memory & Context',
  subtitle: "Claude doesn't load your whole project at once. Here's how it actually works.",
  prose: [
    "Claude reads files as they become relevant. It has a **limited working memory** — think of it like a desk that can only hold so many papers at once. Your conversation, files, and command results all take up space.",
    "When that memory fills up, Claude's quality drops. Use `/context` to check how full it is, `/compact` to free up space by summarizing old conversation, or `/clear` to start fresh. Your CLAUDE.md instructions always stay loaded.",
    "For longer tasks, **break them into focused sessions.** After clearing, give a brief recap: \"We're building X. We've done Y. Next step is Z.\" Or use `claude --resume` to pick up where you left off."
  ],
  terminal: {
    title: 'Managing Memory',
    steps: [
      { type: 'command', content: '/context' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Memory: 71% full' },
      { type: 'output', content: '  Chat: 63% | Files: 29% | System: 8%' },
      { type: 'output', content: '' },
      { type: 'command', content: '/compact' },
      { type: 'claude-thinking', content: 'Summarizing conversation...' },
      { type: 'output', content: 'Compressed. Freed up 73% of memory.' },
    ],
  },
  takeaway: "Claude's memory is limited. Check it, compress it, and start fresh for new tasks.",
}

export const section8 = {
  id: 'prompting',
  label: 'Workflows',
  title: 'Writing Good Prompts',
  subtitle: "The best Claude Code users aren't the most technical. They're the best communicators.",
  prose: [
    "**Be specific** about what you want and how you'll know it worked. \"Make the app better\" gets you a clarifying question. \"The dashboard loads in 3.2 seconds — get it under 1 second\" gets you a solution.",
    "Use `/model` to pick the right brain for the job. **Sonnet** is fast — good for simple tasks like renaming things or small changes. **Opus** is smarter — use it for tough problems. You can even add the word **\"ultrathink\"** to any prompt to tell Claude to think extra carefully before acting.",
    "Keyboard shortcuts worth knowing: **Tab** to complete, **Up** for history, **Shift+Tab twice** for Plan Mode, **Esc twice** to undo. Everything else, just type what you need in plain English."
  ],
  terminal: {
    title: 'Good Prompt vs. Vague Prompt',
    steps: [
      { type: 'output', content: '-- Vague --' },
      { type: 'output', content: '> make the app better' },
      { type: 'claude-response', content: "Could you be more specific? Speed, design, features...?" },
      { type: 'output', content: '' },
      { type: 'output', content: '-- Specific --' },
      { type: 'output', content: '> The dashboard loads in 3.2 seconds.' },
      { type: 'output', content: '  Get it under 1 second.' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Checking what\'s slow...' },
      { type: 'claude-response', content: 'Fixed 3 issues. Load time: 3.2s -> 0.8s.' },
    ],
  },
  deepCut: {
    title: 'Two settings worth changing',
    content: "Turn on **thinking mode** (shows Claude's reasoning as it works) and set **output style to explanatory** (Claude narrates what it's doing). Both make sessions more transparent, which is especially useful when you're still learning."
  },
  takeaway: "Describe what you want, how you'll measure success, and any constraints. That's the whole formula.",
}
