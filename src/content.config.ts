import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const hosts = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/hosts" }),
  schema: z.object({
    name: z.string(),
    website: z.string()
  })
});

const episodes = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/episodes" }),
  schema: z.object({
    number: z.number(),
    type: z.enum(["news", "interview", "topic"]),
    title: z.string(),
    date: z.coerce.date(),
    teaser: z.string().optional(),
    description: z.string(),
    duration: z.string(),
    chapters: z
      .array(
        z.object({
          title: z.string(),
          start: z.string()
        })
      )
      .optional(),
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
