"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import useReveal from "./useReveal";

export default function CredentialsStrip() {
  const { lang } = useLanguage();
  useReveal();

  const items = [
    "Faena Residences",
    "Baccarat Residences",
    "Bentley Residences",
    "St Regis Sunny Isles",
    "Cipriani Residences",
    "Grupo Binian",
  ];

  return (
    <section className="py-16 border-y border-sand reveal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-muted mb-8">
          {lang === "es" ? "Experiencia con desarrollos de clase mundial" : "World-class development experience"}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {items.map((item) => (
            <span key={item} className="font-serif text-lg md:text-xl font-light text-stone whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
