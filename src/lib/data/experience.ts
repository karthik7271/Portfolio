export type BadgeType = "current" | "gold" | "silver" | "finalist" | "build";

export interface BadgeInfo {
  type: BadgeType;
  label: string;
}

export const badgeStyles: Record<BadgeType, { bg: string; text: string; ring: string }> = {
  current: { bg: "bg-lime", text: "text-background", ring: "ring-lime/40" },
  gold: { bg: "bg-[#FFD24A]", text: "text-background", ring: "ring-[#FFD24A]/40" },
  silver: { bg: "bg-cyan", text: "text-background", ring: "ring-cyan/40" },
  finalist: { bg: "bg-magenta", text: "text-background", ring: "ring-magenta/40" },
  build: { bg: "bg-violet", text: "text-background", ring: "ring-violet/40" },
};

export interface CaseStudyApproach {
  title: string;
  body: string;
}

export interface CaseStudyLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  tagline: string;
  overview: string;
  problem: string;
  approach: CaseStudyApproach[];
  results: string[];
  stack: string[];
  links: CaseStudyLink[];
}

export interface ExperienceEntry {
  slug: string;
  title: string;
  organization: string;
  period: string;
  badge: BadgeInfo;
  summary: string;
  bullets: string[];
  tags: string[];
  hasCaseStudy: boolean;
  caseStudy?: CaseStudy;
}

export const experience: ExperienceEntry[] = [
  {
    slug: "glance-inmobi",
    title: "AI Sales Intelligence Agent",
    organization: "Glance · InMobi",
    period: "May 2026 – Jul 2026",
    badge: { type: "current", label: "Current" },
    summary:
      "A multi-agent system orchestrating five specialized tools over a 14M-row, 64GB Spanner merchant dataset — with RAG over contracts and transcripts, and an auditable propose-then-confirm write pipeline.",
    bullets: [
      "Built a Multi-Agent system orchestrating 5 specialized tools over a 14M-row, 64GB Spanner merchant dataset",
      "Designed an Account Memory Hub via interleaved Spanner tables linking deal stage and rep attribution",
      "Implemented RAG on PDFs, contracts, and transcripts via embeddings and Vector Distance semantic search",
      "Tagged chunks with graph-ready entities (brands, objections, competitors) for future knowledge-graph assembly",
      "Enforced propose→confirm writes via schema-validated tools and an auditable LangGraph checkpointer",
      "Implemented brand similarity scoring and fixed Spanner index-defeating patterns, achieving a 30× query speedup",
    ],
    tags: ["LangGraph", "Multi-Agent", "Cloud Spanner", "RAG", "Vector Search", "GCP"],
    hasCaseStudy: false,
  },
  {
    slug: "causal-rag-system",
    title: "Causal Analysis RAG System",
    organization: "Inter IIT Tech Meet 14.0",
    period: "Nov 2025 – Dec 2025",
    badge: { type: "silver", label: "Silver Medal" },
    summary:
      "A multi-agent RAG system that iteratively retrieves across 3 hops until evidence is complete, reranks with a ColBERT + Cohere + Voyage ensemble, and remembers prior context via GraphRAG.",
    bullets: [
      "Built a multi-agent RAG system across 5 FastAPI microservices, deployed via Docker Compose for horizontal scaling",
      "Architected a 3-hop LangGraph retriever with LLM sufficiency checks, iteratively refining queries until evidence is complete",
      "Combined ColBERT, Cohere, and Voyage into a weighted ensemble reranker, surfacing the top-10 most relevant evidences",
      "Integrated Zep Cloud's GraphRAG memory, enriching follow-up queries with prior context to skip redundant retrieval calls",
      "Automated Presidio-based PII redaction across 11 entity types, with exponential-backoff retries and TF-IDF fallback rerank",
    ],
    tags: ["LangGraph", "FastAPI", "ColBERT", "Cohere", "Voyage AI", "Zep Cloud", "Presidio", "Docker"],
    hasCaseStudy: true,
    caseStudy: {
      tagline:
        "A retrieval system that knows when it doesn't know enough yet — and keeps digging until it does.",
      overview:
        "For Inter IIT Tech Meet 14.0, our team built a multi-agent Retrieval-Augmented Generation system designed for causal, analytical questions — the kind where a single retrieval pass usually isn't enough. The system shipped as 5 independent FastAPI microservices, containerized and orchestrated with Docker Compose for horizontal scaling. It won a Silver Medal.",
      problem:
        "Standard RAG retrieves once and answers immediately. For causal or multi-hop analytical questions — \"why did X happen, and what else does it affect?\" — a single pass often surfaces only part of the evidence chain, producing shallow or confidently wrong answers. We needed retrieval that could recognize its own gaps and keep searching.",
      approach: [
        {
          title: "3-hop iterative retrieval with sufficiency checks",
          body: "Architected a 3-hop LangGraph retriever where an LLM judges whether the retrieved evidence is sufficient after each hop. If not, it refines the query and retrieves again — up to 3 hops — closing gaps that single-pass RAG would miss entirely.",
        },
        {
          title: "Weighted ensemble reranking",
          body: "Combined ColBERT, Cohere, and Voyage rerankers into a single weighted ensemble, surfacing the top-10 most relevant evidence chunks from a much larger candidate pool — balancing each model's strengths instead of betting on one.",
        },
        {
          title: "Long-term memory with GraphRAG",
          body: "Integrated Zep Cloud's GraphRAG memory layer so follow-up questions in the same session are enriched with prior context automatically, skipping redundant retrieval calls and keeping multi-turn conversations coherent.",
        },
        {
          title: "Privacy-safe by default",
          body: "Built an automated Presidio-based PII redaction pipeline covering 11 entity types, with exponential-backoff retries and a TF-IDF fallback reranker for when primary rerankers are unavailable — keeping the system usable and safe under load.",
        },
        {
          title: "Independently scalable microservices",
          body: "Split the system into 5 FastAPI microservices (ingestion, retrieval, reranking, memory, generation) deployed via Docker Compose, so each stage can scale horizontally on its own.",
        },
      ],
      results: [
        "Won a Silver Medal at Inter IIT Tech Meet 14.0, competing against teams from every IIT",
        "3-hop retrieval loop materially improved evidence completeness on causal, multi-hop queries",
        "11-entity-type PII redaction pipeline with TF-IDF fallback kept the system privacy-safe even under reranker failure",
        "5-microservice architecture validated horizontal scaling under Docker Compose",
      ],
      stack: ["LangGraph", "FastAPI", "ColBERT", "Cohere", "Voyage AI", "Zep Cloud (GraphRAG)", "Presidio", "Docker Compose"],
      links: [
        { label: "View Code", href: "https://github.com/" }, // TODO: replace with real repo URL
      ],
    },
  },
  {
    slug: "deloconnect",
    title: "DeloConnect — AI Employee Wellness Platform",
    organization: "Deloitte OpenSoft 2025",
    period: "Feb 2025 – May 2025",
    badge: { type: "gold", label: "Gold Medal" },
    summary:
      "A 5-agent LangGraph workflow that turns activity, leave, performance, and sentiment signals into structured HR reports — plus a counseling chatbot that knows when to escalate.",
    bullets: [
      "Built a LangGraph fan-out/fan-in workflow across 5 agents (activity, leave, performance, rewards etc.) into HR reports",
      "Designed a counseling chatbot with an Agno/OpenAI decision agent triggering topic changes, HR escalation, or session end",
      "Built a Gemini summarizer converting escalated chats into structured HR reports flagging concerns, sentiment, and action items",
      "Engineered an Isolation Forest ensemble over EMA-smoothed activity, leave, and Vibemeter signals to flag at-risk employees",
      "Built a FastAPI + MongoDB Atlas backend with JWT auth and WebSocket chat enforcing HR-employee RBAC",
    ],
    tags: ["LangGraph", "Agno", "OpenAI", "Gemini", "FastAPI", "MongoDB Atlas", "WebSockets", "Isolation Forest"],
    hasCaseStudy: true,
    caseStudy: {
      tagline:
        "An AI system that reads the early warning signs of employee burnout — before HR has to ask.",
      overview:
        "DeloConnect was built for Deloitte OpenSoft 2025, where it won a Gold Medal. It's an AI employee-wellness platform centered on a LangGraph fan-out/fan-in workflow: five specialized agents analyze activity, leave, performance, and sentiment signals in parallel, then converge into structured reports for HR — alongside a counseling chatbot employees can talk to directly.",
      problem:
        "HR teams usually learn about burnout or disengagement far too late — once someone has already filed a complaint or resigned. The early signals exist (declining activity, irregular leave patterns, dropping performance, low sentiment) but they're scattered across systems and never connected.",
      approach: [
        {
          title: "Fan-out/fan-in multi-agent workflow",
          body: "Built a LangGraph workflow where 5 specialized agents — covering activity, leave, performance, rewards, and more — run in parallel (fan-out) over employee data, then converge (fan-in) into a single structured HR report per employee.",
        },
        {
          title: "Counseling chatbot with a decision agent",
          body: "Designed a counseling chatbot backed by an Agno/OpenAI decision agent that monitors the conversation in real time, deciding when to shift topics, escalate to HR, or end the session — so employees get support without every conversation needing a human.",
        },
        {
          title: "Automated escalation reports via Gemini",
          body: "When a chat is escalated, a Gemini-based summarizer converts the full conversation into a structured HR report — flagging key concerns, sentiment trends, and recommended action items, so HR can act on a digest instead of a transcript.",
        },
        {
          title: "Early at-risk detection model",
          body: "Engineered an Isolation Forest ensemble over EMA-smoothed activity, leave, and Vibemeter signals to flag at-risk employees statistically, ahead of any explicit complaint.",
        },
        {
          title: "Secure, real-time backend",
          body: "Built the backend on FastAPI and MongoDB Atlas with JWT authentication and WebSocket-based chat, enforcing strict role-based access control between HR and employee views.",
        },
      ],
      results: [
        "Won a Gold Medal at Deloitte OpenSoft 2025",
        "5-agent fan-out/fan-in pipeline turns raw HR signals into structured, actionable reports automatically",
        "Isolation Forest ensemble flags at-risk employees from EMA-smoothed multi-signal data, ahead of escalation",
        "Real-time WebSocket counseling chat with automatic HR escalation and strict RBAC",
      ],
      stack: ["LangGraph", "Agno", "OpenAI", "Gemini", "FastAPI", "MongoDB Atlas", "WebSockets", "JWT", "Isolation Forest"],
      links: [
        { label: "View Code", href: "https://github.com/" }, // TODO: replace with real repo URL
      ],
    },
  },
  {
    slug: "crop-disease-ai",
    title: "AI-Driven Crop Disease Prediction System",
    organization: "Smart India Hackathon 2024",
    period: "Aug 2024 – Sep 2024",
    badge: { type: "finalist", label: "Finalist" },
    summary:
      "A fine-tuned InceptionV3 model reaching 95% accuracy across 10+ crop diseases, shipped as a multilingual React Native app used by 1,000+ farmers with live weather-based alerts.",
    bullets: [
      "Fine-tuned InceptionV3 CNN on 25K+ crop images, achieving 95% test accuracy across 10+ disease categories",
      "Built a cross-platform React Native mobile app used by 1,000+ farmers, offering multilingual diagnosis in 11 languages",
      "Deployed backend with FastAPI and live TensorFlow inference, delivering multilingual output via TTS API",
      "Added a real-time weather alert system, reducing crop failure risk by 30%+ through geo-targeted prevention guidance",
    ],
    tags: ["TensorFlow", "InceptionV3", "FastAPI", "React Native", "Computer Vision", "TTS"],
    hasCaseStudy: false,
  },
  {
    slug: "vantage",
    title: "Vantage — B2B Marketing Intelligence Platform",
    organization: "Personal Project",
    period: "Jun 2026",
    badge: { type: "build", label: "Personal Build" },
    summary:
      "A Next.js SaaS that models 500+ multi-touch customer journeys, runs a Shapley-value attribution engine, and flags per-channel CPC anomalies against rolling baselines — deployed on Vercel.",
    bullets: [
      "Architected a Next.js SaaS on Aurora PostgreSQL, modeling 500+ customer journeys across five ad channels",
      "Built a Shapley-value attribution engine in Python; LinkedIn drove 34% of conversions on 18% of spend",
      "Wrote PostgreSQL window-function queries detecting per-channel CPC anomalies against 7-day rolling baselines",
      "Deployed Next.js on Vercel Edge Functions backed by AWS RDS, authenticated via NextAuth.js",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Python", "NextAuth.js", "Vercel", "AWS RDS"],
    hasCaseStudy: true,
    caseStudy: {
      tagline: "Which marketing channel is actually working — and which dollars are wasted?",
      overview:
        "Vantage is a B2B marketing-intelligence SaaS built on Next.js and Aurora PostgreSQL. It models multi-touch customer journeys across five ad channels, runs a Shapley-value attribution engine to fairly credit each touchpoint, and continuously watches for cost anomalies — deployed end-to-end on Vercel.",
      problem:
        "Most marketing teams still rely on last-click attribution, which systematically overstates whichever channel happens to close the deal — usually paid search or direct — while undervaluing the channels that build the pipeline in the first place, like LinkedIn or content. Without fair, multi-touch attribution, budget keeps flowing to the wrong places.",
      approach: [
        {
          title: "Multi-touch journey modeling",
          body: "Modeled 500+ customer journeys spanning five ad channels in Aurora PostgreSQL, capturing every touchpoint from first contact to closed deal — not just the last click.",
        },
        {
          title: "Shapley-value attribution engine",
          body: "Built a Python attribution engine based on Shapley values from cooperative game theory — fairly distributing conversion credit across every touchpoint in a journey. The headline finding: LinkedIn drove 34% of conversions from just 18% of total spend.",
        },
        {
          title: "Anomaly detection via window functions",
          body: "Wrote PostgreSQL window-function queries that compute per-channel CPC against a 7-day rolling baseline, automatically flagging cost spikes before they quietly drain budget.",
        },
        {
          title: "Production deployment on Vercel",
          body: "Shipped the full stack on Vercel — Next.js frontend and API routes on Vercel Functions, Aurora/AWS RDS for storage, and NextAuth.js for authentication — so the dashboard is live, not just a notebook.",
        },
      ],
      results: [
        "Surfaced that LinkedIn drove 34% of conversions from just 18% of spend — a concrete reallocation signal",
        "Automated rolling-baseline anomaly detection catches per-channel CPC spikes within a 7-day window",
        "End-to-end production deployment: Next.js + Vercel + Aurora PostgreSQL + NextAuth.js",
      ],
      stack: ["Next.js", "TypeScript", "Aurora PostgreSQL", "Python", "NextAuth.js", "Vercel", "AWS RDS"],
      links: [
        { label: "Live Demo", href: "https://example.com" }, // TODO: replace with real deployment URL
        { label: "View Code", href: "https://github.com/" }, // TODO: replace with real repo URL
      ],
    },
  },
];

export const caseStudyEntries = experience.filter((e) => e.hasCaseStudy);

export function getExperienceBySlug(slug: string) {
  return experience.find((e) => e.slug === slug);
}
