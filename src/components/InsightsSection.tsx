"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import useReveal from "./useReveal";

const insights = [
  {
    id: "vzla-cambio",
    video: "/videos/vzla-cambio.mp4",
    thumbnail: "/images/alma-caracas/alma_wellness_noche_exterior_2_nuevo.jpg",
    title: {
      es: "Venezuela Acaba de Cambiar",
      en: "Venezuela Just Changed",
    },
    description: {
      es: "Un analisis de las nuevas oportunidades que se abren en el mercado inmobiliario venezolano.",
      en: "An analysis of the new opportunities opening up in the Venezuelan real estate market.",
    },
  },
  {
    id: "zonas-caracas",
    video: "/videos/zonas-caracas.mp4",
    thumbnail: "/images/alma-caracas/alma_wellness_vista_aerea_horizontal.webp",
    title: {
      es: "Que Zonas de Caracas Estan Atrayendo",
      en: "Which Areas of Caracas Are Attracting",
    },
    description: {
      es: "Las zonas mas cotizadas de Caracas y por que estan atrayendo inversion.",
      en: "The most sought-after areas of Caracas and why they are attracting investment.",
    },
  },
  {
    id: "buscando-propiedades",
    video: "/videos/buscando-propiedades.mp4",
    thumbnail: "/images/alma-caracas/amenidad-lobby-nuevo-4.jpg",
    title: {
      es: "Quien Esta Buscando Propiedades",
      en: "Who Is Looking for Properties",
    },
    description: {
      es: "El perfil del comprador actual en Venezuela y que buscan los inversionistas.",
      en: "The profile of today's buyer in Venezuela and what investors are looking for.",
    },
  },
];

export default function InsightsSection() {
  const { lang } = useLanguage();
  const [playing, setPlaying] = useState<string | null>(null);
  useReveal();

  return (
    <section className="py-32 bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20 reveal">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase mb-4">
            {lang === "es" ? "Perspectivas del mercado" : "Market Insights"}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-dark leading-[0.95]" style={{ letterSpacing: "-0.02em" }}>
            Insights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <div
              key={insight.id}
              className={`reveal ${i === 1 ? "reveal-delay" : i === 2 ? "reveal-delay-2" : ""}`}
            >
              {/* Video / Thumbnail */}
              <div className="relative aspect-[9/16] max-h-[500px] overflow-hidden mb-5 cursor-pointer group"
                onClick={() => setPlaying(playing === insight.id ? null : insight.id)}
              >
                {playing === insight.id ? (
                  <video
                    autoPlay
                    controls
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={() => setPlaying(null)}
                  >
                    <source src={insight.video} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <Image
                      src={insight.thumbnail}
                      alt={insight.title[lang]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:border-white/70 transition-all duration-500">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3 className="font-serif text-xl font-light text-dark mb-2">
                {insight.title[lang]}
              </h3>
              <p className="text-muted text-sm leading-relaxed font-light">
                {insight.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
