import { Link } from "@tanstack/react-router";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-subtle">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">Uoca Plumbers</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Reliable plumbing for homes and businesses across Gauteng. Licensed,
              insured, and on call 24/7 for emergencies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> 010 123 4567</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> hello@uocaplumbers.co.za</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Johannesburg, Gauteng</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Uoca Plumbers. All rights reserved.</p>
          <p>PIRB registered · Fully insured</p>
        </div>
      </div>
    </footer>
  );
}