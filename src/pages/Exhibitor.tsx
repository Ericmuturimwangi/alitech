import { PHOTOS } from "../lib/photos";

const booths = [
  { type: "Standard booth (9 sqm)", price: "KES 80,000" },
  { type: "Priority / corner booth (9 sqm)", price: "KES 120,000" },
  { type: "Premium stand (18 sqm)", price: "KES 240,000" },
];

const inclusions = [
  "Fascia with your company name",
  "One power point",
  "Two spotlights",
  "One table and two chairs",
  "Listing in the exhibitor directory",
  "Custom stand builds available on request",
];

export default function Exhibitor() {
  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Get involved · Exhibitor</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Book an exhibition stand
          </h1>
          <p className="mt-4 font-body leading-relaxed text-ink/80">
            If you're looking to grow your footprint in East Africa's livestock sector, book a
            stand at ALITEC Africa 2027. Open new business, build profitable networks, showcase
            your products to a targeted, industry-specific audience, and tap into emerging market
            trends — all in one venue.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.dairyFeedStand.src}
              alt={PHOTOS.dairyFeedStand.alt}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-cream/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-body text-sm tracking-wide text-gold-dark">What's included</p>
              <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
                Standard stand inclusions
              </h2>
              <ul className="mt-5 space-y-2 font-body text-sm text-ink/80">
                {inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-sm tracking-wide text-gold-dark">Pricing</p>
              <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
                Stand rates
              </h2>
              <div className="mt-5 overflow-hidden rounded-sm border border-navy/15 bg-paper">
                <table className="w-full border-collapse font-body text-sm">
                  <caption className="sr-only">Exhibition stand pricing by type</caption>
                  <tbody>
                    {booths.map((row, i) => (
                      <tr
                        key={row.type}
                        className={i % 2 === 1 ? "bg-cream/40" : undefined}
                      >
                        <th scope="row" className="px-4 py-3 text-left font-medium text-ink">
                          {row.type}
                        </th>
                        <td className="px-4 py-3 text-right text-navy-dark">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 font-body text-xs text-ink/60">
                A limited number of stands are available on a first-come, first-served basis.
              </p>
              <a
                href="/registration"
                className="mt-6 inline-block rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
              >
                Book a stand now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Good to know</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="font-body text-xs uppercase tracking-wide text-ink/50">Setup</dt>
              <dd className="mt-1 font-body text-sm text-ink/80">Day before the event opens</dd>
            </div>
            <div>
              <dt className="font-body text-xs uppercase tracking-wide text-ink/50">Breakdown</dt>
              <dd className="mt-1 font-body text-sm text-ink/80">Final afternoon of the event</dd>
            </div>
            <div>
              <dt className="font-body text-xs uppercase tracking-wide text-ink/50">Venue</dt>
              <dd className="mt-1 font-body text-sm text-ink/80">
                Technological Park, Mangu Campus, Zetech University
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
