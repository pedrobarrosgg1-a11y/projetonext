"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { Post } from "@/src/lib/posts-types";

import { Avatar } from "@/src/components/avatar";
import { Markdown } from "@/src/components/markdown";
import { PostShare } from "./components/post-share";

type PagePostProps = {
  post: Post;
};

export const PagePost = ({ post }: PagePostProps) => {
  const postUrl = `https://site.set/blog/${post?.slug ?? ""}`;

  if (!post) {
    return (
      <main className="mt-32 text-white">
        <p>Post não encontrado.</p>
      </main>
    );
  }
  const [day, month, year] = post.date.split("/");
  const publishedDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
  ).toLocaleDateString("pt-BR");

  return (
    <main className="py-20 text-gray-100">
      <div className="container space-y-8 px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="transition-all duration-300 hover:scale-105">
              <BreadcrumbLink
                render={() => <Link href="/blog">Blog</Link>}
                className="text-action-sm"
              >
                <Link href="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-blue-200 text-action-sm">
                {post?.title}
              </span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
          <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
            <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={post?.image ?? ""}
                alt={post?.title ?? ""}
                fill
                className="object-cover"
              />
            </figure>

            <header className="p-4 md:p-6 lg:p-12 pb-0 mt-8 md:mt-12">
              <h1 className="mb-8 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
                {post?.title}
              </h1>

              <Avatar.Container>
                <Avatar.Image
                  src={post?.author.avatar}
                  alt={post?.title}
                  size="sm"
                />
                <Avatar.Content>
                  <Avatar.Title>{post?.author.name}</Avatar.Title>
                  <Avatar.Description>
                    Publicado em {""}
                    <time dateTime={post?.date}>{publishedDate}</time>
                  </Avatar.Description>
                </Avatar.Content>
              </Avatar.Container>
            </header>

            <div className="prose prose-invert max-w-none px-4 mt-12 md:px-6 lg:px-12">
              <Markdown content={post?.body.raw} />
            </div>
          </article>

          <PostShare
            url={postUrl}
            title={post?.title}
            description={post?.description}
          />
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const { getAllPosts } = await import("@/src/lib/posts");
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug?: string };
}) {
  const { getAllPosts } = await import("@/src/lib/posts");
  const slug = typeof params.slug === "string" ? params.slug : "";
  const post = getAllPosts().find((post) => post.slug === slug) ?? null;

  return {
    props: {
      post,
    },
  };
}
