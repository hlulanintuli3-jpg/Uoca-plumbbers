import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Heart, Clock, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Uoca Plumbers — Family-run Plumbers in Gauteng" },
      { name: "description", content: "Ten years of honest plumbing across Johannesburg. Meet the family-run team behind Uoca Plumbers — PIRB-registered, fully insured, neighbourhood-trusted." },
      { property: "og:title", content: "About Uoca Plumbers" },
      { property: "og:description", content: "A decade of honest plumbing across Gauteng." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { Icon: ShieldCheck, title: "Integrity first", desc: "We quote up front and stand behind every job in writing." },
  { Icon: Heart, title: "Treat homes well", desc: "Drop sheets down, boots off, and a clean exit — every time." },
  { Icon: Clock, title: "Show up on time", desc: "If we're running late, you'll hear from us first — not the other way around." },
  { Icon: Award, title: "Do it once, properly", desc: "12-month workmanship guarantee on every install and repair." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our story</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-6xl text-balance max-w-3xl">
            A decade of honest plumbing — built one neighbourhood at a time.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Uoca Plumbers started in 2015 with one van, one toolbox, and a
              simple promise: do the job right and treat people fairly. Ten
              years later we're still family-run, but we've grown into a team
              of certified plumbers serving thousands of homes and businesses
              across Gauteng.
            </p>
            <p>
              We believe plumbing shouldn't feel stressful. That means clear
              quotes, friendly technicians who explain what they're doing, and
              the kind of after-service support most companies have forgotten.
            </p>
            <p>
              Whether it's a 2 a.m. burst pipe or a planned bathroom renovation,
              you get the same crew, the same standard, the same straight talk.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-hero p-8 text-primary-foreground shadow-elegant">
            <p className="font-display text-5xl font-bold">10+</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-primary-foreground/80">Years in business</p>
            <div className="mt-6 h-px bg-primary-foreground/20" />
            <p className="mt-6 font-display text-5xl font-bold">2,400+</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-primary-foreground/80">Jobs completed</p>
            <div className="mt-6 h-px bg-primary-foreground/20" />
            <p className="mt-6 font-display text-5xl font-bold">4.9★</p>
            <p className="mt-1 text-sm uppercase tracking-wider text-primary-foreground/80">Customer rating</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary hover:shadow-soft">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}