# dimwon-site

Landing site for **DIM Won, LLC** &mdash; a privately held holding company.

## Structure

```
.
├── index.html        Homepage
├── about.html        Philosophy and values
├── portfolio.html    Asset-class overview (placeholder)
├── contact.html      Contact info + inquiry form
├── thanks.html       Post-submission landing page (noindex)
├── privacy.html      Privacy policy
├── terms.html        Terms of use
├── style.css         Site stylesheet
├── script.js         Mobile nav toggle
├── robots.txt        Crawler directives
├── sitemap.xml       Sitemap for search engines
├── logo.png          Full-resolution transparent wordmark
├── logo-header.png   480px nav-optimized version (loaded by every page)
├── favicon.png       64px brand-blue "D" monogram favicon
└── favicon-32.png    32px favicon variant
```

## Design notes

- Typography: EB Garamond (serif headings) + Inter (sans body), via Google Fonts.
- Palette: near-black ink (`#141414`) on warm off-white tint (`#f7f5f0`), with brand cobalt accent (`#2855a4` / hover `#1e4080`) sampled to match the DIM Won wordmark.
- Logo: deep cobalt serif wordmark on white. Header loads `logo-header.png` (480&times;234, ~22 KB).
- No stock imagery &mdash; institutional restraint by design.
- No dark-mode toggle (intentional &mdash; was source of the prior nav-overlap bug).

## Deploying

This is a static site. Drop the contents into any static host (GitHub Pages, Cloudflare Pages, Netlify). DNS is already wired through Cloudflare to dimwon.com.

## Contact form

`contact.html` posts to **FormSubmit.co** at `https://formsubmit.co/admin@dimwon.com`. Submissions are emailed to `admin@dimwon.com`. After a successful submission, FormSubmit redirects the visitor to `thanks.html`.

Hidden config inputs in the form:

- `_subject` &mdash; subject line of the inbound email
- `_template=table` &mdash; renders the email body as a labeled table
- `_next` &mdash; the URL FormSubmit redirects to after submission
- `_honey` &mdash; honeypot field for spam protection

**First-run note:** FormSubmit requires a one-time confirmation. The very first submission to a new email address triggers a "Confirm your email" message to `admin@dimwon.com`. Click the activation link in that email; subsequent submissions arrive normally.
