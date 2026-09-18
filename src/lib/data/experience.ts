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
    title: "SDE Intern — B2B Commerce Team",
    organization: "Glance · InMobi Group",
    period: "May 2026 – Aug 2026",
    badge: { type: "build", label: "SDE Intern" },
    summary:
      "Shipped three production AI systems at Glance: Apollo (agentic sales analyst over 14M+ brands), Arrakis (no-code fine-tune console for 27B-param models on a single GPU), and DRAPE (VLM catalogue enrichment extracting 45+ attributes per garment image).",
    bullets: [
      "Apollo — Built a ReAct agent over 7 governed tools answering plain-English sales queries on 14M+ brands in Cloud Spanner; cut median latency 96s → 3s (30×) by killing redundant reasoning and indexing hot paths to 0.24s seeks",
      "Apollo — Made safe by construction: read-only SELECT-only queries, 100-row caps, 10-round loop bound, per-rep traces; verified over 292 traced production runs (p50 3s, p90 9s)",
      "Arrakis — Shipped a no-code fine-tune console turning a raw CSV into a trained model on a single 24 GB NVIDIA L4, exposing 22 models; fit a 27B model with QLoRA (frozen 4-bit base + 1% adapter) across VLM, CNN and LLM modes",
      "Arrakis — Split CPU control plane off on-demand GPU jobs (Cloud Run min-0, auto-deleted Cloud Batch VMs) for ~$0 idle; streamed logs, loss curves and GPU stats over SSE; 93 backend tests, ruff and mypy clean",
      "DRAPE — Fine-tuned three LoRA adapters on Qwen2.5-VL-7B to pull 45+ structured attributes from a single garment image; served all adapters off one AWQ-INT4 base via vLLM multi-LoRA, batching 5 prompts into one GPU forward pass",
      "DRAPE — Kept non-apparel items out of the pipeline via FunctionGemma-270M and a 160-term allowlist; benchmarked head-to-head vs Gemini 2.5 Flash on a 3k held-out set (Top-1, Macro F1)",
    ],
    tags: ["Python", "FastAPI", "React", "ReAct", "QLoRA", "vLLM", "LoRA", "Qwen2.5-VL", "Cloud Spanner", "Cloud Run", "Cloud Batch", "Kubernetes", "GCP"],
    hasCaseStudy: true,
    caseStudy: {
      tagline: "Three AI systems shipped in one internship — a sales agent, a fine-tune console, and a vision model pipeline.",
      overview:
        "At Glance (InMobi Group)'s B2B Commerce Team, I shipped three distinct production systems over a 12-week internship. Apollo is an agentic sales analyst answering natural-language queries over 14M+ brands in Cloud Spanner. Arrakis is a no-code fine-tuning console that turns a raw CSV into a trained model on a single 24 GB GPU. DRAPE is a VLM pipeline that extracts 45+ structured catalogue attributes from a single garment image.",
      problem:
        "The team had three separate bottlenecks: sales reps couldn't query a 14M-row Spanner dataset without SQL expertise; fine-tuning models required engineering intervention even for routine runs; and enriching a fashion catalogue with structured attributes required manual human review per item.",
      approach: [
        {
          title: "Apollo — ReAct agent over Cloud Spanner",
          body: "Built a ReAct agent with 7 governed tools that lets sales reps query 14M+ brands in plain English. Cut median latency from 96s to 3s (30×) by eliminating redundant model reasoning loops and indexing hot query paths to 0.24s seeks. Safety enforced structurally: read-only SELECT-only queries, 100-row caps, a 10-round loop bound, and per-rep audit traces across 292 traced production runs.",
        },
        {
          title: "Arrakis — No-code fine-tune console",
          body: "Shipped a FastAPI + React console that takes a CSV upload and produces a trained model on a single 24 GB NVIDIA L4 — exposing 22 models across VLM, CNN, and LLM modes. Fit a 27B-parameter model on one GPU via QLoRA (frozen 4-bit base + 1% trainable adapter). Split a CPU control plane from on-demand GPU jobs using Cloud Run (min-0) and auto-deleted Cloud Batch VMs for ~$0 idle cost. Streamed live logs, loss curves, and GPU stats over SSE with zero data egress.",
        },
        {
          title: "DRAPE — Multi-LoRA VLM catalogue enrichment",
          body: "Fine-tuned three LoRA adapters on Qwen2.5-VL-7B to extract 45+ structured attributes (fabric, color, pattern, silhouette…) from a single garment image. Served all three adapters off one AWQ-INT4 base via vLLM multi-LoRA, batching 5 prompts into one GPU forward pass. Gated the pipeline with FunctionGemma-270M and a 160-term deterministic allowlist to reject non-apparel inputs. Benchmarked head-to-head against Gemini 2.5 Flash on a 3k held-out set measuring Top-1 and Macro F1.",
        },
      ],
      results: [
        "Apollo: 30× latency reduction (96s → 3s p50) across 292 traced production runs (p90 9s)",
        "Arrakis: 27B-param model fit on a single 24 GB GPU via QLoRA; ~$0 idle cost with serverless GPU architecture; 93 tests, ruff + mypy clean",
        "DRAPE: 45+ structured attributes extracted per garment from a single image; multi-LoRA serving with 5-prompt GPU batching",
      ],
      stack: ["Python", "FastAPI", "React", "ReAct Agent", "QLoRA", "Unsloth", "TRL", "vLLM", "LoRA", "AWQ-INT4", "Qwen2.5-VL-7B", "FunctionGemma-270M", "Cloud Spanner", "Cloud Run", "Cloud Batch", "Kubernetes", "GCP", "SSE"],
      links: [],
    },
  },
  {
    slug: "flock",
    title: "Flock — Multi-Merchant Shopping Agent",
    organization: "Personal Project",
    period: "Aug 2026",
    badge: { type: "build", label: "Personal Build" },
    summary:
      "A shopping agent grounded in live UCP catalogues across 59 verified merchants — a Gemini coordinator plans, deterministic code enforces every hard constraint, with an editable mission board and multi-merchant bag persisted in Cloudflare D1.",
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
    title: "NightShift — Autonomous On-Call Maintenance Agent",
    organization: "Personal Project",
    period: "Aug 2026",
    badge: { type: "build", label: "Personal Build" },
    summary:
      "An event-driven agent that turns a labelled GitHub bug issue into a tested draft PR via Gemini 3 Flash — autonomy bounded behind a policy gate with repo allowlist, dual-label opt-in, 3-file cap, and zero merge authority.",
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
