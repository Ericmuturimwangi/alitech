export const PHONE_CONTACTS = [
  { name: "Dr. Beauttah Mwangi", phone: "+254 721200679" },
  { name: "Phineas Muita CPM", phone: "+254 701403208" },
  { name: "Eric Kiriinya MSc", phone: "+254 798290115" },
];

// Plain text form for FAQ and chat answers.
export const PHONE_CONTACTS_TEXT = PHONE_CONTACTS.map((c) => `${c.phone} (${c.name})`).join(", ");

// WhatsApp needs a single number in international format without "+" or spaces.
export const WHATSAPP_NUMBER = "254701403208"; // Phineas Muita
