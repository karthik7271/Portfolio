import { badgeStyles, type BadgeInfo } from "@/lib/data/experience";
import { cn } from "@/lib/utils";

export function Badge({ badge, className }: { badge: BadgeInfo; className?: string }) {
  const style = badgeStyles[badge.type];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] font-bold tracking-[0.2em] uppercase ring-1",
        style.bg,
        style.text,
        style.ring,
        className,
      )}
    >
      {badge.type === "current" && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
        </span>
      )}
      {badge.label}
    </span>
  );
}
