export type AccentColor = "lime" | "magenta" | "cyan" | "violet";

export interface SkillGroup {
  title: string;
  accent: AccentColor;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    accent: "lime",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "AI / ML",
    accent: "magenta",
    items: ["PyTorch", "HuggingFace Transformers", "Unsloth", "TRL", "vLLM", "LoRA & QLoRA Fine-Tuning", "LangGraph", "RAG", "ReAct & Multi-Agent Systems", "Vertex AI (Gemini)", "OpenAI API"],
  },
  {
    title: "Frameworks",
    accent: "cyan",
    items: ["FastAPI", "Next.js", "React", "React Native (Expo)", "Flask", "Drizzle ORM"],
  },
  {
    title: "Data Stores",
    accent: "violet",
    items: ["PostgreSQL", "MongoDB", "Cloud Spanner", "Firestore", "Cloudflare D1", "Qdrant", "ChromaDB", "FAISS", "Neo4j"],
  },
  {
    title: "Cloud & DevOps",
    accent: "lime",
    items: ["GCP (Cloud Run · Cloud Batch · Pub/Sub · Vertex AI · GKE · Secret Manager)", "Cloudflare Workers", "Docker", "Kubernetes", "GitHub Actions", "Modal", "Nginx"],
  },
];

export const education = [
  {
    degree: "Dual Degree (B.Tech + M.Tech)",
    institute: "Indian Institute of Technology Kharagpur",
    detail: "CGPA 7.35",
    year: "2027",
  },
  {
    degree: "AISSCE (Class XII)",
    institute: "Narayana Junior College, Bangalore",
    detail: "91.0%",
    year: "2022",
  },
  {
    degree: "AISSE (Class X)",
    institute: "Amara Jyothi Public School, Bangalore",
    detail: "89.4%",
    year: "2020",
  },
];
