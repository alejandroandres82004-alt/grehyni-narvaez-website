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
          <Image
            src={property.images[0]}
            alt={property.title[lang]}
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/80">
              {t.properties.details} &rarr;
            </span>
          </div>
        </div>

        <div className="pt-5 pb-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
            {property.location[lang]}
          </p>
          <h3 className="font-serif text-xl font-light text-dark leading-snug mb-2">
            {property.title[lang]}
          </h3>
          <p className="text-[12px] text-muted">
            {property.bedrooms > 0 && `${property.bedrooms} ${t.properties.bedrooms}`}
            {property.bathrooms > 0 && ` · ${property.bathrooms} ${t.properties.bathrooms}`}
            {` · ${property.area} m²`}
          </p>
        </div>
      </div>
    </Link>
  );
}
