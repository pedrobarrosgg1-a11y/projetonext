import { Search } from "@/src/components/search/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";

type Author = {
  name: string;
  avatar: string;
};

type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  author: Author;
};

type BlogListProps = {
  posts: Post[];
};

export function BlogList({ posts }: BlogListProps) {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  // Se existir um texto de busca (query),
  // filtra os posts que possuem esse texto no título.
  // Caso contrário, retorna todos os posts.
  const filteredPosts = query
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase()),
      )
    : posts;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col items-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* TAG */}
            <span className="text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Titulo */}
            <h1 className="text-balance text-start md:text-left text-heading-lg md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>
          {/* Search */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      <PostGridCard>
        {filteredPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
            image={post.image ?? "/assets/primeiro-post.svg"}
            author={{
              avatar: post.author.avatar,
              name: post.author.name,
            }}
          />
        ))}
      </PostGridCard>
    </div>
  );
}
