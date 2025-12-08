import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

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

      author: z.string(),
      tags: z.array(z.string()),
    }),
});

export const collections = { blog: blogCollection };
