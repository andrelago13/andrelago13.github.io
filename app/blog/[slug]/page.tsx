"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts = {
    "building-scalable-apis": {
      title: "Building Scalable APIs with Node.js and Express",
      date: "December 15, 2024",
      tags: ["Node.js", "API Design", "Performance"],
      content: `
# Building Scalable APIs with Node.js and Express

Building scalable APIs is crucial for modern web applications. In this post, I'll share my experience and best practices for creating robust, performant APIs using Node.js and Express.

## Key Principles

### 1. Design for Scale from Day One
When building APIs, it's important to consider scalability from the beginning. This includes:
- Proper database indexing
- Efficient query patterns
- Caching strategies
- Rate limiting

### 2. Use Middleware Effectively
Express middleware is powerful for handling cross-cutting concerns:
- Authentication and authorization
- Request logging
- Error handling
- Input validation

### 3. Implement Proper Error Handling
Consistent error handling improves both developer experience and debugging:
- Use structured error responses
- Log errors appropriately
- Handle async errors properly

## Performance Optimization

### Caching
Implement caching at multiple levels:
- Application-level caching with Redis
- Database query caching
- HTTP caching headers

### Database Optimization
- Use connection pooling
- Implement proper indexing
- Consider read replicas for heavy read workloads

## Conclusion

Building scalable APIs requires careful planning and attention to detail. By following these practices, you can create APIs that perform well under load and are maintainable over time.
      `,
    },
    "react-performance-optimization": {
      title: "React Performance Optimization Techniques",
      date: "November 28, 2024",
      tags: ["React", "Performance", "Optimization"],
      content: `
# React Performance Optimization Techniques

React applications can become slow as they grow. Here are proven techniques to keep your React apps fast and responsive.

## Memoization Techniques

### React.memo
Wrap components to prevent unnecessary re-renders:
\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>
})
\`\`\`

### useMemo and useCallback
Optimize expensive calculations and function references:
\`\`\`jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b)
}, [a, b])

const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
\`\`\`

## Code Splitting

Use React.lazy for component-level code splitting:
\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'))
\`\`\`

## Virtual Scrolling

For large lists, implement virtual scrolling to render only visible items.

## Conclusion

Performance optimization is an ongoing process. Profile your app regularly and apply these techniques where they provide the most benefit.
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
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
            <Link href="/" className="mr-6 flex items-center space-x-2">
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

            <div
              className="prose prose-gray dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }}
            />
          </article>
        </div>
      </div>
    </div>
  )
}
