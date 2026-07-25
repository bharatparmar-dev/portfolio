import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/projects",
  "/skills",
  "/experience",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bharatparmar.dev";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}