"use client";

import { useMemo, useState } from "react";
import { graphEdges, graphNodes } from "@/lib/data/graph";
import { GraphEdgeLine } from "./GraphEdgeLine";
import { GraphNode } from "./GraphNode";

export function GraphScene() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const nodeMap = useMemo(() => new Map(graphNodes.map((n) => [n.id, n])), []);

  const connectedIds = useMemo(() => {
    if (!hoveredId) return null;
    const set = new Set<string>([hoveredId]);
    for (const edge of graphEdges) {
      if (edge.source === hoveredId) set.add(edge.target);
      if (edge.target === hoveredId) set.add(edge.source);
    }
    return set;
  }, [hoveredId]);

  return (
    <group>
      {graphEdges.map((edge) => {
        const a = nodeMap.get(edge.source);
        const b = nodeMap.get(edge.target);
        if (!a || !b) return null;

        const bothActive = !!connectedIds && connectedIds.has(edge.source) && connectedIds.has(edge.target);
        const state = !connectedIds ? "default" : bothActive ? "highlighted" : "dimmed";

        return <GraphEdgeLine key={`${edge.source}-${edge.target}`} from={a.position} to={b.position} state={state} />;
      })}

      {graphNodes.map((node) => {
        const state = !connectedIds ? "default" : connectedIds.has(node.id) ? "highlighted" : "dimmed";
        return <GraphNode key={node.id} node={node} state={state} onHover={setHoveredId} />;
      })}
    </group>
  );
}
