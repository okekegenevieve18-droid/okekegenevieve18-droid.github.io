# Portfolio QA Report

## Scope

Reviewed the portfolio as a technical recruiter, senior data analyst, front-end engineer, and UX/accessibility reviewer.

## Local navigation and files

| Item | Result |
|---|---|
| Skip link to `#main-content` | Pass |
| Logo/home link to `#top` | Pass |
| Work navigation | Pass |
| About navigation | Pass |
| Skills navigation | Pass |
| Credentials navigation | Pass |
| Contact navigation | Pass |
| Footer back-to-top link | Pass |
| CV download buttons | Pass; local PDF returned HTTP 200 with `application/pdf` |
| Project screenshots | Pass; all four local image assets returned HTTP 200 |

## Interactive controls

| Control | Result |
|---|---|
| Mobile menu toggle | Pass by static event-handler and ARIA inspection |
| All work filter | Pass |
| Excel filter | Pass |
| Power BI filter | Pass |
| SQL / EDA filter | Pass |
| Research filter | Pass |
| Four project screenshot buttons | Pass; labels, image paths, and captions present |
| Lightbox close button | Pass by static event-handler inspection |
| Escape-to-close support | Pass by JavaScript inspection |

## External links

- DecodeLabs repository: HTTP 200
- Market Intelligence repository: HTTP 200
- GitHub profile: HTTP 200
- X profile: HTTP 200
- LinkedIn profile: exact supplied URL present; automated request returned LinkedIn's anti-bot status 999, not a confirmed broken link
- Four Medium articles: exact URLs present; direct automated requests returned Medium's anti-bot status 403, while page retrieval successfully resolved all four article titles and content
- Email links: valid `mailto:okekegenevieve18@gmail.com` links

## Credential verification links

No public credential-verification URLs or certificate IDs were supplied. No verification links were invented or added.

## Accessibility

- Semantic landmarks and heading hierarchy present
- Skip link present
- All six images have `alt` attributes
- Project screenshot buttons have explicit accessible names
- Mobile menu has `aria-expanded` and `aria-controls`
- Lightbox close button has an accessible label
- Visible focus styling is present
- Reduced-motion media query is present
- No phone-number field appears

## Technical checks

- JavaScript syntax check: passed with `node --check`
- Local HTML, CSS, JavaScript, CV, profile image, and project screenshots served successfully
- No local 404 responses observed in server logs
- No external fonts, CDN scripts, or runtime API dependencies
- Responsive breakpoints are defined for desktop, tablet, and mobile layouts
- Project filters map to existing project categories
- Restricted organization names, internal references, removed projects, and invented URLs are absent from the public site

## Remaining limitations

A full browser DevTools console and real-device interaction test were not available in the execution environment. Static JavaScript validation, local HTTP checks, accessibility markup inspection, and live-server checks passed.
