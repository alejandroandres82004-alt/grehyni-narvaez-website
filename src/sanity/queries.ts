import { sanityClient, isSanityConfigured } from "./client";
import { properties as staticProperties } from "@/data/properties";
import type { Property } from "@/data/properties";

// Fetch properties from Sanity, fallback to static data
export async function getProperties(): Promise<Property[]> {
  if (!isSanityConfigured()) return staticProperties;

  try {
    const data = await sanityClient.fetch(`
      *[_type == "property"] | order(_createdAt desc) {
        "id": id.current,
        "title": { "es": titleEs, "en": titleEn },
        "description": { "es": descriptionEs, "en": descriptionEn },
        type,
        price,
        "location": { "es": locationEs, "en": locationEn },
        bedrooms,
        bathrooms,
        area,
        "images": images[].asset->url,
        "features": { "es": featuresEs, "en": featuresEn },
        featured,
        developer,
        website,
        "brochure": brochureUrl.asset->url
      }
    `);
    return data.length > 0 ? data : staticProperties;
  } catch {
    return staticProperties;
  }
}

export async function getPropertyById(id: string): Promise<Property | undefined> {
  if (!isSanityConfigured()) return staticProperties.find((p) => p.id === id);

  try {
    const data = await sanityClient.fetch(
      `
      *[_type == "property" && id.current == $id][0] {
        "id": id.current,
        "title": { "es": titleEs, "en": titleEn },
        "description": { "es": descriptionEs, "en": descriptionEn },
        type,
        price,
        "location": { "es": locationEs, "en": locationEn },
        bedrooms,
        bathrooms,
        area,
        "images": images[].asset->url,
        "features": { "es": featuresEs, "en": featuresEn },
        featured,
        developer,
        website,
        "brochure": brochureUrl.asset->url
      }
    `,
      { id }
    );
    return data || staticProperties.find((p) => p.id === id);
  } catch {
    return staticProperties.find((p) => p.id === id);
  }
}

export interface InsightPost {
  url: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  thumbnail: string;
}

export async function getInsightPosts(): Promise<InsightPost[]> {
  if (!isSanityConfigured()) return [];

  try {
    return await sanityClient.fetch(`
      *[_type == "instagramPost"] | order(_createdAt desc) [0...6] {
        url,
        "title": { "es": titleEs, "en": titleEn },
        "description": { "es": descriptionEs, "en": descriptionEn },
        "thumbnail": thumbnail.asset->url
      }
    `);
  } catch {
    return [];
  }
}
