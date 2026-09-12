import { PHOTOS } from "../lib/photos";

const groups = [
  "Farmers",
  "Agribusinesses",
  "Researchers and universities",
  "Veterinarians",
  "Feed manufacturers",
  "Financial institutions and insurers",
  "Government agencies",
  "NGOs and development partners",
  "Investors",
  "Agritech startups",
];

export default function Attendees() {
  return (
    <section id="who-should-attend" className="border-b border-navy/10 bg-navy-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_320px] md:items-start md:py-24">
        <div>
          <p className="font-body text-sm tracking-wide text-gold-light">Who should attend?</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl">
            The whole livestock ecosystem, in one venue
          </h2>

          <ul className="mt-10 grid gap-x-8 gap-y-4 font-body text-paper/85 sm:grid-cols-2">
            {groups.map((group) => (
              <li key={group} className="border-b border-paper/10 pb-4">
                {group}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-sm">
          <img
              loading="lazy"
            src={PHOTOS.animalHealthDiscussion.src}
            alt={PHOTOS.animalHealthDiscussion.alt}
            className="h-56 w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
