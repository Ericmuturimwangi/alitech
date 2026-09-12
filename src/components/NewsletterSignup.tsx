import { useState, type FormEvent } from "react";

export default function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your email list provider (Mailchimp, Brevo, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-body text-sm text-gold-light" role="status">
        Thanks — you're on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Email address"
        className="w-full rounded-sm border border-paper/25 bg-transparent px-3 py-2 font-body text-sm text-paper placeholder:text-paper/50 outline-none focus:border-gold"
      />
      <button
        type="submit"
        className="shrink-0 rounded-sm bg-gold px-4 py-2 font-body text-sm font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
      >
        Sign up
      </button>
    </form>
  );
}
