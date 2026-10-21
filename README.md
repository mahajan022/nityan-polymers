# Nityan Polymers — website

Multi-page business site built with **Astro 5 + TypeScript**. Static output (fast, SEO-friendly, host anywhere: Vercel, Netlify, Cloudflare Pages, Hostinger).

## Commands

```bash
npm install      # first time
npm run dev      # local site at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Pages (17)

- `/` Home · `/about` · `/contact` (enquiry form) · `/privacy` · 404
- `/products` overview + comparison table
- `/products/<granule>` — 5 product pages (generated)
- `/products/plastic-regrinds` + `/products/regrinds/<regrind>` — 5 regrind pages (generated)

## Where to edit

| What | File |
|---|---|
| Phone, email, address, WhatsApp, leadership names & roles | `src/data/site.ts` |
| Products, regrinds, colours, descriptions | `src/data/products.ts` (adds pages, menus and form options automatically) |
| Page content | `src/pages/*.astro` |
| Header / footer / shared blocks | `src/components/` |
| Colours, fonts, layout | `src/styles/global.css` (`:root` variables) |
| Live domain | `astro.config.mjs` → `site` |
| Photos & videos | see `MEDIA-GUIDE.md` |

## Enquiry form

Set `FORM_ENDPOINT` in `src/scripts/main.js` to a form service (e.g. Formspree) so enquiries go straight to
sales@nityanpolymers.com with an on-page confirmation. Until then, the form opens the buyer's email app
pre-filled, and "Send on WhatsApp" sends the same details to +91 91189 85119.

## Before going live (from the brief)

- Confirm availability, colours, MOQ, packaging, sample terms and the exact regrind range.
- Update "is being established" on the About page once operating.
- Test the enquiry form and WhatsApp buttons; review the privacy notice.
- Don't add melt-flow values, purity, recycled-content % or certifications without an approved data sheet.
# nityan-polumers
