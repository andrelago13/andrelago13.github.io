import { Navigation } from "@/components/pages/Navigation";
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
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { workExperience } from "@/content/work-experience";
import { Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background justify-items-center items-center">
      {/* Navigation */}
      <Navigation />

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
      <section id="career" className="container py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Career Journey
          </h2>
          <div className="space-y-8">
            {workExperience.map((entry, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-muted"
              >
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {entry.date}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.title}</h3>
                      <p className="text-muted-foreground">
                        {entry.companyUrl ? (
                          <Link href={entry.companyUrl} target="_blank">
                            {entry.company}
                          </Link>
                        ) : (
                          entry.company
                        )}
                      </p>
                    </div>
                    {entry.logo && (
                      <div className="flex-shrink-0 ml-4">
                        <img
                          src={entry.logo}
                          alt={`${entry.company} logo`}
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-sm">{entry.description}</p>
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
          </div>
        </div>
      </section>

      <Separator />

      {/* Projects Section */}
      <section id="projects" className="container py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Highlighted Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.name}
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.url} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.tagline}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags?.map((tag) => (
                      <Badge variant="outline" className="text-xs" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <Separator /> */}

      {/* Blog Section */}
      <section className="container py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-12">
            Latest Blog Posts
          </h2>
          <div className="space-y-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <div key={index} className="flex flex-col gap-6">
                <article key={index} className="group">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-muted-foreground">
                      {post.contentMarkdown.substring(0, 100)}
                    </p>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
                <Separator />
              </div>
            ))}
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
                <Link href="https://github.com/andrelago13" target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link
                  href="https://www.linkedin.com/in/andre-lago/"
                  target="_blank"
                >
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
