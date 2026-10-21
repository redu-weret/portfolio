import { ArrowRight, FileDown, ExternalLink } from "lucide-react";
import { Btn, Section, useReveal } from "./ui";
import { about, availability, heroIntro, initials, links, name, role } from "../data";

/** Small initials avatar (swap for a photo in <Hero /> when you have one) */
function Avatar() {
  return (
    <div
      aria-hidden="true"
      className="relative grid h-44 w-44 shrink-0 place-items-center rounded-[2rem] bg-gradient-to-br from-accent-500 via-accent-600 to-navy-700 p-[2px] shadow-2xl shadow-accent-500/20 sm:h-52 sm:w-52"
    >
      <div className="relative grid h-full w-full place-items-center rounded-[calc(2rem-2px)] bg-navy-800">
        <span className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
          {initials}
        </span>
        <span className="absolute bottom-4 h-2 w-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
      </div>
    </div>
  );
}

export function Hero() {
  const { ref, shown } = useReveal<HTMLElement>();
  const hasGitHub = links.github !== "";
  const hasCV = links.cv !== "";
  return (
    <section
      id="home"
      ref={ref}
      className={`reveal relative overflow-hidden bg-navy-900 px-6 pb-24 pt-32 text-white sm:px-8 lg:px-10 lg:pb-28 ${shown ? "shown-in" : ""}`}
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,155,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(91,155,255,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/25">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {availability}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {name}
          </h1>
          <p className="mt-3 font-display text-lg font-medium text-accent-300 sm:text-xl">
            {role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {heroIntro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Btn href="#projects">
              View Projects <ArrowRight size={16} />
            </Btn>
            <Btn href="#contact" variant="outline" dark>
              Contact Me
            </Btn>
            {hasGitHub && (
              <Btn href={links.github} variant="ghost" dark external title="Add your GitHub URL in src/data.ts">
                <ExternalLink size={16} /> GitHub
              </Btn>
            )}
            {hasCV && (
              <Btn href={links.cv} variant="ghost" dark download title="CV">
                <FileDown size={16} /> Download CV
              </Btn>
            )}
          </div>
        </div>
        <Avatar />
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <Section id="about" eyebrow="About me" title="Who I am and how I work">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="card-lift divide-y divide-slate-100 rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200">
            {about.quickFacts.map(({ label, value }) => (
              <div key={label} className="flex justify-between gap-4 px-4 py-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {label}
                </dt>
                <dd className="text-right text-sm font-medium text-navy-800">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </>
  );
}
