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
    items: ["Python", "SQL", "C++", "JavaScript"],
  },
  {
    title: "AI / ML Frameworks",
    accent: "magenta",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "LangGraph", "Google ADK", "FastAPI", "Pandas"],
  },
  {
    title: "AI Skills",
    accent: "cyan",
    items: ["LLM Fine-tuning", "RAG Systems", "Multi-Agent Orchestration", "Prompt Engineering", "MLOps", "Graphs"],
  },
  {
    title: "Cloud & Infra",
    accent: "violet",
    items: ["GCP", "Cloud Spanner", "Vertex AI", "GKE", "Cloud Run", "BigQuery", "Docker", "Pub/Sub", "MongoDB Atlas"],
  },
  {
    title: "Tools",
    accent: "lime",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "MySQL", "Notion", "PyCharm"],
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
