import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentBgSubtle, accentBorderSubtle, accentText } from "@/lib/accent";
import { medals } from "@/lib/data/highlights";
import { cn } from "@/lib/utils";

export function Achievements() {
  return (
    <section id="wins" className="scroll-mt-24 py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="03 — Recognition"
          title="Wins"
          accent="lime"
          description="Competing on national stages, and bringing back the medals to show for it."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {medals.map((medal, i) => (
            <Reveal key={medal.title + medal.org} delay={i * 0.08}>
              <div
                className={cn(
                  "flex h-full flex-col items-start gap-4 rounded-2xl border p-8 transition-transform hover:-translate-y-1",
                  accentBorderSubtle[medal.accent],
                  accentBgSubtle[medal.accent],
                )}
              >
                <span className="text-5xl">{medal.emoji}</span>
                <div>
                  <p className={cn("text-2xl font-black tracking-tight", accentText[medal.accent])}>{medal.title}</p>
                  <p className="mt-1 text-sm text-muted">{medal.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
