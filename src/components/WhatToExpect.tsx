import {
  Cpu,
  Mic,
  Wrench,
  Users,
  Lightbulb,
  GraduationCap,
} from "lucide-react";
import { PHOTOS } from "../lib/photos";

const items = [
  { Icon: Cpu, label: "Livestock Technology Exhibition" },
  { Icon: Mic, label: "Conference Sessions" },
  { Icon: Wrench, label: "Live Demonstrations" },
  { Icon: Users, label: "Business Networking" },
  { Icon: Lightbulb, label: "Innovation Showcase" },
  { Icon: GraduationCap, label: "Farmer Training" },
];

export default function WhatToExpect() {
  return (
    <section className="border-b border-navy/10 bg-cream/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_320px] md:items-start">
          <div>
            <p className="font-body text-sm tracking-wide text-gold-dark">What to expect</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
              A days' worth packed into three
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {items.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-sm border border-navy/15 bg-paper p-5"
                >
                  <Icon className="h-6 w-6 shrink-0 text-navy" aria-hidden="true" />
                  <span className="font-body text-sm font-medium text-ink">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-sm">
            <img
              loading="lazy"
              src={PHOTOS.poultryEquipmentCrowd.src}
              alt={PHOTOS.poultryEquipmentCrowd.alt}
              className="h-56 w-full object-cover md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
