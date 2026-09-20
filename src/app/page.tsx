"use client";

import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import PropertyCard from "@/components/PropertyCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import CredentialsStrip from "@/components/CredentialsStrip";
import { useLanguage } from "@/i18n/LanguageContext";
import { properties } from "@/data/properties";
import Link from "next/link";
import useReveal from "@/components/useReveal";

export default function Home() {
  const { t } = useLanguage();
  useReveal();
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Grehyni Narvaez",
            description: "Luxury real estate investment in Venezuela",
            telephone: "+17865548738",
            email: "asefinancial@gmail.com",
            url: "https://www.grehyninarvaezvenezuela.com",
            areaServed: { "@type": "Country", name: "Venezuela" },
            knowsAbout: ["Real Estate", "Luxury Properties", "Investment"],
          }),
        }}
      />

      <VideoHero />
      <CredentialsStrip />

      {/* Featured Properties */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-20 reveal">
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase mb-4">
              {t.properties.subtitle}
            </p>
            <div className="flex items-end justify-between flex-wrap gap-6">
              <h2 className="font-serif text-5xl md:text-7xl font-light text-dark leading-[0.95]" style={{ letterSpacing: "-0.02em" }}>
                {t.properties.title}
              </h2>
              <Link
                href="/propiedades"
                className="text-[11px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors duration-500 nav-link pb-1 hidden md:inline-flex items-center gap-2"
              >
                {t.properties.viewAll}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            {featured.map((property, i) => (
              <div key={property.id} className={`reveal ${i === 1 ? "reveal-delay" : i === 2 ? "reveal-delay-2" : ""}`}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 reveal md:hidden">
            <Link
              href="/propiedades"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors duration-500 nav-link pb-1"
            >
              {t.properties.viewAll}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width image with curves */}
      <div className="relative h-[60vh] overflow-hidden curve-top curve-bottom cursor-view">
        <Image
          src="/images/alma-caracas/amenidad-piscina-nueva.jpg"
          alt="Infinity pool with mountain views"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <AboutSection />
      <Testimonials />

      <div className="relative h-[50vh] overflow-hidden curve-top curve-bottom cursor-view">
        <Image
          src="/images/alma-caracas/alma_wellness_terraza_horizontal.jpg"
          alt="Rooftop terrace view"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <InstagramFeed />
      <ContactSection />
    </>
  );
}
