import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Author = {
  name: string;
  avatar: string;
};

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  author: Author;
  body: {
    raw: string;
  };
};

export function getAllPosts(): Post[] {
  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => path.extname(file).toLowerCase() === ".mdx");

  return files.map((file: string) => {
    const slug = path.basename(file, path.extname(file));
    const filePath = path.join(postsDirectory, file);
    const source = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(source);

    return {
      slug,
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      image: data.image ? String(data.image) : undefined,
      author: {
        name: String(data.author?.name ?? ""),
        avatar: String(data.author?.avatar ?? "/assets/primeiro-post.svg"),
      },
      body: {
        raw: String(content),
      },
    };
  });
}
