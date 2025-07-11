import { MetadataRoute } from "next";

const routes: string[] = [
  "",
  "/about",
  "/contact",
  "/services",
  "/services/supported-independent-living",
  "/services/short-term-accommodation",
  "/services/specialist-disability-accommodation",
  "/services/support-coordination",
  "/services/community-nursing-care",
  "/services/community-participation",
  "/services/assistance-with-personal-activities",
  "/services/group-and-centre-based-activities",
  "/services/travel-and-transport-assistance",
  "/services/complex-behavourial-and-forensic-supports",
  "/services/transition-supports",
  "/services/development-of-life-skills",
  "/services/assistive-technology-and-home-modifications",
  "/services/personal-mobility-equipment",
  "/services/household-equipment-and-assistive-products",
  "/services/palliative-care",
  "/services/innovative-community-participation",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return routes.map((route) => ({
    url: `https://apexaid.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
