# pupuru asia — Redesign Proposal

Static single-page homepage concept for pupuru asia.

## Files

| File | Description |
|------|-------------|
| `index.html` | Full single-page HTML structure |
| `styles.css` | All styles (CSS variables, responsive, animations) |
| `script.js` | Sticky header, mobile menu, scroll animations, form validation |

## To View

Open `index.html` directly in a browser — no build step required.

## Placeholder Checklist (items needing client assets)

Search for `<!-- PLACEHOLDER` in `index.html` to find every substitution point:

- [ ] **Logo** — SVG or PNG logo in `header .logo`
- [ ] **Hero background image** — high-res Asian cityscape or network/connectivity photo
- [ ] **Client logos** (trust bar) — grayscale PNGs of actual customer logos
- [ ] **Case study images** — 600×400px photos per industry (manufacturing, retail, corporate)
- [ ] **Asia coverage map** — illustrated or Google Maps embed
- [ ] **Company details** — official company name, address, founding date
- [ ] **Contact info** — phone number, email address
- [ ] **SNS links** — LINE official account URL, LinkedIn URL
- [ ] **Form backend** — connect to Formspree, backend API, or mail handler

## Sections

1. **Hero** — headline, subtext, stats (15 countries / 500+ clients / 24h support), dual CTA
2. **Trust bar** — client logo strip
3. **Services** — 通信ソリューション + VRソリューション cards
4. **Strengths** — 3 differentiators (Asia roots / one-stop / multilingual)
5. **Use Cases** — 3 industry case cards with result metrics
6. **Company** — overview text + Asia coverage map
7. **Contact** — form + direct contact info sidebar
8. **Footer** — nav links + copyright

## Design Decisions

- **Color palette**: Deep navy `#0A0F1E` / Electric blue `#0057FF` / Cyan accent `#00C6FF`
- **Typography**: Noto Sans JP (Japanese) + Inter (English/numbers)
- **Animation**: Intersection Observer fade-up on scroll (no library dependency)
- **Mobile**: Hamburger nav, single-column layouts, full responsive
- **No dependencies**: Pure HTML/CSS/JS — no framework, no bundler
