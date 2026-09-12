import { PHOTOS } from "../lib/photos";

const updates = [
  {
    tag: "Announcement",
    date: "August 2026",
    title: "ALITEC Africa 2027 dates and venue confirmed",
    body: "The inaugural Agritech Livestock Expo & Conference will be hosted at Technological Park, Mangu Campus, Zetech University, running across three days in 2027. Exact dates will be published with the full programme.",
  },
  {
    tag: "Exhibition",
    date: "August 2026",
    title: "Exhibitor prospectus now open for early enquiries",
    body: "Shell scheme stands, premium activations and headline sponsorship packages are open for expression of interest, with early-bird rates for the first 50 confirmed exhibitors.",
  },
  {
    tag: "Programme",
    date: "September 2026",
    title: "Call for speakers and technical papers",
    body: "Researchers, founders and industry practitioners are invited to submit abstracts across the six conference tracks: smart livestock technology, dairy, poultry, beef and rangeland, agri-finance and markets.",
  },
  {
    tag: "Partnerships",
    date: "October 2026",
    title: "County and continental delegations invited",
    body: "Invitations are being extended to county livestock departments and delegations from 20 African markets to join the policy summit and hosted buyer programme.",
  },
];

const stats = [
  { value: "548", label: "Delegates at the last regional edition" },
  { value: "174", label: "Companies in attendance" },
  { value: "66", label: "Exhibition booths" },
  { value: "24", label: "Expert speakers" },
];

const expectations = [
  "Plenary sessions and technical presentations led by industry experts",
  "Training on emerging technologies in animal nutrition, genetics and health",
  "Specialised breakout sessions for ruminant and non-ruminant sectors",
  "Live equipment demonstrations on the exhibition floor",
  "Welcome cocktail and partners' appreciation dinner",
];

export default function Updates() {
  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">News & highlights</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Updates from ALITEC Africa
          </h1>
          <p className="mt-4 max-w-xl font-body text-ink/75">
            Follow announcements as the programme, speakers and exhibition floor take shape — plus
            highlights from previous livestock and feed industry gatherings in Nairobi.
          </p>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-cream/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Latest updates</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {updates.map((update) => (
              <article key={update.title} className="border-t border-navy/20 pt-5">
                <p className="font-body text-xs uppercase tracking-wide text-ink/50">
                  {update.tag} · {update.date}
                </p>
                <h2 className="mt-2 font-display text-xl font-medium text-navy-dark">
                  {update.title}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{update.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-navy-dark text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_300px] md:items-start md:py-24">
          <div>
            <p className="font-body text-sm tracking-wide text-gold-light">By the numbers</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl">
              Building on a proven regional platform
            </h2>
            <dl className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl font-medium text-gold-light md:text-4xl">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 font-body text-sm text-paper/75">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.millingDemo.src}
              alt={PHOTOS.millingDemo.alt}
              className="h-56 w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">What to expect</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
            Conference sessions & exhibition
          </h2>
          <p className="mt-4 max-w-xl font-body text-ink/75">
            ALITEC Africa 2027 combines a technical conference programme with a working exhibition
            floor and farmer clinics, so knowledge-sharing and deal-making happen in the same
            place.
          </p>
          <a
            href="/registration"
            className="mt-6 inline-block rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
          >
            Register your interest
          </a>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start">
            <ul className="grid gap-3 font-body text-sm text-ink/80">
              {expectations.map((item) => (
                <li key={item} className="flex gap-2 border-t border-navy/15 pt-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="overflow-hidden rounded-sm">
              <img
              loading="lazy"
                src={PHOTOS.venueTents.src}
                alt={PHOTOS.venueTents.alt}
                className="h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
