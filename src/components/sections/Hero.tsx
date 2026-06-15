import { ArrowDownToLine, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs font-bold tracking-[0.25em] text-lime uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Open to SDE / AI-ML internships
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              I build <span className="text-gradient">multi-agent systems</span>,{" "}
              <span className="text-gradient">RAG pipelines</span>, and the infra underneath them.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg text-muted sm:text-xl">
              Dual Degree CS student at IIT Kharagpur — currently building the AI Sales Intelligence Agent at
              Glance (InMobi).
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
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

          <Reveal delay={0.2}>
            <p className="mt-10 font-mono text-xs text-muted">
              <span className="text-foreground">↳</span> drag the graph to look around — hover a node to trace its
              connections, click to jump in.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative h-[380px] sm:h-[440px] lg:h-[600px]">
          <HeroCanvas />
        </Reveal>
      </Container>

      <Reveal delay={0.3} className="mt-16 hidden justify-center sm:flex">
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
