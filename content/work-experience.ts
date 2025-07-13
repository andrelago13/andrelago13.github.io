export interface WorkExperience {
  company: string;
  companyUrl?: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Task Samurai",
    companyUrl: "https://tasksamurai.ai",
    title: "Founder & CEO",
    description: "TODO",
    date: "Jan 2024 - Present",
    tags: ["AI"],
  },
  {
    company: "Freelance",
    title: "Engineering Consultant",
    description: "TODO",
    date: "Jan 2024 - Present",
    tags: ["React", "Node.js", "TypeScript", "Python", "FastAPI", "Azure", "MongoDB", "PostgreSQL", "CI/CD", "DevOps"],
  },
  {
    company: "Replai",
    companyUrl: "https://replai.io",
    title: "Tech Lead",
    description: "TODO",
    date: "Jul 2021 - Oct 2023",
    tags: ["AI"],
  },
  {
    company: "Google",
    title: "Senior Software Engineer, Tech Lead",
    description: "TODO",
    date: "Oct 2018 - Jun 2021",
    tags: ["AI"],
  },
  {
    company: "University of Porto, Faculty of Engineering",
    title: "Teaching Assistant",
    description: "TODO",
    date: "Jan 2024 - Present",
    tags: ["AI"],
  },
];