import { PagePost } from "@/src/templates/blog/post-page";
import { getAllPosts } from "@/src/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      images: post.image ? [post.image] : undefined,
    },
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return <PagePost post={post} />;
}
