import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  type: "data",
  schema: z.object({
    number: z.number(),
    tags: z.array(z.enum(["news", "interview"])),
    title: z.string(),
    date: z.date(),
    description: z.string(),
    duration: z.string(),
    hosts: z.array(z.string()),
    guests: z.array(z.string()).optional(),
    spotify: z.string(),
    clip: z.string(),
    youtube: z.string(),
  }),
});

export const collections = {
  episodes,
};
