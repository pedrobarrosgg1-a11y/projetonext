import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

type Author = {
  name: string;
  avatar: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  author: Author;
};

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const filePath = path.join(postsDirectory, file);

    const source = fs.readFileSync(filePath, "utf8");

    const { data } = matter(source);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      image: data.image,
      author: {
        name: data.author?.name ?? "",
        avatar: data.author?.avatar ?? "/assets/primeiro-post.svg",
      },
    };
  });

  return posts;
}