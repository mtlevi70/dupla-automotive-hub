import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  /** Shows a small "Sample image" tag so stock photos aren't mistaken for real projects. */
  tag?: boolean;
};

export function SampleImage({ src, alt, className, priority, tag = true }: Props) {
  return (
    <figure className={cn("relative overflow-hidden rounded-lg bg-surface-strong", className)}>
      <img
        src={src}
        alt={alt}
        width={1200}
        height={912}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="size-full object-cover"
      />
      {tag && (
        <figcaption className="absolute bottom-2 left-2 rounded bg-ink/75 px-2 py-0.5 text-[0.7rem] font-medium text-ink-foreground">
          Sample image
        </figcaption>
      )}
    </figure>
  );
}
