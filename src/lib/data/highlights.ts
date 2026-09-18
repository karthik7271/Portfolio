import type { AccentColor } from "./skills";

export interface Highlight {
  value: string;
  label: string;
  accent: AccentColor;
}

export const highlights: Highlight[] = [
  { value: "30×", label: "Latency cut on Apollo — 96s → 3s (p50) across 292 traced production runs", accent: "lime" },
  { value: "27B", label: "Parameter model fit on a single 24 GB GPU via QLoRA in Arrakis", accent: "magenta" },
  { value: "45+", label: "Structured catalogue attributes extracted per garment image with DRAPE", accent: "cyan" },
  { value: "59", label: "Verified merchants grounded in Flock with zero invented claims", accent: "violet" },
  { value: "2", label: "National-level medals — Gold (Deloitte OpenSoft) & Silver (Inter IIT 14.0)", accent: "lime" },
  { value: "95%", label: "Test accuracy across 10+ crop diseases, fine-tuned InceptionV3", accent: "magenta" },
];

export interface MedalHighlight {
  emoji: string;
  title: string;
  org: string;
  accent: AccentColor;
}

export const medals: MedalHighlight[] = [
  { emoji: "🥇", title: "Gold Medal", org: "Deloitte OpenSoft 2025", accent: "lime" },
  { emoji: "🥈", title: "Silver Medal", org: "Inter IIT Tech Meet 14.0", accent: "cyan" },
  { emoji: "🏆", title: "Finalist", org: "Smart India Hackathon 2024", accent: "magenta" },
];
