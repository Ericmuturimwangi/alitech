import { Link } from "react-router-dom";
import { ASSETS } from "../assets-remote";
import SocialLinks from "./SocialLinks";
import NewsletterSignup from "./NewsletterSignup";

const links = [
  { label: "Home", href: "/" },
  { label: "Programme", href: "/#programme" },
  { label: "Delegate", href: "/delegate" },
  { label: "Exhibitor", href: "/exhibitor" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Updates", href: "/updates" },
  { label: "Travel & Stay", href: "/travel-accommodation" },
  { label: "Registration", href: "/registration" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-paper/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={ASSETS.logo} alt="ALITEC Africa 2027" className="h-9 w-auto brightness-0 invert" />
            <p className="mt-3 font-body text-sm">Technology. Innovation. Sustainable Livelihoods.</p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-wide text-paper/50">Quick links</p>
            <ul className="mt-3 space-y-2 font-body text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a href={link.href} className="hover:text-paper">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="hover:text-paper">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-wide text-paper/50">Contacts</p>
            <p className="mt-3 font-body text-sm">Hosted by Zetech University</p>
            <p className="font-body text-sm">Organised by The Agritech and Innovation Hub</p>
            {/* TODO: replace with your real contact details before going live */}
            <p className="mt-2 font-body text-sm">info@alitecafrica.org</p>
            <p className="font-body text-sm">+254 700 000 000</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-wide text-paper/50">Stay updated</p>
            <p className="mt-3 font-body text-sm">
              Programme announcements and exhibitor news, a few times a year.
            </p>
            <div className="mt-3">
              <NewsletterSignup />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 font-body text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2027 ALITEC Africa. All rights reserved.</p>
          <p>Hosted at Technological Park, Mangu Campus, Zetech University</p>
        </div>
      </div>
    </footer>
  );
}
