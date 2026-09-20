"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { properties } from "@/data/properties";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import HorizontalGallery from "@/components/HorizontalGallery";
import useReveal from "@/components/useReveal";

export default function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);
  useReveal();

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="pt-32 pb-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="font-serif text-4xl font-light text-dark mb-4">Property not found</h1>
          <Link href="/propiedades" className="text-accent">{t.properties.back}</Link>
        </div>
      </div>
    );
  }

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const whatsappMsg = `${t.whatsapp.propertyMessage}${property.title[lang]}${pageUrl ? `\n${pageUrl}` : ""}`;
  const whatsappUrl = getWhatsAppUrl(whatsappMsg);

  return (
    <div className="pt-20 pb-24">
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-light cursor-view">
        <Image
          src={property.images[activeImage]}
          alt={property.title[lang]}
          fill
          className="object-cover transition-opacity duration-500"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-black/10" />

        <Link
          href="/propiedades"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-md text-dark text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          {t.properties.back}
        </Link>
      </div>

      {/* Horizontal Scroll Gallery */}
      {property.images.length > 2 && (
        <div className="-mt-8 relative z-10 mb-16">
          <HorizontalGallery images={property.images} title={property.title[lang]} />
        </div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main */}
          <div className="lg:col-span-2">
            <div className="reveal">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent mb-4">
                {t.properties[property.type]} · {property.location[lang]}
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] font-light text-dark leading-tight mb-3">
                {property.title[lang]}
              </h1>
              {property.developer && (
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted mb-8">
                  {lang === "es" ? "Desarrollador" : "Developer"}: {property.developer}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mb-12 pb-12 border-b border-sand reveal reveal-delay">
              {property.bedrooms > 0 && (
                <div>
                  <p className="font-serif text-4xl font-light text-dark">{property.bedrooms}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">{t.properties.bedrooms}</p>
                </div>
              )}
              {property.bathrooms > 0 && (
                <div>
                  <p className="font-serif text-4xl font-light text-dark">{property.bathrooms}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">{t.properties.bathrooms}</p>
                </div>
              )}
              <div>
                <p className="font-serif text-4xl font-light text-dark">{property.area}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">m²</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-14 reveal">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
                {t.properties.description}
              </h2>
              <p className="text-charcoal text-base leading-[2] font-light">
                {property.description[lang]}
              </p>
            </div>

            {/* Features */}
            <div className="reveal">
              <h2 className="text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
                {t.properties.features}
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {property.features[lang].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 py-3 border-b border-sand/50">
                    <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    <span className="text-charcoal font-light text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-8 reveal">
              <div className="pb-8 border-b border-sand">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-2">{t.properties.from}</p>
                <p className="font-serif text-4xl font-light text-dark">{property.price}</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light text-dark mb-2">{t.properties.interested}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6 font-light">{t.properties.interestedDesc}</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-dark text-white text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors duration-500"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.properties.contactAgent}
                </a>
              </div>

              {property.brochure && (
                <a
                  href={property.brochure}
                  download
                  className="flex items-center justify-center gap-2 w-full py-4 border border-accent text-accent text-[11px] uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.properties.brochure}
                </a>
              )}

              {property.website && (
                <a
                  href={property.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 border border-sand text-dark text-[11px] uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-500"
                >
                  {lang === "es" ? "Website del Proyecto" : "Project Website"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-ivory/95 backdrop-blur-md border-t border-sand px-4 py-3 flex gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-dark text-white text-[11px] uppercase tracking-[0.15em]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
        {property.brochure && (
          <a href={property.brochure} download className="flex items-center justify-center gap-2 py-3.5 px-6 border border-sand text-dark text-[11px] uppercase tracking-[0.15em]">
            Brochure
          </a>
        )}
      </div>
    </div>
  );
}
