import { useEffect, useRef, useState, type ReactNode } from "react";
import { clsx } from "clsx";

/** ---------- Reveal-on-scroll hook (dependency-free) ---------- */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, shown };
}

/** Section wrapper with scroll reveal + accessible heading */
export function Section({
  id,
  eyebrow,
  title,
  dark = false,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  dark?: boolean;
  children: ReactNode;
}) {
  const { ref, shown } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className={clsx(
        "scroll-mt-20 px-6 py-20 sm:px-8 lg:px-10",
        dark ? "bg-navy-900 text-white" : "bg-white text-navy-900",
      )}
    >
      <div
        className={clsx(
          "reveal mx-auto max-w-6xl",
          shown && "shown-in",
        )}
      >
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <p
                className={clsx(
                  "mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em]",
                  dark ? "text-accent-300" : "text-accent-600",
                )}
              >
                {eyebrow}
              </p>
            )}
            <h2
              id={`${id}-heading`}
              className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Simple button that adapts to dark/light surfaces */
export function Btn({
  href,
  children,
  variant = "solid",
  dark = false,
  external,
  title,
  onClick,
  type,
  download,
}: {
  href?: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  dark?: boolean;
  external?: boolean;
  title?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  download?: boolean | string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2";
  const styles =
    variant === "solid"
      ? "bg-accent-500 text-white hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25"
      : variant === "outline"
        ? dark
          ? "border border-white/25 text-white hover:border-accent-300 hover:bg-white/5"
          : "border border-slate-300 text-navy-800 hover:border-accent-500 hover:text-accent-600 hover:bg-accent-500/5"
        : dark
          ? "text-slate-300 hover:text-white"
          : "text-navy-700 hover:text-accent-600";
  const cls = clsx(base, styles);
  if (href) {
    return (
      <a
        className={cls}
        href={href}
        title={title}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={cls} type={type ?? "button"} onClick={onClick} title={title}>
      {children}
    </button>
  );
}
