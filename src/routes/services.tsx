import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Flame, Wind, Wrench, Bath, Building2, ShowerHead, Gauge, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services — Uoca Plumbers" },
      { name: "description", content: "Geyser repairs, leak detection, drain unblocking, bathroom installs, commercial maintenance and 24/7 emergency plumbing across Gauteng." },
      { property: "og:title", content: "Plumbing Services — Uoca Plumbers" },
      { property: "og:description", content: "Residential & commercial plumbing services across Gauteng." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { Icon: Droplets, title: "Leak detection & repair", desc: "Acoustic and thermal-imaging leak detection — no unnecessary breaking of walls or tiles." },
  { Icon: Flame, title: "Geyser installation", desc: "Supply, installation and replacement of electric, solar, and heat-pump geysers — all major brands." },
  { Icon: Wind, title: "Drain unblocking", desc: "High-pressure jetting and CCTV inspection for kitchens, bathrooms and main lines." },
  { Icon: Bath, title: "Bathroom renovations", desc: "Full bathroom installs from rough-in to finish, project-managed and tile-ready." },
  { Icon: ShowerHead, title: "Taps, mixers & fittings", desc: "Replacement of taps, mixers, toilets, basins and shower fittings with quality SABS-approved parts." },
  { Icon: Gauge, title: "Water pressure & pumps", desc: "Pressure regulation, booster pumps, and pump repairs for homes and complexes." },
  { Icon: Building2, title: "Commercial maintenance", desc: "Scheduled maintenance contracts for offices, retail and body corporates." },
  { Icon: Wrench, title: "24/7 emergency callouts", desc: "Burst pipes, blocked drains, no hot water — whenever, we're on the way." },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Services</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl text-balance max-w-3xl">
            Every plumbing service, under one trusted roof.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From a dripping tap to a full bathroom renovation, our certified team
            handles it with the same care and precision.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, desc }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-gradient-hero p-10 text-primary-foreground shadow-elegant sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Don't see what you need?</h2>
              <p className="mt-2 text-primary-foreground/80">If it involves water, we probably do it. Just ask.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-smooth hover:bg-accent">
              Ask about your job <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}