import { useState, type FormEvent } from "react";
import { z } from "zod";

const MAX_FILES = 5;
const MAX_MB = 10;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().max(40).optional(),
  topic: z.enum(["project", "store", "other"]),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree so we can reply to you." }) }),
});

type Errors = Partial<Record<string, string>>;

const field =
  "mt-1.5 w-full rounded-md border border-input bg-card px-3 py-2.5 text-base outline-none transition-colors focus-visible:border-primary aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot: bots fill hidden fields; silently ignore.
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
    if (files.length > MAX_FILES) next.photos = `You can attach up to ${MAX_FILES} photos.`;
    else if (files.some((f) => f.size > MAX_MB * 1024 * 1024)) next.photos = `Each photo must be under ${MAX_MB} MB.`;
    setErrors(next);
    if (Object.keys(next).length) {
      setNotice(null);
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    // TODO: connect sending here (e.g. POST result.data + files to your endpoint).
    setNotice("Your message looks good, but online sending isn't connected yet. Please call or email us for now.");
  }

  const err = (k: string) =>
    errors[k] ? <p id={`${k}-error`} className="mt-1.5 text-sm text-destructive">{errors[k]}</p> : null;
  const aria = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-xl border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">Name *</label>
          <input id="name" name="name" autoComplete="name" className={field} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email *</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} {...aria("email")} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-muted-foreground">(optional)</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor="topic" className="text-sm font-medium">What's it about?</label>
          <select id="topic" name="topic" defaultValue="project" className={field}>
            <option value="project">A workshop project</option>
            <option value="store">A product in the store</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">Your message *</label>
        <p className="text-sm text-muted-foreground">What is the item, roughly how big, and what would you like done?</p>
        <textarea id="message" name="message" rows={6} className={field} {...aria("message")} />
        {err("message")}
      </div>
      <div>
        <label htmlFor="photos" className="text-sm font-medium">Photos <span className="text-muted-foreground">(optional, up to {MAX_FILES})</span></label>
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
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm">
          <input id="consent" name="consent" type="checkbox" className="mt-0.5 size-5 accent-primary" {...aria("consent")} />
          <span>I agree that DuplaÁsz may use these details to reply to my request. {"["}Privacy policy link{"]"}</span>
        </label>
        {err("consent")}
      </div>
      <button type="submit" className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto">
        Send request
      </button>
      <div role="status" aria-live="polite">
        {notice && <p className="rounded-md bg-primary-soft p-4 text-sm text-accent-foreground">{notice}</p>}
      </div>
    </form>
  );
}
