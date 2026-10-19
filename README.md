# Rediet Weret Tezera — Developer Portfolio

Single-page portfolio built with **React 19 + TypeScript + Vite + Tailwind CSS**.
No backend — it's a static site, deployed with GitHub Pages.

**Live site:** https://redu-weret.github.io/portfolio/

## Run it

```bash
cd portfolio
npm install
npm run dev          # http://localhost:5175
npm run build        # typecheck + production build in dist/
npm run deploy       # build + publish dist/ to GitHub Pages
```

## Deploying (keep the site updated)

After editing content, publish the change with one command:

```bash
npm run deploy
```

(First time only: on GitHub → repo **Settings → Pages → Source: Deploy from a
branch → gh-pages branch / root**.)

## Edit your content — one file

Everything you may want to change lives in **[src/data.ts](src/data.ts)**:

| What | Where in the file |
|---|---|
| Name, role, hero intro | top constants |
| **Email, GitHub, LinkedIn, CV link** | `links` |
| About paragraphs & quick facts | `about` |
| Skills (5 categories) | `skills` |
| Project cards + GitHub links | `otherProjects` |
| Experience / education timeline | `timeline` |
| Certificates | `certificates` |
| Availability line | `availability` |

### Left for you to fill (not invented anywhere)

- `links.cv` — drop `cv.pdf` into `public/` and set `links.cv` to `/portfolio/cv.pdf`.
- The "5 Million Ethiopian Coders" certificate year (`// TODO-YOU`).

### Avatar

A "RW" initials tile is used by default. To use a photo instead, put
`photo.jpg` in `public/` and edit the `Avatar` component in
`src/components/ProfileSections.tsx`.
