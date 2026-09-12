# ALITEC Africa 2027 — local React rebuild

A local Vite + React + TypeScript + Tailwind build of the ALITEC Africa 2027
(Agritech Livestock Expo and Conference) site — a professional second-edition
site with an accessible design system (navy + gold from the real logo, WCAG
AA contrast checked) and a built-in FAQ chatbot.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build for production

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home: banner, countdown, about/why-ALITEC, what to expect, welcome
  note, vision & mission, six conference tracks, three-day programme, who
  should attend, speakers, exhibitor/sponsor tiers, partners, FAQ, quick
  interest form
- `/delegate` — delegate registration fees by category, with early-bird
  pricing
- `/exhibitor` — stand inclusions and pricing by booth type
- `/sponsorship` — full sponsorship tier benefits matrix, plus item/activity
  sponsorship (opening ceremony, gala dinner, branded items)
- `/updates` — announcements, past-edition stats, "what to expect"
- `/travel-accommodation` — venue/visa info, eTA link, embedded map,
  recommended hotels
- `/registration` — the full 3-step delegate/exhibitor/sponsor registration
  form

The nav's **Get Involved** dropdown links to Delegate, Exhibitor and
Sponsorship — keyboard-accessible (`aria-expanded`/`aria-haspopup`,
closes on Escape or click-outside), with a working mobile accordion version.

## Brand assets

The real logo and banner you supplied live in `src/assets/` and are bundled
directly (not hotlinked). They were resized and palette-optimized for the
web — down from ~1.6MB combined to ~100KB — with no visible quality loss,
since both are flat-color graphics rather than photos. If you get updated
artwork, drop the replacements in `src/assets/` with the same filenames.

## Event photos

15 real photos from the first edition live in `src/assets/gallery/` and are
imported once, with descriptive alt text, in `src/lib/photos.ts`. They're
resized/compressed for the web (down from ~135MB of raw camera files to
~3MB total) and scattered individually across the site — About, What to
Expect, Who Should Attend, Exhibit & Sponsor, Partners, Programme, Updates,
Travel & Accommodation, and the Delegate/Exhibitor/Sponsorship pages —
rather than in one gallery block. The hero uses one of them as a full-bleed
background. All are `loading="lazy"` except the hero image, so only what's
visible loads up front. One photo (`yoghurtStandC`) is imported but not yet
placed anywhere — feel free to use it or drop the import. To swap any photo,
edit the corresponding entry in `src/lib/photos.ts` rather than the
component files.

## Design system

- **Colour**: `navy` (from the logo) carries structure — nav, footer,
  headings, body text. `gold` is used sparingly, only for CTAs, numbers and
  small accents, and only ever on a background that keeps it WCAG AA
  compliant (checked programmatically — see "Accessibility" below).
  `paper`/`cream` are the two neutrals.
- **Type**: Fraunces (display) + Public Sans (body) — an editorial/civic
  pairing chosen to read as institutional rather than "generated startup."
- All tokens live in `tailwind.config.js`.

## Accessibility

- Skip-to-content link (visible on keyboard focus)
- FAQ built with native `<details>`/`<summary>` — works with zero JS,
  fully keyboard operable
- Every form input has an associated `<label htmlFor>` (verified
  programmatically — no orphaned inputs, including on the new
  Delegate/Exhibitor/Sponsorship pages)
- Every image has descriptive `alt` text; every data table has a `<caption>`
  and proper `scope` attributes on header cells
- Nav dropdown and mobile nav are fully keyboard-accessible
- Colour pairs were checked against WCAG AA (4.5:1 normal text, 3:1 large
  text/UI) — all pass. Gold is never used as small body text on a light
  background (only `gold-dark` is, which passes at 4.6:1).
- `prefers-reduced-motion` is respected sitewide.
- One `<h1>` per page (the homepage banner image has a visually-hidden `<h1>`
  alongside it, since the title is baked into the graphic).

If you add new UI, re-run a contrast check before using `gold` (not
`gold-dark`/`gold-light`) as text on a light surface — it only clears the
"large text" threshold (3:1), not normal body text (4.5:1).

## The chatbot ("Ask ALITEC")

`src/components/ChatbotWidget.tsx` + `src/lib/knowledge-base.ts` implement a
**fully client-side FAQ assistant** — no API key, no server, no ongoing
cost. It matches visitor questions against a keyword-scored knowledge base
covering dates, venue, registration, exhibiting, sponsorship, travel/visas,
tracks, speaking, and contact info.

- **To add or edit answers**: edit `KNOWLEDGE_BASE` in
  `src/lib/knowledge-base.ts`. No other code changes needed.
- **To upgrade to a real LLM** (e.g. Claude) later: don't call the
  Anthropic API directly from this client-side code — that would expose
  your API key to every visitor. Instead, add a small serverless function
  (Vercel/Netlify/Cloudflare Worker) that holds the key server-side, have
  `ChatbotWidget.tsx` POST the visitor's message to it, and return the
  model's reply. Keep `findAnswer()` as an instant local fallback for common
  questions even after upgrading.

## Before you go live — replace these placeholders

Everything below is dummy data carried over from the design/prototyping
phase. Search for these before publishing:

- **Contact details**: `info@alitecafrica.org` and `+254 700 000 000` appear
  in `Footer.tsx`, `WhatsAppButton.tsx`, `Registration.tsx`,
  `RegistrationPage.tsx`, and the knowledge base — replace with your real
  email/phone.
- **Social links**: `SocialLinks.tsx` currently points every icon at `#`.
  Add your real profile URLs.
- **Sponsor logos**: `Sponsors.tsx` shows "Your logo here" placeholder
  tiles — swap in real sponsor logos as agreements are signed.
- **Speaker cards**: `Speakers.tsx` shows "announcement pending"
  placeholders — replace once speakers are confirmed.
- **Countdown target date**: `Countdown.tsx` (`EVENT_DATE`).
- **Delegate/exhibitor/sponsorship pricing**: the figures in `Delegate.tsx`,
  `Exhibitor.tsx`, and `Sponsorship.tsx` are placeholders consistent with the
  homepage's Exhibit section — confirm real pricing before publishing.
- **Payment details**: no bank account or mobile money paybill number is
  included anywhere in this build — that's deliberate. Don't add real
  payment routing details to a public repo; collect them through your actual
  invoicing/payment provider once one is set up, so a typo here can't
  misdirect a real payment.
- **Registration forms**: both `Registration.tsx` (homepage quick form) and
  `RegistrationPage.tsx` (full form) currently just show a thank-you message
  locally — wire `handleSubmit` up to a real backend (email service, form
  provider, or CRM) before relying on them to capture real registrations.
- **Newsletter signup**: `NewsletterSignup.tsx` — connect to your email
  list provider (Mailchimp, Brevo, etc.).

## Notes

Homepage copy (Welcome, Why ALITEC Africa, What to Expect, Who Should
Attend, Why Exhibit, Why Sponsor, Vision, Mission) is taken directly from
the official homepage content you supplied. Site structure and standard
sections (FAQ, sponsor tiers, welcome note, venue map, newsletter signup,
Get Involved dropdown with Delegate/Exhibitor/Sponsorship pages) were
informed by the first ALITEC Africa edition (afec.co.ke) and comparable
expos (KAM FoodPro, Agritec Africa) — rebuilt in this project's own words
and component structure, not copied. Real pricing figures on those AFEC
pages were not reused; the new pages use figures consistent with this
site's existing (placeholder) pricing instead.
