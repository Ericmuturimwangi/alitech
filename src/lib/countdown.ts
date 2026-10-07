// Countdown maths for the event. All day boundaries are taken in Nairobi time,
// so the result is the same whatever timezone the visitor's browser is in.

export const EVENT_DATE = "2027-03-04"; // first event day, calendar date in Nairobi
export const EVENT_TIME_ZONE = "Africa/Nairobi";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const nairobiParts = new Intl.DateTimeFormat("en-GB", {
  timeZone: EVENT_TIME_ZONE,
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23",
});

// Wall-clock date and time in Nairobi for a given instant.
function zonedParts(now: Date) {
  const parts: Record<string, number> = {};
  for (const { type, value } of nairobiParts.formatToParts(now)) {
    if (type !== "literal") parts[type] = Number(value);
  }
  return parts as Record<"year" | "month" | "day" | "hour" | "minute" | "second", number>;
}

// Parses "YYYY-MM-DD" by hand: new Date("YYYY-MM-DD") would be UTC midnight,
// which is the wrong day in some timezones.
function parseCalendarDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day };
}

// Calendar days from today (in Nairobi) to the target date. 0 on the day itself
// and afterwards. Date.UTC is only used as a DST-free day counter here.
export function calendarDaysUntil(target: string, now: Date = new Date()): number {
  const t = parseCalendarDate(target);
  const n = zonedParts(now);
  const diff = Date.UTC(t.year, t.month - 1, t.day) - Date.UTC(n.year, n.month - 1, n.day);
  return Math.max(0, Math.round(diff / MS_PER_DAY));
}

// Days are calendar days; hours/minutes/seconds count down to the next Nairobi
// midnight, which is when the day count drops by one.
export function getTimeParts(target: string, now: Date = new Date()) {
  const days = calendarDaysUntil(target, now);
  if (days === 0) return { days, hours: 0, minutes: 0, seconds: 0 };

  const n = zonedParts(now);
  const secondsLeftToday = 24 * 60 * 60 - (n.hour * 3600 + n.minute * 60 + n.second);
  return {
    days,
    hours: Math.floor(secondsLeftToday / 3600) % 24,
    minutes: Math.floor(secondsLeftToday / 60) % 60,
    seconds: secondsLeftToday % 60,
  };
}
