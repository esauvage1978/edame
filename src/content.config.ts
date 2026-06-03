import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
    title: z.string(),
    headline: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    heroImageAlt: z.string(),
    imageCredit: z.string().optional(),
    author: z.string().default('Leduc Delphine'),
    categories: z.array(z.string()),
    tags: z.array(z.string()).default([]),
    relatedLinks: z
      .array(
        z.object({
          href: z.string(),
          label: z.string(),
        }),
      )
      .default([]),
    faqSchema: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ),
    articleJsonLd: z.boolean().default(true),
    localBusinessSchema: z.boolean().default(false),
    personSchema: z.boolean().default(false),
    breadcrumbSchema: z.boolean().default(true),
  }),
});

export const collections = { blog };
