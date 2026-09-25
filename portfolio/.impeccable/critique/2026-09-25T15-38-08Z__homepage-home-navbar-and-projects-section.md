---
target: homepage (Home + Navbar) and Projects section
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 2
target_identity: "file:/Users/adhirajchanana/portfolio-final/final-portfolio/portfolio/homepage (Home + Navbar) and Projects section"
timestamp: 2026-09-25T15-38-08Z
slug: homepage-home-navbar-and-projects-section
closed: true
---
Method: dual-agent (A: acaae04fceeb8f42b · B: a13d6f2f53e8af9f3)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | No active-section indicator in nav despite anchor-based navigation |
| 2 | Match System / Real World | 3 | Emoji-as-category icon is a weak, ambiguous metaphor |
| 3 | User Control and Freedom | 3 | External links correctly use target="_blank" rel="noopener noreferrer" throughout |
| 4 | Consistency and Standards | 2 | Projects.jsx is 100% inline styles, disconnected spacing/radius scale |
| 5 | Error Prevention | 2 | "Copy Link" silently no-ops if clipboard API unsupported |
| 6 | Recognition Rather Than Recall | 3 | Project cards are self-contained |
| 7 | Flexibility and Efficiency | n/a | Not applicable to a portfolio |
| 8 | Aesthetic and Minimalist Design | 1 | Hero runs 3 concurrent decorative animations; Projects stacks nested cards + emoji badge + gradient CTA + scramble text |
| 9 | Error Recovery | 3 | Minimal error surface; "Copy Link" silent-failure is the one gap |
| 10 | Help and Documentation | n/a | Not applicable to a portfolio |

Total: 19/32 (59%) — Acceptable band, trending toward Poor.

## Design Specificity Verdict

Design review: could be swapped onto nearly any AI-related candidate's site unchanged (gradient CTA, emoji badges, nested card-in-card, "My Projects" heading). Content is differentiated, wrapper is not.

Deterministic scan: 7 findings in src/ — 5x overused-font (Inter), 1x side-tab (Experience.css:19), 1x gradient-text (Home.css:31). Coverage gap: detector is CSS-only, missed everything in Projects.jsx (inline styles) — those were caught by design review + manual grep instead. No false positives between assessments. One retraction: design review's claim that 'Poppins' isn't loaded was wrong — Assessment B confirmed it's loaded via Google Fonts link in public/index.html.

## Overall Impression

Bones are good — real shipped products, quantified experience, sensible link hygiene. Visual wrapper fights the content: three AI-template tells (gradient CTA, emoji badges, nested cards) sit exactly in Projects.jsx, the credibility payoff of the skim.

## What's Working

1. Consistent external-link hygiene (target="_blank" rel="noopener noreferrer" everywhere)
2. Real accessibility attention on Projects CTAs (aria-labels, focus/blur outlines, aria-hidden on decorative SVG)
3. Content itself is differentiated — fix is scoped to presentation, not content

## Priority Issues

[P0] Nested card-in-card + gradient CTA + emoji badges in Projects.jsx
Why: sits in the section carrying the strongest evidence; reads as generic-AI-template exactly where credibility should peak.
Fix: flatten card (drop -3rem overlap panel, Projects.jsx:93-101), replace emoji badges (lines 14/22/30/38) with plain text label, replace gradient CTA (line 133) with solid/bordered button.
Command: /impeccable distill

[P0] No contact/resume affordance; icon-only nav links have no accessible names
Why: PRODUCT.md states the job is to "make contact frictionless" — no contact path exists; Navbar.jsx:12-14 icons have zero aria-label (confirmed by grep).
Fix: add aria-label to each icon link; add visible Resume/Contact nav entry.
Command: /impeccable clarify

[P1] Hero has no credibility signal or primary CTA
Why: highest-value viewport carries zero quantified evidence, no fixed subhead, no CTA.
Fix: fixed one-line credibility subhead under the name, visible primary CTA near the fold.
Command: /impeccable clarify

[P1] No component respects prefers-reduced-motion
Why: only reduced-motion query in the codebase guards dead CRA boilerplate (.App-logo-spin, never rendered). Threads/TextType/DecryptedText run unconditionally. Explicit accessibility constraint from the owner is currently unmet.
Fix: gate each motion component behind a reduced-motion check.
Command: /impeccable harden

[P2] Project descriptions scramble into legibility on scroll, delaying reading
Why: DecryptedText animateOn="view" (Projects.jsx:107-114) makes value-prop text illegible for ~1+ second as it enters view.
Fix: render descriptions as static text; restrict decrypt effect to hover-only on titles if kept at all.
Command: /impeccable quieter

## Persona Red Flags

Jordan (Confused First-Timer): no persistent site identity past hero; unlabeled icon-only nav links; no scroll affordance/CTA in hero; ambiguous floating emoji badge; Copy Link gives no click confirmation.

Casey (Distracted Mobile User — primary audience): full 100vh hero delays resume-relevant content; project descriptions scramble illegibly while scrolling fast; no contact/resume link anywhere; two similarly-weighted pill CTAs risk mis-taps; 350px-tall images push evidence further down on narrow phones.

## Minor Observations

- App.css carries unused CRA boilerplate (.App-logo, @keyframes App-logo-spin), never rendered
- body background/font-family declared redundantly in both App.css and index.css
- Border-radius scale inconsistent (Projects.jsx ad hoc 2rem/1.2rem vs SpotlightCard.css 1.75rem)
- DecryptedText's default scramble charset includes symbols, renders noisy on names like "AI Webhook Processor"
- Retracted: Poppins font claimed unloaded — confirmed loaded via Google Fonts link

## Questions to Consider

- If "evidence over adjectives" is the positioning, why does the highest-value viewport spend its motion budget on a decorative shader that says nothing about the candidate?
- Projects.jsx reintroduces exactly the three patterns flagged to avoid — was it untouched by an earlier design pass?
- What would this page look like if every animation had to earn its place by making information faster to absorb, not merely present?
