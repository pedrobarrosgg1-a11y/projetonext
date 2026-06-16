import { notFound } from "next/navigation";

import { getAllPosts } from "@/src/lib/posts";
import { PagePost } from "@/src/templates/blog/post-page";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug;
  const post = getAllPosts().find((post) => post.slug === slug) ?? null;

  if (!post) {
    notFound();
  }

  return <PagePost post={post} />;
}
