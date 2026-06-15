import type { AccentColor } from "./skills";

export interface Highlight {
  value: string;
  label: string;
  accent: AccentColor;
}

export const highlights: Highlight[] = [
  { value: "30×", label: "Query speedup fixing Spanner index-defeating patterns", accent: "lime" },
  { value: "14M", label: "Rows in the merchant dataset powering the InMobi sales agent", accent: "magenta" },
  { value: "2", label: "National-level medals — Gold (Deloitte OpenSoft) & Silver (Inter IIT)", accent: "cyan" },
  { value: "95%", label: "Test accuracy across 10+ crop diseases, fine-tuned InceptionV3", accent: "violet" },
  { value: "1,000+", label: "Farmers using the multilingual crop-disease app", accent: "lime" },
  { value: "34%", label: "Of Vantage conversions driven by LinkedIn — from 18% of spend", accent: "magenta" },
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
