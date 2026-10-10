# HANN.DEV Portfolio — PRD

## Original problem statement
Create a dark-mode variant for all existing HANN.DEV portfolio pages using the provided DESIGN.md and reference designs. Preserve the existing layouts, content, component structure, and exact brand colors. Do not modify the original light-mode design. Do not invent certificates, project screenshots, personal details, or credentials. Maintain the Neo-Brutalist visual style and create consistent desktop and mobile layouts.

User choices: theme toggle in the navbar; always starts in light mode; all pages converted; both themes available.

## Product
Personal portfolio for HANN.DEV — TJKT student (Networking · Linux · Security), SMK Ma'arif Kota Mungkid. Neo-Brutalist design system: Archivo Black display + Space Grotesk body, 3px borders, hard offset shadows, brand accents Lime #E2F900 / Cyan #00E5F0 / Orange #FF5700 (unchanged in both themes).

## User personas
- Portfolio owner (student) showcasing verified lab work and education
- Visitors: teachers, internship (PKL) recruiters, collaborators

## Architecture
- Frontend: React (CRA/craco) single-page app + case-study routes (`/projects/:slug`)
- Theme: React context toggling `.dark` on `<html>`; CSS custom properties drive every surface/border/shadow; accents constant. Always starts light (no persistence, per user choice)
- Motion: framer-motion (masked line-by-line hero reveal, scroll reveals, certificate flip) + lenis smooth scrolling + CSS editorial marquee; reduced-motion respected
- Backend: FastAPI + MongoDB; `POST /api/contact` stores messages; `/api/status` + `/api/` retained

## Implemented (2026-10-10)
- Welcome overlay (masked reveal, HANN.DEV • TJKT STUDENT badge, Enter Portfolio button)
- Hero (Building Networks. Solving Problems. + evidence strip: MTCNA cert, lab docs, education; FIG.01 portrait placeholder with parallax)
- Editorial marquee (Networking · Linux · Security · …)
- About (01), Skills (02, working category filters, status legend), Projects (03, 4 real lab projects + topology SVG placeholders, filters), Certificates (04, MTCNA flip card + full-view modal with prev/next), Learning Journey (05, 5-stage timeline), Contact (06, channel cards + working form → MongoDB + toast), Education (07, school timeline + What I learned + CTA), Footer (Thank you + back to top)
- Case study pages for all 4 projects (real data + honest "menyusul" placeholders, nothing fabricated)
- Dark mode: black bg, white text/borders/shadows, muted #858585 secondary, accents identical; footer gains white top border for separation
- Responsive: desktop 1440, tablet 768, mobile 390/375 — single column, 44px targets, no horizontal overflow
- Custom SVG favicon (lime rounded square, black H mark, orange dot)

## Verified
- curl: GET /api/ and POST /api/contact return valid responses; form submit shows success toast and clears
- Screenshots: welcome, hero, about, skills, projects, certificates (flipped), journey, education, contact, footer in light AND dark; mobile 375 + tablet 768; case study route; mobile menu

## Backlog
- P0: Replace placeholders with real assets (profile photo, network gear photo, certificate scan, real topology diagrams, email/GitHub/LinkedIn URLs)
- P1: Persist theme choice in localStorage (user explicitly chose session-only for now)
- P1: Fill case study sections (addressing, implementation, validation evidence) with real lab notes
- P2: Admin view of contact messages
- P2: Multi-page certificate support when real multi-page certs are supplied

## Test credentials
No auth in this app. See /app/memory/test_credentials.md.
