import { BlogList, type BlogListProps } from "@/src/templates/blog/blog-list";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/src/lib/posts";

export default function BlogPage({posts}: BlogListProps) {
  return <BlogList posts={posts}/>;
}

export const getStaticProps = (async () => {
  const sortedPosts = getAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      posts: sortedPosts
    }
  }
}) satisfies GetStaticProps<BlogListProps>