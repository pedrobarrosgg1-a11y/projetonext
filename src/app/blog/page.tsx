import { BlogList } from "@/src/templates/blog";
import { getAllPosts } from "@/src/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://projetonext-ochre.vercel.app/og-image.jpg",
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://projetonext-ochre.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};
export default function BloglistPage() {
  const sortedPosts = getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <BlogList posts={sortedPosts} />
  );
}