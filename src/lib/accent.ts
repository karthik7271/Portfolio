import type { AccentColor } from "./data/skills";

// Static class-name maps so Tailwind's scanner can find every class literally.
export const accentText: Record<AccentColor, string> = {
  lime: "text-lime",
  magenta: "text-magenta",
  cyan: "text-cyan",
  violet: "text-violet",
};

export const accentHoverText: Record<AccentColor, string> = {
  lime: "hover:text-lime",
  magenta: "hover:text-magenta",
  cyan: "hover:text-cyan",
  violet: "hover:text-violet",
};

// Subtle, low-opacity variants for tinted backgrounds/borders on cards.
export const accentBgSubtle: Record<AccentColor, string> = {
  lime: "bg-lime/10",
  magenta: "bg-magenta/10",
  cyan: "bg-cyan/10",
  violet: "bg-violet/10",
};

export const accentBorderSubtle: Record<AccentColor, string> = {
  lime: "border-lime/30",
  magenta: "border-magenta/30",
  cyan: "border-cyan/30",
  violet: "border-violet/30",
};

export const accentBg: Record<AccentColor, string> = {
  lime: "bg-lime",
  magenta: "bg-magenta",
  cyan: "bg-cyan",
  violet: "bg-violet",
};

export const accentHoverBg: Record<AccentColor, string> = {
  lime: "hover:bg-lime",
  magenta: "hover:bg-magenta",
  cyan: "hover:bg-cyan",
  violet: "hover:bg-violet",
};

export const accentBorder: Record<AccentColor, string> = {
  lime: "border-lime",
  magenta: "border-magenta",
  cyan: "border-cyan",
  violet: "border-violet",
};

export const accentGlow: Record<AccentColor, string> = {
  lime: "glow-lime",
  magenta: "glow-magenta",
  cyan: "glow-cyan",
  violet: "glow-violet",
};

export const accentHoverBorder: Record<AccentColor, string> = {
  lime: "hover:border-lime",
  magenta: "hover:border-magenta",
  cyan: "hover:border-cyan",
  violet: "hover:border-violet",
};

export const accentHoverGlow: Record<AccentColor, string> = {
  lime: "hover:glow-lime",
  magenta: "hover:glow-magenta",
  cyan: "hover:glow-cyan",
  violet: "hover:glow-violet",
};

// Raw hex values for use in three.js materials (canvas can't read CSS variables).
export const accentHex: Record<AccentColor, string> = {
  lime: "#7aaad8",
  magenta: "#c878a8",
  cyan: "#50b8d0",
  violet: "#a090d8",
};
