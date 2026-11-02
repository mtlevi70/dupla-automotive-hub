import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/duplaasz-logo.png";
import { business, nav } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-site flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" aria-label="DuplaÁsz home" className="shrink-0">
          <img src={logo} alt="DuplaÁsz" width={133} height={60} className="h-12 w-auto" />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-md px-3 py-2 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{
                    className:
                      "text-foreground underline decoration-primary decoration-2 underline-offset-8",
                  }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={business.phoneHref} className="flex items-center gap-2 text-sm font-medium">
            <Phone className="size-4 text-primary" aria-hidden /> {business.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Ask about a project
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden border-t">
          <ul className="container-site flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t pt-4">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 px-2 py-2 font-medium"
              >
                <Phone className="size-4 text-primary" aria-hidden /> {business.phone}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
