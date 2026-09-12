import { PHOTOS } from "../lib/photos";

const days = [
  {
    number: "01",
    day: "Tuesday",
    title: "Opening & Policy Summit",
    items: [
      "Official opening and keynote address",
      "Ministerial roundtable on livestock transformation",
      "Exhibition floor opens",
      "Welcome reception",
    ],
  },
  {
    number: "02",
    day: "Wednesday",
    title: "Innovation & Investment",
    items: [
      "Agritech startup pitch arena",
      "Investor and financier matchmaking",
      "Technical breakouts: dairy, poultry, beef",
      "Live equipment demonstrations",
    ],
  },
  {
    number: "03",
    day: "Thursday",
    title: "Farmers & Field Day",
    items: [
      "Farmer capacity-building clinics",
      "Youth and women in livestock forum",
      "Research and university showcase",
      "Awards gala and closing communiqué",
    ],
  },
];

export default function Programme() {
  return (
    <section id="programme" className="border-b border-navy/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="font-body text-sm tracking-wide text-gold-dark">Programme at a glance</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
          Three days, three focuses
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.yoghurtStandB.src}
              alt={PHOTOS.yoghurtStandB.alt}
              className="h-40 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.agrochemicalStandA.src}
              alt={PHOTOS.agrochemicalStandA.alt}
              className="h-40 w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {days.map((day) => (
            <div key={day.number} className="rounded-sm border border-navy/15 p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-medium text-gold-dark">
                  {day.number}
                </span>
                <span className="font-body text-xs uppercase tracking-wide text-ink/50">
                  {day.day}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium text-navy-dark">
                {day.title}
              </h3>
              <ul className="mt-4 space-y-2 font-body text-sm text-ink/75">
                {day.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
