import type { Post } from "@/src/lib/posts-types";
import { PagePost } from "@/src/templates/blog/post-page";

type PostPageProps = {
  post: Post | null;
};

export default function PostPage({ post }: PostPageProps) {
  return <PagePost post={post} />;
}

export async function getStaticPaths() {
  const { getAllPosts } = await import("@/src/lib/posts");
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { getAllPosts } = await import("@/src/lib/posts");
  const post = getAllPosts().find((post) => post.slug === params.slug) ?? null;

  return {
    props: {
      post,
    },
  };
}