"use client";

import { Line } from "@react-three/drei";

export type EdgeVisualState = "default" | "highlighted" | "dimmed";

const edgeStyle: Record<EdgeVisualState, { color: string; opacity: number; width: number }> = {
  default: { color: "#4a4a5a", opacity: 0.35, width: 1 },
  highlighted: { color: "#f5f5f9", opacity: 0.9, width: 1.75 },
  dimmed: { color: "#4a4a5a", opacity: 0.06, width: 1 },
};

export function GraphEdgeLine({
  from,
  to,
  state,
}: {
  from: [number, number, number];
  to: [number, number, number];
  state: EdgeVisualState;
}) {
  const style = edgeStyle[state];

  return <Line points={[from, to]} color={style.color} lineWidth={style.width} transparent opacity={style.opacity} />;
}
