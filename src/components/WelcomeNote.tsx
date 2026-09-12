export default function WelcomeNote() {
  return (
    <section className="border-b border-navy/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:items-start md:py-24">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full bg-navy font-display text-2xl font-medium text-paper"
          aria-hidden="true"
        >
          AH
        </div>
        <div>
          <p className="font-body text-sm tracking-wide text-gold-dark">Welcome note</p>
          <h2 className="mt-2 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            A second edition built on what delegates told us
          </h2>
          <p className="mt-4 max-w-2xl font-body leading-relaxed text-ink/80">
            Our first edition brought farmers, agritech founders and policymakers into the same
            room for the first time in this format — and the conversations didn't stop when the
            stands came down. ALITEC Africa 2027 is our response to that: more time on the expo
            floor, dedicated farmer clinics, and a policy summit track built around what county
            and national leaders told us they needed.
          </p>
          <p className="mt-4 max-w-2xl font-body leading-relaxed text-ink/80">
            Whether you're coming to learn, to sell, to invest or to set policy, we've designed
            these three days so you leave with something concrete. We look forward to welcoming
            you to Zetech University in March 2027.
          </p>
          <p className="mt-5 font-display text-base font-medium text-navy-dark">
            The Agritech and Innovation Hub
          </p>
          <p className="font-body text-sm text-ink/60">Organising team, ALITEC Africa 2027</p>
        </div>
      </div>
    </section>
  );
}
