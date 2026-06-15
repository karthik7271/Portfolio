export const profile = {
  name: "Karthik Ragulan",
  initials: "KR",
  title: "AI/ML Engineer",
  tagline: "I build multi-agent systems, RAG pipelines, and the data infrastructure underneath them.",
  school: "Dual Degree, Indian Institute of Technology Kharagpur · Class of 2027",
  location: "Bangalore, India",
  email: "karthikr90637@gmail.com",
  resumeUrl: "/resume.pdf",
  // TODO: replace with your real profile URLs
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
  about: [
    "I'm a Dual Degree student at IIT Kharagpur who likes building systems where several AI agents have to cooperate, argue, and check each other's work — then making sure that all stays fast and reliable at real data scale.",
    "Right now I'm interning on the AI Sales Intelligence Agent team at Glance (InMobi), building a multi-agent system that orchestrates five specialized tools over a 14-million-row, 64GB Spanner merchant dataset.",
    "Outside of work I compete: Gold at Deloitte OpenSoft 2025 for an AI employee-wellness platform, Silver at Inter IIT Tech Meet 14.0 for a causal-analysis RAG system, and a finalist spot at Smart India Hackathon 2024 with a crop-disease app used by 1,000+ farmers. Vantage — a B2B marketing-attribution SaaS — is my latest personal build.",
  ],
} as const;
