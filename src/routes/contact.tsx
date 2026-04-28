import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Uoca Plumbers — Get a Free Quote" },
      { name: "description", content: "Call 010 123 4567 or send a message. Free quotes, fast response across Johannesburg & Gauteng. 24/7 emergency line." },
      { property: "og:title", content: "Contact Uoca Plumbers" },
      { property: "og:description", content: "Free quotes & 24/7 emergency plumbing in Gauteng." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl text-balance max-w-3xl">
            Let's get your water flowing again.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Call us for emergencies, or send a quick message and we'll come back
            to you with a free quote — usually within the hour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { Icon: Phone, label: "Phone (24/7)", value: "010 123 4567", href: "tel:+27101234567" },
              { Icon: Mail, label: "Email", value: "hello@uocaplumbers.co.za", href: "mailto:hello@uocaplumbers.co.za" },
              { Icon: MapPin, label: "Service area", value: "Johannesburg & greater Gauteng" },
              { Icon: Clock, label: "Hours", value: "Mon–Sat 7:00–18:00 · Emergencies 24/7" },
            ].map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href ?? "#"}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:border-primary hover:shadow-soft"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-hero">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="mt-1 font-medium">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft lg:col-span-3"
          >
            {sent ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Message received!</h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  Thanks — one of our plumbers will be in touch shortly. For
                  emergencies, please call 010 123 4567.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold">Request a free quote</h2>
                <p className="mt-1 text-sm text-muted-foreground">No call-out fee for quotes.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone number" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                  <Field label="Suburb" name="suburb" className="sm:col-span-2" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">Describe the job</label>
                  <textarea
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="e.g. Geyser leaking in the ceiling, started this morning…"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow sm:w-auto"
                >
                  Send message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, className }: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}