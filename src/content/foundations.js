export const section0 = {
  id: 'what-is-vibe-coding',
  label: 'Foundations',
  title: 'What is Vibe Coding?',
  subtitle: 'The simplest idea in the world — and it changes everything.',
  prose: [
    "**The old way:** you write code line by line. You need to know the language. It takes years of training.",
    "**The new way:** you describe what you want in plain English. AI writes the code. You review and refine.",
    "Why \"vibe\"? Because you're **steering by feel**, not memorizing programming languages. You set the direction. AI handles the details. Andrej Karpathy coined the term in early 2025, and it caught on because it captures something real: AI is good enough now that the hard part isn't writing code — it's knowing what to build and how it should work.",
    "This guide is about **Claude Code**, the tool that makes vibe coding practical. But the concept matters more than any tool. Once you understand it, you'll see opportunities everywhere."
  ],
  takeaway: "Vibe coding isn't about writing less code. It's about spending your time on what matters — **the thinking, not the typing.**",
}

export const section1 = {
  id: 'what-is-claude-code',
  label: 'Foundations',
  title: 'What It Does',
  subtitle: "Not autocomplete. Not a chatbot. An AI that works inside your project.",
  prose: [
    "Claude Code is the tool that makes vibe coding real. It **reads your files**, understands how your project is organized, **writes code**, and **checks its own work**. You tell it what to build. It does the building.",
    "How is it different from other AI tools? **Copilot** suggests code as you type — still one line at a time. **Cursor** is a code editor with AI built in. **ChatGPT** requires copy-paste. **Claude Code** lives inside your project and can do multiple steps in a row without you stepping in."
  ],
  terminal: {
    title: 'First Launch',
    steps: [
      { type: 'command', content: 'cd ~/projects/my-app' },
      { type: 'command', content: 'claude' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Claude Code v1.0.26' },
      { type: 'output', content: 'Working directory: ~/projects/my-app' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Scanning project...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: 'This is a web app with 12 pages and a bunch of reusable pieces. How can I help?' },
    ],
  },
  takeaway: "Claude Code doesn't suggest code. It **writes it, tests it, and delivers it** — while you stay in control of the direction.",
}

export const section2 = {
  id: 'where-it-runs',
  label: 'Foundations',
  title: 'Where It Runs',
  subtitle: 'Terminal, VS Code, desktop app, browser, or your phone.',
  prose: [
    "Claude Code works wherever you do. The **terminal** (command line) is the most powerful version. There are also extensions for **VS Code** and **JetBrains**, a **desktop app**, a **web version**, and an **iOS app** for checking on tasks from your phone.",
    "For learning, start with the terminal. New features show up there first, and it's the clearest way to see how Claude thinks."
  ],
  terminal: {
    title: 'Same Task, Different Surfaces',
    steps: [
      { type: 'output', content: '-- Terminal --' },
      { type: 'command', content: 'claude "add an error message when the email field is empty"' },
      { type: 'output', content: '' },
      { type: 'output', content: '-- VS Code --' },
      { type: 'output', content: 'Sidebar panel > "add an error message when the email field is empty"' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Same AI. Same result. Different interface.' },
    ],
  },
  takeaway: "Start with the terminal. It's the most capable version and the best way to learn how Claude works.",
}

export const section3 = {
  id: 'getting-started',
  label: 'Foundations',
  title: 'Install It',
  subtitle: 'From zero to your first useful result in under 5 minutes.',
  prose: [
    "**One command** to install. **One browser tab** to log in. That's it.",
    "Your first session: open a project folder and type `claude`. It looks at your project, figures out what tools you're using, and tells you what it found. Try **\"what does this project do?\"** as your first question. Then ask it to make a small change and watch what happens."
  ],
  terminal: {
    title: 'First Session',
    steps: [
      { type: 'command', content: 'npm install -g @anthropic-ai/claude-code' },
      { type: 'output', content: 'claude-code installed successfully' },
      { type: 'output', content: '' },
      { type: 'command', content: 'claude' },
      { type: 'output', content: 'Logged in as jonathan@salesforce.com' },
      { type: 'output', content: '' },
      { type: 'command', content: 'cd ~/projects/demo-app && claude' },
      { type: 'claude-response', content: "This looks like a web app with a dashboard and settings page. What would you like to work on?" },
    ],
  },
  takeaway: "The only setup that matters is install and log in. Everything else, Claude figures out from your project.",
}

export const section4 = {
  id: 'claude-md',
  label: 'Foundations',
  title: 'Set It Up',
  subtitle: 'The single most important file in your project.',
  prose: [
    "**CLAUDE.md** is a simple text file you put in your project folder. Claude reads it every time you start a session. Think of it as a **cheat sheet for your AI** — it tells Claude how your project works so you don't have to repeat yourself.",
    "**What goes in it:** what the project is, what tools it uses, how to run it, and any rules your team follows. **What doesn't:** actual code (it gets outdated), super detailed style guides, or every possible instruction.",
    "You don't have to write it from scratch. Type `/init` and Claude will look at your project and generate one for you. It's a solid starting point you can tweak over time.",
    "One rule: **keep it short.** Under 200 lines is ideal. If you overload it with too many instructions, Claude gets worse at following all of them — not better."
  ],
  terminal: {
    title: 'Generating Your Setup File',
    steps: [
      { type: 'command', content: 'claude /init' },
      { type: 'output', content: '' },
      { type: 'claude-thinking', content: 'Looking at your project...' },
      { type: 'output', content: '' },
      { type: 'claude-response', content: 'Generated CLAUDE.md:' },
      { type: 'output', content: '' },
      { type: 'file-change', content: '+ # Demo Portal App\n+ \n+ ## What This Is\n+ - A web app with a dashboard and settings\n+ - Built with React and Tailwind CSS\n+ \n+ ## How to Run It\n+ - `npm run dev` -- start the app\n+ - `npm test` -- run tests\n+ \n+ ## Team Rules\n+ - Name files with capital letters (e.g. UserProfile)\n+ - Keep pages organized by feature' },
    ],
    expandable: true,
  },
  deepCut: {
    title: 'Three types of instructions: when to use which',
    content: "**CLAUDE.md** is for project-level info that every session needs (\"what is this project and how does it work\"). **Memory** is for your personal preferences that apply across all projects (\"I prefer detailed explanations\"). **Skills** are specialized instructions Claude pulls in only when relevant (\"how to set up a demo\"). Start with CLAUDE.md — the others are optional."
  },
  takeaway: "Think of CLAUDE.md as a cheat sheet for your AI. Tell it the what, why, and how. Keep it short.",
}
