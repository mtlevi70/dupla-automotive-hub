import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { business } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Project Requests – DuplaÁsz" },
      { name: "description", content: "Ask about an upholstery or restoration project, or a product in our materials store. Phone, email and opening hours." },
      { property: "og:title", content: "Contact DuplaÁsz" },
      { property: "og:description", content: "Send a project request with photos, or call and visit the workshop and store." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="container-site py-12 md:py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">Tell us what you're working on</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Describe the piece and what you'd like done. Photos help a lot. We'll reply as soon as we can.
      </p>
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <ContactForm />
        <aside className="space-y-6">
          <div className="space-y-4 rounded-xl border bg-surface p-6">
            <h2 className="text-xl">Prefer to call or email?</h2>
            <p className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><a href={business.phoneHref} className="font-medium hover:underline">{business.phone}</a></p>
            <p className="flex gap-3"><Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><a href={business.emailHref} className="font-medium hover:underline">{business.email}</a></p>
            <p className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden /><span>{business.address}<br />{business.city}</span></p>
          </div>
          <div className="rounded-xl border bg-surface p-6">
            <h2 className="text-xl">Opening hours</h2>
            <dl className="mt-4 space-y-2 text-sm">
              {business.hours.map((h) => (
                <div key={h.days} className="flex justify-between"><dt className="text-muted-foreground">{h.days}</dt><dd>{h.time}</dd></div>
              ))}
            </dl>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-input bg-muted text-sm text-muted-foreground">
            Map — add once the address is confirmed
          </div>
        </aside>
      </div>
    </section>
  );
}
