export const siteConfig = {
  title: "Bryan's Blog",
  description: "Blog Oficial de Fullstack",
};

export type FrontMatter = {
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  tags: string[];
  layout: string;
};
