import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import hero from "@/assets/workshop-hero.jpg";
import sofa from "@/assets/sofa.jpg";
import vehicle from "@/assets/vehicle-seats.jpg";
import marine from "@/assets/marine.jpg";
import antique from "@/assets/antique-restoration.jpg";
import store from "@/assets/store-materials.jpg";
import foam from "@/assets/foam.jpg";
import hardware from "@/assets/hardware.jpg";
import { SampleImage } from "@/components/site/SampleImage";
import { CtaBand } from "@/components/site/CtaBand";
import { business } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DuplaÁsz – Upholstery Workshop & Materials Store" },
      { name: "description", content: "Furniture, vehicle, boat and equipment upholstery, antique restoration, and a store for foam, leather and fabrics." },
      { property: "og:title", content: "DuplaÁsz – Upholstery Workshop & Materials Store" },
      { property: "og:description", content: "Upholstery, repairs and restoration for almost anything padded or covered, plus a materials store." },
    ],
  }),
  component: Home,
});

const work = [
  { img: sofa, title: "Furniture", text: "Sofas, armchairs, dining chairs, headboards — new covers, new foam, fixed frames." },
  { img: vehicle, title: "Cars & motorcycles", text: "Seats, door cards, headliners and motorcycle saddles." },
  { img: marine, title: "Boats", text: "Cushions and seating in materials made for sun and water." },
  { img: antique, title: "Antiques", text: "Careful restoration of older and historic pieces, including writing furniture." },
];

const odd = [
  "Massage & treatment tables",
  "Upholstered walls & panels",
  "Speaker coverings",
  "Church pews & kneelers",
  "Bar stools & booth seating",
  "Custom cushions & padding",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Upholstery · Restoration · Materials</p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              If it's padded or covered, we can probably fix it.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A small upholstery workshop in {"["}Location{"]"}. We reupholster furniture, vehicle seats, boat cushions and
              professional equipment, restore antiques — and run a store full of foam, leather and fabric.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
                Ask about your project <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link to="/store" className="rounded-md border border-input bg-background px-5 py-3 font-semibold transition-colors hover:bg-muted">
                Visit the store
              </Link>
            </div>
          </div>
          <SampleImage src={hero} alt="Upholsterer fitting velvet fabric over an armchair frame" priority className="aspect-[4/3] shadow-xl lg:aspect-[5/4]" />
        </div>
      </section>

      {/* Two sides */}
      <section className="container-site grid gap-6 py-16 md:grid-cols-2 md:py-24">
        {[
          { to: "/services" as const, label: "The workshop", title: "Refurbish, repair, restore", text: "Bring us a worn chair, a torn car seat or a family heirloom. We'll tell you honestly what makes sense.", img: hero },
          { to: "/store" as const, label: "The store", title: "Materials for your own projects", text: "Foam cut to size, leather, upholstery fabrics, tacks, tools and supplies — for trade and DIY.", img: store },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="group grid overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg sm:grid-cols-[1fr_1.1fr]">
            <img src={c.img} alt="" width={1200} height={912} loading="lazy" className="aspect-[4/3] size-full object-cover sm:aspect-auto" />
            <div className="flex flex-col p-6 md:p-8">
              <p className="eyebrow">{c.label}</p>
              <h2 className="mt-2 text-2xl md:text-3xl">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-primary">
                Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* What we work on */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">What we work on</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Everyday pieces and the unusual ones</h2>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((w) => (
              <li key={w.title}>
                <SampleImage src={w.img} alt={`${w.title} upholstery example`} className="aspect-[4/5]" />
                <h3 className="mt-4 text-xl">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-xl border bg-card p-6 md:p-8">
            <h3 className="text-xl">Also on the workbench</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {odd.map((o) => (
                <li key={o} className="rounded-full bg-primary-soft px-3 py-1.5 text-sm font-medium text-accent-foreground">{o}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Not on the list? Send us a photo — odd requests are very welcome.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-3xl md:text-5xl">From a photo to a finished piece</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3">
            {[
              ["Tell us about it", "Send a few photos and a short description, or bring the piece in."],
              ["We take a look", "We'll discuss options, materials and what the work involves, then give you an estimate."],
              ["We get to work", "Once you're happy with the plan, the piece comes into the workshop."],
            ].map(([t, d], i) => (
              <li key={t} className="border-t-2 border-primary pt-4">
                <span className="font-display text-3xl text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Store preview */}
      <section className="bg-ink py-16 text-ink-foreground md:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow">In the store</p>
              <h2 className="mt-3 text-3xl md:text-5xl">Foam, leather, fabric — and the bits in between</h2>
            </div>
            <Link to="/store" className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">
              See what we stock <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { img: foam, t: "Foam & cushioning" },
              { img: store, t: "Leather & textiles" },
              { img: hardware, t: "Tacks, tools & supplies" },
            ].map((s) => (
              <div key={s.t}>
                <SampleImage src={s.img} alt={s.t} className="aspect-[4/3]" />
                <p className="mt-3 font-semibold">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="container-site grid gap-8 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="eyebrow">Visit us</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Workshop and store under one roof</h2>
          <p className="mt-4 text-muted-foreground">Drop in to browse materials or bring a piece for us to look at.</p>
        </div>
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /> <span>{business.address}, {business.city}</span></p>
          <p className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /> <a href={business.phoneHref} className="hover:underline">{business.phone}</a></p>
          <dl className="space-y-1 border-t pt-4 text-sm">
            {business.hours.map((h) => (
              <div key={h.days} className="flex justify-between"><dt className="text-muted-foreground">{h.days}</dt><dd>{h.time}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand title="Got something that needs work?" text="Describe it, attach a photo if you can, and we'll get back to you." />
    </>
  );
}
