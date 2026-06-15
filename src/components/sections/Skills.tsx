import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentHoverBorder, accentHoverText, accentText } from "@/lib/accent";
import { education, skillGroups } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="04 — Toolkit"
          title="Skills & Stack"
          accent="violet"
          description="The languages, frameworks, and infrastructure I reach for most."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <h3 className={cn("font-mono text-xs font-bold tracking-[0.25em] uppercase", accentText[group.accent])}>
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/80 transition-colors",
                        accentHoverBorder[group.accent],
                        accentHoverText[group.accent],
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <h3 className="font-mono text-xs font-bold tracking-[0.25em] text-muted uppercase">Education</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {education.map((ed) => (
              <div key={ed.degree} className="rounded-2xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-lime">{ed.year}</p>
                <p className="mt-2 font-bold">{ed.degree}</p>
                <p className="mt-1 text-sm text-muted">{ed.institute}</p>
                <p className="mt-1 text-sm text-muted">{ed.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
