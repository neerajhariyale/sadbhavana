# Sadbhavana Educators — Website

Marketing **landing page**, **Privacy Policy** and **Support** page for the
Sadbhavana Educators UPSC coaching app. Built with **Next.js 14 (App Router)**,
**TypeScript** and **Tailwind CSS**.

These three pages give you the public URLs the app stores ask for:

| Page | URL | Needed for |
|------|-----|-----------|
| Landing | `/` | Marketing / your app's website link |
| Privacy Policy | `/privacy` | **Required** by Apple App Store **and** Google Play |
| Support | `/support` | **Required** by Apple (support URL) |

---

## Run it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

---

## Edit your content (one file)

Almost all copy, links and contact details live in **`src/lib/site.ts`**.
Search that file for `// TODO` and replace every placeholder before you go live:

- **Brand**: name, tagline, description
- **Contact**: `email`, `phone`, `hours`, `legalEntity`, `address`
  (the stores require a real, monitored support email)
- **Store links**: `appStoreUrl`, `playStoreUrl` — paste these once your
  listings are live (until then the download buttons point to `#`)
- **Stats / testimonials**: replace the sample numbers and quotes with **real**
  ones (don't ship invented ratings — stores can reject misleading claims)

Features, the homepage FAQ and testimonials are also arrays in `site.ts`.
Support-page FAQs live in `src/app/support/page.tsx`.

---

## Your logo

The logo you provided was cropped and added to `public/`:

- `public/logo-full.png` — full lockup (emblem + wordmark), used in the footer
- `public/logo-mark.png` — emblem only, used in the navbar
- `public/icon.png` — favicon / app icon

To change it later, just overwrite those files (keep the names). A vector
(`.svg`) version will look sharper if you ever get one from your designer.

---

## Deploy + get your store URLs

The easiest path is **Vercel** (free):

1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js.
3. You'll get a live URL like `https://your-project.vercel.app`.
4. (Optional) add your own domain, e.g. `sadbhavanaeducators.in`, then set
   `site.url` in `src/lib/site.ts` to that domain.

Then in the store consoles:

- **Apple App Store Connect** → App Information → *Privacy Policy URL* = `…/privacy`,
  *Support URL* = `…/support`, *Marketing URL* (optional) = `…/`.
- **Google Play Console** → Store listing / App content → *Privacy Policy* = `…/privacy`.
  If your app lets users create accounts, also provide the **account-deletion**
  info — already covered on `/support` and `/privacy`.

---

## Notes

- The Privacy Policy is a solid, store-ready **template** — have it reviewed by a
  legal professional and confirm it matches what your app actually collects.
- Primary buttons use the logo's royal blue for accessible contrast; orange is
  used as an accent (matching the logo's leaves + wordmark).
- Design tokens (colours, fonts) are in `tailwind.config.ts`.
