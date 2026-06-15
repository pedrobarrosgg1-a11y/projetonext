import { getAllPosts } from "@/src/lib/posts";
import { BlogList } from "@/src/templates/blog";

export default function BloglistPage() {
  const sortedPosts = getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <BlogList posts={sortedPosts} />
  );
}
