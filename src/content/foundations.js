export const section0 = {
  id: 'why-ai-tools',
  label: 'Start Here',
  title: 'Why This Matters',
  subtitle: 'AI is changing what SEs can build, demo, and deliver — not just how they write code.',
  prose: [
    "As a Salesforce SE, you already juggle a lot: understanding the technology, knowing the customer's business, and telling a story that lands. These AI tools help you move faster — from having an idea to making it real — without replacing the judgment that makes you good at your job.",
    "**Building a custom demo integration?** An AI coding tool can scaffold it (generate the starting structure) in an afternoon. **Refining a prospect-specific data set?** A demo overlay tool can make it feel real in minutes. **Editing a script mid-flight?** An AI-powered code editor keeps you in flow without switching windows.",
    "This guide covers three tools your team has access to. Each solves a different problem. The goal is knowing which one to reach for — and when to hand off from one to the next.",
    "You don't need to be a developer to get value here. Most of the power comes from knowing what to ask and understanding what each tool does well.",
    "You also don't need to use all three. Pick the one that fits your workflow and start there. But knowing what each tool does — even the ones you don't use daily — helps you stay fluent in the AI conversations happening with clients and across the industry."
  ],
  takeaway: "These aren't coding tools for developers. They're **leverage tools for SEs** — options to help you move fast. Start with one, add more as it makes sense.",
}

export const section1 = {
  id: 'tools-at-a-glance',
  label: 'Start Here',
  title: 'The 3 Tools',
  subtitle: 'Different problems, different tools. Here\'s the landscape.',
  prose: [
    "Think of these three tools as covering different phases of SE work: **building** technical assets, **editing** code in real time, and **presenting** a polished demo. You might use one, two, or all three — it depends on the kind of work you do. This section gives you the landscape so you can decide where to start.",
  ],
  toolCards: [
    { name: 'Claude Code', where: 'Terminal, VS Code sidebar, desktop app', bestFor: 'Multi-step tasks, project-wide changes, automation', how: 'Reads files, runs commands, checks its own work', logo: 'claude' },
    { name: 'Cursor', where: 'The editor itself (a version of VS Code with AI built in)', bestFor: 'Inline edits, autocomplete, staying in flow', how: 'Tab autocomplete, Cmd+K edits, multi-file Composer', logo: 'cursor' },
    { name: 'Saleo', where: 'Browser extension + Salesforce org', bestFor: 'Demo prep, prospect-specific data overlays', how: 'Overlays data on live orgs without modifying real records', logo: 'saleo' },
  ],
  takeaway: "Claude Code builds things. Cursor edits things. Saleo shows things. **Most SE workflows benefit from at least one.**",
}

export const section2 = {
  id: 'when-to-use-which',
  label: 'Start Here',
  title: 'When to Use Which',
  subtitle: 'The decision framework. Start here when you\'re not sure which tool to open.',
  prose: [
    "The most common mistake is reaching for the wrong tool — using a full coding agent when you just need a quick edit in a file you're already looking at, or rebuilding sandbox data (a test copy of your org) by hand when an overlay would do.",
    "The rule of thumb: if the task is **multi-step and involves files or commands**, Claude Code. If you're **already looking at the code you want to change**, Cursor. If the goal is **what the customer sees in a demo**, Saleo.",
    "This isn't a mandate to use all three — it's a guide to help you pick. If you only build demos, maybe Saleo is your main tool. If you code integrations, Claude Code or Cursor might be all you need. The point is knowing enough about each to make that call and to talk about them fluently with clients.",
  ],
  scenarios: [
    { scenario: 'I need to build a script from scratch', tool: 'Claude Code' },
    { scenario: 'I\'m editing a file and want suggestions as I type', tool: 'Cursor' },
    { scenario: 'I\'m prepping a demo for a specific prospect', tool: 'Saleo' },
    { scenario: 'I need to restructure a demo app — renaming components, updating imports, cleaning up across many files', tool: 'Claude Code (or Cursor Composer for smaller scope)' },
    { scenario: 'I want to tweak a function while staying in my editor', tool: 'Cursor (Cmd+K for an inline edit — you describe the change and see it applied right there)' },
    { scenario: 'I need realistic data in a Salesforce demo org', tool: 'Saleo' },
    { scenario: 'I want to understand a codebase I\'ve never seen', tool: 'Claude Code' },
  ],
  deepCut: {
    title: 'When the tools overlap',
    content: "Claude Code and Cursor can both handle multi-file edits. The difference comes down to **where you work** and **how much you want to hand off**. Cursor keeps you in the editor with immediate visual feedback — great when you can see the code on screen and want to stay hands-on. Claude Code works in the terminal (the command line) and is better at longer sequences where it needs to run commands like tests or builds along the way. When in doubt, start with Claude Code for anything that takes more than 3 steps."
  },
  takeaway: "Multi-step + file-based = Claude Code. Editor-centric + in-flow = Cursor. Demo-facing + data = Saleo.",
}
