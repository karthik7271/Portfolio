import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentText } from "@/lib/accent";
import { highlights } from "@/lib/data/highlights";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="01 — By the numbers"
          title="At a glance."
          accent="cyan"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((highlight, i) => (
            <Reveal key={highlight.label} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-muted">
                <p className={cn("text-3xl font-black sm:text-4xl", accentText[highlight.accent])}>
                  {highlight.value}
                </p>
                <p className="mt-2 text-sm text-muted">{highlight.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
