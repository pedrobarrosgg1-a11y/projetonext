import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "../lib/utils";

export const Header = () => {
    const router = useRouter ();
    const isHomePage = router.pathname === '/';
    const isBlogPage = router.pathname.startsWith('/blog');

    return (
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filters]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-80">
          <Link href="/">Logo</Link>

          <nav className="flex items-center gap-6">
            <Link href="/"  className={cn("text-sm font-medium transition-colors hover:text-blue-500",
                isHomePage ? 'text-blue-500' : 'text-muted-foreground')}>Início</Link>
            <Link href="/"  className={cn("text-sm font-medium transition-colors hover:text-blue-500",
                isBlogPage ? 'text-blue-500' : 'text-muted-foreground')}>blogs</Link>
            <Button variant="secondary">Começar</Button>
          </nav>
        </div>
      </header>
    )
  }