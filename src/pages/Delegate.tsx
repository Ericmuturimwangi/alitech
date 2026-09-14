import { Link } from "react-router-dom";
import { PHOTOS } from "../lib/photos";

const fees = [
  { category: "Students & smallholder farmers", standard: "KES 500", earlyBird: "400" },
  { category: "Kenya delegates", standard: "KES 1,500", earlyBird: "KES 1,000" },
  { category: "East Africa delegates", standard: "USD 25", earlyBird: "USD 20" },
  { category: "International delegates", standard: "USD 50", earlyBird: "USD 45" },
];

export default function Delegate() {
  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Get involved · Delegate</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Attend as a delegate
          </h1>
          <p className="mt-4 font-body leading-relaxed text-ink/80">
            We invite players across the livestock value chain to take part in ALITEC Africa 2027
            as delegates. Leading presenters will train farmers, agribusinesses and technology
            providers on best practice and emerging trends in livestock production — from raw
            material and equipment suppliers to breeders, feed millers and farmers themselves.
          </p>
          <p className="mt-4 font-body font-medium text-navy-dark">
            ALITEC Africa — Nairobi, 2027 is the place to be.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.animalHealthStand.src}
              alt={PHOTOS.animalHealthStand.alt}
              className="h-64 w-full object-cover md:h-80"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-cream/40">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Registration fee</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            Regular attendee / delegate registration
          </h2>

          <div className="mt-8 overflow-x-auto rounded-sm border border-navy/15 bg-paper">
            <table className="w-full min-w-[480px] border-collapse font-body text-sm">
              <caption className="sr-only">Delegate registration fees by category</caption>
              <thead>
                <tr className="border-b border-navy/15 bg-navy text-paper">
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    Standard fee
                  </th>
                  <th scope="col" className="px-4 py-3 text-left font-medium">
                    Early bird*
                  </th>
                </tr>
              </thead>
              <tbody>
                {fees.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 1 ? "bg-cream/40" : undefined}>
                    <th scope="row" className="px-4 py-3 text-left font-medium text-ink">
                      {row.category}
                    </th>
                    <td className="px-4 py-3 text-ink/80">{row.standard}</td>
                    <td className="px-4 py-3 text-navy-dark">{row.earlyBird}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 font-body text-xs text-ink/60">
            *Early-bird rate applies to registrations completed three months before the event.
            Exact cut-off dates will be confirmed with the full programme.
          </p>

          <Link
            to="/registration"
            className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
          >
            Register now
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Payment details</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            How to pay
          </h2>
          <p className="mt-3 max-w-xl font-body text-sm text-ink/75">
            Bank details will be issued on your invoice after registration. Delegates outside
            Kenya can also pay by international transfer or card — instructions are included with
            your confirmation email.
          </p>
          {/* TODO: replace with your real bank/mobile-money details once your payment
              infrastructure is set up — never publish placeholder account numbers as if real. */}
          <div className="mt-6 rounded-sm border border-dashed border-navy/25 bg-cream/40 p-6 font-body text-sm text-ink/70">
            Account name, bank branch and paybill/till number to be added here once confirmed.
          </div>
        </div>
      </section>
    </>
  );
}
