import type { Post } from '@/src/lib/posts-types';
import { PagePost } from '@/src/templates/blog/post-page';
import type { GetStaticPaths, GetStaticProps } from 'next';

type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  return <PagePost post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { getAllPosts } = await import('@/src/lib/posts');
  const sortedPosts = [...getAllPosts()].sort(
    (a, b) =>
      new Date(b.date.split('/').reverse().join('-')).getTime() -
      new Date(a.date.split('/').reverse().join('-')).getTime()
  );

  const recentPosts = sortedPosts.slice(0, 5);
  const paths = recentPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{ post: Post | null }> = async (
  context
) => {
  const { getAllPosts } = await import('@/src/lib/posts');
  const slug = context.params?.slug;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const post = getAllPosts().find((post) => post.slug === slug) ?? null;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};