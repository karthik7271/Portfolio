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
    slug: "apollo",
    title: "Apollo — Agentic Sales Analyst",
    organization: "Glance · InMobi Group · SDE Intern",
    period: "May 2026 – Aug 2026",
    badge: { type: "build", label: "SDE Intern" },
    summary:
      "A ReAct agent over 7 governed tools answering plain-English sales queries on 14M+ brands in Cloud Spanner. Cut median latency 96s → 3s (30×) and verified across 292 traced production runs.",
    bullets: [
      "Built a ReAct agent over 7 governed tools answering plain-English sales queries on 14M+ brands in Cloud Spanner",
      "Cut median latency 96s → 3s (30×) by eliminating redundant model reasoning and indexing hot paths into 0.24s seeks",
      "Made safe by construction: read-only SELECT-only queries, 100-row caps, a 10-round loop bound, per-rep audit traces",
      "Verified over 292 traced production runs (p50 3s, p90 9s); added an agentic-commerce readiness score for reps",
    ],
    tags: ["Python", "ReAct", "Cloud Spanner", "GCP", "Multi-Agent", "LangGraph"],
    hasCaseStudy: false,
  },
  {
    slug: "arrakis",
    title: "Arrakis — Self-Serve Fine-Tune Console",
    organization: "Glance · InMobi Group · SDE Intern",
    period: "May 2026 – Aug 2026",
    badge: { type: "build", label: "SDE Intern" },
    summary:
      "A no-code console turning a raw CSV into a trained model on a single 24 GB NVIDIA L4, exposing 22 models. Fit a 27B model on one GPU with QLoRA across VLM, CNN and LLM modes — at ~$0 idle cost.",
    bullets: [
      "Shipped a no-code console turning a raw CSV into a trained model on a single 24 GB NVIDIA L4, exposing 22 models",
      "Fit a 27B-param model on one 24 GB GPU with QLoRA (frozen 4-bit base + 1% adapter) across VLM, CNN and LLM modes",
      "Split CPU control plane off on-demand GPU jobs (Cloud Run min-0, auto-deleted Cloud Batch VMs) for ~$0 idle cost",
      "Streamed logs, loss curves and GPU stats over SSE with zero data egress; 93 backend tests, ruff and mypy clean",
    ],
    tags: ["FastAPI", "React", "QLoRA", "Unsloth", "TRL", "Cloud Run", "Cloud Batch", "GCP"],
    hasCaseStudy: false,
  },
  {
    slug: "drape",
    title: "DRAPE — VLM Catalogue Enrichment",
    organization: "Glance · InMobi Group · SDE Intern",
    period: "May 2026 – Aug 2026",
    badge: { type: "build", label: "SDE Intern" },
    summary:
      "Fine-tuned three LoRA adapters on Qwen2.5-VL-7B to extract 45+ structured attributes from a single garment image. All adapters served off one AWQ-INT4 base via vLLM multi-LoRA with 5-prompt GPU batching.",
    bullets: [
      "Fine-tuned three LoRA adapters on Qwen2.5-VL-7B to pull 45+ structured attributes from a single garment image",
      "Served all adapters off one AWQ-INT4 base via vLLM multi-LoRA, batching 5 prompts into one GPU forward pass",
      "Kept non-apparel items out of the pipeline via FunctionGemma-270M and a deterministic 160-term allowlist",
      "Benchmarked head-to-head vs Gemini 2.5 Flash on a 33-class fabric task over a 3k held-out set (Top-1, Macro F1)",
    ],
    tags: ["Qwen2.5-VL-7B", "vLLM", "LoRA", "AWQ-INT4", "QLoRA", "Kubernetes", "GCP"],
    hasCaseStudy: false,
  },
  {
    slug: "flock",
    title: "Flock — Multi-Merchant Shopping Agent",
    organization: "Personal Project",
    period: "Aug 2026",
    badge: { type: "build", label: "Personal Build" },
    summary:
      "A shopping agent grounded in live UCP catalogues across 59 verified merchants — a Gemini coordinator plans, deterministic code enforces every hard constraint, with mission boards and multi-merchant bag persisted in Cloudflare D1.",
    bullets: [
      "Built a shopping agent grounded in live UCP catalogues across 59 verified merchants, with no invented claims",
      "Split planning from enforcement: a Gemini coordinator plans, deterministic code enforces every hard constraint",
      "Searched merchants concurrently while streaming evidence; a 10-minute discovery cache bounds catalogue walks",
      "Persisted editable mission boards and a multi-merchant bag in Cloudflare D1 via Drizzle; 12 agent test suites",
    ],
    tags: ["TypeScript", "Gemini", "Cloudflare Workers", "Cloudflare D1", "Drizzle ORM"],
    hasCaseStudy: false,
  },
  {
    slug: "nightshift",
    title: "NightShift — Autonomous On-Call Agent",
    organization: "Personal Project",
    period: "Aug 2026",
    badge: { type: "build", label: "Personal Build" },
    summary:
      "An event-driven agent that turns a labelled GitHub bug issue into a tested draft PR via Gemini 3 Flash. Autonomy is bounded behind a policy gate — repo allowlist, dual-label opt-in, 3-file cap, zero merge authority.",
    bullets: [
      "Deployed an event-driven agent that turns a labelled GitHub bug issue into a tested draft PR via Gemini 3 Flash",
      "Bounded autonomy behind a policy gate: repo allowlist, dual-label opt-in, 3-file cap, and zero merge authority",
      "Capped planning context at 6 files / 18,000 chars and authenticated as a GitHub App with HMAC SHA-256 checks",
      "Wired durable jobs via Firestore and Pub/Sub, feeding Check Run CI results to a live dashboard; 32 unit tests",
    ],
    tags: ["Python", "Cloud Run", "Vertex AI", "Firestore", "Pub/Sub", "Gemini", "GitHub App"],
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
      links: [],
    },
  },
  {
    slug: "deloconnect",
    title: "DeloConnect — AI Employee Wellness Platform",
    organization: "Deloitte OpenSoft 2025",
    period: "Feb 2025 – Apr 2025",
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
      links: [],
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
];

export const caseStudyEntries = experience.filter((e) => e.hasCaseStudy);

export function getExperienceBySlug(slug: string) {
  return experience.find((e) => e.slug === slug);
}
