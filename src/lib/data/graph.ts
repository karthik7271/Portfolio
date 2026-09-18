import type { AccentColor } from "./skills";

export type GraphNodeType = "project" | "skill";

export interface GraphNode {
  id: string;
  label: string;
  type: GraphNodeType;
  accent: AccentColor;
  /** Hand-placed position in 3D space (world units). */
  position: [number, number, number];
  /** Relative sphere radius. */
  size: number;
  /** Anchor to smooth-scroll to on click. */
  target: string;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export const graphNodes: GraphNode[] = [
  // --- Projects ---
  {
    id: "apollo",
    label: "Apollo",
    type: "project",
    accent: "lime",
    position: [3.4, 1.1, 0.4],
    size: 0.52,
    target: "#apollo",
  },
  {
    id: "arrakis",
    label: "Arrakis",
    type: "project",
    accent: "magenta",
    position: [2.0, 2.8, -0.3],
    size: 0.48,
    target: "#arrakis",
  },
  {
    id: "drape",
    label: "DRAPE",
    type: "project",
    accent: "violet",
    position: [4.6, -0.4, -0.7],
    size: 0.46,
    target: "#drape",
  },
  {
    id: "flock",
    label: "Flock",
    type: "project",
    accent: "cyan",
    position: [2.7, -1.7, 1.1],
    size: 0.46,
    target: "#flock",
  },
  {
    id: "nightshift",
    label: "NightShift",
    type: "project",
    accent: "lime",
    position: [1.2, -2.8, 0.5],
    size: 0.44,
    target: "#nightshift",
  },
  {
    id: "causal-rag-system",
    label: "Causal RAG",
    type: "project",
    accent: "cyan",
    position: [-2.9, 1.9, -0.7],
    size: 0.5,
    target: "#causal-rag-system",
  },
  {
    id: "deloconnect",
    label: "DeloConnect",
    type: "project",
    accent: "magenta",
    position: [-3.3, -1.3, 0.6],
    size: 0.5,
    target: "#deloconnect",
  },
  {
    id: "crop-disease-ai",
    label: "Crop Disease AI",
    type: "project",
    accent: "violet",
    position: [0.4, -3.1, -0.3],
    size: 0.46,
    target: "#crop-disease-ai",
  },

  // --- Skills / Tech ---
  {
    id: "langgraph",
    label: "LangGraph",
    type: "skill",
    accent: "lime",
    position: [0.0, 1.7, -0.1],
    size: 0.3,
    target: "#skills",
  },
  {
    id: "rag",
    label: "RAG Systems",
    type: "skill",
    accent: "cyan",
    position: [0.9, 2.4, 0.4],
    size: 0.3,
    target: "#skills",
  },
  {
    id: "multi-agent",
    label: "Multi-Agent",
    type: "skill",
    accent: "magenta",
    position: [-0.6, 0.4, -0.6],
    size: 0.32,
    target: "#skills",
  },
  {
    id: "spanner",
    label: "Cloud Spanner",
    type: "skill",
    accent: "violet",
    position: [4.4, -0.3, -0.4],
    size: 0.28,
    target: "#skills",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    type: "skill",
    accent: "lime",
    position: [-1.6, -0.9, 0.4],
    size: 0.3,
    target: "#skills",
  },
  {
    id: "docker",
    label: "Docker",
    type: "skill",
    accent: "cyan",
    position: [-4.2, 2.8, -1.1],
    size: 0.26,
    target: "#skills",
  },
  {
    id: "pytorch",
    label: "PyTorch",
    type: "skill",
    accent: "magenta",
    position: [1.9, -3.6, -1.3],
    size: 0.28,
    target: "#skills",
  },
  {
    id: "react-native",
    label: "React Native",
    type: "skill",
    accent: "violet",
    position: [-0.9, -3.8, 0.9],
    size: 0.26,
    target: "#skills",
  },
  {
    id: "vllm",
    label: "vLLM",
    type: "skill",
    accent: "violet",
    position: [3.6, 0.8, -1.4],
    size: 0.26,
    target: "#skills",
  },
  {
    id: "qlora",
    label: "QLoRA",
    type: "skill",
    accent: "lime",
    position: [1.6, 3.6, 0.8],
    size: 0.26,
    target: "#skills",
  },
];

export const graphEdges: GraphEdge[] = [
  { source: "apollo", target: "langgraph" },
  { source: "apollo", target: "rag" },
  { source: "apollo", target: "multi-agent" },
  { source: "apollo", target: "spanner" },

  { source: "arrakis", target: "fastapi" },
  { source: "arrakis", target: "pytorch" },
  { source: "arrakis", target: "qlora" },

  { source: "drape", target: "pytorch" },
  { source: "drape", target: "vllm" },
  { source: "drape", target: "qlora" },

  { source: "flock", target: "multi-agent" },

  { source: "nightshift", target: "fastapi" },
  { source: "nightshift", target: "docker" },

  { source: "causal-rag-system", target: "langgraph" },
  { source: "causal-rag-system", target: "rag" },
  { source: "causal-rag-system", target: "multi-agent" },
  { source: "causal-rag-system", target: "fastapi" },
  { source: "causal-rag-system", target: "docker" },

  { source: "deloconnect", target: "langgraph" },
  { source: "deloconnect", target: "multi-agent" },
  { source: "deloconnect", target: "fastapi" },

  { source: "crop-disease-ai", target: "fastapi" },
  { source: "crop-disease-ai", target: "pytorch" },
  { source: "crop-disease-ai", target: "react-native" },
];

export function getGraphNode(id: string) {
  return graphNodes.find((n) => n.id === id);
}
