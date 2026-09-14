import { useEffect, useState } from "react";

const EVENT_DATE = new Date("2027-03-10T00:00:00");

function getTimeParts(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [time, setTime] = useState(() => getTimeParts(EVENT_DATE));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeParts(EVENT_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<[string, number]> = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section className="border-b border-navy/10 bg-navy-dark text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-body text-sm tracking-wide text-gold-light">Save the date</p>
          <h2 className="mt-3 font-display text-3xl font-medium md:text-4xl">4th – 5th Mar 2027</h2>
          <p className="mt-3 max-w-sm font-body text-paper/75">
            Two days at Zetech University, Nairobi. The countdown to ALITEC Africa 2027 is on.
          </p>
          <dl className="mt-6 grid grid-cols-3 gap-6 font-body text-sm text-paper/70 sm:max-w-md">
            <div>
              <dt className="text-paper/50">Dates</dt>
              <dd className="mt-1">4th – 5th Mar 2027</dd>
            </div>
            <div>
              <dt className="text-paper/50">Venue</dt>
              <dd className="mt-1">Mangu Campus, Zetech University</dd>
            </div>
            <div>
              <dt className="text-paper/50">Format</dt>
              <dd className="mt-1">Expo, conference & field clinics</dd>
            </div>
          </dl>
        </div>

        <div className="flex gap-4 sm:gap-6">
          {units.map(([label, value]) => (
            <div key={label} className="w-16 text-center sm:w-20">
              <div className="font-display text-3xl font-medium tabular-nums sm:text-4xl">
                {String(value).padStart(2, "0")}
              </div>
              <div className="mt-1 font-body text-xs text-paper/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
