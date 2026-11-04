import { useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { z } from "zod";

const MAX_FILES = 5;
const MAX_MB = 10;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "A névnek legalább két karakterből kell állnia.").max(100, "A név legfeljebb 100 karakter lehet."),
  email: z.string().trim().email("Érvényes e-mail-cím szükséges.").max(255, "Az e-mail-cím legfeljebb 255 karakter lehet."),
  phone: z.string().trim().max(40, "A telefonszám legfeljebb 40 karakter lehet.").optional(),
  topic: z.enum(["project", "store", "other"], { errorMap: () => ({ message: "Érvényes téma kiválasztása szükséges." }) }),
  message: z.string().trim().min(10, "Az üzenetnek legalább 10 karakterből kell állnia.").max(2000, "Az üzenet legfeljebb 2000 karakter lehet."),
  consent: z.literal(true, { errorMap: () => ({ message: "A válaszadáshoz hozzá kell járulni az adatok kezeléséhez." }) }),
});

type Errors = Partial<Record<string, string>>;

const field =
  "w-full rounded-md border border-input bg-card px-3 py-2.5 text-base outline-none transition-colors focus-visible:border-primary aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Rejtett csapdamező: a robotok által kitöltött űrlapok figyelmen kívül maradnak.
    if (fd.get("company_website")) return;

    const files = (fd.getAll("photos") as File[]).filter((f) => f.size > 0);
    const result = contactSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      topic: fd.get("topic"),
      message: fd.get("message"),
      consent: fd.get("consent") === "on",
    });
    const next: Errors = {};
    if (!result.success) {
      for (const issue of result.error.issues) next[String(issue.path[0])] ??= issue.message;
    }
    if (files.length > MAX_FILES) next["photos"] = `Legfeljebb ${MAX_FILES} fénykép csatolható.`;
    else if (files.some((f) => f.size > MAX_MB * 1024 * 1024)) next["photos"] = `Egy fénykép mérete legfeljebb ${MAX_MB} MB lehet.`;
    setErrors(next);
    const firstKey = Object.keys(next)[0];
    if (firstKey) {
      setNotice(null);
      document.getElementById(firstKey)?.focus();
      return;
    }
    // TODO: a beküldés bekötése (például a result.data és a fájlok továbbítása egy végpontra).
    setNotice("Az űrlap kitöltése rendben van, de online még nem küldhető el. Egyelőre telefonon vagy e-mailben lehet érdeklődni.");
  }

  const err = (k: string) =>
    errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
  const aria = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Név *</label>
          <input id="name" name="name" autoComplete="name" className={`mt-1.5 ${field}`} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">E-mail-cím *</label>
          <input id="email" name="email" type="email" autoComplete="email" className={`mt-1.5 ${field}`} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Telefonszám <span className="text-muted-foreground">(nem kötelező)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={`mt-1.5 ${field}`} />
        </div>
        <div>
          <label htmlFor="topic" className="text-sm font-medium">Érdeklődés tárgya</label>
          <div className="relative mt-1.5">
            <select id="topic" name="topic" defaultValue="project" className={`${field} appearance-none pr-10`}>
              <option value="project">Kárpitos- vagy restaurálási munka</option>
              <option value="store">Üzletben kapható termék</option>
              <option value="other">Egyéb érdeklődés</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Üzenet *</label>
        <p className="text-sm text-muted-foreground">Milyen tárgyról van szó, körülbelül mekkora, és milyen munka szükséges?</p>
        <textarea id="message" name="message" rows={6} className={`mt-1.5 ${field}`} {...aria("message")} />
        {err("message")}
      </div>
      <div>
        <label htmlFor="photos" className="text-sm font-medium">Fényképek <span className="text-muted-foreground">(nem kötelező, legfeljebb {MAX_FILES} kép)</span></label>
        <input
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
          className="mt-1.5 block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-primary-soft file:px-4 file:py-2 file:font-semibold file:text-accent-foreground"
          {...aria("photos")}
        />
        {err("photos")}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Ezt a mezőt üresen kell hagyni</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm">
          <input id="consent" name="consent" type="checkbox" className="size-5 accent-primary" {...aria("consent")} />
          <span>Hozzájárulok, hogy a DuplaÁsz a megadott adataimat a megkeresésem megválaszolásához felhasználja. [Adatkezelési tájékoztató]</span>
        </label>
        {err("consent")}
      </div>
      <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto">
        Érdeklődés elküldése
      </button>
      <div role="status" aria-live="polite">
        {notice && <p className="rounded-md bg-primary-soft p-4 text-sm text-accent-foreground">{notice}</p>}
      </div>
    </form>
  );
}
