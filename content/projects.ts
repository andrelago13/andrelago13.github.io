export interface Project {
  name: string;
  tagline: string;
  description: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    tagline: "Full-stack e-commerce solution with payment integration",
    description: "Built a complete e-commerce platform handling 1000+ daily transactions with Stripe integration and real-time inventory management.",
    url: "https://github.com",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
];