import { glob, file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/blog" }),

  // type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      description: z.string(),
      image: image().refine((img) => img, {}),
      // image: z.string(),

      // author: z.string(),
      author: reference("author"),
      tags: z.array(z.string()),
      isDraft: z.boolean().default(false),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      bio: z.string(),
    }),
});

export const collections = { blog: blogCollection, author: authorCollection };
