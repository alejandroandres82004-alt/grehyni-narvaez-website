"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const { lang, t } = useLanguage();

  return (
    <Link href={`/propiedades/${property.id}`}>
      <div className="property-card group cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-light">
          {property.images?.[0] ? (
            <Image
              src={property.images[0]}
              alt={property.title?.[lang] || ""}
              fill
              className="object-cover img-zoom"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-stone">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/80">
              {t.properties.details} &rarr;
            </span>
          </div>
        </div>

        <div className="pt-5 pb-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            {property.location?.[lang] || ""}
          </p>
          <h3 className="font-serif text-xl font-light text-dark leading-snug mb-2">
            {property.title?.[lang] || ""}
          </h3>
          <p className="text-[12px] text-muted">
            {property.bedrooms && `${property.bedrooms} ${t.properties.bedrooms}`}
            {property.bathrooms && ` · ${property.bathrooms} ${t.properties.bathrooms}`}
            {property.area && ` · ${property.area} m²`}
          </p>
        </div>
      </div>
    </Link>
  );
}
