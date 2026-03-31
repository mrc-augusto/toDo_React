# ✅ RocketTasks

<p align="center">
  A sleek and modern task management experience built with React, TypeScript, and Tailwind CSS.
</p>

<p align="center">
  ⚡ Fast interactions • 🎯 Clear UX feedback • 🧩 Scalable component architecture
</p>

---

## 🚀 Overview

RocketTasks is a polished front-end project focused on clarity, responsiveness, and maintainable code.

It delivers a complete task flow with inline editing, status updates, loading feedback, and local persistence, all organized with a clean architecture that is ready to grow.

## ✨ Highlights

- 📝 Create tasks instantly
- ✏️ Edit tasks inline with cancel and confirm actions
- ✅ Toggle task completion state
- 🗑️ Remove tasks with action feedback
- 📊 Track created and completed task totals
- 💾 Persist data in localStorage
- ⏳ Display skeleton loaders and operation states
- 🧭 Navigate between app pages and component showcase

## 🛠️ Tech Stack

### Core
- React 19
- TypeScript 5
- Vite 8
- React Router 7

### UI & Styling
- Tailwind CSS v4
- class-variance-authority (CVA)
- SVG as React Components (vite-plugin-svgr)

### DX
- ESLint 9 (flat config)
- Strict TypeScript checks
- Path aliases (`@` -> `src`)

## 🧱 Architecture

The project is intentionally split into focused layers:

- `src/components`:
  Reusable UI primitives with variant-driven APIs (buttons, inputs, text, card, skeleton, etc.)
- `src/core-components`:
  Domain-composed UI blocks (task list, task item, summary, layout sections)
- `src/hooks`:
  Task logic separated by responsibility:
  - `use-tasks` for queries/read state
  - `use-task` for commands/write operations
- `src/models`:
  Task contracts, state definitions, and constants

This keeps rendering logic simple while centralizing behavior in hooks and models.

## 🎨 UX Principles Applied

- Fast visual feedback for async actions
- Smooth inline edit flow without navigation interruptions
- Predictable state transitions for each task lifecycle
- Clean and readable component APIs

## ⚙️ Getting Started

### Prerequisites
- Node.js 20+
- pnpm

### Install
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

### Preview Build
```bash
pnpm preview
```

### Lint
```bash
pnpm lint
```

## 📁 Scripts

- `dev`: starts Vite in development mode
- `build`: runs TypeScript build and bundles with Vite
- `preview`: serves the production build locally
- `lint`: runs ESLint checks

## 🔮 Next Evolutions

- 🧪 Add tests with Vitest + React Testing Library
- ♿ Improve keyboard navigation and accessibility audits
- ☁️ Add backend sync (REST/GraphQL)
- 🔄 Introduce optimistic updates with rollback
- 🌍 Add i18n support
- 🧰 Add CI pipeline for lint, test, and build

---

## 👨‍💻 Author

Built by Maurício Augusto.
