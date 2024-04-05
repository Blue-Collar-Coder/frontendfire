import { defineCollection, reference, z } from "astro:content";

const hosts = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    website: z.string()
  })
});

const episodes = defineCollection({
  type: "data",
  schema: z.object({
    number: z.number(),
    type: z.enum(["news", "interview"]),
    title: z.string(),
    date: z.date(),
    teaser: z.string().optional(),
    description: z.string(),
    duration: z.string(),
    hosts: z.array(reference("hosts")),
    guests: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
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
  episodes,
  hosts
};
