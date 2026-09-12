import { Link } from "react-router-dom";
import { PHOTOS } from "../lib/photos";

const tiers = [
  { label: "Title Sponsor", slots: 1 },
  { label: "Gold Sponsors", slots: 3 },
  { label: "Supporting Partners", slots: 4 },
];

export default function Sponsors() {
  return (
    <section className="border-b border-navy/10 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_280px] md:items-start">
          <div>
            <p className="font-body text-sm tracking-wide text-gold-dark">Partners</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
              Backed by organisations shaping Africa's livestock sector
            </h2>
            <p className="mt-4 max-w-xl font-body text-ink/75">
              ALITEC Africa 2027 is building its partner roster now. Confirmed logos will replace
              the placeholders below as agreements are signed.
            </p>

            <div className="mt-10 space-y-10">
              {tiers.map((tier) => (
                <div key={tier.label}>
                  <p className="font-body text-xs font-medium uppercase tracking-wide text-navy/60">
                    {tier.label}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Array.from({ length: tier.slots }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-16 w-40 items-center justify-center rounded-sm border border-dashed border-navy/25 bg-paper font-body text-xs text-ink/40"
                      >
                        Your logo here
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/sponsorship"
              className="mt-10 inline-block rounded-sm bg-navy px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
            >
              Become a partner
            </Link>
          </div>

          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.agrochemicalStandB.src}
              alt={PHOTOS.agrochemicalStandB.alt}
              className="h-56 w-full object-cover md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
