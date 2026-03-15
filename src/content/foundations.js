export const section0 = {
  id: 'why-ai-tools',
  label: 'Start Here',
  title: 'Why This Matters',
  subtitle: 'AI is changing what SEs can build, demo, and deliver — not just how they write code.',
  prose: [
    "The role of a Salesforce SE has always required range: technical depth, business acuity, and the ability to tell a compelling story. AI tools are expanding that range. Not by replacing judgment, but by collapsing the time between idea and execution.",
    "**Building a custom demo integration?** An AI coding tool can scaffold it in an afternoon. **Refining a prospect-specific data set?** A demo tool can make it feel real in minutes. **Editing a script mid-flight?** An inline AI editor keeps you in flow.",
    "This guide covers three tools your team has access to: **Claude Code** for agentic, multi-step coding tasks; **Cursor** for editor-centric AI assistance; and **Saleo** for demo customization and data overlays. Each solves a different problem. The goal is knowing which one to reach for.",
    "You don't need to be a developer to get value here. Most of the power comes from knowing what to ask and understanding what each tool does well."
  ],
  takeaway: "These aren't coding tools for developers. They're **leverage tools for SEs** — people who need to move fast across a wide surface area.",
}

export const section1 = {
  id: 'tools-at-a-glance',
  label: 'Start Here',
  title: 'The 3 Tools',
  subtitle: 'Different problems, different tools. Here\'s the one-line version of each.',
  prose: [
    "**Claude Code** is an agentic AI that works inside your terminal or editor. It reads your project files, understands how everything fits together, writes code, runs commands, and checks its own work — all in sequence, without you having to step in between every action.",
    "**Cursor** is a VS Code fork with AI woven throughout. It offers inline autocomplete as you type, inline edits on selected code, and a composer for larger multi-file changes. If you live in a code editor, Cursor meets you there.",
    "**Saleo** is a demo customization platform for Salesforce. It lets you overlay realistic, prospect-specific data on top of live Salesforce orgs — without touching real customer data or rebuilding sandbox environments from scratch.",
  ],
  toolCards: [
    { name: 'Claude Code', where: 'Terminal, VS Code sidebar, desktop app', bestFor: 'Multi-step tasks, project-wide changes, automation', how: 'Reads files, runs commands, checks its own work', logo: 'claude' },
    { name: 'Cursor', where: 'The editor itself (VS Code fork)', bestFor: 'Inline edits, autocomplete, staying in flow', how: 'Tab autocomplete, Cmd+K edits, multi-file Composer', logo: 'cursor' },
    { name: 'Saleo', where: 'Browser extension + Salesforce org', bestFor: 'Demo prep, prospect-specific data overlays', how: 'Overlays data on live orgs without modifying real records', logo: 'saleo' },
  ],
  takeaway: "Claude Code builds things. Cursor edits things. Saleo shows things. **Most SE workflows touch all three.**",
}

export const section2 = {
  id: 'when-to-use-which',
  label: 'Start Here',
  title: 'When to Use Which',
  subtitle: 'The decision framework. Start here when you\'re not sure which tool to open.',
  prose: [
    "The most common mistake is reaching for the wrong tool — using a coding agent when you just need inline autocomplete, or configuring a sandbox from scratch when Saleo could handle it in minutes.",
    "The scenarios below cover the most common SE situations. For anything not on the list: if the task is **multi-step and file-based**, Claude Code. If you're **already editing code**, Cursor. If the goal is **what the customer sees**, Saleo.",
  ],
  scenarios: [
    { scenario: 'I need to build a script from scratch', tool: 'Claude Code' },
    { scenario: 'I\'m editing a file and want suggestions as I type', tool: 'Cursor' },
    { scenario: 'I\'m prepping a demo for a specific prospect', tool: 'Saleo' },
    { scenario: 'I need to refactor multiple files across a codebase', tool: 'Claude Code (or Cursor Composer for smaller scope)' },
    { scenario: 'I want to tweak a function while staying in my editor', tool: 'Cursor (Cmd+K inline edit)' },
    { scenario: 'I need realistic data in a Salesforce demo org', tool: 'Saleo' },
    { scenario: 'I want to understand a codebase I\'ve never seen', tool: 'Claude Code (@codebase or /ask)' },
  ],
  deepCut: {
    title: 'When the tools overlap',
    content: "Claude Code and Cursor can both handle multi-file edits. The difference is **interface** and **scope**. Cursor keeps you in the editor with immediate visual feedback. Claude Code works in the terminal and is better at longer, more autonomous sequences — especially when the task requires running commands (like tests or builds) as part of the workflow. When in doubt, start with Claude Code for anything that takes more than 3 steps."
  },
  takeaway: "Multi-step + file-based = Claude Code. Editor-centric + in-flow = Cursor. Demo-facing + data = Saleo.",
}
