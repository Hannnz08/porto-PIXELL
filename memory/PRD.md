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

## Implemented (2026-10-10, update 13)
- Decorative pixel sprites added across empty areas, all hand-drawn in brand colors only (PixelSprite component, subtle float animation, hidden on ≤1024px except the character): bolt + star in hero padding zones, terminal (Skills head), cyan planet (Projects head), lime star (Certificates head), gradcap (Education head), pixel technician character (Journey "Keep learning" aside, scaled on mobile), orange network orb (Contact big CTA corner), lime pixel heart in the footer copyright, and pixel stars replacing every 4th separator in the marquee.

## Implemented (2026-10-10, update 12 — Pixel Art Design System)
- Full 8-bit pixel reskin per user spec + references: fonts Silkscreen (display/headings/logo/marquee/nodes) + Press Start 2P (nav, buttons, tags, chips, labels) + Space Grotesk (body, unchanged). All border-radius removed globally (sharp square corners), lime ::selection.
- Custom PixelIcon component: 26 hand-drawn 16×16 SVG icons (crispEdges) replacing every lucide icon — network, router (cyan LEDs), server, shield (lime core), wrench, rocket, gradcap, target, flag, book, cpu, mail, send, github, linkedin, instagram, code, user, globe, arrows, chevrons, menu, close, expand, flip.
- Light mode ONLY: theme toggle and theme context removed; .dark token block deleted (a few inert .dark overrides remain in CSS, unreachable).
- Welcome loading bar now fills with retro steps(14) animation. Real assets (certificates, school logos) untouched.
- Verified desktop + mobile 375: no horizontal overflow, all sections cohesive, no console errors.

## Implemented (2026-10-10, update 11)
- Hero now shares the welcome screen's faint grid background (56px cells, same per-theme opacity) with a mask-image fade-out toward the marquee, unifying the welcome → homepage transition.

## Implemented (2026-10-10, update 10)
- Bug fix: mobile (≤640px) Education timeline line no longer crosses content — the pd-tl--side variant selector had higher specificity than the mobile override, pinning the line at 236px. Mobile rule now covers all variants (line at 27px through the node badges). Verified at 430px for Education + Journey.

## Implemented (2026-10-10, update 9)
- Welcome screen rebuilt to match the user's reference image exactly: faint grid background (opacity-tuned per theme), 3 top icon buttons (code / lime user / globe), rotated lime squares with cyan circles, orange dots + triangles, bottom node motifs (lime hub + cyan nodes) with "// HANN.DEV / WELCOME" and "TJKT · NETWORKING" labels, white HANN.DEV • TJKT STUDENT badge, lime loading bar with "PREPARING YOUR EXPERIENCE...".
- Enter behavior changed: Enter Portfolio button removed — visitors scroll down (wheel / touch swipe / ArrowDown / PageDown / Space / Enter / tap hint) to enter; page scroll is locked while welcome is open and position resets to top on entry. Accessible hint button "Scroll ke bawah untuk masuk" appears after the loading bar fills.

## Implemented (2026-10-10, update 8)
- Email card is now a real mailto:farhanrr08@gmail.com link.
- Contact form now forwards every message to farhanrr08@gmail.com via Emergent managed Resend (EMERGENT_EMAIL_KEY in backend/.env, from_name "HANN.DEV", reply-to owner inbox). Server-side template with full guardrail gate (_assert_safe_email), recipients/subject/body never caller-controlled, all interpolations escaped, no links in body. Messages still stored in MongoDB. Rate limit: 5 msgs/hour per IP (429 beyond). Verified: send returned 202 Accepted.

## Implemented (2026-10-10, update 7 — Premium Animation System)
- Shared motion tokens (src/motion.js): EASE cubic-bezier(0.22,1,0.36,1), duration scale, useReduced/useFinePointer hooks, MotionBar (orange bar scale-X line reveal on all section heads).
- Welcome: reduced-motion-safe (fade instead of mask), fade+vertical exit into homepage.
- Hero: damped pointer parallax on 3 decorative layers (lime back panel / portrait frame / tags; mouse-only, off on touch + reduced-motion); scroll parallax kept; masked headline reveal.
- Navbar: animated active-section pill (framer layoutId, 250ms); mobile panel quick fade-slide.
- Skills/Projects: viewport-triggered staggered reveals (no more on-load animation), smooth filter transitions; large project cards (span 7) get subtle 4° spring-damped pointer tilt, desktop only.
- Topology SVGs: connector stroke-reveal + staggered node fade-in on scroll; node hover highlights lime.
- Timelines (Journey/Education): scroll-driven line growth (scaleY) + node badge scale-in.
- Footer: slow ambient drift on the 3 geometric shapes (20–26s cycles).
- All button/card micro-interactions retimed to the shared easing; press physics preserved.
- Reduced motion: lenis disabled, parallax/tilt/drift/marquee off, reveals become opacity-only, flips instant, smooth scroll falls back to native instant.
- Fixed mobile (≤640px) Education overflow: school title moved from inline style to .pd-edu-title (21px), logo wraps to its own row, no mid-word breaks, no horizontal overflow.

## Implemented (2026-10-10, update 6)
- Added 2 real certificates (5 total): Cisco Networking Academy "Networking Basics" (21 Mei 2026, Cert ID 9035efa2-…-add78a, 1 page) and Citraweb Solusi Teknologi "Sertifikat Kompetensi PKL" (27 Juli 2026, 2 pages, flip shows Daftar Nilai page). Hero evidence card now "5 Sertifikat · MTCNA · Cisco · DTA · Citraweb".
- Real contact links wired: Instagram @0frhn.rfqi__, GitHub Hannnz08, LinkedIn farhan-rifqi-ramadhani (cards are now clickable, open in new tab). Email card stays a placeholder (no address supplied). Footer social links added (GitHub/LinkedIn/Instagram).

## Implemented (2026-10-10, update 5)
- Full-view certificate modal is now flippable too: clicking the document performs the same 3D flip to page 2 (multi-page certs), with a "Klik gambar untuk membalik" hint; prev/next buttons stay in sync; single-page MTCNA modal stays static.

## Implemented (2026-10-10, update 4)
- Flip behavior updated per user request: 2-page certificates (both DTA) show the real page-2 scan on the card's back face; 1-page MTCNA keeps the metadata back face. Modal viewer unchanged (prev/next across pages).

## Implemented (2026-10-10, update 3)
- Hero evidence card now reads "3 Sertifikat · MTCNA terbit 30 Juni 2026".
- Real school logos displayed in Education timeline cards: SD Muhammadiyah Tempuran (01), SMP Negeri 3 Mertoyudan (02), SMK Ma'arif Kota Mungkid (03) — logos kept authentic (white framed box, no recolor).

## Implemented (2026-10-10, update 2)
- Real certificates added: MTCNA (ID 2606NA9044, MikroTik, 30 Juni 2026, verify link mikrotik.com/certificates), DTA Fundamental of Associate Network Administrator - Nasional (2 pages, ID 21212087840-14431, 3 Okt 2026), DTA Intermediate Associate Network Administrator - Nasional (2 pages, ID 21212088840-4127, 4 Okt 2026). Flip cards show real scans; modal supports multi-page prev/next; metadata backs only use verified fields.
- Awaiting upload: school logo (logo SMK Ma'arif Kota Mungkid) — requested from user, will replace the generic school icon in the Education timeline.

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
