# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and engineers at startups and FAANG-adjacent companies evaluating Adhiraj Chanana as a candidate. They typically arrive from a LinkedIn link, often on a phone, and skim for 30–60 seconds. In that window they need to identify who he is, see his strongest projects, and find a way to contact him. This is not a leisurely-browse audience — every section must justify itself within a fast, low-effort skim.

## Product Purpose

A personal portfolio site for Adhiraj Chanana, a CS student at Michigan State University (graduating Fall 2027) with full-stack, AI/LLM, and DevOps experience. Its job is to convert a brief recruiter skim into a callback: establish credibility fast, surface the strongest evidence of ability, and make contact frictionless.

## Positioning

[Inferred from evidence on hand — confirm or correct.] Most CS-student portfolios show coursework or isolated demos. This one is backed by shipped, live products (not just repos) alongside quantified production and research experience: an SOA platform serving 5,000+ users, an LLM pipeline hitting 94% field accuracy, and ML research work with measurable performance gains. The claim a generic student portfolio can't make: real users, real metrics, across research, enterprise, and independently shipped AI products.

## Operating Context

- Primary discovery path: a LinkedIn link opened on a phone.
- Secondary: direct link shared during an application or referral, viewed on desktop.
- Visitors are pre-qualifying a candidate, not reading for pleasure — design and copy should optimize for skimmability over completeness.

## Capabilities and Constraints

- Built with Create React App (react-scripts 5), plain per-component CSS (no Tailwind/CSS modules), framer-motion + gsap + lenis already in use for motion.
- Sections currently implemented: hero/home, experience, projects. A Skills component exists in source but is commented out of App.js (not rendered).
- Contact/social: GitHub, LinkedIn, and LeetCode links exist in the navbar; there is no dedicated contact section or email/resume link on the page currently.
- Constraint (explicit, from the owner): do not change factual content — roles, dates, company names, project details — without asking first. Copy may be tightened for clarity/concision, but any wording change must be shown as before/after for approval.
- Constraint (explicit): the site must stay fast and accessible through the redesign, not just visually distinctive.

## Brand Commitments

- Name: Adhiraj Chanana.
- Existing external identity to preserve: github.com/adhiraj-chanana, linkedin.com/in/adhiraj-chanana, LeetCode profile.
- No other binding visual or voice identity has been set; current dark theme, purple/blue/pink gradients, and emoji badges are incumbent implementation choices, not confirmed brand commitments — the owner has explicitly asked to move away from purple gradients, nested cards, and generic icon tiles.

## Evidence on Hand

- Work experience (6 roles, with dates/locations/quantified bullets): Application Developer Intern @ Delta Dental (current), AI Intern @ Volza, Web Development Intern @ MSU Student Life & Engagement, Resident Assistant @ MSU (current), Undergraduate Learning Assistant CSE231 @ MSU, Professorial Research Assistant @ MSU College of Engineering.
- Projects (4, each with a live demo or repo link and a screenshot asset): AI Webhook Processor, PitchRank, Repright (computer vision), SnippetShare (VS Code marketplace extension).
- Project screenshots exist at src/assets/ (webhook, pitchrank, repright, snippet).
- No testimonials, press, or case studies exist — none should be fabricated.

## Product Principles

1. Skimmability over completeness — a recruiter should get "who, what, contact" in under a minute, on a phone.
2. Evidence over adjectives — lead with shipped products, live demos, and quantified impact rather than descriptive self-praise.
3. Distinctive, not decorative — visual craft should differentiate the candidate, not distract from the content; explicitly avoid purple gradients, nested cards, and generic icon tiles.
4. Fast and accessible are non-negotiable alongside visual polish, not traded off against it.
5. Factual content (roles, dates, project details) is fixed; only presentation and copy tightness are in scope for this pass, and wording changes are confirmed before/after.

## Accessibility & Inclusion

No user-specific accessibility requirement was stated beyond the owner's explicit goal that the site stay accessible through this redesign (motion, contrast, semantics, and keyboard/touch use should meet standard web accessibility practice). Respect prefers-reduced-motion given the current use of canvas/motion-heavy components (Threads, SplashCursor, DecryptedText, ScrollStack).
