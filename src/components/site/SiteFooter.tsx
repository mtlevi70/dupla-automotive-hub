import { Link } from "@tanstack/react-router";
import logoWhite from "@/assets/duplaasz-logo-white.png.asset.json";
import { business, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logoWhite.url} alt="DuplaÁsz" width={133} height={60} className="h-12 w-auto" loading="lazy" />
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/70">
            Upholstery and restoration workshop, plus a store for upholstery materials.
          </p>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">Pages</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:underline">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">Contact</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>{business.address}<br />{business.city}</p>
            <p><a href={business.phoneHref} className="hover:underline">{business.phone}</a></p>
            <p><a href={business.emailHref} className="hover:underline">{business.email}</a></p>
          </address>
        </div>
        <div>
          <h2 className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">Opening hours</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {business.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-ink-foreground/70">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-ink-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {business.name}</p>
          <p>Photos on this site are sample images until workshop photos are added.</p>
        </div>
      </div>
    </footer>
  );
}
