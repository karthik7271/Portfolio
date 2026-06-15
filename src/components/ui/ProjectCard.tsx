import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { accentHoverBorder, accentHoverGlow, accentText } from "@/lib/accent";
import { getGraphNode } from "@/lib/data/graph";
import type { ExperienceEntry } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

export function ProjectCard({ entry, featured = false }: { entry: ExperienceEntry; featured?: boolean }) {
  const accent = getGraphNode(entry.slug)?.accent ?? "lime";
  const bullets = entry.bullets.slice(0, featured ? 6 : 3);

  return (
    <Reveal className={featured ? "lg:col-span-2" : undefined}>
      <article
        id={entry.slug}
        className={cn(
          "group relative h-full scroll-mt-24 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 sm:p-8",
          "hover:-translate-y-1",
          accentHoverBorder[accent],
          accentHoverGlow[accent],
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge badge={entry.badge} />
          <span className="font-mono text-xs text-muted">{entry.period}</span>
        </div>

        <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{entry.title}</h3>
        <p className="mt-1 font-mono text-xs font-bold tracking-[0.2em] text-muted uppercase">
          {entry.organization}
        </p>

        <p className="mt-4 text-muted">{entry.summary}</p>

        <ul className={cn("mt-5 space-y-2 text-sm text-muted", featured && "grid gap-2 sm:grid-cols-2")}>
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className={cn("mt-0.5 shrink-0", accentText[accent])}>▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-muted uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {entry.hasCaseStudy && (
          <Link
            href={`/projects/${entry.slug}`}
            className={cn(
              "mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all group-hover:gap-2.5",
              accentText[accent],
            )}
          >
            View Case Study <ArrowUpRight size={14} />
          </Link>
        )}
      </article>
    </Reveal>
  );
}
