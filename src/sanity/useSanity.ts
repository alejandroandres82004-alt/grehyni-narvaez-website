"use client";

import { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import type { Property } from "@/data/properties";
import { properties as staticProperties } from "@/data/properties";

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

const client = PROJECT_ID
  ? createClient({
      projectId: PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

export interface SiteSettings {
  heroTitle: string;
  heroTitleEn: string;
  heroSubtitle: string;
  heroSubtitleEn: string;
  statProjects: string;
  statClients: string;
  statYears: string;
  statCities: string;
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

const defaultSettings: SiteSettings = {
  heroTitle: "Tu Futuro Comienza Aquí",
  heroTitleEn: "Your Future Starts Here",
  heroSubtitle: "Inversiones Inmobiliarias en Venezuela",
  heroSubtitleEn: "Real Estate Investment in Venezuela",
  statProjects: "5",
  statClients: "200+",
  statYears: "10+",
  statCities: "3",
  phone: "+17865548738",
  email: "asefinancial@gmail.com",
  instagram: "https://www.instagram.com/grehynirealtor",
  facebook: "https://www.facebook.com/grehyninarvaezrealtors",
  youtube: "https://www.youtube.com/@grehyninarvaez489",
};

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    if (!client) return;
    client
      .fetch(`*[_type == "siteSettings"][0]`)
      .then((data) => {
        if (data) setSettings({ ...defaultSettings, ...data });
      })
      .catch(() => {});
  }, []);

  return settings;
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>(staticProperties);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) {
      setLoading(false);
      return;
    }
    client
      .fetch(
        `*[_type == "property"] | order(_createdAt desc) {
          "id": slug.current,
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
          "brochure": brochure.asset->url
        }`
      )
      .then((data) => {
        if (data && data.length > 0) setProperties(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { properties, loading };
}

export function useProperty(id: string) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) {
      const found = staticProperties.find((p) => p.id === id);
      setProperty(found || null);
      setLoading(false);
      return;
    }
    client
      .fetch(
        `*[_type == "property" && slug.current == $id][0] {
          "id": slug.current,
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
          "brochure": brochure.asset->url
        }`,
        { id }
      )
      .then((data) => {
        if (data) {
          setProperty(data);
        } else {
          setProperty(staticProperties.find((p) => p.id === id) || null);
        }
        setLoading(false);
      })
      .catch(() => {
        setProperty(staticProperties.find((p) => p.id === id) || null);
        setLoading(false);
      });
  }, [id]);

  return { property, loading };
}
