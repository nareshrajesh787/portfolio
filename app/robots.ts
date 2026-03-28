import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://nareshrajesh.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/awards',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
