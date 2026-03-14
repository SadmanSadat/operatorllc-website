import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.operatorllc.com/', changeFrequency: 'weekly', priority: 1 }
  ];
}
