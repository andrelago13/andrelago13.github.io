import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      id: "building-scalable-apis",
      title: "Building Scalable APIs with Node.js and Express",
      excerpt:
        "Learn how to design and implement scalable REST APIs that can handle high traffic loads while maintaining performance and reliability.",
      date: "December 15, 2024",
      tags: ["Node.js", "API Design", "Performance"],
    },
    {
      id: "react-performance-optimization",
      title: "React Performance Optimization Techniques",
      excerpt:
        "Discover advanced techniques to optimize React applications, including memoization, code splitting, and efficient state management.",
      date: "November 28, 2024",
      tags: ["React", "Performance", "Optimization"],
    },
    {
      id: "microservices-architecture",
      title: "Microservices Architecture: Lessons Learned",
      excerpt:
        "My experience transitioning from monolithic to microservices architecture, including challenges faced and solutions implemented.",
      date: "November 10, 2024",
      tags: ["Microservices", "Architecture", "DevOps"],
    },
    {
      id: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Applications",
      excerpt:
        "Essential TypeScript patterns and practices that help maintain code quality and developer productivity in large-scale applications.",
      date: "October 22, 2024",
      tags: ["TypeScript", "Best Practices", "Code Quality"],
    },
    {
      id: "docker-development-workflow",
      title: "Streamlining Development with Docker",
      excerpt:
        "How to set up an efficient development workflow using Docker containers for consistent environments across teams.",
      date: "October 5, 2024",
      tags: ["Docker", "DevOps", "Development"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2 pl-6">
              <span className="font-bold">André Lago</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#about" className="hover:text-foreground/80">
                About
              </Link>
              <Link href="/#career" className="hover:text-foreground/80">
                Career
              </Link>
              <Link href="/#projects" className="hover:text-foreground/80">
                Projects
              </Link>
              <Link href="/blog" className="text-foreground">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Thoughts on software development, technology, and lessons learned along the way.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={post.id}>
                <article className="group">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
                {index < posts.length - 1 && <Separator className="mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
