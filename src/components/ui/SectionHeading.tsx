import { accentText } from "@/lib/accent";
import type { AccentColor } from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "lime",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: AccentColor;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl", className)}>
      <p className={cn("mb-3 font-mono text-xs font-bold tracking-[0.3em] uppercase", accentText[accent])}>
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight sm:text-6xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted">{description}</p>}
    </Reveal>
  );
}
