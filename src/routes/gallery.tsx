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
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Munkáink galériája – DuplaÁsz" },
      { name: "description", content: "Kárpitos- és restaurálási munkák képei: autók, motorkerékpárok, kanapék, fotelek, hajók, berendezések és antik bútorok." },
      { property: "og:title", content: "Munkáink galériája – DuplaÁsz" },
      { property: "og:description", content: "Kárpitos- és restaurálási munkák képei kategóriák szerint." },
    ],
  }),
  component: Gallery,
});

const categories = ["Összes", "Autók és motorok", "Kanapék és székek", "Hajók", "Berendezések", "Antik bútorok"] as const;
type Category = (typeof categories)[number];

// Valódi projektfotókra cserélendők, amint rendelkezésre állnak.
const projects: { img: string; title: string; cat: Exclude<Category, "Összes"> }[] = [
  { img: carInterior, title: "Klasszikus autó belső tere", cat: "Autók és motorok" },
  { img: vehicle, title: "Járműülések", cat: "Autók és motorok" },
  { img: motoSeat, title: "Motorkerékpár-ülés", cat: "Autók és motorok" },
  { img: sofa, title: "Kanapé átkárpitozása", cat: "Kanapék és székek" },
  { img: armchair, title: "Bársonyfotel", cat: "Kanapék és székek" },
  { img: marine, title: "Hajópárnák", cat: "Hajók" },
  { img: foam, title: "Kezelőágy párnázása", cat: "Berendezések" },
  { img: antique, title: "Antik szék restaurálása", cat: "Antik bútorok" },
];

function Gallery() {
  const [active, setActive] = useState<Category>("Összes");
  const [open, setOpen] = useState<number | null>(null);
  const shown = active === "Összes" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      <section className="bg-surface">
        <div className="container-site py-12 md:py-20">
          <p className="eyebrow">Galéria</p>
          <h1 className="mt-4 text-4xl md:text-6xl">Munkák a műhelyből</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ízelítő a műhelyben vállalt munkákból. A képek kategóriák szerint szűrhetők.
          </p>
        </div>
      </section>

      <section className="container-site py-12 md:py-16">
        <div role="group" aria-label="Munkák szűrése" className="flex flex-wrap gap-2">
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
          {shown.map((p, i) => (
            <article key={p.title}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Kép nagyítása: ${p.title}`}
                className="block w-full cursor-pointer overflow-hidden rounded-md transition-opacity hover:opacity-90"
              >
                <SampleImage src={p.img} alt={p.title} className="aspect-[4/3]" />
              </button>
              <h2 className="mt-3 text-lg">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.cat}</p>
            </article>
          ))}
        </div>
      </section>

      {open !== null && (
        <Lightbox items={shown} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}

      <CtaBand title="Hasonló elképzelés?" text="Néhány fénykép és egy rövid leírás alapján szívesen elmondjuk, milyen megoldások jöhetnek szóba." />
    </>
  );
}
