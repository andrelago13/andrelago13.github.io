import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { workExperience } from "@/content/work-experience";
import { Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">André Lago</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="#career" className="hover:text-foreground/80">
                Career
              </Link>
              <Link href="#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#blog" className="hover:text-foreground/80">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            André Lago
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I love building, creating and turning my ideas into reality. I've
            worked in software engineering for over 12 years by developing
            software on both startups and big tech, leading engineering teams
            and even starting my own companies.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/andrelago13" target="_blank">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://www.linkedin.com/in/andre-lago/"
                target="_blank"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Career Timeline */}
      <section id="career" className="container py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Career Journey
          </h2>
          <div className="space-y-8">
            {workExperience.map((entry) => (
              <div className="relative pl-8 border-l-2 border-muted">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {entry.date}
                  </div>
                  <h3 className="text-xl font-semibold">{entry.title}</h3>
                  <p className="text-muted-foreground">{entry.company}</p>
                  <p className="text-sm">
                    {entry.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {entry.tags?.map((tag) => (
                      <Badge variant="secondary" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2022 - Present
                </div>
                <h3 className="text-xl font-semibold">
                  Senior Software Engineer
                </h3>
                <p className="text-muted-foreground">TechCorp Inc.</p>
                <p className="text-sm">
                  Leading a team of 5 developers building scalable microservices
                  architecture. Implemented CI/CD pipelines reducing deployment
                  time by 60%.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2020 - 2022
                </div>
                <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                <p className="text-muted-foreground">StartupXYZ</p>
                <p className="text-sm">
                  Built the entire web platform from scratch serving 10k+ users.
                  Developed RESTful APIs and responsive frontend interfaces.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-muted">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  2018 - 2020
                </div>
                <h3 className="text-xl font-semibold">Junior Developer</h3>
                <p className="text-muted-foreground">WebSolutions Ltd.</p>
                <p className="text-sm">
                  Started my career building client websites and learning modern
                  web development practices. Contributed to 20+ successful
                  project deliveries.
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">WordPress</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Key Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  E-Commerce Platform
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>
                  Full-stack e-commerce solution with payment integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Built a complete e-commerce platform handling 1000+ daily
                  transactions with Stripe integration and real-time inventory
                  management.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    MongoDB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Task Management App
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>
                  Collaborative project management tool
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time collaboration tool with drag-and-drop interface,
                  team chat, and advanced reporting features.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Socket.io
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Express
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Analytics Dashboard
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="https://github.com" target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardTitle>
                <CardDescription>
                  Data visualization and reporting platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Interactive dashboard processing millions of data points with
                  custom charts and automated report generation.
                </p>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">
                    D3.js
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    FastAPI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Blog Section */}
      <section id="blog" className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Latest Blog Posts
          </h2>
          <div className="space-y-8">
            <article className="group">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  December 15, 2024
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  <Link href="/blog/building-scalable-apis">
                    Building Scalable APIs with Node.js and Express
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Learn how to design and implement scalable REST APIs that can
                  handle high traffic loads while maintaining performance and
                  reliability.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">API Design</Badge>
                  <Badge variant="secondary">Performance</Badge>
                </div>
              </div>
            </article>

            <Separator />

            <article className="group">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  November 28, 2024
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  <Link href="/blog/react-performance-optimization">
                    React Performance Optimization Techniques
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  Discover advanced techniques to optimize React applications,
                  including memoization, code splitting, and efficient state
                  management.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Performance</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </div>
              </div>
            </article>

            <Separator />

            <article className="group">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  November 10, 2024
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  <Link href="/blog/microservices-architecture">
                    Microservices Architecture: Lessons Learned
                  </Link>
                </h3>
                <p className="text-muted-foreground">
                  My experience transitioning from monolithic to microservices
                  architecture, including challenges faced and solutions
                  implemented.
                </p>
                <div className="flex gap-2">
                  <Badge variant="secondary">Microservices</Badge>
                  <Badge variant="secondary">Architecture</Badge>
                  <Badge variant="secondary">DevOps</Badge>
                </div>
              </div>
            </article>

            <div className="text-center pt-8">
              <Button variant="outline" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 André Lago. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="mailto:john@example.com">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com" target="_blank">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
