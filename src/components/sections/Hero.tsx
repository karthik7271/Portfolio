import Image from "next/image";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { profile } from "@/lib/data/profile";

export function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-10 sm:pt-28 sm:pb-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-16 lg:items-stretch">
          {/* Left — intro text */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {profile.name}
                </h1>
                <p className="mt-2 text-base text-muted">{profile.school}</p>
                <p className="mt-0.5 text-sm text-muted">{profile.location}</p>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-7 space-y-3 text-base text-muted leading-relaxed max-w-prose">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs font-bold tracking-[0.2em] text-lime uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Open to SDE / AI-ML opportunities
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
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
          </div>

          {/* Right — large portrait photo */}
          <Reveal delay={0.04} className="relative hidden lg:block">
            <div className="relative h-full min-h-[480px] overflow-hidden rounded-2xl border border-border">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="380px"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>

          {/* Mobile — small photo above content */}
          <Reveal className="flex items-center gap-4 lg:hidden order-first">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Full-width graph band */}
        <Reveal delay={0.2} className="mt-12">
          <div className="relative h-[380px] sm:h-[480px]">
            <HeroCanvas />
          </div>
          <p className="mt-3 font-mono text-[11px] text-muted text-center">
            ↳ drag · hover to trace · click to jump
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
