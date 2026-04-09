// ─── Personal Info ───────────────────────────────────────────────
export const personalInfo = {
  name: "Himanshu Verma",
  title: "Software Development Engineer",
  email: "vermahim402@gmail.com",
  phone: "+91 7340292314",
  location: "Jaipur, Rajasthan",
  linkedin: "https://linkedin.com/in/himanshuverma96",
  github: "https://github.com/whyhimanshu",
  bio: `B.Tech IT student with strong foundations in data structures, algorithms, object-oriented design, and systems architecture, seeking to contribute across analysis, design, implementation, integration, testing, and deployment while writing clean, efficient code.`,
  resumeTagline: "Building intelligent systems at the intersection of AI & Web",
};

// ─── Navigation ──────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

// ─── Education ───────────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Jaipur Engineering College and Research Centre (JECRC), Jaipur",
    duration: "2023 – Present",
    score: "CGPA: 8.1 / 10.0",
    icon: "🎓",
  },
  {
    degree: "Senior Secondary (Class 12, PCM)",
    institution: "NVN English Medium School",
    duration: "2023",
    score: "Percentage: 82.2%",
    icon: "🏫",
  },
];

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
  {
    title: "Railway Traffic Management",
    tagline: "AI-enabled railway control dashboard",
    description:
      "Intelligent, AI-enabled railway control dashboard that increases section throughput by 30% via real-time monitoring, conflict detection, and recommendation-driven rescheduling.",
    details:
      "Built a control-center dashboard with section-wise KPIs for railway operations; implemented with Next.js, React, TypeScript, Tailwind CSS, REST APIs, React hooks for state/data fetching, SSR/SSG where appropriate, and client-side caching for fast navigation, resulting in faster operator decisions through KPI panels, UI ready for AI-powered recommendations.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "SSR/SSG"],
    liveUrl: "https://train-traffic-management-vercel.vercel.app/train-traffic-management-vercel.vercel.app",
    githubUrl: "#",
    color: "#3b82f6",
  },
  {
    title: "DigiJustice",
    tagline: "AI-powered legal awareness chatbot",
    description:
      "AI-powered legal awareness chatbot built with Next.js, React, Tailwind CSS, and MongoDB.",
    details:
      "Built conversational flows and modular UI components for an intelligent legal chatbot that helps users understand their legal rights and find relevant information.",
    techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    color: "#60a5fa",
  },
];

// ─── Skills ──────────────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 80 },
      { name: "C / C++", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML / CSS", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Three.js", level: 70 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    category: "AI / ML / Data",
    icon: "🧠",
    skills: [
      { name: "Deep Learning", level: 75 },
      { name: "NLP", level: 72 },
      { name: "ANN", level: 74 },
      { name: "CNN", level: 73 },
      { name: "Power BI", level: 68 },
    ],
  },
  {
    category: "GenAI & Tools",
    icon: "🤖",
    skills: [
      { name: "Prompting", level: 85 },
      { name: "LangChain", level: 70 },
      { name: "LLM Prototyping", level: 72 },
    ],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Linux / Unix", level: 78 },
      { name: "Shell Scripting", level: 72 },
    ],
  },
  {
    category: "Core CS",
    icon: "📚",
    skills: [
      { name: "DSA", level: 85 },
      { name: "Networking (IPv4/IPv6)", level: 72 },
      { name: "Software Design", level: 78 },
    ],
  },
];

// ─── Certifications ──────────────────────────────────────────────
export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional",
    code: "1Z0-1127-25",
    score: "82/100",
    date: "Oct 2025",
    icon: "☁️",
  },
  {
    title: "Red Hat Certified System Administrator",
    code: "EX200",
    score: "270/300",
    date: "June 2025",
    icon: "🎩",
  },
  {
    title: "Programming in Java",
    code: "NPTEL",
    score: "",
    date: "Jul – Oct 2024",
    icon: "☕",
  },
  {
    title: "Python Programming",
    code: "CEG Jaipur",
    score: "",
    date: "Jul 2024",
    icon: "🐍",
  },
];

// ─── Achievements ────────────────────────────────────────────────
export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description:
      "Top 50 among 500 teams for project based on improving train traffic control for Indian Railways.",
    icon: "🏆",
  },
  {
    title: "Smart India Hackathon 2024",
    description:
      "Top 20 among 400 teams for our project that will revolutionize healthcare facilities in India.",
    icon: "🥇",
  },
];

// ─── Experience / Extra-curricular ───────────────────────────────
export const experience = [
  {
    role: "Graphic Designer",
    organization: "PR & Media Cell, JECRC",
    duration: "2023 – Present",
    description:
      "Grew the official JECRC Instagram page by 10K+ followers through event campaigns and timely content; created posters and social creatives in Adobe Photoshop, collaborating with PR to maintain brand consistency under tight deadlines.",
    tags: ["Photoshop", "Graphic Design", "Social Media", "Branding"],
    icon: "🎨",
  },
];

// ─── Interests ───────────────────────────────────────────────────
export const interests = [
  "Poster design",
  "Social media graphics",
  "Typography",
  "Color theory",
  "Basic photo retouching",
  "UI/UX trends",
  "Tech communities",
  "Hackathons",
  "Open-source",
  "Fitness",
];

// ─── Social Links ────────────────────────────────────────────────
export const socialLinks = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/himanshuverma96",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/whyhimanshu",
    icon: "github",
  },
  {
    label: "Email",
    url: "mailto:vermahim402@gmail.com",
    icon: "mail",
  },
];
