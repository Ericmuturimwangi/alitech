import { PHOTOS } from "../lib/photos";

const quickFacts = [
  { label: "Venue", value: "Technological Park, Mangu Campus, Zetech University, Kenya" },
  { label: "Dates", value: "Day 0 arrival · 3 conference days · departure day (2027, TBC)" },
  { label: "Airport", value: "Jomo Kenyatta International Airport (NBO), ~45 min drive" },
  { label: "Local transport", value: "Uber, Bolt and vetted taxis serve all listed hotels" },
];

const hotels = [
  {
    tier: "5 star",
    name: "Safari Park Hotel",
    body: "Landmark Nairobi resort with extensive conference facilities, water gardens and five specialty restaurants.",
    distance: "15 minute drive to the venue",
    url: "https://www.safaripark-hotel.com/",
  },
  {
    tier: "3 star",
    name: "Sportsview Hotel Kasarani",
    body: "Comfortable business hotel in Kasarani with restaurant, bar, air conditioning and free Wi-Fi.",
    distance: "10 minute drive to the venue",
    url: "https://sportsviewhotel.com/",
  },
  {
    tier: "Budget",
    name: "Sunstar Hotel Nairobi",
    body: "Friendly, well-priced rooms and meeting spaces — a practical base for delegates on a tighter budget.",
    distance: "5 minute drive to the venue",
    url: "https://sunstarhotelnairobi.com/",
  },
];

export default function TravelAccommodation() {
  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Plan your trip</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Travel & accommodation
          </h1>
          <p className="mt-4 max-w-xl font-body text-ink/75">
            Everything delegates, exhibitors and speakers need to get to Nairobi and stay close to
            the ALITEC Africa 2027 venue.
          </p>

          <dl className="mt-10 grid gap-6 border-t border-navy/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-body text-xs uppercase tracking-wide text-ink/50">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-body text-sm text-ink/80">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.productStand.src}
              alt={PHOTOS.productStand.alt}
              className="h-56 w-full object-cover md:h-64"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Find us</p>
          <h2 className="mt-3 font-display text-2xl font-medium text-navy-dark md:text-3xl">
            Technological Park, Mangu Campus, Zetech University
          </h2>
          <div className="mt-6 overflow-hidden rounded-sm border border-navy/15">
            <iframe
              title="Map showing Technological Park, Mangu Campus, Zetech University"
              src="https://www.google.com/maps?q=Technological+Park+Mangu+Campus+Zetech+University&output=embed"
              className="h-80 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-cream/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Entry requirements</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-navy-dark md:text-4xl">
            Kenya visa & eTA
          </h2>
          <p className="mt-4 max-w-2xl font-body leading-relaxed text-ink/80">
            All visitors to Kenya must hold a valid passport and obtain an Electronic Travel
            Authorisation (eTA) before arrival. The eTA has replaced the traditional visa system.
          </p>
          <p className="mt-3 max-w-2xl font-body leading-relaxed text-ink/80">
            Apply online at the official Kenya eTA portal at least three days before travel. If
            you need a letter of invitation to support your application, contact the organising
            team after registering.
          </p>
          <a
            href="https://etakenya.go.ke/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block rounded-sm bg-navy px-6 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
          >
            Apply for eTA
          </a>
        </div>
      </section>

      <section className="border-b border-navy/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-body text-sm tracking-wide text-gold-dark">Getting around</p>
            <h3 className="mt-3 font-display text-xl font-medium text-navy-dark">
              Commuting from hotels
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
              Taxi services in Nairobi are well organised and safe. Ride-hailing apps such as Uber
              and Bolt operate from every recommended hotel to the venue and back. A shuttle
              schedule between partner hotels and Zetech University will be published closer to
              the event.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-navy-dark">
              Delegate support
            </h3>
            <p className="mt-3 font-body text-sm text-ink/75">info@alitecafrica.org</p>
            <p className="font-body text-sm text-ink/75">+254 700 000 000</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Where to stay</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
            Recommended hotels near the venue
          </h2>
          <p className="mt-4 max-w-xl font-body text-ink/75">
            Delegates book directly with the hotel and quote "ALITEC Africa 2027" for conference
            rates where available.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="flex flex-col rounded-sm border border-navy/15 p-6">
                <span className="w-fit rounded-sm bg-cream px-2 py-1 font-body text-xs text-ink/70">
                  {hotel.tier}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-navy-dark">
                  {hotel.name}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ink/75">
                  {hotel.body}
                </p>
                <p className="mt-3 font-body text-xs text-ink/50">{hotel.distance}</p>
                <a
                  href={hotel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 rounded-sm border border-navy px-4 py-2 text-center font-body text-sm font-medium text-navy-dark transition-colors hover:bg-navy hover:text-paper"
                >
                  Booking link
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
