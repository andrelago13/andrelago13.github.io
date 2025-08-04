import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/content/blog"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.title.toLowerCase() === slug.toLowerCase()) || null;
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.title.toLowerCase() }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <p className="mt-4 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
            <Button asChild className="mt-8">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

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
              <Link href="/blog" className="hover:text-foreground/80">
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
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <article className="prose prose-gray mx-auto dark:prose-invert max-w-none">
            <div className="space-y-4 not-prose mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="prose prose-gray dark:prose-invert max-w-none">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  // Custom styling for code blocks
                  code: ({ node, className, children, ...props }: any) => {
                    const match = /language-(\w+)/.exec(className || '')
                    const isInline = !match
                    return !isInline ? (
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    ) : (
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                        {children}
                      </code>
                    )
                  },
                  // Custom styling for headings
                  h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 mt-6">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold mb-2 mt-4">{children}</h3>,
                  // Custom styling for lists
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                  // Custom styling for paragraphs
                  p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                  // Custom styling for blockquotes
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.contentMarkdown}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
