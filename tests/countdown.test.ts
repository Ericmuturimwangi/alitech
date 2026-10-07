import { test } from "node:test";
import assert from "node:assert/strict";
import { calendarDaysUntil, getTimeParts } from "../src/lib/countdown.ts";

// Nairobi is UTC+3 all year, so "2027-03-03T10:00:00+03:00" is 10:00 in Nairobi.
const at = (iso: string) => new Date(iso);

test("target tomorrow is 1 day, at any time of day", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-03T00:00:00+03:00")), 1);
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-03T10:00:00+03:00")), 1);
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-03T23:59:59+03:00")), 1);
});

test("target today is 0 days", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-04T00:00:00+03:00")), 0);
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-04T15:30:00+03:00")), 0);
});

test("past target clamps to 0", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-10T12:00:00+03:00")), 0);
});

test("2 and 7 days away", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-02T08:00:00+03:00")), 2);
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-02-25T08:00:00+03:00")), 7);
});

test("day changes exactly at Nairobi midnight", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-01T23:59:59+03:00")), 3);
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-02T00:00:00+03:00")), 2);
  // 23:30 UTC on the 1st is already 02:30 on the 2nd in Nairobi.
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-03-01T23:30:00Z")), 2);
});

test("visitor timezone does not matter (same instant, different offsets)", () => {
  const instant = "2027-03-02T05:00:00+03:00"; // 2 Mar in Nairobi
  const sameInNewYork = "2027-03-01T21:00:00-05:00"; // still 1 Mar in New York
  const sameInTokyo = "2027-03-02T11:00:00+09:00";
  for (const iso of [instant, sameInNewYork, sameInTokyo]) {
    assert.equal(calendarDaysUntil("2027-03-04", at(iso)), 2, iso);
  }
});

test("range spanning US DST change (America/New_York springs forward 14 Mar 2027)", () => {
  assert.equal(calendarDaysUntil("2027-03-20", at("2027-03-10T12:00:00-05:00")), 10);
  assert.equal(calendarDaysUntil("2027-03-20", at("2027-03-10T23:30:00-05:00")), 9); // already 11 Mar in Nairobi
});

test("month and year boundaries, leap and non-leap February", () => {
  assert.equal(calendarDaysUntil("2027-03-04", at("2027-02-28T12:00:00+03:00")), 4); // 2027 not a leap year
  assert.equal(calendarDaysUntil("2028-03-01", at("2028-02-28T12:00:00+03:00")), 2); // 2028 leap year
  assert.equal(calendarDaysUntil("2027-01-02", at("2026-12-31T22:00:00+03:00")), 2);
  assert.equal(calendarDaysUntil("2027-03-04", at("2026-10-07T12:00:00+03:00")), 148);
});

test("hours/minutes/seconds count down to the next Nairobi midnight", () => {
  assert.deepEqual(getTimeParts("2027-03-04", at("2027-03-03T10:00:00+03:00")), {
    days: 1, hours: 14, minutes: 0, seconds: 0,
  });
  assert.deepEqual(getTimeParts("2027-03-04", at("2027-03-03T23:59:59+03:00")), {
    days: 1, hours: 0, minutes: 0, seconds: 1,
  });
  assert.deepEqual(getTimeParts("2027-03-04", at("2027-03-02T00:00:00+03:00")), {
    days: 2, hours: 0, minutes: 0, seconds: 0,
  });
  assert.deepEqual(getTimeParts("2027-03-04", at("2027-03-04T09:00:00+03:00")), {
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });
});
