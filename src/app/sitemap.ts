import type { MetadataRoute } from "next";
import { site } from "@/content/site";

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
  const base = site.domain;
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}