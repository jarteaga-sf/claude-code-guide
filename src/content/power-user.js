export const section7 = {
  id: 'cursor-workflows',
  label: 'Demo & Present',
  title: 'Cursor Workflows',
  subtitle: 'The four features that cover 90% of what Cursor is used for.',
  prose: [
    "**Tab autocomplete** is always on. It reads the surrounding code and suggests continuations — not just the next character, but often the next 5-10 lines. The suggestions get better as you write more context. Treat it like a fast typist who's read your codebase.",
    "**Cmd+K** (inline edit) is the highest-leverage feature for editing existing code. Select any block, press Cmd+K, describe the change in plain language. Cursor applies it as a diff you can review in place. No chat window, no copy-paste. This is where Cursor beats Claude Code for quick edits.",
    "**Cmd+L** (chat) gives you a conversation panel with `@codebase` access — ask questions about the project, get explanations, generate code to paste. Use `@filename` to pull in a specific file as context.",
    "**Composer** is for larger changes. When a task touches multiple files, Composer shows you exactly what changes in each file before applying anything. It's the right choice for refactors, API migrations, and anything where you want visual diffs before committing.",
  ],
  keyboardRef: {
    shortcuts: [
      { key: 'Tab', action: 'Accept autocomplete suggestion' },
      { key: 'Cmd+K', action: 'Inline edit on selected code' },
      { key: 'Cmd+L', action: 'Open chat panel' },
      { key: 'Cmd+Shift+I', action: 'Open Composer (multi-file)' },
      { key: 'Cmd+Shift+K', action: 'Delete line (AI-aware)' },
    ],
    contextKeys: [
      { key: '@codebase', action: 'Search across the whole project' },
      { key: '@filename', action: 'Pull in a specific file' },
      { key: '@docs', action: 'Reference linked documentation' },
    ],
  },
  deepCut: {
    title: 'When Cursor beats Claude Code',
    content: "Cursor wins on **speed and immediacy** for small, targeted edits. If you can see the code you want to change on screen, Cmd+K is faster than switching to a terminal and running Claude Code. Cursor also wins when you want to **stay in the editing flow** — the diff is shown inline, you review it without leaving the file, and there's no terminal context to manage. Use Claude Code when the task requires multiple sequential steps, running commands, or understanding a large codebase from scratch."
  },
  takeaway: "Cmd+K for quick edits. Composer for multi-file changes. @codebase for questions. **Tab for everything in between.**",
}

export const section8 = {
  id: 'saleo-overview',
  label: 'Demo & Present',
  title: 'Saleo',
  subtitle: 'Show the right data for every prospect — without touching real records.',
  prose: [
    "Saleo is a browser extension that sits between you and your Salesforce org. When you're running a demo, Saleo intercepts the data the page would normally display and replaces it with a customized overlay — prospect-specific names, numbers, pipeline stages, whatever tells the right story.",
    "The underlying org doesn't change. No real records are modified. No sandbox rebuild required. The overlay exists only in the session, and you control exactly what gets shown.",
    "This solves the demo data problem that every SE knows: your sandbox has generic or outdated data, you don't have time to manually configure it for each prospect, and using real customer data is off the table. Saleo handles the middle ground.",
    "Saleo also supports **AI-assisted data generation** — describe a prospect's industry and deal context, and it can suggest realistic data overlays that match the story you're telling.",
  ],
  stepFlow: {
    steps: [
      'Open Salesforce in Chrome with the Saleo extension active',
      'Saleo intercepts the page render and replaces data with your overlay (e.g. Acme Corp becomes Contoso Ltd, $48K becomes $1.2M)',
      'Prospect sees a tailored view. The underlying org is unchanged.',
      'Switch overlays mid-demo or save templates per prospect or vertical',
    ],
  },
  takeaway: "Saleo lets you **demo the right story without rebuilding the environment**. The org is your stage; Saleo sets the scene.",
}

export const section9 = {
  id: 'saleo-workflows',
  label: 'Demo & Present',
  title: 'Building Better Demos',
  subtitle: 'How to use Saleo before, during, and after a discovery call.',
  prose: [
    "**Before the call:** create a prospect-specific overlay template. Pull in the prospect's industry, company name, relevant deal sizes, and any named accounts that would resonate. Save it as a named template so you can activate it in seconds.",
    "**During the demo:** activate the Saleo overlay at the start. If the conversation pivots — the prospect raises a new use case or asks about a specific scenario — you can adjust the overlay in real time or switch to a different saved template without leaving the screen.",
    "**After the call:** duplicate the template and update it for the next discovery meeting or for the technical deep-dive. Templates build on each other over time, and you accumulate a library organized by vertical or deal type.",
    "**Versus a sandbox rebuild:** manually configuring sandbox data for each prospect takes hours. Saleo reduces that to minutes. The tradeoff is that Saleo overlays are visual only — if the prospect wants to test a live integration or enter their own data, you still need a working sandbox environment.",
  ],
  stepFlow: {
    phases: [
      {
        label: 'Before the call',
        steps: [
          'Open Saleo dashboard',
          'Duplicate nearest vertical template',
          'Update: company name, ARR, pipeline stages, key accounts',
          'Save as "Contoso - Enterprise - March 2026"',
        ],
      },
      {
        label: 'During the demo',
        steps: [
          'Activate overlay from extension',
          'Prospect asks about a different scenario',
          'Switch template or adjust overlay field live',
        ],
      },
      {
        label: 'After the call',
        steps: [
          'Duplicate. Update for next session. Archive the rest.',
        ],
      },
    ],
  },
  takeaway: "Build a template library organized by vertical. **The second prospect in an industry costs a fraction of the first.**",
}

export const section10 = {
  id: 'combining-tools',
  label: 'Go Deeper',
  title: 'Using Them Together',
  subtitle: 'The tools compound. Here\'s what that looks like in practice.',
  prose: [
    "The most effective SE workflows don't use one tool — they chain them. Each tool hands off to the next at the point where it has an advantage.",
    "**Example: building a prospect-specific integration demo.** Start in Claude Code to scaffold the integration — it reads the existing codebase, generates the connection logic, writes tests, and verifies they pass. Move to Cursor to refine the output — Cmd+K on specific functions, adjust variable names, clean up the code while staying in the editor. Then switch to Saleo to make the demo environment match the prospect — overlay the right data so the integration demo shows their company's names, numbers, and use cases.",
    "**Example: preparing for a technical deep-dive.** Use Claude Code to generate a technical summary of your integration ('what does this codebase actually do?'). Use Cursor to draft inline comments and documentation while reading the code. Load Saleo with the prospect's vertical data so the live demo is ready the moment the call starts.",
    "The tools don't compete — they cover different phases of the same workflow: **build, refine, present.**",
  ],
  pipeline: [
    { phase: 'Build', tool: 'Claude Code', logo: 'claude', description: 'Scaffold the integration, write tests, verify they pass. Autonomous multi-step execution.' },
    { phase: 'Refine', tool: 'Cursor', logo: 'cursor', description: 'Cmd+K on specific functions, adjust variable names, clean up code — all inline.' },
    { phase: 'Present', tool: 'Saleo', logo: 'saleo', description: 'Overlay prospect-specific data so the demo shows their brand, their numbers, their workflow.' },
  ],
  takeaway: "**Build with Claude Code. Refine with Cursor. Present with Saleo.** The handoffs are fast once you know the flow.",
}

export const section11 = {
  id: 'best-practices',
  label: 'Go Deeper',
  title: 'What Works, What Doesn\'t',
  subtitle: 'Patterns that hold across all three tools.',
  prose: [
    "**What consistently works across all tools:** start with a clear goal and a clear success condition. 'Make it better' is not a task. 'The dropdown doesn't filter correctly when no option is selected — fix it' is. Specificity compounds — the more precisely you describe what you want, the less back-and-forth you need.",
    "**For Claude Code:** use Plan Mode before anything non-trivial. Keep sessions focused on one task. Update CLAUDE.md as you learn what works in your project. Don't overload it with instructions — a 50-line CLAUDE.md that Claude actually follows beats a 300-line one it has to guess at.",
    "**For Cursor:** use Tab autocomplete liberally — it's low-cost to ignore and high-value when it's right. Cmd+K for anything where you can see the code you want to change. Composer when the change spans more than 2 files. Don't use chat for tasks that Cmd+K can handle in seconds.",
    "**For Saleo:** build templates as you go. Don't recreate from scratch for each prospect — duplicate and update. Organize templates by vertical, not by prospect, so they stay reusable. Use AI-assisted data generation for unfamiliar industries.",
    "**What to avoid:** approving Claude Code changes without reading the diff. Using coding agents for tasks a Cmd+K would solve in 10 seconds. Rebuilding sandbox data manually when Saleo covers the use case. And across all tools: treating AI output as final without review — it's a fast first draft, not a finished product.",
  ],
  takeaway: "**Clear input, specific success criteria, read before approving.** The rest is tool-specific mechanics you'll pick up fast.",
}

export const section12 = {
  id: 'quick-reference',
  label: 'Go Deeper',
  title: 'Cheat Sheet',
  subtitle: 'All three tools, one screen.',
  toolMatrix: [
    { scenario: 'Build a script or automation from scratch', tool: 'Claude Code' },
    { scenario: 'Edit code while staying in your editor', tool: 'Cursor (Cmd+K)' },
    { scenario: 'Refactor across many files autonomously', tool: 'Claude Code' },
    { scenario: 'Multi-file change with visual diffs', tool: 'Cursor Composer' },
    { scenario: 'Understand an unfamiliar codebase', tool: 'Claude Code' },
    { scenario: 'Quick inline suggestion as you type', tool: 'Cursor (Tab)' },
    { scenario: 'Prep prospect-specific demo data', tool: 'Saleo' },
    { scenario: 'Demo a Salesforce workflow without real data', tool: 'Saleo' },
  ],
  commands: [
    { command: '/plan', description: 'Plan without changing anything', when: 'Before big changes' },
    { command: '/init', description: 'Generate CLAUDE.md', when: 'New project' },
    { command: '/model', description: 'Switch between Sonnet and Opus', when: 'Balancing speed vs. depth' },
    { command: '/context', description: 'Check memory usage', when: 'Long sessions' },
    { command: '/compact', description: 'Free up memory', when: 'Memory getting full' },
    { command: '/clear', description: 'Start fresh', when: 'New task' },
    { command: '/permissions', description: 'Pre-approve safe operations', when: 'Reducing pop-ups' },
    { command: '/doctor', description: 'Fix problems', when: 'Something seems off' },
  ],
  shortcuts: [
    { key: 'Shift+Tab x2', action: 'Enter Plan Mode' },
    { key: 'Esc x2', action: 'Undo last change' },
    { key: 'Up', action: 'Repeat last prompt' },
    { key: 'Ctrl+R', action: 'Search past prompts' },
  ],
  cursorShortcuts: [
    { key: 'Tab', action: 'Accept autocomplete' },
    { key: 'Cmd+K', action: 'Inline edit on selection' },
    { key: 'Cmd+L', action: 'Open chat panel' },
    { key: 'Cmd+Shift+I', action: 'Open Composer' },
  ],
  models: [
    { model: 'Opus 4.6', use: 'Hard problems, architecture decisions, tricky bugs' },
    { model: 'Sonnet 4.6', use: 'Everyday work — fast and capable' },
    { model: 'Haiku 4.5', use: 'Quick answers, small edits' },
  ],
  paths: [
    { path: '~/.claude/CLAUDE.md', description: 'Personal instructions (all projects)' },
    { path: './CLAUDE.md', description: 'Project-level instructions' },
    { path: '.claude/commands/', description: 'Custom slash commands' },
    { path: '.claude/settings.json', description: 'Project-specific settings' },
  ],
  takeaway: 'Bookmark this section. Come back to it.',
}
