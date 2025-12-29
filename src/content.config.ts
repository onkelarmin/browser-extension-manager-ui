import { defineCollection, z } from "astro:content";

import { file } from "astro/loaders";

const extensions = defineCollection({
  loader: file("src/data/extensions.json"),
  schema: z.object({
    logo: z.string(),
    name: z.string(),
    description: z.string(),
    isActive: z.boolean(),
  }),
});

export const collections = { extensions };
