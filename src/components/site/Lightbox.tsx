import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxItem = { img: string; title: string; cat: string };

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const item = items[index];
  const prev = () => onIndex((index - 1 + items.length) % items.length);
  const next = () => onIndex((index + 1) % items.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key.toLowerCase() === "x") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  });

  if (!item) return null;

  const btn =
    "absolute flex h-12 w-12 items-center justify-center rounded-full bg-background/15 text-background backdrop-blur transition-colors hover:bg-background/30 focus-visible:outline-2 focus-visible:outline-background";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
      }}
    >
      <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img src={item.img} alt={item.title} className="max-h-[78vh] w-auto max-w-full rounded-md object-contain" />
          <span className="absolute left-3 top-3 rounded-full bg-foreground/70 px-3 py-1 text-xs font-medium text-background">
            Illusztráció
          </span>
        </div>
        <figcaption className="mt-4 text-center text-background">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-sm opacity-75">
            {item.cat} · {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>

      <button type="button" aria-label="Bezárás" onClick={onClose} className={`${btn} right-4 top-4`}>
        <X className="h-6 w-6" />
      </button>
      {items.length > 1 && (
        <>
          <button type="button" aria-label="Előző kép" onClick={(e) => { e.stopPropagation(); prev(); }} className={`${btn} left-4 top-1/2 -translate-y-1/2`}>
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button type="button" aria-label="Következő kép" onClick={(e) => { e.stopPropagation(); next(); }} className={`${btn} right-4 top-1/2 -translate-y-1/2`}>
            <ChevronRight className="h-7 w-7" />
          </button>
        </>
      )}
    </div>
  );
}
