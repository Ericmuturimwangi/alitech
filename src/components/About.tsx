import { PHOTOS } from "../lib/photos";

export default function About() {
  return (
    <section className="border-b border-navy/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="font-body text-sm tracking-wide text-gold-dark">Welcome to ALITEC Africa 2027</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
            Africa's flagship platform for livestock innovation
          </h2>
          <p className="mt-5 font-body leading-relaxed text-ink/80">
            ALITEC Africa (Agritech Livestock Expo and Conference) is a flagship annual platform
            dedicated to accelerating innovation, technology adoption, research, investment and
            knowledge exchange within Africa's livestock sector.
          </p>
          <p className="mt-4 font-body leading-relaxed text-ink/80">
            Hosted at Zetech University, ALITEC Africa 2027 brings together livestock farmers,
            agribusinesses, researchers, innovators, technology providers, financial institutions,
            policymakers, development partners and investors to showcase innovations transforming
            livestock production across Africa. The event combines a world-class exhibition with a
            high-level conference — a chance to discover new products, services, technologies,
            research findings and market opportunities in one place.
          </p>
          <div className="mt-8 flex gap-8 border-t border-navy/10 pt-6">
            <div>
              <p className="font-display text-lg font-medium text-navy-dark">
                Exhibition + conference
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">
                Two formats, one venue, one day.
              </p>
            </div>
            <div>
              <p className="font-display text-lg font-medium text-navy-dark">
                Whole value chain
              </p>
              <p className="mt-1 font-body text-sm text-ink/70">
                From smallholder farmers to policymakers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.venueTents.src}
              alt={PHOTOS.venueTents.alt}
              className="h-64 w-full object-cover md:h-72"
            />
          </div>
          <div className="mt-4 rounded-sm border border-navy/15 bg-cream/40 p-6">
            <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/60">
              Why ALITEC Africa?
            </p>
            <p className="mt-3 font-body leading-relaxed text-ink/80">
              ALITEC Africa connects every stakeholder in the livestock value chain to promote
              technology adoption, scientific research, business networking, investment, farmer
              empowerment and sustainable livestock production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
