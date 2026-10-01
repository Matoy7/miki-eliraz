# miki-eliraz

Website for **מיקי אלירז – משרד רואי חשבון**, built from the Figma Make export (React 19 + Vite 8 + Tailwind CSS v4).

Live: https://matoy7.github.io/miki-eliraz/

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:8443
```

## Build

```bash
pnpm build      # tsc --noEmit && vite build  →  dist/
pnpm preview    # serves dist/ at http://localhost:8443/miki-eliraz/
```

Production builds use the base path `/miki-eliraz/` (GitHub Pages project site).
Override with `BASE_PATH=/ pnpm build` (e.g. for a custom domain).

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which installs dependencies,
builds, and deploys `dist/` to GitHub Pages.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Content

Contact details live at the top of `src/App.tsx` (`CONTACT_EMAIL`, `CONTACT_PHONE`).
Images are in `public/assets/`. Fonts (Heebo, SIL OFL) are self-hosted in `src/assets/fonts/`.
