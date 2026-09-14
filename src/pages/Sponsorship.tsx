import { Link } from "react-router-dom";
import { PHOTOS } from "../lib/photos";

const tiers = [
  { name: "Title", price: "On request", slots: "1" },
  { name: "Platinum", price: "KES 2,400,000", slots: "2" },
  { name: "Gold", price: "KES 1,500,000", slots: "4" },
  { name: "Silver", price: "KES 900,000", slots: "6" },
  { name: "Bronze", price: "KES 500,000", slots: "10" },
];

const rows = [
  { label: "Exhibition stands included", values: ["4", "2", "2", "1", "1"] },
  { label: "Speaking slot", values: ["✓", "✓", "✓", "—", "—"] },
  { label: "Logo on letterhead & main stage", values: ["✓", "✓", "—", "—", "—"] },
  { label: "VIP welcome lineup", values: ["✓", "✓", "—", "—", "—"] },
  { label: "Complimentary delegate passes", values: ["10", "6", "4", "2", "1"] },
  { label: "Logo in programme & website", values: ["✓", "✓", "✓", "✓", "✓"] },
];

const itemSponsorship = [
  { item: "Opening ceremony", price: "KES 1,000,000" },
  { item: "Gala dinner", price: "KES 1,200,000" },
  { item: "Delegate bags", price: "KES 400,000" },
  { item: "Lanyards & badges", price: "KES 250,000" },
  { item: "Water & refreshments (per day)", price: "KES 150,000" },
  { item: "Branded notebooks or pens", price: "from KES 100,000" },
];

export default function Sponsorship() {
  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Get involved · Sponsorship</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Sponsor ALITEC Africa 2027
          </h1>
          <p className="mt-4 font-body leading-relaxed text-ink/80">
            Join us in offering solutions to livestock farming across Africa. ALITEC Africa 2027
            will bring together farmers, agribusinesses, researchers and policymakers to open
            opportunities for regional industry growth. Sponsoring puts your brand in front of
            every one of them — with premium visibility, speaking opportunities, exhibition space,
            media exposure and direct engagement with industry leaders.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.butcheryTools.src}
              alt={PHOTOS.butcheryTools.alt}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-cream/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Sponsorship tiers</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            Partner benefits at a glance
          </h2>

          <div className="mt-8 overflow-x-auto rounded-sm border border-navy/15 bg-paper">
            <table className="w-full min-w-[640px] border-collapse font-body text-sm">
              <caption className="sr-only">Sponsorship tier benefits and pricing</caption>
              <thead>
                <tr className="border-b border-navy/15 bg-navy text-paper">
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    Benefit
                  </th>
                  {tiers.map((tier) => (
                    <th key={tier.name} scope="col" className="px-4 py-3 text-left font-medium">
                      {tier.name}
                    </th>
                  ))}
                </tr>
                <tr className="border-b border-navy/15 bg-navy-light/10">
                  <th scope="row" className="px-4 py-2 text-left text-xs text-ink/60">
                    Price
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="px-4 py-2 text-xs font-medium text-navy-dark">
                      {tier.price}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? "bg-cream/40" : undefined}>
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink">
                      {row.label}
                    </th>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-ink/80">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            to="/registration"
            className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
          >
            Become a sponsor
          </Link>
        </div>
      </section>

      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Item & activity sponsorship</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            Sponsor a moment or an essential
          </h2>
          <p className="mt-3 max-w-xl font-body text-sm text-ink/75">
            Prefer a lighter-touch commitment? Sponsor a specific event or item and put your brand
            directly into delegates' hands.
          </p>

          <div className="mt-6 overflow-hidden rounded-sm border border-navy/15 bg-paper">
            <table className="w-full border-collapse font-body text-sm">
              <caption className="sr-only">Item and activity sponsorship pricing</caption>
              <tbody>
                {itemSponsorship.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 1 ? "bg-cream/40" : undefined}>
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink">
                      {row.item}
                    </th>
                    <td className="px-4 py-3 text-right text-navy-dark">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Payment details</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            How to pay
          </h2>
          {/* TODO: replace with your real bank/mobile-money details once your payment
              infrastructure is set up — never publish placeholder account numbers as if real. */}
          <div className="mt-6 rounded-sm border border-dashed border-navy/25 bg-cream/40 p-6 font-body text-sm text-ink/70">
            Account name, bank branch and paybill/till number to be added here once confirmed. An
            invoice with full payment instructions is issued once your sponsorship is confirmed.
          </div>
        </div>
      </section>
    </>
  );
}
