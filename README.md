# Frontend Engineering Portfolio

A Turborepo monorepo containing a portfolio site and a shared design system component library.

## Apps

| App | Port | Description |
|---|---|---|
| `apps/portfolio` | 3000 | Main Next.js 16 portfolio site |
| `apps/docs` | 3001 | Secondary Next.js 16 site |
| `apps/storybook` | 6006 | Storybook component explorer |

## Packages

| Package | Description |
|---|---|
| `@repo/ui` | Shared React component library (CVA + Tailwind v4) |
| `@repo/eslint-config` | Shared ESLint configs (`base`, `next-js`, `react-internal`) |
| `@repo/typescript-config` | Shared `tsconfig.json` bases |

## Getting started

```sh
npm install
npm run dev        # starts portfolio (:3000), docs (:3001)
```

To run Storybook:

```sh
cd apps/storybook && npm run dev   # http://localhost:6006
```

## Commands

```sh
npm run dev          # start all dev servers
npm run build        # build all apps and packages
npm run lint         # lint all
npm run check-types  # TypeScript type check across all packages
npm run format       # Prettier format all TS/TSX/MD files
```

Target a specific app with Turbo's `--filter` flag:

```sh
npx turbo dev --filter=portfolio
npx turbo build --filter=portfolio
```

## `@repo/ui` component library

Components live under `packages/ui/src/<component>/` with two files:

- `ComponentName.tsx` — implementation and exported types
- `index.ts` — re-exports

The package uses named path exports (e.g. `@repo/ui/button`, `@repo/ui/card`). When adding a new component, register it in `packages/ui/package.json`'s `exports` field.

### Scaffold a new component

```sh
cd packages/ui && npm run generate:component
```

### Button

```tsx
import { Button } from "@repo/ui/button";

// Variants: primary | secondary | tertiary | link | linkgray | destructive
// Sizes:    medium | large | xlarge | 2xlarge

<Button variant="primary" size="large">Save</Button>
<Button variant="secondary" leftIcon={<PlusIcon />}>Add item</Button>

// Icon-only — aria-label is required at the type level
<Button leftIcon={<XIcon />} aria-label="Close" />

// Native button props pass through (disabled, type, ref, onClick, …)
<Button variant="destructive" disabled>Delete</Button>
```

### `cn` utility

```ts
import { cn } from "@repo/ui/utils";

cn("px-4 py-2", isActive && "bg-indigo-700")
```

## Stack

- **Framework** — Next.js 16, React 19
- **Styling** — Tailwind CSS v4
- **Variants** — class-variance-authority (CVA)
- **Class merging** — tailwind-merge
- **Monorepo** — Turborepo + npm workspaces
- **Language** — TypeScript 5.9
- **Component explorer** — Storybook 8 (React + Vite)
