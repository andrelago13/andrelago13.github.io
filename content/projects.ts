export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    name: "Task Samurai",
    tagline: "Instantly find all source relevant for each task",
    description: "Custom integration into IDEs and Jira to instantly find all source relevant for each task based on natural language descriptions of tickets.",
    url: "https://tasksamurai.ai",
    tags: ["Embeddings", "Vector DBs", "LLMs", "Next.js"],
  },
  {
    name: "Jarvis",
    tagline: "Smart Space Management Conversational Assistant",
    description: "In my MSc dissertation I build a voice assistant capable of scheduling an managing tasks in configurable IOT environments like smart homes.",
    url: "https://github.com/andrelago13/jarvis",
    tags: ["NLP", "IOT", "DialogFlow"],
  },
  {
    name: "LPOOL",
    tagline: "Multiplayer and multi-device pool game",
    description: "Billiards game with Android devices as controllers and a desktop server playing the game itself.",
    url: "https://www.youtube.com/watch?v=Hgp11t09ssc",
    tags: ["Java", "LibDGX"],
  }
];