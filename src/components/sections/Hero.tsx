import Image from "next/image";
import { ArrowDownToLine, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          {/* Identity first */}
          <Reveal>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-border">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{profile.name}</h1>
                <p className="mt-0.5 text-sm text-muted">{profile.school}</p>
              </div>
            </div>
          </Reveal>

          {/* Status */}
          <Reveal delay={0.05}>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs font-bold tracking-[0.2em] text-lime uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Open to SDE / AI-ML opportunities
            </p>
          </Reveal>

          {/* What they do */}
          <Reveal delay={0.1}>
            <p className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Building <span className="text-gradient">multi-agent systems</span>,{" "}
              fine-tuned VLMs, and the infra underneath them.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-5 max-w-lg text-base text-muted sm:text-lg">
              Shipped Apollo, Arrakis & DRAPE at Glance (InMobi Group). Now building Flock and NightShift.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#work" accent="lime" variant="solid">
                View My Work <ArrowRight size={14} />
              </Button>
              <Button href="#contact" accent="cyan" variant="outline">
                Get In Touch
              </Button>
              <Button href={profile.resumeUrl} download accent="magenta" variant="ghost">
                Resume <ArrowDownToLine size={14} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 font-mono text-xs text-muted">
              <span className="text-foreground">↳</span> drag the graph — hover a node to trace connections, click to jump in.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative h-[380px] sm:h-[440px] lg:h-[580px]">
          <HeroCanvas />
        </Reveal>
      </Container>

      <Reveal delay={0.35} className="mt-14 hidden justify-center sm:flex">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-lime hover:text-lime"
        >
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
