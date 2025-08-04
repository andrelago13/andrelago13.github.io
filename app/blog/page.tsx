import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { blogPosts } from "@/content/blog"

export default function BlogPage() {
  const posts = blogPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.contentMarkdown.substring(0, 100),
    date: post.date,
    tags: post.tags,
  }));

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
              <div key={post.slug}>
                <article className="group">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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
