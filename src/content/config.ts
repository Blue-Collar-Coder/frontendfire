import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  type: "data",
  schema: z.object({
    number: z.number(),
    type: z.enum(["news", "interview"]),
    title: z.string(),
    date: z.date(),
    description: z.string(),
    duration: z.string(),
    hosts: z.array(z.string()),
    guests: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().optional(),
          intro: z.string().optional()
        })
      )
      .optional(),
    links: z.array(
      z.object({
        text: z.string(),
        url: z.string()
      })
    ),
    audio: z.string().optional(),
    apple: z.string(),
    spotify: z.string(),
    clip: z.string().optional(),
    youtube: z.string().optional()
  })
});

export const collections = {
  episodes
};
