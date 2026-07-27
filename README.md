# Bharat Parmar — Portfolio

Live site: [bharatparmar.vercel.app](https://bharatparmar.vercel.app)

A personal developer portfolio, built by hand as a working demonstration of ability — not just a description of it. Every page, project write-up, and piece of content lives in a single content file, so the whole site can be reused as a template by editing that file and a handful of environment variables.

## Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Resend** for the contact form's email delivery
- **Google Analytics (GA4)** for visitor analytics
- Deployed on **Vercel**, auto-deployed on every push to `main`

## Project Structure

- `src/content/site.ts` — the single source of truth for **all** visible text on the site: nav labels, page copy, project descriptions, contact details, metadata, everything. No content is hardcoded anywhere else.
- `src/app/` — one folder per route (Home, About, Projects, Skills, Experience, Contact, Privacy Policy), following Next.js App Router conventions.
- `src/components/` — shared UI: `Navbar`, `Footer`, `PageHeader`, `CtaBand`, `CornerTicks`, `JourneyDiagram`, `ContactForm`, `Analytics`, and a couple of small accessibility/UX helpers (`NavLink`, `RouteFocusReset`).
- `src/app/api/contact/route.ts` — server-side route handler that sends contact form submissions via Resend, with honeypot-based spam detection.

## Design Notes

Deep graphite/ink background, brass accent color, monospace tags, and schematic corner-tick marks on major cards — an "engineering notebook" visual identity used consistently across the site, not a decorative flourish.

## Reusing This Template

This project was deliberately built so it can be cloned and repurposed for someone else's portfolio with minimal effort:

1. Clone the repo and run `npm install`.
2. Edit `src/content/site.ts` — replace every field (name, role, bio, projects, experience, skills, contact info) with your own content.
3. Create a `.env.local` file in the project root (this file is gitignored and never committed, since it holds your private keys) with the following:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   NEXT_PUBLIC_GA_ID=your_ga4_measurement_id_here
   ```

   - `RESEND_API_KEY` — from [resend.com](https://resend.com), for the contact form.
   - `NEXT_PUBLIC_GA_ID` — your Google Analytics 4 Measurement ID (optional; analytics is skipped entirely if unset).
4. Update `site.domain` in `site.ts` once you have a real domain — this single field propagates automatically to page metadata, `sitemap.ts`, and `robots.ts`.
5. Replace `/public/Bharat_Parmar_Resume.pdf` with your own resume, or update the download link in `site.ts`.
6. `npm run dev` to preview locally, then deploy to Vercel (or any Next.js-compatible host).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## License

The **code and project structure** in this repository are available under the MIT License — see [`LICENSE`](./LICENSE).

The **content** in `src/content/site.ts` (personal bio, project descriptions, resume text, and all other portfolio copy) is **not** covered by that license. It's Bharat Parmar's personal content and shouldn't be reused as-is — swap it out for your own when adapting this template.