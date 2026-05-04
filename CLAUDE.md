# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
# All apps and packages
npm run dev          # start dev servers (portfolio: 3000, docs: 3001)
npm run build        # build all
npm run lint         # lint all
npm run check-types  # TypeScript type checking across all packages
npm run format       # Prettier format all TS/TSX/MD files

# Target a specific app (use turbo filter)
npx turbo dev --filter=portfolio
npx turbo build --filter=portfolio

# Scaffold a new UI component
cd packages/ui && npm run generate:component
```

## Architecture

This is a **Turborepo monorepo** with npm workspaces.

### Apps
- `apps/portfolio` — the main Next.js 16 portfolio site (port 3000)
- `apps/docs` — secondary Next.js 16 site (port 3001)

### Shared packages
- `packages/ui` (`@repo/ui`) — shared React component library consumed by both apps
- `packages/eslint-config` (`@repo/eslint-config`) — three configs: `base`, `next-js`, `react-internal`
- `packages/typescript-config` (`@repo/typescript-config`) — shared `tsconfig.json` bases

### UI package conventions
Components live under `packages/ui/src/<component>/` with three files:
- `ComponentName.tsx` — implementation (`"use client"` for interactive components)
- `ComponentName.types.ts` — exported TypeScript types
- `index.ts` — re-exports

The package exports each component individually via path exports (e.g. `@repo/ui/button`, `@repo/ui/card`), not through a barrel `index.ts`. When adding a new component, add a matching export to `packages/ui/package.json`'s `exports` field.

Button uses className-based styling with `variant`, `size`, `icons`, and `states` props mapped to CSS class names.

### Turbo task graph
`build` and `check-types` both depend on upstream (`^build`, `^check-types`), so shared packages are compiled before apps. `dev` is persistent and uncached.
