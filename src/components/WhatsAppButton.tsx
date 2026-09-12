import { MessageSquareText } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254700000000?text=Hello%20ALITEC%20Africa%202027%20team%2C%20I'd%20like%20to%20know%20more%20about%20the%20expo."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-navy px-4 py-3 font-body text-sm font-medium text-paper shadow-lg transition-colors hover:bg-navy-dark"
    >
      <MessageSquareText className="h-4 w-4" aria-hidden="true" />
      WhatsApp us
    </a>
  );
}
