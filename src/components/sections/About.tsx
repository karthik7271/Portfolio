import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentText } from "@/lib/accent";
import { highlights } from "@/lib/data/highlights";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="01 — About"
          title="A bit about how I think."
          accent="cyan"
          description="Less about what I've memorized, more about how I like to build."
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg text-muted lg:col-span-7">
            {profile.about.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
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
        </div>
      </Container>
    </section>
  );
}
