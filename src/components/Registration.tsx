import { useState, type FormEvent } from "react";

const roles = ["Delegate", "Exhibitor", "Sponsor", "Speaker", "Media"];

export default function Registration() {
  const [role, setRole] = useState(roles[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your form backend / email service / CRM.
    setSubmitted(true);
  }

  return (
    <section id="registration" className="border-b border-navy/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-body text-sm tracking-wide text-gold-dark">Registration</p>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-navy-dark md:text-4xl">
            Reserve your place
          </h2>
          <p className="mt-4 max-w-sm font-body text-ink/75">
            Delegate registration opens ahead of the event. Share your details and we will send
            you the programme, exhibitor prospectus and early-bird rates.
          </p>

          <dl className="mt-8 space-y-3 font-body text-sm text-ink/75">
            <div className="flex gap-2">
              <dt className="font-medium text-navy-dark">Email</dt>
              <dd>info@alecafrica.org</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-navy-dark">Phone</dt>
              <dd>+254 700 000 000</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-medium text-navy-dark">Venue</dt>
              <dd>Technological Park, Mangu Campus, Zetech University</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-sm border border-navy/15 p-6 md:p-8">
          {submitted ? (
            <p className="font-body text-ink/80">
              Thanks — we've noted your interest and will be in touch with the programme and
              rates.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 font-body">
              <div>
                <label htmlFor="name" className="block text-sm text-ink/70">
                  Full name
                </label>
                <input
                  id="name"
                  required
                  className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-ink/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                />
              </div>
              <fieldset>
                <legend className="text-sm text-ink/70">I'm interested as a</legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`rounded-sm border px-3 py-1.5 text-sm transition-colors ${
                        role === r
                          ? "border-navy bg-navy text-paper"
                          : "border-navy/25 text-ink/75 hover:border-navy"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </fieldset>
              <button
                type="submit"
                className="w-full rounded-sm bg-gold px-5 py-3 font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper"
              >
                Submit interest
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
