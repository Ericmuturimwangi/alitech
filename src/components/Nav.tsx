import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { ASSETS } from "../assets-remote";

const links = [
  { label: "Home", href: "/" },
  { label: "Programme", href: "/#programme" },
  { label: "Exhibit", href: "/#exhibit" },
  { label: "Updates", href: "/updates" },
  { label: "Travel & Stay", href: "/travel-accommodation" },
];

const getInvolvedLinks = [
  { label: "Delegate", href: "/delegate" },
  { label: "Exhibitor", href: "/exhibitor" },
  { label: "Sponsorship", href: "/sponsorship" },
];

function GetInvolvedMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 font-body text-sm text-ink/80 transition-colors hover:text-navy-dark"
      >
        Get Involved
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 w-44 rounded-sm border border-navy/15 bg-paper py-2 shadow-lg"
        >
          {getInvolvedLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-4 py-2 font-body text-sm text-ink/80 hover:bg-cream hover:text-navy-dark"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileGetInvolvedOpen, setMobileGetInvolvedOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src={ASSETS.logo} alt="ALITEC Africa 2027 logo" className="h-10 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.slice(0, 2).map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.label} href={link.href} className="font-body text-sm text-ink/80 transition-colors hover:text-navy-dark">
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `font-body text-sm transition-colors hover:text-navy-dark ${isActive ? "font-semibold text-navy-dark" : "text-ink/80"}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}

          <GetInvolvedMenu />

          {links.slice(2).map((link) =>
            link.href.startsWith("/#") ? (
              <a key={link.label} href={link.href} className="font-body text-sm text-ink/80 transition-colors hover:text-navy-dark">
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `font-body text-sm transition-colors hover:text-navy-dark ${isActive ? "font-semibold text-navy-dark" : "text-ink/80"}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/registration"
            className="hidden rounded-sm bg-navy px-5 py-2.5 font-body text-sm font-medium text-paper transition-colors hover:bg-navy-dark sm:inline-block"
          >
            Register
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-sm p-2 text-navy-dark md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-navy/10 bg-paper px-6 py-4 md:hidden"
        >
          <ul className="space-y-3 font-body text-sm">
            {links.slice(0, 2).map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-ink/80 hover:text-navy-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => setMobileGetInvolvedOpen((v) => !v)}
                aria-expanded={mobileGetInvolvedOpen}
                className="flex w-full items-center justify-between py-1 text-left text-ink/80 hover:text-navy-dark"
              >
                Get Involved
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileGetInvolvedOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileGetInvolvedOpen && (
                <ul className="mt-1 space-y-1 border-l border-navy/15 pl-4">
                  {getInvolvedLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-1 text-ink/70 hover:text-navy-dark"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {links.slice(2).map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-ink/80 hover:text-navy-dark"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 text-ink/80 hover:text-navy-dark"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/registration"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block w-fit rounded-sm bg-navy px-5 py-2.5 font-medium text-paper"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
