import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Mail,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { Btn, Section } from "./ui";
import { certificates, links, timeline } from "../data";

export function ExperienceAndCerts() {
  return (
    <Section id="experience" eyebrow="Path so far" title="Experience & education">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* timeline */}
        <ol className="relative space-y-8 border-l-2 border-slate-200 pl-6">
          {timeline.map((e) => {
            const Icon = e.kind === "experience" ? Briefcase : GraduationCap;
            return (
              <li key={e.title} className="relative">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="card-lift rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-500/10 text-accent-600">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-display text-[15px] font-bold text-navy-900">
                      {e.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {e.period}
                    </span>
                  </div>
                  <p className="mb-1.5 text-sm font-semibold text-slate-500">
                    {e.org}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600">{e.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* certificates */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-bold text-navy-900">
            <BadgeCheck size={16} className="text-accent-600" /> Certificates
          </h3>
          <ul className="space-y-3">
            {certificates.map((c) => (
              <li
                key={c.title}
                className="card-lift flex items-center justify-between gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200"
              >
                <div>
                  <p className="text-sm font-semibold text-navy-900">{c.title}</p>
                  <p className="text-xs text-slate-400">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </p>
                </div>
                {c.link ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${c.title} certificate`}
                    className="text-accent-600 hover:text-accent-500"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-slate-200"
                    title="Link can be added in src/data.ts"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const hasEmail = links.email !== "";
  const hasGitHub = links.github !== "";
  const hasLinkedIn = links.linkedin !== "";
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk" dark>
      <p className="mb-8 max-w-xl text-slate-300">
        Looking for someone who ships end-to-end and keeps learning? I'd love to
        hear about your internship, junior or remote opportunities.
      </p>
      {(hasEmail || hasGitHub || hasLinkedIn) && (
        <ul className="mb-10 flex flex-wrap gap-3">
          {hasEmail && (
            <li>
              <Btn href={links.email}>
                <Mail size={16} /> Email Me
              </Btn>
            </li>
          )}
          {hasGitHub && (
            <li>
              <Btn href={links.github} variant="outline" dark external>
                GitHub ↗
              </Btn>
            </li>
          )}
          {hasLinkedIn && (
            <li>
              <Btn href={links.linkedin} variant="outline" dark external>
                LinkedIn ↗
              </Btn>
            </li>
          )}
        </ul>
      )}
      {!hasEmail && (
        <p className="mb-10 inline-flex items-center gap-2 rounded-xl bg-accent-500/10 px-4 py-3 text-sm text-accent-300 ring-1 ring-accent-500/20">
          <MapPin size={16} />
          Contact links are placeholders — add email / GitHub / LinkedIn in{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">
            src/data.ts
          </code>
        </p>
      )}
    </Section>
  );
}
