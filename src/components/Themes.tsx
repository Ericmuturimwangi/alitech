const tracks = [
  {
    title: "Smart Livestock Technology",
    body: "Sensors, ear tags, herd management software and AI diagnostics built for African smallholder and commercial herds.",
  },
  {
    title: "Dairy Value Chains",
    body: "Cooling, milk quality, breeding and feed innovations that lift yields and farmgate income.",
  },
  {
    title: "Poultry & Small Stock",
    body: "Hatchery tech, biosecurity, feed formulation and low-cost automation for growing poultry enterprises.",
  },
  {
    title: "Beef, Pasture & Rangeland",
    body: "Rangeland restoration, fodder systems and traceability for pastoralist and feedlot production.",
  },
  {
    title: "Agri-Finance & Insurance",
    body: "Credit, index insurance and blended finance models that de-risk livestock investment.",
  },
  {
    title: "Markets & Cold Chain",
    body: "Logistics, aggregation, processing and export readiness across the continent.",
  },
];

export default function Themes() {
  return (
    <section className="border-b border-navy/10 bg-cream/30">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm tracking-wide text-gold-dark">Conference themes</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
          Six tracks covering the full livestock value chain
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.title} className="border-t border-navy/20 pt-5">
              <h3 className="font-display text-lg font-medium text-navy-dark">
                {track.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">{track.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
