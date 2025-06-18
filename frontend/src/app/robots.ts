import { sagMetaData } from "@/metaData";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${sagMetaData.siteUrl}/sitemap.xml`,
  };
}
