import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://www.sheffieldanimegroup.com/robots.txt",
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://www.sheffieldanimegroup.com",
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://www.sheffieldanimegroup.com/sitemap.xml",
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://www.sheffieldanimegroup.com/gallery",
      lastModified,
      changeFrequency: "daily",
      priority: 0.7,
    },
  ];
}
