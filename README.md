# Flowmatic

Marketing site for **Flowmatic** — "Automate your busywork. No code required."
Built with Next.js (App Router), React 19, Tailwind CSS v4, and shadcn/ui (Base UI style).

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, RSC) |
| UI library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Components | [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, Base UI primitives) |
| Icons | [Lucide](https://lucide.dev), [Phosphor Icons](https://phosphoricons.com), [react-icons](https://react-icons.github.io/react-icons/) |
| Animation | [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) smooth scroll |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) (light/dark) |
| Language | TypeScript |
| Package manager | [pnpm](https://pnpm.io) `11.16.0` |

> **Note:** This project pins `next@16.3.1`, which is newer than the version most tooling/training data assumes. Some APIs and conventions differ from "classic" Next.js — see [AGENTS.md](./AGENTS.md) before making framework-level changes, and check `node_modules/next/dist/docs/` for the APIs actually in use.

## Getting Started

### Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/installation) (this repo uses the pnpm lockfile — don't use npm/yarn)

### Install & run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page hot-reloads as you edit files under `app/`.

### Other scripts

```bash
pnpm build   # production build
pnpm start   # run the production build locally
pnpm lint    # run ESLint
```

## Project Structure

```text
app/                    App Router routes
├── layout.tsx           Root layout, fonts, theme provider, header
├── page.tsx             Home page
├── globals.css          Tailwind + design tokens
├── not-found.tsx        404 page
├── meet-the-team/       /meet-the-team route
└── privacy-policy/      /privacy-policy route

components/             Page sections & shared components
├── ui/                  shadcn/ui primitives (button, card, accordion, ...)
└── icons/               Custom SVG icon components

hooks/                  Shared React hooks (e.g. use-scroll)
lib/                    Shared utilities (e.g. cn() helper)
public/                 Static assets (images, favicon)
```

## Working with Components

This project uses **shadcn/ui** (`base-nova` style, built on Base UI, `neutral` base color, Lucide icons). Config lives in [components.json](./components.json).

To add a new component:

```bash
pnpm dlx shadcn@latest add <component>
```

Path aliases (see [tsconfig.json](./tsconfig.json)):

| Alias | Path |
| --- | --- |
| `@/components` | `components/` |
| `@/components/ui` | `components/ui/` |
| `@/lib` | `lib/` |
| `@/hooks` | `hooks/` |

## Conventions

- **Styling:** Tailwind utility classes; shared class merging via `cn()` in [lib/utils.ts](./lib/utils.ts).
- **Theming:** Handled by `next-themes` via [components/theme-provider.tsx](./components/theme-provider.tsx); toggle in [components/mode-toggle.tsx](./components/mode-toggle.tsx).
- **Icons:** Prefer Lucide/Phosphor for standard icons; custom brand icons live in `components/icons/`.
- **Linting:** Run `pnpm lint` before opening a PR.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
