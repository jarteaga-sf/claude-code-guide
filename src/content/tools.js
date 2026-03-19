export const claudeCode = {
  id: 'claude-code',
  label: 'The Tools',
  title: 'Claude Code',
  subtitle: 'The autonomous builder. Describe the goal, it handles the steps.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Unlike tools that suggest one line at a time, Claude Code is an **autonomous agent** -- you describe a goal and it figures out the steps on its own. It reads your project files, writes code, runs commands, and iterates until the task is done.",
          "The best mental model: **a capable contractor who works fast and needs clear direction.** Tell it what you want and how you'll know it worked. It handles the how.",
        ],
        terminal: {
          title: 'Claude Code in Action',
          steps: [
            { type: 'command', content: 'cd ~/projects/demo-integration && claude' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Scanning project: 24 files, React + Node, no tests yet...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'This is a Salesforce integration with a React frontend. What would you like to work on?' },
            { type: 'output', content: '' },
            { type: 'output', content: '> add input validation to the contact form and write tests for it' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Reading ContactForm.jsx... Reading existing test patterns...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: 'Added validation for 5 fields. Created ContactForm.test.js with 8 test cases. All passing.' },
          ],
        },
        takeaway: "Claude Code works best when you **describe the goal and the success condition**, not the step-by-step approach.",
      },
    },
    {
      label: 'Getting Started',
      content: {
        prose: [
          "**Install with one command.** Claude Code runs in your terminal. After installation, run `claude` in any project folder and it reads the project to get oriented.",
          "**The most important setup step** is creating a `CLAUDE.md` file in your project root. Claude reads this at the start of every session -- it tells Claude what the project does, how to run it, and any rules to follow. Run `/init` inside Claude and it generates a solid starting version.",
          "Keep CLAUDE.md **under 200 lines**. More instructions don't mean better results. Cover the what, the how-to-run, and the key constraints.",
        ],
        terminal: {
          title: 'Setup',
          steps: [
            { type: 'command', content: 'npm install -g @anthropic-ai/claude-code' },
            { type: 'output', content: 'claude-code installed successfully' },
            { type: 'output', content: '' },
            { type: 'command', content: 'cd ~/projects/demo-app && claude' },
            { type: 'output', content: 'Logged in as jane@salesforce.com' },
            { type: 'output', content: '' },
            { type: 'command', content: '/init' },
            { type: 'claude-thinking', content: 'Reading project structure...' },
            { type: 'claude-response', content: 'Generated CLAUDE.md:' },
            { type: 'output', content: '' },
            { type: 'file-change', content: '+ # Demo App\n+ \n+ ## What This Is\n+ A Salesforce integration demo with React frontend\n+ \n+ ## How to Run\n+ - `npm run dev` -- start local server\n+ - `npm test` -- run tests\n+ \n+ ## Conventions\n+ - Components use PascalCase\n+ - API calls go in src/api/' },
          ],
          expandable: true,
        },
        deepCut: {
          title: 'Three levels of instructions',
          content: "**CLAUDE.md** is for project-level context (what is this, how does it run). **~/.claude/CLAUDE.md** is for personal preferences that apply across all projects. **Skills** are reference files Claude loads only when relevant. Start with project CLAUDE.md. Add the others if you find yourself repeating the same context across sessions."
        },
        takeaway: "Install, run `/init` to generate CLAUDE.md, keep it short. That's the whole setup.",
      },
    },
    {
      label: 'Workflows',
      content: {
        habitCards: [
          { icon: 'GitBranch', title: 'Plan First', description: 'Use /plan before any multi-file change. See the full approach before anything gets modified.' },
          { icon: 'Shield', title: 'Manage Permissions', description: 'Use --sandbox to pre-approve safe ops. The real safety net is checkpoints -- Esc+Esc rolls back.' },
          { icon: 'Target', title: 'Stay Focused', description: 'One task per session. Use /compact when memory fills up, /clear for a fresh start.' },
          { icon: 'Crosshair', title: 'Prompt with Precision', description: '"Make it faster" is a question. "Get page load under 1 second" is a task.' },
        ],
        terminal: {
          title: 'Plan Mode in Action',
          steps: [
            { type: 'output', content: '> /plan' },
            { type: 'output', content: '[Plan Mode -- read only, no changes]' },
            { type: 'output', content: '' },
            { type: 'output', content: '> add Salesforce OAuth to this app' },
            { type: 'output', content: '' },
            { type: 'claude-thinking', content: 'Reading auth patterns, existing routes, config files...' },
            { type: 'output', content: '' },
            { type: 'claude-response', content: "Here's my plan:" },
            { type: 'output', content: '1. Add OAuth config to .env.example' },
            { type: 'output', content: '2. Create src/auth/salesforce.js (new)' },
            { type: 'output', content: '3. Update server.js to add /auth and /callback routes' },
            { type: 'output', content: '4. Update 2 existing pages to use auth state' },
            { type: 'output', content: '' },
            { type: 'output', content: 'New files: 1 | Changed files: 3 | Shall I proceed?' },
          ],
        },
        takeaway: "Plan first. Keep sessions focused on one task. Read what changed before approving. **That's 80% of being good at this.**",
      },
    },
  ],
}

export const cursor = {
  id: 'cursor',
  label: 'The Tools',
  title: 'Cursor',
  subtitle: 'The Vessel -- your editor, supercharged with AI.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Think of it this way: **Cursor is the Vessel, Claude is the Mind.** Cursor is built on VS Code -- same look, same extensions -- but with AI woven into every editing action. You stay in control of the flow; the AI accelerates each step.",
          "Four features cover almost everything you'll need.",
        ],
        features: [
          { shortcut: 'Tab', name: 'Autocomplete', description: 'Suggests the next line or block based on your context. Tab to accept, keep typing to ignore.' },
          { shortcut: 'Cmd+K', name: 'Inline Edit', description: 'Select code, describe the change in plain language, review the diff in place.' },
          { shortcut: 'Cmd+L', name: 'Chat Panel', description: 'Ask questions about your codebase with @codebase context. Use for understanding, not editing.' },
          { shortcut: 'Cmd+Shift+I', name: 'Composer', description: 'Multi-file changes from a single prompt with visual diffs before applying.' },
        ],
        takeaway: "Cursor is the right choice when you're **already in a file and want to stay there**.",
      },
    },
    {
      label: 'Workflows & Shortcuts',
      content: {
        prose: [
          "**Tab** gets better with context -- add a comment before a new function to steer suggestions.",
          "**Cmd+K** is highest-leverage for editing. Select code, describe the change, review the inline diff.",
          "**Composer** bridges Cursor and Claude Code territory -- multi-file changes with visual diffs before applying.",
        ],
        stepFlow: {
          steps: [
            'Ask: Use Cmd+L to understand the codebase and plan your approach',
            'Plan: Describe the full scope of changes to Composer before starting',
            'Agent: Let Composer execute multi-file changes with visual diffs',
          ],
        },
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
        takeaway: "Cmd+K for edits. Composer for multi-file changes. Chat for questions. **Tab for everything in between.**",
      },
    },
    {
      label: 'Supercharging POCs',
      content: {
        prose: [
          "The fastest way to build a proof of concept is to **front-load context.** Before you start prompting, give Cursor the artifacts it needs to produce great output on the first try.",
        ],
        artifactTable: [
          { category: 'Visual Assets', examples: 'Screenshots, mockups, Figma exports', how: 'Drag images into Composer for pixel-accurate output' },
          { category: 'Design Specs', examples: 'SLDS tokens, color palettes, spacing rules', how: 'Reference in .cursorrules or paste into context' },
          { category: 'Logic & Docs', examples: 'API specs, business rules, flow diagrams', how: 'Use @docs to link external documentation' },
          { category: 'Data Samples', examples: 'JSON payloads, CSV exports, SOQL results', how: 'Paste sample data so AI generates realistic code' },
          { category: 'Project Guardrails', examples: '.cursorrules, README, architecture docs', how: 'Cursor reads these automatically for every prompt' },
        ],
        takeaway: "The quality of AI output is directly proportional to the **quality of context you provide.** Front-load artifacts, get better code.",
      },
    },
  ],
}

export const saleo = {
  id: 'saleo',
  label: 'The Tools',
  title: 'Saleo',
  hideDivider: true,
  subtitle: 'Show the right data for every prospect -- without touching real records.',
  tabs: [
    {
      label: 'Overview',
      content: {
        prose: [
          "Claude Code and Cursor help you build and refine technical assets. Saleo solves a different problem: **what the customer actually sees during a demo.**",
          "Saleo is a browser extension that intercepts your Salesforce org and replaces displayed data with a customized overlay. No real records are modified. The overlay exists only in your session.",
        ],
        stepFlow: {
          steps: [
            'Open Salesforce in Chrome with the Saleo extension active',
            'Saleo intercepts the page and replaces data with your overlay',
            'Prospect sees a tailored view while the underlying org stays unchanged',
            'Switch overlays mid-demo or save templates per prospect or vertical',
          ],
        },
        takeaway: "Saleo lets you **demo the right story without rebuilding the environment.**",
      },
    },
    {
      label: 'Building Better Demos',
      content: {
        prose: [
          "The best demo workflows follow a simple pattern: prepare before, adapt during, iterate after.",
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
      },
    },
  ],
}
