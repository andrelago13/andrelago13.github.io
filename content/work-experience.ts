export interface WorkExperience {
  company: string;
  companyUrl?: string;
  title: string;
  description: string;
  date: string;
  tags?: string[];
  logo?: string;
}

export const workExperience: WorkExperience[] = [
  {
    company: "supermodular.ai",
    companyUrl: "https://supermodular.ai",
    title: "Founding Engineer",
    description: "Building custom tailored AI solutions for large enterprises, solving real problems with measurable impact. As a founding engineer my role includes ideating and prototyping for new solutions, leading project teams and making technical decisions spanning multiple domains.",
    date: "Jan 2025 - Present",
    tags: ["AI", "LLMs", "Embeddings", "React", "Node.js", "TypeScript", "Python", "FastAPI", "Azure", "CI/CD", "DevOps"],
    logo: "/andrelago13.github.io/logos/supermodular.png",
  },
  {
    company: "Task Samurai",
    companyUrl: "https://tasksamurai.ai",
    title: "Founder & CEO",
    description: "I founded Task Samurai to help developers manage the complexity of scattered knowledge and context in large projects. Using AI, embedding models and direct integrations in tools like VSCode and Jira, we developed interfaces where developers could easily find source code and documentation relevant for the tasks they're working on. Task Samurai was aquired by supermodular.ai to help bootstrap its enterprise offer.",
    date: "Jan 2024 - Present",
    tags: ["AI", "Embeddings", "React", "Node.js", "TypeScript", "AWS"],
    logo: "/logos/tasksamurai.png",
  },
  {
    company: "Freelance",
    title: "Engineering Consultant",
    description: "I helped engineering teams in multiple companies by improving their development processes and workflows, designing complex techical solutions, improving existing architectures and performing direct technical contributions.",
    date: "Jan 2024 - Jan 2025",
    tags: ["Azure", "AWS", "React", "Node.js", "TypeScript", "Python", "FastAPI", "MongoDB", "PostgreSQL", "CI/CD", "DevOps"],
  },
  {
    company: "Replai",
    companyUrl: "https://replai.io",
    title: "Tech Lead",
    description: "As one of the first engineers at Replai, I helped define many of our core technologies and processes. I also led our data pipelines and performance team, responsible for maintaining a fully automated pipeline to fetch and process daily ad performance data from 12+ different ad networks in multiple formats and breakdowns. My team also oversaw API performance by building database query libraries and optimizations ensuring other teams could freely access our databases with maximal query performance.",
    date: "Jul 2021 - Oct 2023",
    tags: ["AWS", "React", "Node.js", "TypeScript", "PostgreSQL", "CI/CD", "DevOps"],
    logo: "/logos/replai-logo.png",
  },
  {
    company: "Google",
    title: "Senior Software Engineer, Tech Lead",
    description: "Led a small engineering team working on multiple million-daily-user privacy products like Google Takeout and Google Dashboard. I bridged the gap between developers, designers, product managers and peer teams by managing the team and performing direct technical contributions and designing key components and technical initiatives.",
    date: "Oct 2018 - Jun 2021",
    tags: ["Java", "TypeScript", "Golang"],
    logo: "/logos/google.png",
  },
  {
    company: "University of Porto, Faculty of Engineering",
    title: "Invited Teacher",
    description: 'I taught 2 of the classes of the "Software Engineering" course, where students had their first SCRUM-like experience of development software in an organized and agile way. The main purpose of the course was to teach common development practices such as git repositories, resource gathering/documentation, technical design, task driven development, testing and continuous delivery.',
    date: "Feb 2022 - July 2022",
    logo: "/logos/feup.png",
  },
  {
    company: "Google",
    title: "Software Engineering Intern",
    description: "Enabled support for custom ringtones and other related features in the public Android O release and made several improvements to the device-side and server-side components that manage backup and restore of Android contacts.",
    date: "Summer 2016 & 2017",
    tags: ["Android", "Java", "C++"],
    logo: "/logos/google.png",
  },
];