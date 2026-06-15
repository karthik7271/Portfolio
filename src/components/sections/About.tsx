import Image from "next/image";
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

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 text-lg text-muted lg:col-span-7">
            {profile.about.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={i * 0.05}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top grayscale-[15%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
