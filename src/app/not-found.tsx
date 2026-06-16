import Link from "next/link";
import { Button } from "../components/layout/ui/button";
import { FileQuestion, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion size={96} className="text-gray-100 mx-auto mb-6" />
      </div>

      <div className="relative inline-block mt-3 font-sans group">
        <span className="text-8xl font-bold text-white inline-block transform -rotate-12 -translate-y-2 -translate-x-1 transition-transform duration-300 group-hover:scale-110">
          4
        </span>
        <span className="text-8xl font-bold text-blue-200 inline-block transition-transform duration-300 group-hover:scale-110">
          0
        </span>
        <span className="text-8xl font-bold text-white inline-block transition-transform duration-300 group-hover:scale-110">
          4
        </span>
      </div>

      <p className="text-gray-100 mb-8">Página não encontrada!</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button
          variant="primary"
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link href="/">Home</Link>
        </Button>

        <Button
          variant="secondary"
          asChild
          className="transition-all duration-300 hover:-translate-y-1"
        >
          <Link href="/blog?q=">
            <Search size={16} />
            Pesquisar Posts
          </Link>
        </Button>
      </div>
    </div>
  );
}
