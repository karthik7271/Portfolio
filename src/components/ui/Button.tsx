import type { AnchorHTMLAttributes } from "react";
import { accentBg, accentBorder, accentHoverBg, accentHoverGlow, accentText } from "@/lib/accent";
import type { AccentColor } from "@/lib/data/skills";
import { cn } from "@/lib/utils";

type ButtonVariant = "solid" | "outline" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  accent?: AccentColor;
}

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200";

export function Button({ variant = "solid", accent = "lime", className, children, ...props }: ButtonProps) {
  const variantClass =
    variant === "solid"
      ? cn(accentBg[accent], "text-background", accentHoverGlow[accent], "hover:-translate-y-0.5")
      : variant === "outline"
        ? cn(
            "border-2 bg-transparent",
            accentBorder[accent],
            accentText[accent],
            accentHoverBg[accent],
            "hover:text-background",
            accentHoverGlow[accent],
            "hover:-translate-y-0.5",
          )
        : cn(accentText[accent], "px-0 hover:gap-3");

  return (
    <a className={cn(base, variantClass, className)} {...props}>
      {children}
    </a>
  );
}
