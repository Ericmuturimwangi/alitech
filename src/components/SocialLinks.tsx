import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

// TODO: replace # with your real social profile URLs before going live.
const socials = [
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "X (Twitter)", href: "#", Icon: Twitter },
  { label: "Facebook", href: "#", Icon: Facebook },
];

export default function SocialLinks() {
  return (
    <ul className="flex gap-3">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`ALITEC Africa on ${label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-paper/25 text-paper/80 transition-colors hover:border-gold hover:text-gold-light"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
