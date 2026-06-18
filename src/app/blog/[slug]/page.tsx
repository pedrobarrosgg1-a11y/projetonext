import { getAllPosts } from "@/src/lib/posts";
import { notFound } from 'next/navigation';
import { PagePost } from '@/src/templates/blog/post-page'

type BlogPostPage = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({params}: BlogPostPage) {
    const { slug } = await params;
    const post = getAllPosts().find((post) => post.slug === slug);

    if (!post) {
    notFound();
  }

    return (
        <PagePost post={post} />
    )
}