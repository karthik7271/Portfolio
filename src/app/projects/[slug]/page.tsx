import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { accentBgSubtle, accentBorderSubtle, accentText } from "@/lib/accent";
import { caseStudyEntries, getExperienceBySlug } from "@/lib/data/experience";
import { getGraphNode } from "@/lib/data/graph";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return caseStudyEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);

  if (!entry?.caseStudy) {
    return {};
  }

  return {
    title: `${entry.title} — Karthik Ragulan`,
    description: entry.caseStudy.tagline,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);

  if (!entry || !entry.caseStudy) {
    notFound();
  }

  const { caseStudy } = entry;
  const accent = getGraphNode(entry.slug)?.accent ?? "lime";
  const otherCaseStudies = caseStudyEntries.filter((e) => e.slug !== entry.slug);

  return (
    <article className="py-24 sm:py-32">
      <Container className="max-w-4xl">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} /> Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.05} className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge badge={entry.badge} />
            <span className="font-mono text-xs text-muted">{entry.period}</span>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">{entry.title}</h1>
          <p className="mt-2 font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
            {entry.organization}
          </p>
          <p className={cn("mt-6 text-xl sm:text-2xl", accentText[accent])}>{caseStudy.tagline}</p>
        </Reveal>

        {caseStudy.links.length > 0 && (
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-4">
            {caseStudy.links.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                accent={accent}
                variant="outline"
              >
                {link.label} <ArrowUpRight size={14} />
              </Button>
            ))}
          </Reveal>
        )}

        <Reveal delay={0.1} className="mt-16">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">Overview</h2>
          <p className="mt-4 text-lg text-muted">{caseStudy.overview}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">The Problem</h2>
          <p className="mt-4 text-lg text-muted">{caseStudy.problem}</p>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">Approach</h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {caseStudy.approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold",
                        accentBgSubtle[accent],
                        accentText[accent],
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted">{item.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <Reveal>
            <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">Results</h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-6">
            <ul className="space-y-3">
              {caseStudy.results.map((result) => (
                <li key={result} className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className={cn("mt-1 shrink-0", accentText[accent])} size={20} />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-16">
          <h2 className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {caseStudy.stack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "rounded-full border px-3 py-1.5 font-mono text-xs",
                  accentBorderSubtle[accent],
                  accentText[accent],
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        {otherCaseStudies.length > 0 && (
          <Reveal delay={0.05} className="mt-20 border-t border-border pt-10">
            <p className="font-mono text-xs font-bold tracking-[0.3em] text-muted uppercase">More projects</p>
            <div className="mt-4 flex flex-wrap gap-6">
              {otherCaseStudies.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projects/${other.slug}`}
                  className="group inline-flex items-center gap-2 text-lg font-bold transition-colors hover:text-lime"
                >
                  {other.title}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </Reveal>
        )}
      </Container>
    </article>
  );
}
