import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [""],
    },
    sitemap: ["https://apexaid.com.au/sitemap.xml"],
  };
}
