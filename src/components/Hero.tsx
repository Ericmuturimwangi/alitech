import { PHOTOS } from "../lib/photos";

const stats = [
  { value: "5,000+", label: "Expected delegates" },
  { value: "150+", label: "Exhibiting brands" },
  { value: "60+", label: "Speakers & panellists" },
  { value: "20", label: "African countries" },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-navy/10">
      <div className="relative min-h-[640px] w-full overflow-hidden md:min-h-[720px]">
        <img
          src={PHOTOS.aerialPathway.src}
          alt={PHOTOS.aerialPathway.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/70 to-navy-dark/30" />
        <div className="relative flex min-h-[640px] flex-col justify-end md:min-h-[720px]">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
            <p className="font-body text-sm tracking-wide text-gold-light">Nairobi · Kenya · 2027</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.08] text-paper md:text-6xl">
              Agritech Livestock Expo &amp; Conference
            </h1>
            <p className="mt-4 max-w-2xl font-display text-xl italic text-paper/85 md:text-2xl">
              Technology. Innovation. Sustainable Livelihoods.
            </p>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-paper/80">
              ALITEC Africa 2027 convenes farmers, innovators, financiers and policymakers to
              accelerate technology adoption across Africa's livestock economy. Hosted by Zetech
              University and organised by The Agritech and Innovation Hub.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="/registration"
                className="rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
              >
                Register to attend
              </a>
              <a
                href="/exhibitor"
                className="rounded-sm border border-paper/60 px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-navy-dark"
              >
                Become an exhibitor
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy/10 bg-cream/40">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-3xl font-medium text-navy-dark md:text-4xl">
                {stat.value}
              </dd>
              <dd className="mt-1 font-body text-sm text-ink/70">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
