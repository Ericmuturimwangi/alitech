const speakers = [
  "Cabinet Secretary, Agriculture & Livestock",
  "CEO, Pan-African dairy processor",
  "Founder, livestock data platform",
  "Director, Agritech & Innovation Hub",
];

export default function Speakers() {
  return (
    <section className="border-b border-navy/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm tracking-wide text-gold-dark">Speakers</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
          Programme line-up in progress
        </h2>
        <p className="mt-4 max-w-lg font-body text-ink/75">
          Confirmed keynotes, ministers and founders will be published here as the programme is
          finalised. Register your interest to be notified first.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {speakers.map((role) => (
            <div key={role} className="rounded-sm border border-dashed border-navy/25 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream font-display text-lg text-ink/40">
                ?
              </div>
              <p className="mt-4 font-body text-xs uppercase tracking-wide text-ink/40">
                Speaker announcement
              </p>
              <p className="mt-1 font-body text-sm text-ink/75">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
