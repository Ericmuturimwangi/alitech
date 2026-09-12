import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I register to attend?",
    a: "Use the Register button in the navigation or the registration form on this page. You'll receive a confirmation email, followed by an invoice with payment instructions once early-bird rates are published.",
  },
  {
    q: "How do I book an exhibition stand?",
    a: "Choose a tier under Exhibit & Sponsor and enquire. Our team will send you the exhibitor prospectus, floor plan and stand specifications once available.",
  },
  {
    q: "What does a standard exhibition stand include?",
    a: "A shell-scheme stand includes fascia with your company name, a power point, spotlights, a table and two chairs. Custom stand builds can be arranged on request.",
  },
  {
    q: "Where exactly is the venue?",
    a: "Technological Park, Mangu Campus, Zetech University, Kenya. See the map and hotel recommendations on the Travel & Stay page.",
  },
  {
    q: "Do I need a visa to attend?",
    a: "Most visitors to Kenya need an Electronic Travel Authorisation (eTA) rather than a traditional visa. Apply online before travel — details are on the Travel & Stay page.",
  },
  {
    q: "Can I get an invoice or a refund if I cancel?",
    a: "Yes — invoices and receipts are issued for all payments. Refund requests are reviewed on a case-by-case basis; contact the organising team as early as possible.",
  },
  {
    q: "Who should I contact with other questions?",
    a: "Email info@alecafrica.org or call +254 700 000 000. You can also use the chat assistant in the bottom-left corner of this site.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-b border-navy/10">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="font-body text-sm tracking-wide text-gold-dark">Frequently asked</p>
        <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
          Questions delegates and exhibitors ask us
        </h2>

        <div className="mt-8 divide-y divide-navy/10 border-y border-navy/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 font-body text-base font-medium text-ink outline-none focus-visible:text-navy-dark">
                {item.q}
                <ChevronDown
                  className="faq-chevron h-5 w-5 shrink-0 text-navy transition-transform duration-200"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-2xl font-body text-sm leading-relaxed text-ink/75">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
