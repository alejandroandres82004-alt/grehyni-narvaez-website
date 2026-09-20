"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import Link from "next/link";

export default function VideoHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-end overflow-hidden curve-bottom">
      {/* Background Image with slow Ken Burns zoom */}
      <div className="absolute inset-0">
        <Image
          src="/images/alma-caracas/alma_wellness_noche_exterior_2_nuevo.jpg"
          alt="Alma Wellness tower at night, Caracas"
          fill
          className="object-cover hero-image"
          priority
          quality={90}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-28 md:pb-36">
        <div className="max-w-4xl">
          <div className="hero-line h-[1px] bg-white/30 mb-10" />
          <p className="hero-text text-white/50 text-[11px] tracking-[0.5em] uppercase mb-4">
            {t.hero.subtitle}
          </p>
          <h1 className="hero-text-delay font-serif text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-light text-white leading-[0.95] mb-8" style={{ letterSpacing: "-0.03em" }}>
            {t.hero.title}
          </h1>
          <p className="hero-text-delay-2 text-white/50 text-base max-w-lg leading-relaxed font-light mb-10">
            {t.hero.description}
          </p>
          <div className="hero-text-delay-3 flex items-center gap-8">
            <Link
              href="/propiedades"
              className="px-8 py-3.5 bg-white text-dark text-[11px] uppercase tracking-[0.15em] hover:bg-accent hover:text-white transition-all duration-500"
            >
              {t.hero.cta}
            </Link>
            <a
              href="/#contact"
              className="text-[11px] uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-500 nav-link"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 right-10 hidden md:flex flex-col items-center gap-3 z-10">
        <span className="text-white/25 text-[9px] tracking-[0.2em] uppercase" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <div className="w-[1px] h-10 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-white/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
