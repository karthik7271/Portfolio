import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentText } from "@/lib/accent";
import { education, skillGroups } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pt-10 pb-20 sm:pt-12 sm:pb-24">
      <Container>
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="Skills & Stack"
          accent="violet"
          description="The languages, frameworks, and infrastructure I reach for most."
        />

        <div className="divide-y divide-border">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04}>
              <div className="grid gap-3 py-5 sm:grid-cols-[180px_1fr] sm:items-baseline">
                <h3 className={cn("font-mono text-xs font-bold tracking-[0.2em] uppercase", accentText[group.accent])}>
                  {group.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {group.items.join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-border pt-10">
          <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">Education</h3>
          <div className="mt-6 divide-y divide-border">
            {education.map((ed) => (
              <div key={ed.degree} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:items-baseline">
                <p className="font-mono text-xs text-lime">{ed.year}</p>
                <div>
                  <p className="font-semibold text-foreground">{ed.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">{ed.institute} · {ed.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
