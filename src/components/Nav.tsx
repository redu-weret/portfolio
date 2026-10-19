import { useEffect, useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import { links, name } from "../data";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const shortName = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const linkCls = (id: string) =>
    clsx(
      "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
      "hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400",
      active === id ? "text-white" : "text-slate-300",
    );
  const dot = (id: string) =>
    active === id ? (
      <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-accent-400" />
    ) : null;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-white/10 bg-navy-950/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-sm font-bold tracking-wide text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-500/15 text-accent-400 ring-1 ring-accent-500/30">
            {shortName}
          </span>
          <span className="hidden sm:inline">Rediet.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={linkCls(id)}>
              {label}
              {dot(id)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-lg text-slate-300 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
            >
              <ExternalLink size={17} />
            </a>
          )}
          <a
            href="#contact"
            className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 ring-1 ring-white/15 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 md:hidden">
          <div className="space-y-1 px-4 py-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
