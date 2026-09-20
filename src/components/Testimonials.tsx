"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import useReveal from "./useReveal";

const testimonials = [
  {
    name: "María G.",
    location: { es: "Inversionista, Miami", en: "Investor, Miami" },
    text: {
      es: "Grehyni nos ayudó a encontrar la propiedad perfecta en Caracas. Su conocimiento del mercado y dedicación son incomparables. Siempre disponible, siempre profesional.",
      en: "Grehyni helped us find the perfect property in Caracas. Her market knowledge and dedication are unmatched. Always available, always professional.",
    },
  },
  {
    name: "Carlos R.",
    location: { es: "Comprador, Caracas", en: "Buyer, Caracas" },
    text: {
      es: "La atención personalizada que recibimos fue excepcional. Grehyni transformó lo que podría haber sido un proceso complicado en una experiencia fluida y transparente.",
      en: "The personalized attention we received was exceptional. Grehyni transformed what could have been a complicated process into a smooth and transparent experience.",
    },
  },
  {
    name: "Andrea M.",
    location: { es: "Inversionista, New York", en: "Investor, New York" },
    text: {
      es: "Su experiencia con desarrollos de lujo en Miami se nota en cada recomendación. Confío plenamente en su criterio para inversiones inmobiliarias en Venezuela.",
      en: "Her experience with luxury developments in Miami shows in every recommendation. I fully trust her judgment for real estate investments in Venezuela.",
    },
  },
];

export default function Testimonials() {
  const { lang, t } = useLanguage();
  useReveal();

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-20 reveal">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase mb-4">
            {t.testimonials.subtitle}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-dark leading-[0.95]" style={{ letterSpacing: "-0.02em" }}>
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={item.name}
              className={`reveal ${i === 1 ? "reveal-delay" : i === 2 ? "reveal-delay-2" : ""} p-8 border border-sand`}
            >
              <svg className="w-8 h-8 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-charcoal font-light leading-[1.8] mb-6 text-sm">
                {item.text[lang]}
              </p>
              <div>
                <p className="text-dark font-medium text-sm">{item.name}</p>
                <p className="text-muted text-[12px]">{item.location[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
