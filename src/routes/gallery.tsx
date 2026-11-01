import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import sofa from "@/assets/sofa.jpg";
import vehicle from "@/assets/vehicle-seats.jpg";
import marine from "@/assets/marine.jpg";
import antique from "@/assets/antique-restoration.jpg";
import foam from "@/assets/foam.jpg";
import carInterior from "@/assets/gallery-car-interior.jpg";
import armchair from "@/assets/gallery-armchair.jpg";
import motoSeat from "@/assets/gallery-motorcycle-seat.jpg";
import { SampleImage } from "@/components/site/SampleImage";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery – DuplaÁsz" },
      { name: "description", content: "Photos of upholstery and restoration work: cars, motorcycles, couches, armchairs, boats, equipment and antiques." },
      { property: "og:title", content: "Project Gallery – DuplaÁsz" },
      { property: "og:description", content: "Browse finished upholstery and restoration projects by category." },
    ],
  }),
  component: Gallery,
});

const categories = ["All", "Cars & motorcycles", "Couches & chairs", "Boats", "Equipment", "Antiques"] as const;
type Category = (typeof categories)[number];

// Replace with real project photos as they become available.
const projects: { img: string; title: string; cat: Exclude<Category, "All"> }[] = [
  { img: carInterior, title: "Classic car interior", cat: "Cars & motorcycles" },
  { img: vehicle, title: "Vehicle seats", cat: "Cars & motorcycles" },
  { img: motoSeat, title: "Motorcycle saddle", cat: "Cars & motorcycles" },
  { img: sofa, title: "Sofa reupholstery", cat: "Couches & chairs" },
  { img: armchair, title: "Velvet armchair", cat: "Couches & chairs" },
  { img: marine, title: "Boat cushions", cat: "Boats" },
  { img: foam, title: "Treatment table padding", cat: "Equipment" },
  { img: antique, title: "Antique chair restoration", cat: "Antiques" },
];

function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <section className="bg-surface">
        <div className="container-site py-12 md:py-20">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-4 text-4xl md:text-6xl">Work from the workshop</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A look at finished projects. Pick a category to see only that kind of work.
          </p>
        </div>
      </section>

      <section className="container-site py-12 md:py-16">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <article key={p.title}>
              <SampleImage src={p.img} alt={p.title} className="aspect-[4/3]" />
              <h2 className="mt-3 text-lg">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.cat}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Have something similar in mind?" text="Send us a few photos and we'll tell you what's possible." />
    </>
  );
}
