# SentinelEHR Marketing Site — Project Documentation

**Repo:** `sentinelehr-marketing` (GitHub: Davidowi2/sentinelehr-marketing)  
**Branch:** `main`  
**Deployed on:** Vercel  
**Last updated:** June 8, 2026

---

## What This Is

The SentinelEHR marketing website is a standalone React/Vite SPA that lives inside the monorepo at `artifacts/sentinel-ehr/`. It is separate from the dashboard codebase and serves as the public-facing presence for SentinelEHR — a healthcare insider risk intelligence platform currently in design partner phase.

**Target audience:** Compliance officers, privacy officers, IT directors, and CISOs at community hospitals and federally qualified health centers (FQHCs).

**Core message:** SentinelEHR monitors Epic EHR access behavioral patterns using a zero-PHI architecture — patient record content never leaves the hospital's environment.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Routing | Wouter (SPA) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animations | Framer Motion |
| Form handling | HTML5 native validation + Formspree |
| Hosting | Vercel |
| Package manager | pnpm (workspace catalog) |

---

## Project Structure

```
artifacts/sentinel-ehr/
├── public/
│   ├── sentinelehr-logo.png      # Brand logo (added June 2026)
│   ├── favicon.svg
│   ├── opengraph.jpg
│   └── robots.txt
├── src/
│   ├── App.tsx                   # Wouter routing — all routes defined here
│   ├── main.tsx
│   ├── index.css                 # Global styles + @keyframes spin
│   ├── components/
│   │   ├── CookieBanner.tsx      # Fixed bottom cookie notice (localStorage dismiss)
│   │   ├── PrivacyContent.tsx    # Privacy Policy content component
│   │   ├── TermsContent.tsx      # Terms of Service content component
│   │   └── ui/                   # shadcn/ui components
│   └── pages/
│       ├── Home.tsx              # Main landing page (all sections)
│       ├── Security.tsx          # /security — technical security page
│       ├── Architecture.tsx      # /architecture — zero-PHI architecture page
│       ├── privacy.tsx           # /privacy — uses PrivacyContent component
│       ├── terms.tsx             # /terms — uses TermsContent component
│       ├── not-found.tsx
│       ├── UseCaseHealthcareComplianceMonitoring.tsx
│       ├── UseCaseHIPAAAuditControls.tsx
│       ├── UseCaseInsiderThreatDetection.tsx
│       ├── UseCaseEHRAccessMonitoring.tsx
│       ├── UseCaseEpicClarityExtractor.tsx
│       ├── UseCaseSentinelEHRvsProtenus.tsx
│       └── UseCaseHIPAABreachNotification.tsx
├── vercel.json                   # SPA rewrites only (no build config — managed in Vercel dashboard)
├── vite.config.ts                # outDir: 'dist', read-only SQL pipeline
└── package.json                  # @workspace/sentinel-ehr, pnpm catalog deps
```

---

## All Routes

| URL | Component | Purpose |
|---|---|---|
| `/` | `Home.tsx` | Main landing page |
| `/security` | `Security.tsx` | CISO-facing technical security details |
| `/architecture` | `Architecture.tsx` | Zero-PHI architecture deep-dive |
| `/privacy` | `privacy.tsx` | Privacy Policy (11 sections) |
| `/terms` | `terms.tsx` | Terms of Service (11 sections) |
| `/use-cases/healthcare-compliance-monitoring` | `UseCaseHealthcareComplianceMonitoring.tsx` | AI search page |
| `/use-cases/HIPAA-audit-controls` | `UseCaseHIPAAAuditControls.tsx` | AI search page |
| `/use-cases/insider-threat-detection` | `UseCaseInsiderThreatDetection.tsx` | AI search page |
| `/use-cases/EHR-access-monitoring` | `UseCaseEHRAccessMonitoring.tsx` | AI search page |
| `/use-cases/Epic-Clarity-extractor` | `UseCaseEpicClarityExtractor.tsx` | AI search page |
| `/use-cases/SentinelEHR-vs-Protenus` | `UseCaseSentinelEHRvsProtenus.tsx` | AI search page |
| `/use-cases/HIPAA-breach-notification` | `UseCaseHIPAABreachNotification.tsx` | AI search page |

---

## Home.tsx — Section Inventory

The main landing page (`Home.tsx`) contains all sections as separate React components. **Do not edit any other file's content through Home.tsx** — it is the only page with inline components.

| Component | ID | Content |
|---|---|---|
| `Navbar` | — | Logo + nav links + Request Demo CTA |
| `Hero` | `#platform` | Headline, subhead, CTA buttons, hero image, floating badges |
| `TrustBar` | — | Scrolling trust items (Epic Clarity, Read-Only Access, 0 PHI Stored, Community Hospitals, 1-3 Person Teams) |
| `Problem` | `#problem` | 3 problem cards (Alert Fatigue, Slow Investigations, Sensitive Record Risk) |
| `Product` | `#intelligence` | 3 feature cards with bullet lists (Behavioral AI Detection, Prioritized Alert Queue, Investigation Workflow) |
| `HowItWorks` | `#howitworks` | 3-step process (Connect, Analyze, Review) |
| `Why` | `#compliance` | 4 cards (Zero PHI Stored, Read-Only Access, Explainable Alerts, Epic-Native) + right-side copy |
| `Testimonials` | — | Design partner phase messaging (no fake quotes) |
| `FAQ` | — | 6 accordion Q&As |
| `CTABand` | — | Full-width CTA strip |
| `DemoForm` | `#demo-section` | 2-step form: Step 1 (email + org) → Step 2 (optional survey) → Done |
| Core Roles section | — | 3 dark cards inline in `Home()` (Compliance Officer, ISO, Privacy Officer) |
| `Footer` | — | 4-column footer + copyright bar |
| `CookieBanner` | — | Fixed bottom cookie notice |

---

## Demo Form — 2-Step Flow

The demo form (`DemoForm` component in `Home.tsx`) is a two-step flow:

**Step 1** — Minimum friction:
- Business Email (required, HTML5 `type="email"`)
- Organization (required)
- Button: "Request Demo"
- Posts to Formspree: `https://formspree.io/f/xykvbwwj`
- Subject line: `New demo request: [email] from [org]`
- On success → advances to Step 2

**Step 2** — Optional survey (5 questions, all optional):
1. Biggest compliance challenge (textarea)
2. What they've tried (textarea)
3. EHR system (select: Epic, Cerner, Athenahealth, Other)
4. Employee count to monitor (number)
5. Evaluation stage (select: Researching, Evaluating, RFP, Not sure)
- Button: "Submit responses"
- Skip link: "Skip and just send my demo request →"
- Posts to same Formspree endpoint, subject: `Demo request follow-up survey: [email] from [org]`
- Survey failure is non-blocking — shows Done state regardless

**Done state:**
- Green success banner
- Link to `/security` ("most procurement teams start there")

---

## Content Architecture — Legal Pages

Legal page content is extracted into reusable components to allow future updates without touching page wrappers.

| Component | File | Used in |
|---|---|---|
| `TermsContent` | `src/components/TermsContent.tsx` | `src/pages/terms.tsx` |
| `PrivacyContent` | `src/components/PrivacyContent.tsx` | `src/pages/privacy.tsx` |

**To update legal content:** edit only the component file, not the page wrapper.

Both documents:
- Last updated: June 8, 2026
- Contact: `hello@sentinelehr.org`
- Governing law: State of Delaware (Terms)
- No HIPAA certification claims
- No Texas reference
- No gmail.com references

---

## AI Search Content Pages

7 long-form informational pages added for AI/LLM discoverability. Each page is 800–1500 words, factually accurate, and designed to be the best answer on the internet to its target question.

**Content rules enforced:**
- No unsourced percentage statistics (e.g. no "71% of breaches are insider threats" without a citation)
- No SentinelEHR performance claims in production (product is in design partner phase)
- Each page includes zero-PHI architecture framing
- Each page ends with soft CTA to `/architecture`

| Page | Target question |
|---|---|
| Healthcare Compliance Monitoring | "What is healthcare compliance monitoring?" |
| HIPAA Audit Controls | "What is HIPAA §164.312(b)?" |
| Insider Threat Detection | "How to detect insider threats in EHR?" |
| EHR Access Monitoring | "Guide to EHR access monitoring" |
| Epic Clarity Extractor | "What is an Epic Clarity extractor?" |
| SentinelEHR vs Protenus | "Protenus alternatives for community hospitals" |
| HIPAA Breach Notification | "HIPAA 60-day breach notification rule" |

---

## What We Can Claim (Verified)

These claims are defensible and appear on the marketing site:

| Claim | Evidence |
|---|---|
| Zero PHI architecture | clarity_extractor.py reviewed — only queries ACCESS_LOG, CLARITY_EMP, PAT_ENC, PATIENT (boolean flags only). No clinical content tables. |
| Multi-tenant isolation verified by 17 end-to-end security tests | 5 test suites: read isolation (6), write isolation (5), ingestion path (1), admin cross-org (5 endpoints → 403), audit/notification isolation. All passed. |
| bcrypt + JWT 8-hour expiry + rate limiting + 10-min lockout | Verified in codebase. |
| Detection engine runs end-to-end on synthetic data | 554 Critical, 248 High, 469 Medium, 514 Suppressed alerts on mock_clarity_v2 dataset. |
| Case management, audit trail, reason capture | Built and working in dashboard. |
| Self-guided sandbox with synthetic data | Real working environment available for design partners. |

## What We Do NOT Claim

| Claim | Status |
|---|---|
| SOC 2 certification | Not obtained. Listed as 12-month roadmap on Security page. |
| HIPAA certification | Explicitly disclaimed on Security page and Privacy Policy. |
| 86% alert precision | Removed. No methodology document exists for this number. |
| Production deployment accuracy | No real hospital deployments yet — design partner phase only. |

---

## Vercel Configuration

**Build config is managed in the Vercel dashboard**, not in `vercel.json`.

`artifacts/sentinel-ehr/vercel.json` contains only:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures SPA client-side routing works on direct URL navigation (e.g. visiting `/security` directly).

**Vite config:** `outDir: 'dist'` (separates build output from the `public/` static assets folder).

---

## Key Design Decisions

**Logo:** `sentinelehr-logo.png` in `public/` — replaces the original inline SVG across all pages (Home nav, Home footer, privacy.tsx, terms.tsx, Security.tsx, Architecture.tsx).

**Cookie banner:** Simple dark bar fixed to viewport bottom. Uses `localStorage` key `sentinel_cookie_dismissed`. Dismiss is permanent. No Accept/Decline split — just "Dismiss".

**No fake testimonials:** The testimonials section shows honest design partner phase messaging instead of fabricated quotes.

**No HIPAA badge:** The "HIPAA §164.312(b) Compliant" badge was removed. Replaced with "Zero PHI Storage Architecture" — a verifiable architectural claim, not a legal certification claim.

**Footer links:** Privacy Policy, Terms of Service, Security Architecture, Zero PHI Architecture in Trust & Legal column. "Log in" link in Connect column points to `https://sentinelhr.vercel.app` (to be updated to `https://app.sentinelhr.org` when domain is active).

---

## Commit History (Summarized)

| Commit | Change |
|---|---|
| `58db0db` | Replace 86% precision card with "Verified / 17 end-to-end security tests" |
| `b229241` | Pricing FAQ rewritten — variable framing, no hard numbers |
| `fccf78f` | Remove 86% precision stat from hero stats row |
| `bbab78d` | Add 7 AI search content pages |
| `30eb6c0` | Terms + Privacy rewrite with Delaware governing law |
| `0e94f68` | Fix: missing `);` after Why component (build error) |
| `737b057` | Fix: remove zod schema from JSX scope, use HTML5 validation |
| `6f7e4c8` | Split demo form into 2-step flow with optional survey |
| `6b461e1` | Add Security + Architecture pages, Login link, Security in nav |
| `802f46c` | Full copy rewrite for design partner phase |
| `3bab887` | Replace all inline SVGs with sentinelehr-logo.png |
| `def896c` | Replace cookie banner with simple dark bar |

---

## Pending / To Do

- [ ] Update "Log in" footer link from `https://sentinelhr.vercel.app` to `https://app.sentinelhr.org` when domain goes live
- [ ] Update `hello@sentinelehr.org` contact email in both legal pages when email is active
- [ ] Update "Last updated" dates in TermsContent.tsx and PrivacyContent.tsx when materially revised
- [ ] Add `<meta name="description">` tags to use-case pages (currently rendered as visible text only)
- [ ] Consider adding a sitemap.xml for AI crawlers
- [ ] SOC 2 Type 2 — listed as 12-month roadmap on Security page
