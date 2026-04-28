import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Droplets } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero shadow-soft transition-smooth group-hover:shadow-glow">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">Uoca Plumbers</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Trusted in SA</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md transition-smooth hover:text-foreground hover:bg-accent"
              activeProps={{ className: "px-4 py-2 text-sm font-medium rounded-md text-primary bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+27101234567"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:bg-primary-deep hover:shadow-elegant"
          >
            <Phone className="h-4 w-4" /> 010 123 4567
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                activeProps={{ className: "px-4 py-3 rounded-md text-sm font-medium text-primary bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+27101234567"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call 010 123 4567
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}