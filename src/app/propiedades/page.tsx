"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { useLanguage } from "@/i18n/LanguageContext";
import { properties } from "@/data/properties";

type FilterType = "all" | "apartment" | "house" | "commercial" | "land";

export default function PropertiesPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered = filter === "all" ? properties : properties.filter((p) => p.type === filter);

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: t.properties.all },
    { key: "apartment", label: t.properties.apartment },
    { key: "house", label: t.properties.house },
    { key: "commercial", label: t.properties.commercial },
    { key: "land", label: t.properties.land },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-[13px] tracking-[0.4em] uppercase mb-6">
            {t.properties.subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal text-dark">
            {t.properties.allProperties}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 text-[12px] uppercase tracking-[0.15em] transition-all duration-300 ${
                filter === f.key
                  ? "bg-primary text-white"
                  : "bg-transparent text-muted border border-sand hover:border-primary hover:text-dark"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
