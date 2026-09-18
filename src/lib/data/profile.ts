export const profile = {
  name: "Karthik Ragulan",
  initials: "KR",
  title: "AI/ML Engineer",
  tagline: "I build multi-agent systems, fine-tuned VLMs, and the infrastructure underneath them.",
  school: "Dual Degree, Indian Institute of Technology Kharagpur · Class of 2027",
  location: "Bangalore, India",
  email: "karthikr90637@gmail.com",
  resumeUrl: "/resume.pdf",
  photo: "/karthik.jpg",
  social: {
    github: "https://github.com/karthik7271",
    linkedin: "https://www.linkedin.com/in/karthik-ragulan/",
  },
  about: [
    "I'm a Dual Degree student at IIT Kharagpur building systems where AI agents cooperate, check each other's work, and stay fast and reliable at real data scale.",
    "At Glance (InMobi Group) I shipped three production systems: Apollo, a ReAct sales agent over 14M+ brands that cut query latency 30×; Arrakis, a no-code fine-tune console fitting 27B-param models on a single GPU; and DRAPE, a multi-LoRA VLM pipeline extracting 45+ catalogue attributes per garment image.",
    "My latest personal projects are Flock — a shopping agent grounded in live catalogues across 59 verified merchants — and NightShift, an autonomous on-call agent that turns a GitHub bug label into a tested draft PR. I compete too: Gold at Deloitte OpenSoft 2025 and Silver at Inter IIT Tech Meet 14.0.",
  ],
} as const;
