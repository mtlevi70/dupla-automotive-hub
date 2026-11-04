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
      { title: "Kárpitozás és restaurálás – DuplaÁsz" },
      { name: "description", content: "Bútorok, járművek, hajók, különféle berendezések és antik tárgyak felújítása, javítása és restaurálása." },
      { property: "og:title", content: "Kárpitozás és restaurálás – DuplaÁsz" },
      { property: "og:description", content: "Bútorok, járművek, hajók és antik tárgyak felújítása, javítása és restaurálása." },
    ],
  }),
  component: Services,
});

const types = [
  { t: "Felújítás", d: "A kopott darabok új életet kapnak: új huzattal, szivaccsal vagy akár más színben ismét kényelmesek és szépek lehetnek." },
  { t: "Javítás és karbantartás", d: "Konkrét hibák javítása, például felbomlott varrás, megsüllyedt ülés, elszakadt heveder vagy kiszakadt kárpit esetén. Teljes felújításra csak indokolt esetben kerül sor." },
  { t: "Restaurálás", d: "Antik és történeti értékű darabok helyreállítása. A cél az eredeti anyagok, szerkezet, színek és díszítőelemek lehető legnagyobb megőrzése." },
];

const areas = [
  { img: sofa, t: "Bútorok", d: "Kanapék, fotelek, székek, padok, ágyvégek és puffok. Átkárpitozás, új párnázat, váz- és rugójavítás.", alt: "Kárpitozott kanapé" },
  { img: vehicle, t: "Autók, motorkerékpárok és más járművek", d: "Ülések, ajtókárpitok, tetőkárpitok, motorülések és az ülések szivacsának újraformázása.", alt: "Kárpitozott járműülések" },
  { img: marine, t: "Hajók", d: "Fedélzeti és kabinpárnák, ülések és huzatok vízi használatra alkalmas anyagokból.", alt: "Hajóülések és párnák" },
  { img: foam, t: "Kezelőágyak és más berendezések", d: "Masszázs- és kezelőágyak, fodrász- és kozmetikai székek, edzőtermi padok és hasonló berendezések.", alt: "Kezelőágy párnázata" },
  { img: antique, t: "Antik és egyházi bútorok", d: "Antik székek és kanapék, tabernákulumszekrények, régi íróbútorok, templomi padok és térdeplők.", alt: "Restaurált antik szék" },
];

function Services() {
  return (
    <>
      <section className="bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">A műhelyben</p>
            <h1 className="mt-4 text-4xl md:text-6xl">Kárpitosmunkák kicsiben és nagyban</h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Egyetlen étkezőszéktől a teljes autóbelsőig. A kárpitozás több mint szövetcsere: a szivacs méretre vágása és cseréje,
              a párnázás, a tűzés, a díszvarrás és a kárpit alatti szerkezet javítása is része lehet a munkának.
            </p>
          </div>
          <SampleImage src={hero} alt="Kárpitos munka közben a műhelyben" priority className="aspect-[4/3]" />
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Háromféle munka</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Ha nem egyértelmű, melyikre van szükség, a darab bemutatása után segítünk kiválasztani a megfelelő megoldást.</p>
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
          <h2 className="text-3xl md:text-4xl">Mit lehet átkárpitozni?</h2>
          <ul className="mt-10 space-y-12">
            {areas.map((a, i) => (
              <li key={a.t} className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                <SampleImage src={a.img} alt={a.alt} className={`aspect-[3/2] ${i % 2 ? "md:order-2" : ""}`} />
                <div>
                  <h3 className="text-2xl md:text-3xl">{a.t}</h3>
                  <p className="mt-3 text-muted-foreground">{a.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-16 rounded-xl border-l-4 border-primary bg-card p-6 md:p-8">
            <h3 className="text-2xl">Más jellegű munka?</h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Kárpitozott falak, hangfalak borítása, egyedi párnázás vagy díszletek készítése: sokféle különleges munka vállalható.
              Ha szövet, bőr vagy szivacs kell hozzá, érdemes érdeklődni. A felsorolás nem teljes.
            </p>
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl">Legutóbbi munkák</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Hamarosan saját munkáinkról készült fotók, köztük előtte–utána képek kerülnek ide.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex aspect-[4/3] items-center justify-center rounded-lg border-2 border-dashed border-input bg-muted text-sm text-muted-foreground">
              {n}. munkafotó – hamarosan
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Milyen munkáról van szó?" text="Néhány fénykép és egy rövid leírás általában elegendő ahhoz, hogy első javaslatot adhassunk." />
    </>
  );
}
