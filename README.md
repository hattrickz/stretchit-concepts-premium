# Stretch-IT Concepts — Premium Site Rebuild

A ground-up redesign of [stretchitconcepts.com](https://stretchitconcepts.com), rebuilt in React, TypeScript, Tailwind CSS, and Framer Motion. Same content and structure as the original WordPress site, redesigned to a premium editorial standard with real motion design instead of a template look.

## Design system

- **Palette** — deep indigo (`#242F8F`), near-black navy (`#0E1330`), warm gold accent (`#D9A441`), cool off-white (`#F5F6F8`)
- **Type** — `Fraunces` for headlines, `Inter` for body copy, `Space Grotesk` for nav/labels/eyebrows
- **Signature motif** — the "Stretch Rule," a thin accent line that elongates into view on scroll and nav-hover, used as the site's recurring structural device
- Tokens live in `tailwind.config.js`; fonts are loaded via Google Fonts in `index.html`

## Tech stack

| | |
|---|---|
| Framework | React 19 + TypeScript, via Vite |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| Routing | React Router v6 |
| Icons | lucide-react (UI), react-icons/fa6 (social brand icons) |

## Project structure
src/
assets/
services/ # hero images for individual service pages
logo.png # brand lockup
logo-mark.png # cropped icon mark (used for favicon)
components/ # shared building blocks (Nav, Footer, Layout, etc.)
sections/ # page sections composed from components (Hero, FAQ, etc.)
pages/ # route-level pages (Home, About, Contact, ServiceDetail, JobCirculation)
lib/
data.ts # all site copy — services, FAQs, stats, contact info
serviceImages.ts # maps each service slug to its hero image

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/services/:slug` | Service detail (Recruitment Services, Outsourcing, Human Capital Development, HR Management Consultancy, Talent Management, Performance Management) |
| `/job-circulation` | Careers / job circulation (placeholder page) |

## Adding a new service image

Drop the file into `src/assets/services/`, then register it in `src/lib/serviceImages.ts`:

```ts
import newServiceHero from "../assets/services/new-service.jpg";

export const serviceHeroImages: Record<string, string> = {
  // ...existing entries
  "new-service-slug": newServiceHero,
};
```

The `ServiceDetail` page automatically uses the registered image instead of the dashed placeholder box once it's added.

## Editing content

All copy — service descriptions, checklists, FAQs, contact details, stats — lives in `src/lib/data.ts`. No content is hardcoded into components; edit that one file to update text across the site.

## Getting started

```bash
npm install
npm run dev       # starts the dev server at http://localhost:5173
```

## Build

```bash
npm run build      # type-checks with tsc, then builds to dist/
npm run preview    # serve the production build locally
```

`dist/` is a generated build artifact and is not committed — it's excluded via `.gitignore` and rebuilt fresh on every deploy.

## Deployment

Deployed via [Vercel](https://vercel.com), connected directly to this repository. Every push to `main` triggers an automatic build and deploy.

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## Notes

- Built with the experimental `rolldown-vite` toolchain (Vite 8). If the dev server throws parser errors on otherwise-valid JSX, prefer simple, explicit component structures over destructured `.map()` patterns, or pin back to a stable Vite release (`npm install vite@^6`) if issues persist.
