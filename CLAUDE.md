# bronnerapp.com — Personal Website

## Project Overview
Personal website for George Bronner, hosted at bronnerapp.com. Minimal/clean aesthetic with a subdued color scheme. Public repo at github.com/GeorgeBronner.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Oracle Cloud server, behind a reverse proxy
- **Deployment**: SSH to Oracle server, served via reverse proxy

## Site Structure
- **bronnerapp.com** — Main personal site
  - Short personal statement
  - Links to resume (PDF, no personal info)
  - Links to projects/apps
- **golf.bronnerapp.com** — Golf Mapper app
- **cfb2.bronnerapp.com** — College Football Tracker app

## Design
- Minimal and clean
- Subdued color palette (to be iterated on)
- No logo yet

## Sensitive / Local-Only Info
Connection details, server paths, and deployment config live in `CLAUDE.local.md` (gitignored — never commit this file).

## Development
```bash
npm run dev       # local dev server
npm run build     # production build
npm run start     # run production build locally
```

## Deployment
See `CLAUDE.local.md` for server connection and deployment steps.
