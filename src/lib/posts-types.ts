export type Author = {
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
