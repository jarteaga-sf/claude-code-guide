export const vibeCoding = {
  id: 'vibe-coding',
  label: 'The Big Picture',
  title: 'The Shift',
  subtitle: 'The industry is changing. SEs need to be part of it.',
  slides: [
    {
      layout: 'quote',
      context: 'In February 2025, Andrej Karpathy gave it a name.',
      quote: 'Describe what you want, and AI writes the code.',
      attribution: 'You don\'t need to be a developer. You need to know what you want.',
    },
    {
      layout: 'comparison',
      left: { icon: 'PenLine', label: 'Writing Every Line', description: 'Full control, full effort. Every function, every file, every fix.' },
      right: { icon: 'Wand2', label: 'Directing Outcomes', description: 'You describe the goal. AI handles the how.' },
      connector: '\u2192',
    },
    {
      layout: 'iconBullets',
      title: 'What this unlocks for SEs',
      bullets: [
        { visual: 'speed', title: 'Speed', description: 'Idea to deployed component in a single session.' },
        { visual: 'credibility', title: 'Credibility', description: "Enter a prospect's company. Get a demo built for them." },
        { visual: 'independence', title: 'Independence', description: 'If you can describe it, you can ship it.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "You don't need to write code. You need to **describe what you want clearly enough** that AI can build it.",
    },
  ],
}

export const whySesCare = {
  id: 'why-ses-care',
  label: 'The Big Picture',
  title: 'The Tools',
  subtitle: 'Three tools. Different strengths. All worth knowing.',
  slides: [
    {
      layout: 'statement',
      statement: 'Three tools. Different strengths. All worth knowing.',
      supporting: 'Each one gives you an edge at a different stage of SE work.',
    },
    {
      layout: 'toolCards',
      cards: [
        { name: 'Saleo', tagline: 'Their data. Your demo. No code.', bestFor: 'Personalize any demo to any prospect\'s industry in minutes. Org stays clean.', role: 'Demo Layer', setup: 'easy', logo: 'saleo' },
        { name: 'Cursor', tagline: 'Your editor, with a co-pilot.', bestFor: 'Cut custom demo prep from hours to minutes with inline AI and Salesforce CLI.', role: 'AI-Powered IDE', setup: 'moderate', logo: 'cursor' },
        { name: 'Claude Code', tagline: 'You describe. It builds.', bestFor: 'One SE built a full Agentforce agent — 4 topics, 500+ tests — in about an hour.', role: 'Agentic Builder', setup: 'advanced', logo: 'claude' },
      ],
    },
    {
      layout: 'statement',
      statement: 'Today we\'re going deep on Cursor.',
      supporting: 'You can request access and start using it immediately. No steep learning curve -- it\'s the VS Code you already know, with AI built in.',
    },
    {
      layout: 'iconBullets',
      title: 'What makes Cursor click',
      bullets: [
        { icon: 'Bot', title: 'Agent Mode', description: 'Tell it what you want. It reads your project, writes the code, runs commands, and checks its own work.' },
        { icon: 'FileText', title: 'Rules', description: 'Drop a .cursorrules file in your project. Every prompt gets that context automatically.' },
        { icon: 'Search', title: 'Smart Context', description: 'Type @codebase to search your whole project. Type @docs to pull in documentation. The AI sees what you see.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "All three tools are worth exploring. We're starting with Cursor because **you can be up and running by the end of this call.**",
    },
  ],
}

export const toolsAtAGlance = {
  id: 'tools-at-a-glance',
  label: 'The Big Picture',
  title: 'Get Set Up',
  subtitle: 'Three steps. Then you\'re building.',
  slides: [
    {
      layout: 'statement',
      statement: 'Three steps. Then you\'re building.',
      supporting: 'License. Install. Connect. That\'s the whole setup.',
    },
    {
      layout: 'iconBullets',
      title: 'Step 1: Request your license',
      bullets: [
        { icon: 'Globe', title: 'Open Software Catalog', description: 'Go to the Software Catalog for DET web page.' },
        { icon: 'Search', title: 'Find Cursor AI', description: 'Search "Cursor AI", select it, click Next.' },
        { icon: 'FileText', title: 'Submit request', description: 'Write a short Business Justification, click Submit.' },
        { icon: 'CheckCircle', title: 'Manager approves', description: 'Your manager approves. You get setup instructions via email.' },
      ],
    },
    {
      layout: 'iconBullets',
      title: 'Step 2: Install Cursor',
      bullets: [
        { icon: 'Terminal', title: 'Mac', description: 'Run dx install cursor in your terminal. It handles everything.' },
        { icon: 'Download', title: 'Windows', description: 'Download from cursor.com, run the installer.' },
        { icon: 'Shield', title: 'Privacy Mode', description: 'Select Privacy Mode during setup. Import your VS Code settings if you want.' },
        { icon: 'Puzzle', title: 'Extensions', description: 'The Salesforce Internal DX extension gets installed automatically.' },
      ],
    },
    {
      layout: 'iconBullets',
      title: 'Step 3: Connect to a demo org',
      bullets: [
        { icon: 'Terminal', title: 'Open the terminal', description: 'Use the integrated terminal inside Cursor.' },
        { icon: 'LogIn', title: 'Authenticate', description: 'sf org login web -a my-demo-org -- authenticate via browser.' },
        { icon: 'FolderPlus', title: 'Scaffold a project', description: 'sf project generate -n my-demo -- creates an SFDX project.' },
        { icon: 'CheckCircle', title: 'You\'re connected', description: 'Agent mode can now deploy directly to this org.' },
      ],
    },
    {
      layout: 'takeaway',
      text: "That's it. You're ready. Now let's see what happens **when you type your first prompt.**",
    },
  ],
}
