import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/workshop-hero.jpg";
import sofa from "@/assets/sofa.jpg";
import vehicle from "@/assets/vehicle-seats.jpg";
import marine from "@/assets/marine.jpg";
import antique from "@/assets/antique-restoration.jpg";
import foam from "@/assets/foam.jpg";
import { SampleImage } from "@/components/site/SampleImage";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Upholstery & Restoration Services – DuplaÁsz" },
      { name: "description", content: "Refurbishment, repairs and restoration for furniture, vehicles, boats, professional equipment and antiques." },
      { property: "og:title", content: "Upholstery & Restoration Services – DuplaÁsz" },
      { property: "og:description", content: "Refurbishment, repairs and restoration for furniture, vehicles, boats and antiques." },
    ],
  }),
  component: Services,
});

const types = [
  { t: "Refurbishment", d: "Giving a worn piece a new life. The goal is something comfortable and good-looking to use again — new fabric, new foam, a different colour if you like." },
  { t: "Repair & servicing", d: "Fixing a specific problem: a split seam, a sagging seat, broken webbing, a torn panel. No full rebuild unless it's needed." },
  { t: "Restoration", d: "For antique and historic pieces. We aim to stay as close to the original as possible — materials, construction, colours and decorative details." },
];

const areas = [
  { img: sofa, t: "Furniture", d: "Sofas, armchairs, chairs, benches, headboards and ottomans. Reupholstery, new cushions, frame and spring repairs." },
  { img: vehicle, t: "Cars, motorcycles & other vehicles", d: "Seats, door panels, headliners, motorcycle saddles and seat foam reshaping." },
  { img: marine, t: "Boats", d: "Deck and cabin cushions, seating and covers in marine-grade materials." },
  { img: foam, t: "Professional equipment", d: "Massage and treatment tables, salon chairs, gym benches and similar equipment." },
  { img: antique, t: "Antique & religious furniture", d: "Antique chairs and sofas, tabernacle cabinets, historic writing furniture, pews and kneelers." },
];

function Services() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Workshop services</p>
            <h1 className="mt-4 text-4xl md:text-6xl">Upholstery work, big and small</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From a single dining chair to a full car interior. Upholstery is more than fabric — we also cut and replace
              foam, add padding, do quilting and decorative stitching, and repair what's underneath.
            </p>
          </div>
          <SampleImage src={hero} alt="Upholsterer at work in the workshop" priority className="aspect-[4/3]" />
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Three kinds of work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Not sure which one you need? That's fine — tell us what you have and we'll suggest the sensible option.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {types.map((x, i) => (
            <article key={x.t} className="rounded-xl border bg-card p-6">
              <span className="font-display text-2xl text-primary">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{x.t}</h3>
              <p className="mt-3 text-muted-foreground">{x.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <h2 className="text-3xl md:text-4xl">What we upholster</h2>
          <ul className="mt-10 space-y-12">
            {areas.map((a, i) => (
              <li key={a.t} className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                <SampleImage src={a.img} alt={`${a.t} example`} className={`aspect-[3/2] ${i % 2 ? "md:order-2" : ""}`} />
                <div>
                  <h3 className="text-2xl md:text-3xl">{a.t}</h3>
                  <p className="mt-3 text-muted-foreground">{a.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-16 rounded-xl border-l-4 border-primary bg-card p-6 md:p-8">
            <h3 className="text-2xl">Something else entirely?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Upholstered walls, speaker coverings, custom padding, props, one-off pieces — if it involves fabric, leather or
              foam, ask us. The list above isn't everything we do.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Recent work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Photos of our own projects, including before-and-after shots, will be added here soon.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-input bg-muted text-sm text-muted-foreground">
              Project photo {n} — coming soon
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Describe your project" text="A few photos and a short note are usually enough for us to give you a first idea." />
    </>
  );
}
