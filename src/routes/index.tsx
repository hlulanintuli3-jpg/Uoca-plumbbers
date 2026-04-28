import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, Wrench, Droplets, Flame, Wind, CheckCircle2, Star } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1555633517-7bb1de4cef30?auto=format&fit=crop&w=1536&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Uoca Plumbers — 24/7 Plumbing in Johannesburg & Gauteng" },
      { name: "description", content: "Licensed plumbers for emergencies, geyser installs, leak detection & drain unblocking. Fast response across Gauteng. Call 010 123 4567." },
      { property: "og:title", content: "Uoca Plumbers — 24/7 Plumbing in Johannesburg" },
      { property: "og:description", content: "Fast, fair, fully insured plumbing across Gauteng." },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Available 24/7
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Plumbing you can <span className="bg-gradient-hero bg-clip-text text-transparent">actually trust.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
              From midnight burst pipes to full bathroom installs — Uoca Plumbers
              delivers fast, fair, fully-insured service across Gauteng.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-hero px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:shadow-glow"
              >
                Get a free quote
                <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                View services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> PIRB registered</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 60-min response</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> 4.9 / 5 rating</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-hero opacity-20 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={heroImage}
                alt="Uoca Plumber installing a chrome sink trap"
                width={1536}
                height={1280}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">2,400+ jobs</p>
                  <p className="text-xs text-muted-foreground">Completed across Gauteng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Every pipe, every problem.</h2>
          </div>
          <Link to="/services" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">All services →</Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Droplets, title: "Leak detection", desc: "Pinpoint hidden leaks without tearing up walls." },
            { Icon: Flame, title: "Geyser repair", desc: "Same-day installs and replacements, all brands." },
            { Icon: Wind, title: "Drain unblocking", desc: "High-pressure jetting for stubborn blockages." },
            { Icon: Wrench, title: "Maintenance", desc: "Annual checkups that prevent costly damage." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero shadow-soft transition-smooth group-hover:shadow-glow">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Uoca</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl text-balance">
                Honest pricing. Real plumbers. Zero surprises.
              </h2>
              <p className="mt-5 text-muted-foreground">
                We've spent ten years building a team that shows up when they say
                they will, fixes it right the first time, and leaves your home
                cleaner than they found it.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Up-front quotes — no hidden call-out fees",
                "Fully insured & PIRB-certified technicians",
                "12-month workmanship guarantee on every job",
                "Transparent SMS & WhatsApp updates",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 shadow-elegant sm:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Got a plumbing problem? Let's fix it today.
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Call now or send a quick message. Most quotes back within the hour.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-smooth hover:bg-accent"
            >
              Book a plumber <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}