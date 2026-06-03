import { BlogList } from "@/src/templates/blog/blog-list";
import { getAllPosts, type Post } from "@/src/lib/posts";

export default function BlogPage({ posts }: { posts: Post[] }) {
  return <BlogList posts={posts} />;
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}