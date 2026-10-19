import { Plus, Rocket, CircleDot, PlayCircle, Lock, ExternalLink, CheckCircle2 } from "lucide-react";
import { Section } from "./ui";
import { otherProjects } from "../data";

const statusBadge = {
  planned: {
    text: "Planned",
    icon: CircleDot,
    cls: "bg-amber-400/10 text-amber-600 ring-amber-400/25",
  },
  "in-progress": {
    text: "In progress",
    icon: Rocket,
    cls: "bg-accent-500/10 text-accent-600 ring-accent-500/25",
  },
  completed: {
    text: "Completed",
    icon: CheckCircle2,
    cls: "bg-emerald-500/10 text-emerald-600 ring-emerald-400/25",
  },
  live: {
    text: "Live",
    icon: PlayCircle,
    cls: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/25",
  },
  private: {
    text: "Private",
    icon: Lock,
    cls: "bg-slate-500/10 text-slate-600 ring-slate-400/30",
  },
} as const;

/** A code repo link shows as "Frontend" / "Backend" when named, else just "Code". */
const repoLabel = (url: string) =>
  /backend/i.test(url) ? "Backend" : /frontend/i.test(url) ? "Frontend" : "Code";

export function ProjectGallery() {
  return (
    <Section id="more" eyebrow="More projects" title="Next in the pipeline">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((proj) => {
          const badge = statusBadge[proj.status];
          const BadgeIcon = badge.icon;
          const placeholder = proj.stack.length === 0;
          return (
            <article
              key={proj.title}
              className={`flex flex-col rounded-2xl p-5 ring-1 transition-all duration-300 ${
                placeholder
                  ? "border-2 border-dashed border-slate-300 p-5 text-slate-400"
                  : "card-lift bg-white ring-slate-200 hover:ring-accent-400/50"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3
                  className={`font-display text-base font-bold ${placeholder ? "text-slate-400" : "text-navy-900"}`}
                >
                  {placeholder ? <Plus size={18} aria-hidden="true" className="mb-3" /> : null}
                  {proj.title}
                </h3>
                {!placeholder && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${badge.cls}`}
                  >
                    <BadgeIcon size={12} /> {badge.text}
                  </span>
                )}
              </div>
              <p className={`text-[13px] leading-relaxed ${placeholder ? "text-slate-400" : "text-slate-600"}`}>
                {proj.description}
              </p>
              {proj.note && (
                <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                  <Lock size={12} aria-hidden="true" /> {proj.note}
                </p>
              )}
              {!placeholder && (
                <>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {proj.stack.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  {(proj.github || proj.demo) && (
                    <div className="mt-4 flex gap-4 text-sm font-semibold text-accent-600">
                      {proj.github?.split(" ").map((url) => (
                        <a key={url} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-4">
                          <ExternalLink size={14} /> {repoLabel(url)}
                        </a>
                      ))}
                      {proj.demo && (
                        <a href={proj.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-4">
                          <PlayCircle size={14} /> Demo
                        </a>
                      )}
                    </div>
                  )}
                </>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
