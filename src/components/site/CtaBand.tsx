import { Link } from "@tanstack/react-router";
import { business } from "@/content/site";

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/85">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-md bg-background px-5 py-3 font-semibold text-foreground transition-opacity hover:opacity-90">
            Érdeklődés küldése
          </Link>
          <a href={business.phoneHref} className="rounded-md border border-primary-foreground/40 px-5 py-3 font-semibold hover:bg-primary-foreground/10">
            Telefon: {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
