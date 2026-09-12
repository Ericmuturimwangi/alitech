import { useState, type FormEvent } from "react";

const prefixes = ["Mr.", "Mrs.", "Ms.", "Dr.", "Eng.", "Prof.", "PhD", "Hon."];

const industries = [
  "Dairy production",
  "Poultry & small stock",
  "Beef & rangeland",
  "Animal feed & nutrition",
  "Veterinary & animal health",
  "Agritech & software",
  "Equipment & machinery",
  "Finance, insurance & investment",
  "Government & policy",
  "Research & academia",
];

const interests = [
  "I want to attend the conference as a delegate",
  "I want to register other delegates",
  "I want to sponsor a speaker",
  "I want to exhibit or book a booth",
  "I am interested in sponsorship opportunities",
];

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export default function RegistrationPage() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to your registration backend / CRM / invoicing flow.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <p className="font-body text-sm tracking-wide text-gold-dark">Registration</p>
          <h1 className="mt-3 font-display text-3xl font-medium text-navy-dark md:text-4xl">
            Thanks — your registration has been received
          </h1>
          <p className="mt-4 font-body text-ink/75">
            A confirmation and invoice with payment instructions will be sent to the email address
            you provided.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="font-body text-sm tracking-wide text-gold-dark">Registration</p>
          <h1 className="mt-3 font-display text-4xl font-medium leading-tight text-navy-dark md:text-5xl">
            Conference registration
          </h1>
          <p className="mt-4 font-body text-ink/75">
            Complete the form below to register for ALITEC Africa 2027. Your confirmation and
            invoice, including payment instructions, will be sent to the email address you
            provide.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <form onSubmit={handleSubmit} className="space-y-14 font-body">
            {/* Step 1 */}
            <div>
              <p className="font-body text-sm tracking-wide text-gold-dark">Step 1</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy-dark">
                Your personal details (contact person)
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Please fill in the details below to complete your registration.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="prefix" className="block text-sm text-ink/70">
                    Prefix *
                  </label>
                  <select
                    id="prefix"
                    required
                    defaultValue=""
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  >
                    <option value="" disabled>
                      Select prefix
                    </option>
                    {prefixes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-ink/70">
                    Phone number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm text-ink/70">
                    First name *
                  </label>
                  <input
                    id="firstName"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-ink/70">
                    Last name *
                  </label>
                  <input
                    id="lastName"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-ink/70">
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="confirmEmail" className="block text-sm text-ink/70">
                    Confirm email address *
                  </label>
                  <input
                    id="confirmEmail"
                    type="email"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="border-t border-navy/15 pt-10">
              <p className="font-body text-sm tracking-wide text-gold-dark">Step 2</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy-dark">
                Company details
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="companyName" className="block text-sm text-ink/70">
                    Company name *
                  </label>
                  <input
                    id="companyName"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="companyWebsite" className="block text-sm text-ink/70">
                    Company website
                  </label>
                  <input
                    id="companyWebsite"
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-sm text-ink/70">
                    Physical address
                  </label>
                  <input
                    id="address"
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm text-ink/70">
                    City
                  </label>
                  <input
                    id="city"
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="postcode" className="block text-sm text-ink/70">
                    Postal / zip code
                  </label>
                  <input
                    id="postcode"
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="country" className="block text-sm text-ink/70">
                    Country *
                  </label>
                  <input
                    id="country"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="companyEmail" className="block text-sm text-ink/70">
                    Company email address *
                  </label>
                  <input
                    id="companyEmail"
                    type="email"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
                <div>
                  <label htmlFor="companyPhone" className="block text-sm text-ink/70">
                    Company phone number *
                  </label>
                  <input
                    id="companyPhone"
                    type="tel"
                    required
                    className="mt-1 w-full rounded-sm border border-navy/25 bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-navy"
                  />
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm text-ink/70">
                  What industry is your company involved in? (choose all that apply)
                </legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <label key={industry} className="flex items-center gap-2 text-sm text-ink/80">
                      <input
                        type="checkbox"
                        checked={selectedIndustries.includes(industry)}
                        onChange={() =>
                          setSelectedIndustries((prev) => toggle(prev, industry))
                        }
                        className="h-4 w-4 rounded-sm border-navy/40 text-navy focus:ring-navy"
                      />
                      {industry}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            {/* Step 3 */}
            <div className="border-t border-navy/15 pt-10">
              <p className="font-body text-sm tracking-wide text-gold-dark">Step 3</p>
              <h2 className="mt-2 font-display text-2xl font-medium text-navy-dark">
                What are you interested in?
              </h2>
              <p className="mt-2 text-sm text-ink/70">
                Tip: you can select more than one option below.
              </p>

              <div className="mt-5 space-y-2">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center gap-2 text-sm text-ink/80">
                    <input
                      type="checkbox"
                      checked={selectedInterests.includes(interest)}
                      onChange={() => setSelectedInterests((prev) => toggle(prev, interest))}
                      className="h-4 w-4 rounded-sm border-navy/40 text-navy focus:ring-navy"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-gold px-5 py-3 font-medium text-ink transition-colors hover:bg-gold-dark hover:text-paper sm:w-auto sm:px-10"
            >
              Proceed
            </button>
          </form>

          <div className="mt-14 grid gap-10 border-t border-navy/15 pt-10 sm:grid-cols-2">
            <div>
              <p className="font-display text-lg font-medium text-navy-dark">Need help?</p>
              <p className="mt-2 font-body text-sm text-ink/75">info@alitecafrica.org</p>
              <p className="font-body text-sm text-ink/75">+254 700 000 000</p>
              <p className="font-body text-sm text-ink/75">Technological Park, Mangu Campus, Zetech University</p>
            </div>
            <div>
              <p className="font-display text-lg font-medium text-navy-dark">Good to know</p>
              <ul className="mt-2 space-y-2 font-body text-sm text-ink/75">
                <li>Early-bird delegate rates apply until three months before the event.</li>
                <li>Exhibitors receive a prospectus and floor plan on enquiry.</li>
                <li>Letters of invitation for eTA applications are issued after registration.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
