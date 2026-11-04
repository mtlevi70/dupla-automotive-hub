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
      { title: "Kárpitos szaküzlet – szivacs, bőr, szövet | DuplaÁsz" },
      { name: "description", content: "Kárpitos szivacsok, autó- és motorülés-szivacsok, bőrök, szövetek, díszszegek, vasalatok, szerszámok és kellékek." },
      { property: "og:title", content: "Kárpitos szaküzlet – DuplaÁsz" },
      { property: "og:description", content: "Szivacsok, bőrök, szövetek, szerszámok és kellékek szakembereknek és otthoni kárpitozáshoz." },
    ],
  }),
  component: Store,
});

const main = [
  { img: foam, t: "Szivacsok", d: "Különböző sűrűségű és vastagságú kárpitos szivacsok, speciális párnázóanyagok, valamint autó- és motorülés-szivacsok." },
  { img: vehicle, t: "Bőrök", d: "Természetes bőrök és műbőrök bútorokhoz, járműbelsőkhöz és más kárpitosmunkákhoz." },
  { img: store, t: "Kárpitszövetek", d: "Sokféle színű, szövésű és tapintású kárpitszövet, köztük nagy igénybevételre alkalmas anyagok." },
];

const other = [
  "Kárpitos szegek, díszszegek és szegecsek",
  "Bútorfogantyúk és vasalatok",
  "Kárpitos szerszámok és eszközök",
  "Cérnák, tűk és varrási kellékek",
  "Pántok, hevederek és alátámasztó anyagok",
  "Vatta, bélésanyagok és más kellékek",
];

function Store() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Kárpitos szaküzlet</p>
            <h1 className="mt-4 text-4xl md:text-6xl">Minden, ami a kárpitozáshoz kell</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Az üzletben szakemberek és saját kezűleg kárpitozók is válogathatnak. Az anyagokat személyesen is meg lehet nézni
              és megtapintani, a választáshoz pedig tanács is kérhető.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Online vásárlásra nincs lehetőség. Az üzlet személyesen látogatható, egy-egy termékről pedig telefonon vagy e-mailben is lehet érdeklődni.
            </p>
          </div>
          <SampleImage src={store} alt="Polcok kárpitszövetekkel és bőrökkel" priority className="aspect-[4/3]" />
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Főbb termékek</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {main.map((m) => (
            <article key={m.t}>
              <SampleImage src={m.img} alt={`${m.t} az üzlet kínálatából`} className="aspect-[4/5]" />
              <h3 className="mt-4 text-2xl">{m.t}</h3>
              <p className="mt-2 text-muted-foreground">{m.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="container-site grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl md:text-4xl">További kellékek</h2>
            <ul className="mt-6 space-y-3">
              {other.map((o) => (
                <li key={o} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />{o}</li>
              ))}
            </ul>
          </div>
          <SampleImage src={hardware} alt="Díszszegek, kalapács, cérna és heveder" className="aspect-[4/3]" />
        </div>
      </section>

      <CtaBand title="Egy bizonyos termék kellene?" text="Indulás előtt érdemes érdeklődni, hogy éppen kapható-e." />
    </>
  );
}
