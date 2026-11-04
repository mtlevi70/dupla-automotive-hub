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
      { title: "DuplaÁsz – Kárpitosműhely és szaküzlet" },
      { name: "description", content: "Bútorok, járművek, hajók és berendezések kárpitozása, antik darabok restaurálása, valamint habszivacsot, bőrt és szövetet kínáló szaküzlet." },
      { property: "og:title", content: "DuplaÁsz – Kárpitosműhely és szaküzlet" },
      { property: "og:description", content: "Kárpitozás, javítás és restaurálás szinte minden párnázott vagy kárpitozott tárgyhoz, kárpitos szaküzlettel egy helyen." },
    ],
  }),
  component: Home,
});

const work = [
  { img: sofa, title: "Bútorok", text: "Kanapék, fotelek, étkezőszékek és ágyvégek új huzattal, szivaccsal és javított vázzal.", alt: "Kárpitozott kanapé" },
  { img: vehicle, title: "Autók és motorkerékpárok", text: "Ülések, ajtókárpitok, tetőkárpitok és motorülések.", alt: "Kárpitozott járműülések" },
  { img: marine, title: "Hajók", text: "Párnák és ülések nap- és vízálló anyagokból.", alt: "Hajóülések és párnák" },
  { img: antique, title: "Antik bútorok", text: "Régi és történeti értékű darabok gondos restaurálása, az íróbútorokat is beleértve.", alt: "Restaurált antik bútor" },
];

const odd = [
  "Masszázs- és kezelőágyak",
  "Kárpitozott falak és panelek",
  "Hangfalak borítása",
  "Templomi padok és térdeplők",
  "Bárszékek és vendéglátóhelyek beépített ülőbútorai",
  "Egyedi párnák és párnázatok",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-site grid items-center gap-10 py-12 md:py-20 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Kárpitozás · Restaurálás · Alapanyagok</p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              Ami párnázott vagy kárpitozott, jó eséllyel javítható.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A kis műhelyben bútorokat, járműüléseket, hajópárnákat és különféle berendezéseket kárpitozunk újra,
              antik darabokat pedig restaurálunk. A mellette működő szaküzletben habszivacs, bőr és kárpitszövet kapható.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover">
                Ajánlatkérés <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link to="/store" className="rounded-md border border-input bg-background px-5 py-3 font-semibold transition-colors hover:bg-muted">
                A szaküzlet
              </Link>
            </div>
          </div>
          <SampleImage src={hero} alt="Kárpitos bársonyszövetet illeszt egy fotel vázára" priority className="aspect-[4/3] shadow-xl lg:aspect-[5/4]" />
        </div>
      </section>

      {/* Two sides */}
      <section className="container-site grid gap-6 py-16 md:grid-cols-2 md:py-24">
        {[
          { to: "/services" as const, label: "A műhely", title: "Felújítás, javítás, restaurálás", text: "Kopott szék, szakadt autóülés vagy családi örökség? Őszinte szakmai tanács arról, melyik megoldás éri meg.", img: hero },
          { to: "/store" as const, label: "A szaküzlet", title: "Alapanyagok saját munkákhoz", text: "Méretre vágott habszivacs, bőr, kárpitszövet, díszszegek, szerszámok és kellékek szakembereknek és otthoni kárpitozáshoz.", img: store },
        ].map((c) => (
          <Link key={c.to} to={c.to} className="group grid overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-lg sm:grid-cols-[1fr_1.1fr]">
            <SampleImage src={c.img} alt="" className="aspect-[2/1] w-full sm:aspect-auto sm:h-full" />
            <div className="relative flex flex-col bg-card p-6 md:p-8">
              <p className="eyebrow">{c.label}</p>
              <h2 className="mt-2 text-2xl md:text-3xl">{c.title}</h2>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-primary">
                Részletek <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* What we work on */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="eyebrow">Mivel foglalkozik a műhely?</p>
            <h2 className="mt-3 text-3xl md:text-5xl">Hétköznapi és különleges darabok</h2>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {work.map((w) => (
              <li key={w.title}>
                <SampleImage src={w.img} alt={w.alt} className="aspect-[4/5]" />
                <h3 className="mt-4 text-xl">{w.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 rounded-xl border bg-card p-6 md:p-8">
            <h3 className="text-xl">További munkák</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {odd.map((o) => (
                <li key={o} className="rounded-full bg-primary-soft px-3 py-1.5 text-sm font-medium text-accent-foreground">{o}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              A felsorolás nem teljes. Szokatlan feladatról is érdemes fotót küldeni; az egyedi ötleteknek is örülünk.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">A munka menete</p>
            <h2 className="mt-3 text-3xl md:text-5xl">A fotótól az elkészült darabig</h2>
          </div>
          <ol className="grid gap-8 sm:grid-cols-3">
            {[
              ["A darab bemutatása", "Néhány fotó és rövid leírás, vagy a darab személyes bemutatása alapján indul az egyeztetés."],
              ["Felmérés és árajánlat", "Az anyagok és a szükséges munka egyeztetése után előzetes árajánlat készül."],
              ["Műhelymunka", "Az egyeztetett terv elfogadása után a darab a műhelybe kerül."],
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
              <p className="eyebrow">A szaküzletben</p>
              <h2 className="mt-3 text-3xl md:text-5xl">Habszivacs, bőr, szövet és minden más kellék</h2>
            </div>
            <Link to="/store" className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">
              Kínálat megtekintése <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { img: foam, t: "Habszivacs és párnázóanyagok" },
              { img: store, t: "Bőrök és szövetek" },
              { img: hardware, t: "Díszszegek, szerszámok és kellékek" },
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
          <p className="eyebrow">Személyesen</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Műhely és szaküzlet egy helyen</h2>
          <p className="mt-4 text-muted-foreground">Az üzletben az anyagok személyesen megtekinthetők, a felújítandó darab pedig a műhelyben bemutatható.</p>
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

      <CtaBand title="Felújításra váró darab?" text="Rövid leírás és lehetőség szerint néhány fotó alapján szívesen adunk első visszajelzést." />
    </>
  );
}
