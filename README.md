# Bharat Parmar — Developer Portfolio

Live site: [bharatparmar.vercel.app](https://bharatparmar.vercel.app)

A personal developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**, deployed on **Vercel**.

This isn't a template pulled off the shelf — it's a hand-built, from-scratch site, designed and coded page by page as a working demonstration of what I can ship without a formal computer science background. Every implementation decision, every line of content, and every fix in the commit history reflects that.

---

## ✨ Features

- **8 fully built pages** — Home, About, Projects, Skills, Experience, Contact, Privacy Policy, and a custom 404
- **Single source of truth for all content** — every visible string on the site lives in one file, [`src/content/site.ts`](./src/content/site.ts). Nothing is hardcoded in a component.
- **Working contact form** — sends real email via [Resend](https://resend.com), with honeypot spam protection that flags suspicious submissions instead of silently discarding them
- **SEO-ready** — dynamic `sitemap.xml` and `robots.txt`, generated from a single `site.domain` value
- **Analytics** — Google Analytics (GA4), gated behind an environment variable so it's fully optional
- **Accessibility built in** — skip-to-content link, visible keyboard focus states, `prefers-reduced-motion` support, and focus reset between route navigations
- **Distinct visual identity** — a deep graphite/ink and brass color palette with schematic "engineering notebook" corner-tick marks, rather than a generic template look

---

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Email | [Resend](https://resend.com) |
| Analytics | Google Analytics 4 |
| Hosting | [Vercel](https://vercel.com) |
| Fonts | Space Grotesk, Inter, JetBrains Mono (`next/font/google`) |

---

## 📁 Project Structure

```
src/
├── app/                  # Routes (App Router — one folder per page)
│   ├── about/
│   ├── api/contact/      # Contact form backend (Resend)
│   ├── contact/
│   ├── experience/
│   ├── privacy/
│   ├── projects/
│   ├── skills/
│   ├── layout.tsx        # Root layout — fonts, Navbar, Footer, Analytics
│   ├── page.tsx          # Home
│   ├── not-found.tsx     # Custom 404
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/           # Shared UI: Navbar, Footer, PageHeader, CtaBand,
│                         # JourneyDiagram, ContactForm, CornerTicks, etc.
└── content/
    └── site.ts           # ⭐ Every piece of copy on the site lives here
```

---

## 🚀 Running Locally

**Requirements:** Node.js 18+ and npm

```bash
# 1. Clone the repo
git clone https://github.com/bharatparmar-dev/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)

# 4. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Environment Variables

This project needs a `.env.local` file in the project root (same level as `package.json`) for the contact form and analytics to work. This file is intentionally **not** committed to the repo (it's covered by `.gitignore`), so you need to create it yourself.

**Step 1 — Create the file**

In the project root, create a new file named exactly `.env.local`:

```bash
# macOS / Linux
touch .env.local

# Windows (PowerShell)
New-Item .env.local
```

Or just create it directly in your editor (in VS Code: right-click the project root in the file explorer → **New File** → name it `.env.local`).

**Step 2 — Add these two lines to it**

```env
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Step 3 — Fill in real values**

| Variable | Required? | Where to get it |
|---|---|---|
| `RESEND_API_KEY` | Yes — the contact form won't send email without it | Sign up free at [resend.com](https://resend.com), create an API key from your dashboard, paste it in |
| `NEXT_PUBLIC_GA_ID` | No — optional | Create a free GA4 property at [analytics.google.com](https://analytics.google.com), copy the Measurement ID (looks like `G-XXXXXXXXXX`). Leave this line blank or delete it entirely if you don't want analytics — the `Analytics` component simply won't render anything without it. |

**Step 4 — Restart the dev server**

If `npm run dev` was already running, stop it (`Ctrl+C`) and run it again so it picks up the new environment variables:

```bash
npm run dev
```

> ⚠️ Never commit `.env.local` to Git. It's already listed in `.gitignore`, so as long as you don't rename it or force-add it, your real API keys stay private.

---

## ♻️ Reusing This Project

This project was deliberately built so it can be cloned and turned into *your own* portfolio by editing exactly **two things**:

1. **`src/content/site.ts`** — replace every field (name, role, bio, projects, experience, skills, contact details, social links) with your own content. Every page pulls from this file; there's no other copy hiding in a component.
2. **`.env.local`** — set your own `RESEND_API_KEY` and (optionally) `NEXT_PUBLIC_GA_ID`.

Update `site.domain` inside `site.ts` once you have your own domain — it automatically propagates to `metadataBase`, `sitemap.ts`, and `robots.ts`, so it's a genuine one-line change.

You'll also want to swap in your own resume PDF at `public/Bharat_Parmar_Resume.pdf` (or update the filename referenced in `Navbar.tsx`).

---

## 📄 License

See [LICENSE](./LICENSE) — the MIT License covers the code and structure of this project. It does **not** extend to the personal content in `src/content/site.ts` (name, biography, project descriptions, resume, etc.), which remains personal to Bharat Parmar and is not licensed for reuse.

---

## 👤 About the Author

Built by **Bharat Parmar** — a self-taught developer from Morbi, Gujarat, transitioning from years of hands-on business operations work into a professional software development role. No CS degree; just a habit of learning whatever the next problem demands.

- Portfolio: [bharatparmar.vercel.app](https://bharatparmar.vercel.app)
- LinkedIn: [linkedin.com/in/bharatparmar-dev](https://www.linkedin.com/in/bharatparmar-dev)
- GitHub: [github.com/bharatparmar-dev](https://github.com/bharatparmar-dev)