import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center px-4 sm:px-6">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">André Lago</span>
            </Link>
          </div>
          <div className="flex-1" />
          <nav className="flex items-center space-x-4 sm:space-x-6 text-sm font-medium">
            <Link href="#about" className="hover:text-foreground/80">
              About
            </Link>
            <Link href="#career" className="hover:text-foreground/80">
              Career
            </Link>
            <Link href="#projects" className="hover:text-foreground/80">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-foreground/80">
              Blog
            </Link>
          </nav>
        </div>
      </nav>
  );
};