// Single source of truth for site content. Update this file when the resume changes.

export const site = {
  name: "Naresh Rajesh",
  role: "Software Engineer",
  location: "Atlanta, GA",
  url: "https://nareshrajesh.vercel.app",
  description:
    "Naresh Rajesh is a software engineer in Atlanta building full-stack products and multimodal AI pipelines. Software engineering intern at iVue and co-founder of InnovateATL and LearnAI Forsyth.",
  email: "nareshrajesh787@gmail.com",
  github: "https://github.com/nareshrajesh787",
  linkedin: "https://www.linkedin.com/in/naresh-rajesh",
  resume: "/Naresh_Rajesh_Resume.pdf",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type NowItem = {
  text: string;
  org: string;
  role: string;
  stat: string;
  href?: string;
};

// Drives the rotating "Now" line and hero panel caption on the home page.
export const now: NowItem[] = [
  { text: "Building route optimization for drones", org: "iVue", role: "SWE Intern", stat: "Vue · Nuxt · AWS" },
  { text: "Co-founding a statewide startup competition", org: "InnovateATL", role: "Co-founder", stat: "200+ competitors", href: "https://innovateatl.org/" },
  { text: "Shipping free AI tools for nonprofits", org: "LearnAI Forsyth", role: "Co-founder", stat: "4 nonprofits served", href: "https://learnai-forsyth.vercel.app/" },
  { text: "Leading a 350-member chapter as Co-President", org: "FBLA", role: "Co-President", stat: "350 members" },
];

export const proof = [
  { strong: "Wharton", rest: "Global Finalist" },
  { strong: "FBLA", rest: "National 3rd" },
  { strong: "Digital Tech", rest: "Student of the Year" },
];

export const experience = [
  { role: "Software Engineering Intern", org: "iVue", date: "Mar 2026 – Present", current: true },
  { role: "Co-Founder", org: "InnovateATL", date: "May 2026 – Present", current: true, href: "https://innovateatl.org/" },
  { role: "Co-Founder", org: "LearnAI Forsyth", date: "May 2026 – Present", current: true, href: "https://learnai-forsyth.vercel.app/" },
  { role: "Chapter Co-President & Region 11 Officer", org: "FBLA", date: "Feb 2026 – Present", current: true },
  { role: "Summer Intern, Aerospace Engineering", org: "Georgia Tech STEP", date: "Jun – Jul 2025", current: false },
];

export const honors = [
  { title: "Global Finalist (Top 10 of 5,000+ teams)", org: "Wharton Global Youth Investment Challenge" },
  { title: "National 3rd Place", org: "FBLA Data Analysis" },
  { title: "National 6th Place", org: "FBLA Management Information Systems" },
  { title: "National 6th Place", org: "FBLA Digital Citizenship" },
  { title: "State 1st Place", org: "TSA Cybersecurity" },
  { title: "Digital Technology Student of the Year", org: "Forsyth County Schools CTAE" },
];

export const education = {
  school: "West Forsyth High School",
  graduation: "Expected May 2027",
  gpa: "4.623 / 5.0 weighted",
  rank: "1 / 655",
  dualEnrollment: [
    { school: "Georgia Tech", courses: ["CS 1301", "MATH 1554", "MATH 2551"] },
    { school: "Georgia State University", courses: [] as string[] },
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript", "SQL"] },
  { group: "AI/ML & Data", items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy", "LLM APIs (Gemini)"] },
  { group: "Web & Mobile", items: ["React", "React Native", "Vue.js", "Nuxt", "Node.js", "FastAPI", "Tailwind CSS"] },
  { group: "Cloud & Tools", items: ["AWS (S3, Lambda)", "Firebase", "Git"] },
];

export type Project = {
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  mobileLayout?: boolean;
};

export const featuredProject: Project = {
  title: "SpeechScore",
  date: "Feb 2026",
  imageUrl: "/speechscore.png",
  summary:
    "Speech coaching platform with real-time feedback on pacing, clarity and filler words, powered by AssemblyAI transcription and Gemini scoring.",
  description:
    "A full-stack speech coaching platform with real-time feedback on pacing, clarity, and filler words.",
  problem:
    "Public speaking coaching is primarily inaccessible and highly subjective, making it difficult for individuals to systematically improve their communication skills.",
  approach:
    "Built a React + FastAPI platform around a multi-model pipeline: AssemblyAI transcription feeds Gemini rubric scoring, plus an \"Ask the Coach\" feature for follow-up questions. Deployed on Railway with Firebase authentication for secure data persistence.",
  impact:
    "Delivers immediate, actionable communication metrics to users, democratizing access to professional-level speech analysis.",
  tags: ["Solo Developer", "React", "FastAPI", "Gemini", "Firebase"],
  githubUrl: "https://github.com/nareshrajesh787/SpeechScore",
  liveUrl: "https://speech-score.vercel.app/",
};

export const moreProjects: Project[] = [
  {
    title: "PeerPoint",
    date: "2025",
    imageUrl: "/Peerpoint.png",
    summary: "Django platform using OpenAI to generate structured peer review feedback.",
    description:
      "A secure Django platform using PostgreSQL and the OpenAI API to generate structured feedback for academic peer reviews.",
    problem:
      "Academic peer reviews often lack structured, constructive feedback aligned with specific grading rubrics, reducing their educational value.",
    approach:
      "Developed a secure Django-based platform utilizing PostgreSQL and the OpenAI API to analyze student reviews and programmatically generate structured feedback.",
    impact:
      "Standardized the peer review process, improving feedback quality and accelerating student growth. Placed 2nd (Internet Applications) at the Lanier Regional Tech Fair.",
    tags: ["Django", "PostgreSQL", "OpenAI"],
    githubUrl: "https://github.com/nareshrajesh787/PeerPoint",
    liveUrl: "https://techfair24-25.onrender.com/",
  },
  {
    title: "Clarity",
    date: "Oct 2025",
    imageUrl: "/Clarity.jpeg",
    mobileLayout: true,
    summary: "Multimodal check-ins reading face, voice and text sentiment.",
    description:
      "A cross-platform React Native app that reads facial expression, voice, and text sentiment from daily check-ins.",
    problem:
      "Teens face an accessibility gap in mental health resources, and text-only journaling apps miss the nuance of how someone is actually doing day to day.",
    approach:
      "Co-developed a React Native (Expo) app with a multimodal pipeline, computer vision plus Gemini, that reads facial expression, vocal tone, and text sentiment from daily video check-ins, surfaced through a TikTok-style vertical feed.",
    impact:
      "Enables richer, real-time emotional tracking with an accessible, familiar interface, giving users deeper wellness insights than conventional journaling.",
    tags: ["React Native", "Expo", "Computer Vision", "Gemini"],
    githubUrl: "https://github.com/nareshrajesh787/Clarity",
  },
  {
    title: "EcoSearch",
    date: "2025",
    imageUrl: "/EcoSearch.png",
    summary: "Localized environmental data explorer built on public APIs.",
    description:
      "A web app raising local environmental awareness with Python data libraries and the Open-Meteo and Nominatim APIs.",
    problem:
      "Individuals often lack centralized, accessible data regarding key environmental factors in their immediate local areas.",
    approach:
      "Utilized Python libraries (pandas, numpy, matplotlib) alongside APIs like Open-Meteo and Nominatim to create a localized data visualization platform.",
    impact:
      "Combined data science techniques with public environmental APIs to promote sustainability through local awareness. Placed 2nd at West Hack'd.",
    tags: ["Python", "Pandas", "APIs"],
    githubUrl: "https://github.com/nareshrajesh787/EcoSearch",
  },
];

export const homeProjects = [featuredProject, moreProjects[1]];
