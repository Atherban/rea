import { services } from "@/src/lib/services-data";

export default function sitemap() {
  const baseUrl = "https://www.rajeshwariengineering.com";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages];
}
