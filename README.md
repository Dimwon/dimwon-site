# dimwon-site

Landing site for **DIM Won, LLC** &mdash; a privately held holding company.

## Structure

```
.
├── index.html        Homepage
├── about.html        Philosophy and values
├── portfolio.html    Asset-class overview (placeholder)
├── contact.html      Contact info + inquiry form
├── privacy.html      Privacy policy
├── terms.html        Terms of use
├── style.css         Site stylesheet
├── script.js         Mobile nav toggle
├── robots.txt        Crawler directives
├── sitemap.xml       Sitemap for search engines
├── favicon.png       (drop in from prior repo)
└── logo.png          (optional, drop in from prior repo)
```

## Design notes

- Typography: EB Garamond (serif headings) + Inter (sans body), via Google Fonts.
- Palette: near-black ink (`#141414`) on warm off-white tint, with deep navy accent (`#1a3a5c`).
- Imageless by design &mdash; institutional restraint over stock imagery.
- No dark-mode toggle (intentional &mdash; was source of the prior nav-overlap bug).

## Assets to bring over

Copy `favicon.png` and (optionally) `logo.png` from the previous `dimwon-site` repo into the project root before deploying. Nothing else is needed from the prior build.

## Deploying

This is a static site. Drop the contents into any static host (GitHub Pages, Cloudflare Pages, Netlify). DNS is already wired through Cloudflare to dimwon.com.

## Contact form

`contact.html` uses **Cloudflare Pages Forms**. The `<form>` carries `data-static-form-name="contact"` and a hidden `form-name` input. No `action` URL is required &mdash; Cloudflare detects and captures submissions automatically once deployed via Cloudflare Pages.

Submissions appear at: **Cloudflare Dashboard &rarr; Workers &amp; Pages &rarr; dimwon-site &rarr; Forms.**

After deploy, run a test submission to confirm the form is firing.
