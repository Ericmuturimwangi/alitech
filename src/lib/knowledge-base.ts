export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
};

// Each entry is matched against the visitor's message by keyword overlap.
// Add new entries here as new questions come up — no code changes needed
// elsewhere. Keep `keywords` lowercase; include common misspellings/synonyms.
export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  {
    id: "dates",
    keywords: ["date", "dates", "when", "march", "2027", "day", "days"],
    answer:
      "ALITEC Africa 2027 runs 10–12 March 2027 at Technological Park, Mangu Campus, Zetech University. A countdown is on the homepage.",
  },
  {
    id: "venue",
    keywords: ["venue", "where", "location", "address", "zetech", "nairobi"],
    answer:
      "The event is hosted at Technological Park, Mangu Campus, Zetech University, Kenya. You'll find a map and directions on the Travel & Stay page.",
  },
  {
    id: "register-delegate",
    keywords: ["register", "registration", "attend", "delegate", "sign up", "ticket", "tickets"],
    answer:
      "You can register as a delegate, exhibitor, sponsor or speaker on the Registration page — it takes about five minutes. Early-bird rates apply until three months before the event.",
  },
  {
    id: "exhibit",
    keywords: ["exhibit", "exhibitor", "stand", "booth", "stall", "stand cost", "stand price"],
    answer:
      "Exhibition stands start from KES 120,000 for a 9 sqm shell-scheme stand, rising to bespoke Headline Sponsorship packages. See the Exhibit & Sponsor section on the homepage for all tiers, or register your interest and we'll send the full prospectus.",
  },
  {
    id: "sponsor",
    keywords: ["sponsor", "sponsorship", "partner", "partnership"],
    answer:
      "Sponsorship runs from Gold Partner (KES 1,500,000) up to a bespoke Headline Sponsorship. Head to the Exhibit & Sponsor section to enquire, and our team will follow up with a tailored proposal.",
  },
  {
    id: "cost-delegate",
    keywords: ["delegate fee", "delegate rate", "ticket price", "registration fee", "how much to attend"],
    answer:
      "Delegate rates will be published with the full programme, with an early-bird discount for the first registrations. An invoice with payment instructions is sent after you register.",
  },
  {
    id: "cost-general",
    keywords: ["cost", "price", "fee", "how much", "pay", "payment"],
    answer:
      "Costs depend on how you're joining us: exhibitor stands start from KES 120,000, sponsorship from KES 1,500,000, and delegate rates will be published with the full programme. Which one did you mean?",
  },
  {
    id: "travel-visa",
    keywords: ["visa", "eta", "travel authorisation", "passport", "entry"],
    answer:
      "Most visitors to Kenya need an Electronic Travel Authorisation (eTA) rather than a traditional visa — apply online at least three days before travel. Details are on the Travel & Stay page.",
  },
  {
    id: "travel-hotel",
    keywords: ["hotel", "accommodation", "stay", "where to stay", "sleep"],
    answer:
      "We list three recommended hotels near the venue — Safari Park Hotel, Sportsview Hotel Kasarani and Sunstar Hotel Nairobi — on the Travel & Stay page, across different budgets.",
  },
  {
    id: "travel-airport",
    keywords: ["airport", "flight", "arrive", "arrival", "jkia"],
    answer:
      "The nearest airport is Jomo Kenyatta International Airport (NBO), about a 45-minute drive from the venue. Uber, Bolt and vetted taxis serve all recommended hotels.",
  },
  {
    id: "tracks",
    keywords: ["track", "tracks", "theme", "themes", "topic", "topics", "programme", "program", "agenda", "sessions"],
    answer:
      "There are six conference tracks: Smart Livestock Technology, Dairy Value Chains, Poultry & Small Stock, Beef/Pasture & Rangeland, Agri-Finance & Insurance, and Markets & Cold Chain. The full three-day programme is on the homepage.",
  },
  {
    id: "speak",
    keywords: ["speak", "speaker", "speaking", "present", "abstract", "call for papers", "cfp"],
    answer:
      "We're finalising the speaker line-up. If you'd like to be considered, register your interest and select \"Speaker\" on the Registration page and our programme team will reach out.",
  },
  {
    id: "who-attends",
    keywords: ["who attends", "who is coming", "audience", "visitors", "attendees"],
    answer:
      "Expect farmers, agritech founders, equipment and feed suppliers, cooperatives, investors, government and county officials, researchers and development partners — the whole livestock ecosystem in one venue.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "call", "reach", "support", "help"],
    answer:
      "You can reach the organising team at info@alitecafrica.org or +254 700 000 000, or use the WhatsApp button in the bottom-right corner of the site.",
  },
  {
    id: "cancel-refund",
    keywords: ["cancel", "refund", "invoice", "receipt"],
    answer:
      "Invoices and receipts are issued for every payment. Refund requests are reviewed case-by-case — contact the organising team as early as possible if your plans change.",
  },
];

export const FALLBACK_ANSWER =
  "I don't have a confident answer for that yet. Try asking about dates, the venue, registration, exhibiting, sponsorship, travel/visas, or the conference tracks — or email info@alitecafrica.org and the team will help directly.";

export function findAnswer(message: string): string {
  const text = message.toLowerCase();
  let bestScore = 0;
  let bestAnswer = FALLBACK_ANSWER;

  for (const entry of KNOWLEDGE_BASE) {
    const score = entry.keywords.reduce(
      (acc, kw) => (text.includes(kw) ? acc + kw.split(" ").length : acc),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  return bestScore > 0 ? bestAnswer : FALLBACK_ANSWER;
}
