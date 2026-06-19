import { PagePost } from "@/src/templates/blog/post-page";
import { getAllPosts } from "@/src/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const posts = getAllPosts();

  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    robots: "index, follow",
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

// Como os posts são estáticos, não há necessidade de ISR
// export const revalidate = 60;

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const posts = getAllPosts();

  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PagePost post={post} />;
}