import { Code2, ServerCog, Database, FlaskConical, Wrench } from "lucide-react";
import { Section } from "./ui";
import { skills } from "../data";

const icons = {
  code: Code2,
  server: ServerCog,
  database: Database,
  test: FlaskConical,
  tools: Wrench,
} as const;

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skills.map((cat, i) => {
          const Icon = icons[cat.icon];
          return (
            <article
              key={cat.title}
              className="card-lift group flex flex-col rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:ring-accent-400/50"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500/10 text-accent-600 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-navy-900">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400">
                    {cat.blurb}
                  </p>
                </div>
              </div>
              <ul className="mt-auto space-y-1.5">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] text-slate-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
