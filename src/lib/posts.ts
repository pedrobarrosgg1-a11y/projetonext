// Carrega módulos Node apenas em tempo de execução para evitar inclusão no bundle do cliente.
const nodeRequire = (name: string) => {
  try {
    // Evita que bundlers façam análise estática de `require`.
    // eslint-disable-next-line no-eval
    return eval("require")(name);
  } catch (e) {
    return null;
  }
};

const matter = nodeRequire("gray-matter");

const postsDirectory = (() => {
  const path = nodeRequire("path");
  if (!path) return null;
  return path.join(process.cwd(), "posts");
})();

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
  body: {
    raw: string;
  };
};

export function getAllPosts(): Post[] {
  const fs = nodeRequire("fs");
  const path = nodeRequire("path");
  if (!fs || !path || !postsDirectory || !matter) return [];

  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((file: string) => {
    const slug = file.replace(".mdx", "");

    const filePath = path.join(postsDirectory, file);

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

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
      body: {
        raw: content,
      },
    };
  });

  return posts;
}