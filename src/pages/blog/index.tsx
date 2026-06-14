import { BlogList } from "@/src/templates/blog/blog-list";
import type { Post } from "@/src/lib/posts-types";

export default function BlogPage({ posts }: { posts: Post[] }) {
  return <BlogList posts={posts} />;
}

export async function getStaticProps() {
  const { getAllPosts } = await import("@/src/lib/posts");
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}