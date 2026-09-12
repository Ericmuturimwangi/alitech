import { Link } from "react-router-dom";
import { PHOTOS } from "../lib/photos";

const tiers = [
  {
    name: "Exhibitor",
    price: "From KES 120,000",
    popular: false,
    href: "/exhibitor",
    perks: [
      "9 sqm shell scheme stand",
      "2 delegate passes",
      "Listing in event directory",
      "Logo on exhibitor wall",
    ],
  },
  {
    name: "Gold Partner",
    price: "KES 1,500,000",
    popular: true,
    href: "/sponsorship",
    perks: [
      "18 sqm premium stand",
      "Conference speaking slot",
      "10 delegate passes",
      "Branding across main stage & website",
      "Hosted buyer introductions",
    ],
  },
  {
    name: "Headline Sponsor",
    price: "On request",
    popular: false,
    href: "/sponsorship",
    perks: [
      "Naming rights on a summit track",
      "Keynote platform",
      "36 sqm bespoke activation",
      "Full media and press integration",
    ],
  },
];

export default function Exhibit() {
  return (
    <section id="exhibit" className="border-b border-navy/10 bg-cream/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm tracking-wide text-gold-dark">Exhibit & sponsor</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
          Put your technology in front of the buyers who need it
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <p className="font-body text-sm leading-relaxed text-ink/75">
            <span className="font-medium text-navy-dark">Why exhibit?</span> Showcase products,
            generate leads, launch innovations, meet buyers and expand into regional markets.
          </p>
          <p className="font-body text-sm leading-relaxed text-ink/75">
            <span className="font-medium text-navy-dark">Why sponsor?</span> Gain premium
            visibility, speaking opportunities, exhibition space, media exposure and direct
            engagement with industry leaders.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-sm sm:col-span-2">
            <img
              loading="lazy"
              src={PHOTOS.roofingFencingStand.src}
              alt={PHOTOS.roofingFencingStand.alt}
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.yoghurtStandA.src}
              alt={PHOTOS.yoghurtStandA.alt}
              className="h-48 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-sm border p-6 ${
                tier.popular
                  ? "border-gold bg-paper shadow-[0_0_0_1px_theme(colors.gold.DEFAULT)]"
                  : "border-navy/15 bg-paper"
              }`}
            >
              {tier.popular && (
                <span className="mb-3 inline-block w-fit rounded-sm bg-gold px-2 py-1 font-body text-xs font-medium text-ink">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-medium text-navy-dark">{tier.name}</h3>
              <p className="mt-1 font-body text-lg text-ink/80">{tier.price}</p>
              <ul className="mt-5 flex-1 space-y-2 font-body text-sm text-ink/75">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={tier.href}
                className="mt-6 rounded-sm border border-navy px-5 py-2.5 text-center font-body text-sm font-medium text-navy-dark transition-colors hover:bg-navy hover:text-paper"
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
