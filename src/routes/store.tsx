import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import store from "@/assets/store-materials.jpg";
import foam from "@/assets/foam.jpg";
import vehicle from "@/assets/vehicle-seats.jpg";
import hardware from "@/assets/hardware.jpg";
import { SampleImage } from "@/components/site/SampleImage";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "Upholstery Materials Store – Foam, Leather, Fabrics | DuplaÁsz" },
      { name: "description", content: "Our store stocks upholstery foam, car and motorcycle seat foam, leather, fabrics, tacks, hardware, tools and supplies." },
      { property: "og:title", content: "Upholstery Materials Store – DuplaÁsz" },
      { property: "og:description", content: "Foam, leather, fabrics, tools and supplies for professionals and DIY upholsterers." },
    ],
  }),
  component: Store,
});

const main = [
  { img: foam, t: "Foam", d: "Upholstery foam in different densities and thicknesses, specialist cushioning, and foam for car and motorcycle seats." },
  { img: vehicle, t: "Leather", d: "Natural and synthetic leather for furniture, vehicle interiors and other upholstery work." },
  { img: store, t: "Textiles", d: "A wide range of upholstery fabrics — colours, weaves, textures and performance materials." },
];

const other = [
  "Upholstery nails, decorative tacks & rivets",
  "Furniture handles & hardware",
  "Upholstery tools & equipment",
  "Threads, needles & sewing accessories",
  "Straps, webbing & support materials",
  "Wadding, batting & other supplies",
];

function Store() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Materials store</p>
            <h1 className="mt-4 text-4xl md:text-6xl">Everything you need to upholster</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Our shop is open to professionals and to anyone working on their own project. Come in, see and feel the
              materials, and ask for advice.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              We don't sell online — please visit us or get in touch to ask about a specific product.
            </p>
          </div>
          <SampleImage src={store} alt="Shelves of upholstery fabrics and leather" priority className="aspect-[4/3]" />
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Our main ranges</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {main.map((m) => (
            <article key={m.t}>
              <SampleImage src={m.img} alt={`${m.t} in the store`} className="aspect-[4/5]" />
              <h3 className="mt-4 text-2xl">{m.t}</h3>
              <p className="mt-2 text-muted-foreground">{m.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">And the rest of the toolbox</h2>
            <ul className="mt-6 space-y-3">
              {other.map((o) => (
                <li key={o} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{o}</li>
              ))}
            </ul>
          </div>
          <SampleImage src={hardware} alt="Decorative tacks, hammer, thread and webbing" className="aspect-[4/3]" />
        </div>
      </section>

      <CtaBand title="Looking for something specific?" text="Ask us before you make the trip — we'll tell you what we have." />
    </>
  );
}
