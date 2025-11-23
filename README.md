# Project Artemis UI Library & Storybook Showcase

Welcome to **Project Artemis UI Library** — a modular, scalable component system built inside a **pnpm monorepo** and showcased using **Storybook 10 + Vite**. This repository is designed both for:

* ✔ Developers who want to **use the UI components** in their apps
* ✔ Contributors who want to **improve, extend, or maintain** the UI library
* ✔ Teams who need a clean **design system + documentation site** powered by Storybook

This README will guide you through:

* 🔹 Monorepo structure
* 🔹 Tech stack & design choices
* 🔹 How to install & use the UI library in your own projects
* 🔹 How to clone and contribute
* 🔹 How to run Storybook showcase locally
* 🔹 Coding conventions & best practices

---

# 📦 Monorepo Structure

```
Project-Artemis/
│
├── packages/
│   ├── ui/                       # The core UI component library
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── apps/
│       └── storybook_showcase/   # Storybook website for UI components
│           ├── stories/          # Showcase & component examples
│           ├── .storybook/       # Storybook configuration
│           ├── vite.config.ts
│           └── tsconfig.app.json
│
├── tsconfig.json                 # Root TypeScript config
├── pnpm-workspace.yaml           # pnpm workspace definition
└── README.md
```

The monorepo ensures clean separation between **UI library** and its **Storybook documentation site**.

---

# ⚙️ Tech Stack

### **Why these technologies?**

| Technology                | Reason                                                         |
| ------------------------- | -------------------------------------------------------------- |
| **pnpm**                  | Fast installs, disk deduplication, isolated workspace packages |
| **Monorepo**              | Centralized shared UI code, maintainable structure             |
| **React + TypeScript**    | Industry standard for modern component libraries               |
| **Vite**                  | Lightning-fast dev server & bundling for UI components         |
| **Storybook 10**          | Professional UI documentation + interactive component testing  |
| **Vitest**                | Unified testing for components and stories                     |
| **Playwright (optional)** | Browser-level testing for components                           |

This stack provides:

* Developer ergonomics
* Strong build performance
* A scalable design system
* Easy integration into any React app

---

# 📚 Using the UI Library

If you only want to **use the UI components** (not contribute), follow these steps.

## 1. Install the package

If the UI library is published to npm:

```
npm install @project-artemis/ui
```

If you install directly from GitHub:

```
npm install git+https://github.com/your-org/project-artemis.git#packages/ui
```

Or if using pnpm inside the monorepo:

```
pnpm add @project-artemis/ui -w
```

## 2. Import components

```tsx
import { Button } from "@project-artemis/ui";

export default function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

## 3. Styles

If the UI library uses CSS modules or Tailwind, ensure your host app includes the required PostCSS/Tailwind setup.

---

# 🤝 Contributing

Follow these steps if you want to **contribute**, **add components**, or **improve documentation**.

## 1. Clone the repo

```
git clone https://github.com/your-org/project-artemis.git
cd project-artemis
```

## 2. Install dependencies

```
pnpm install
```

## 3. Build the UI library

```
pnpm --filter ui build
```

## 4. Run Storybook Showcase

```
pnpm --filter storybook_showcase dev
```

Storybook will start at:

```
http://localhost:6006
```

## 5. Run tests

```
pnpm --filter ui test
```

For Storybook + Vitest integration:

```
pnpm --filter storybook_showcase test
```

---

# 🧩 Component Development Guidelines

### **1. Folder structure for each component**

```
Button/
│── Button.tsx
│── Button.stories.tsx
│── Button.test.ts
│── Button.types.ts
└── index.ts
```

### **2. Component design rules**

* Use **TypeScript** for all component props
* Keep components **small, isolated, and reusable**
* Never import from Storybook inside the UI library
* Use `index.ts` to re-export cleanly

### **3. Naming conventions**

* Components: `PascalCase`
* Files: match the component name
* Props interface: `ButtonProps`
* Avoid default exports

---

# 📘 Storybook Guidelines

Storybook lives in:

```
packages/apps/storybook_showcase
```

### Story paths

All component stories should live under:

```
stories/<component>/<Component>.stories.tsx
```

### Import UI library components into stories

```tsx
import { Button } from "@ui/Button";
```

### Autodocs

Storybook automatically generates documentation using **tags: ['autodocs']**.

---

# 🚀 How to Build & Publish the UI Library

## 1. Build

```
pnpm --filter ui build
```

## 2. Publish

If using npm:

```
pcd packages/ui
npm publish --access public
```

Or use GitHub Packages / private registry.

---

# 🧹 Recommended Git Ignore Rules

```
node_modules/
dist/
storybook-static/
.pnpm-store/
.vite/
sb-cache/
.vitest/
coverage/
```

---

# 💡 Future Improvements

* Add theming system (light/dark)
* Automated docs generation
* Visual regression tests (Chromatic)
* Component tokens (design tokens)
* Publish as ESM/CJS dual bundles

---

# 📫 Contact / Support

Open an issue or create a discussion on the GitHub repository.

Thanks for contributing to **Project Artemis UI Library**!
