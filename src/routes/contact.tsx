import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { business } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kapcsolat és ajánlatkérés – DuplaÁsz" },
      { name: "description", content: "Érdeklődés kárpitos- és restaurálási munkákról vagy a szaküzlet termékeiről. Telefonszám, e-mail-cím és nyitvatartás." },
      { property: "og:title", content: "Kapcsolat – DuplaÁsz" },
      { property: "og:description", content: "Érdeklődés fényképekkel, telefonos kapcsolat, valamint a műhely és a szaküzlet elérhetőségei." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-site py-12 md:py-20">
      <p className="eyebrow">Kapcsolat</p>
      <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">Milyen munkáról van szó?</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A darab és a tervezett munka rövid leírása, valamint néhány fénykép sokat segít az egyeztetésben. Telefonos vagy e-mailes megkeresésre a lehető leghamarabb válaszolunk.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <ContactForm />
        <aside className="space-y-6">
          <div className="space-y-4 rounded-xl border bg-surface p-6">
            <h2 className="text-xl">Inkább telefonon vagy e-mailben?</h2>
            <p className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><a href={business.phoneHref} className="font-medium hover:underline">{business.phone}</a></p>
            <p className="flex gap-3"><Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><a href={business.emailHref} className="font-medium hover:underline">{business.email}</a></p>
            <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>{business.address}<br />{business.city}</span></p>
          </div>
          <div className="rounded-xl border bg-surface p-6">
            <h2 className="text-xl">Nyitvatartás</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {business.hours.map((h) => (
                <div key={h.days} className="flex justify-between"><dt className="text-muted-foreground">{h.days}</dt><dd>{h.time}</dd></div>
              ))}
            </dl>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
            <iframe
              title="Dupla Ász térkép"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.0181674767573!2d20.386949376712515!3d47.89733366785502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d81a5a58dd5%3A0xf6ee659aa649437b!2sDupla%20%C3%81sz%2BA%20Kft!5e0!3m2!1shu!2spt!4v1793727496088!5m2!1shu!2spt"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
