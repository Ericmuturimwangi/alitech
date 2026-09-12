export default function VisionMission() {
  return (
    <section className="border-b border-navy/10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="rounded-sm border-t-4 border-navy bg-cream/40 p-8">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/60">
            Vision
          </p>
          <p className="mt-3 font-display text-xl font-medium leading-snug text-navy-dark">
            To become Africa's leading platform for livestock innovation, technology transfer,
            research collaboration and agribusiness development.
          </p>
        </div>
        <div className="rounded-sm border-t-4 border-gold bg-cream/40 p-8">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/60">
            Mission
          </p>
          <p className="mt-3 font-display text-xl font-medium leading-snug text-navy-dark">
            To connect farmers, innovators, researchers, industry leaders, investors and
            policymakers through knowledge exchange, technology showcase and strategic
            partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}
