"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import useReveal from "./useReveal";

export default function AboutSection() {
  const { t } = useLanguage();
  useReveal();

  const stats = [
    { value: "5", label: t.about.stats.projects },
    { value: "200+", label: t.about.stats.clients },
    { value: "10+", label: t.about.stats.years },
    { value: "3", label: t.about.stats.cities },
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Two-column hero layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
          {/* Left - Photo */}
          <div className="reveal">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/grehyni/profile-1.jpg"
                alt="Grehyni Narvaez"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center lg:pl-10 reveal reveal-delay">
            <p className="text-accent text-[11px] tracking-[0.4em] uppercase mb-6">
              {t.about.subtitle}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-dark leading-[1.1] mb-10">
              {t.about.title}
            </h2>
            <p className="text-charcoal text-base leading-[1.9] font-light mb-10">
              {t.about.description}
            </p>
            <div className="w-12 h-[1px] bg-accent mb-10" />
            <div className="space-y-8">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.25em] text-accent mb-3">
                  {t.about.philosophy}
                </h3>
                <p className="text-muted leading-[1.8] font-light text-sm">{t.about.philosophyText}</p>
              </div>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.25em] text-accent mb-3">
                  {t.about.experience}
                </h3>
                <p className="text-muted leading-[1.8] font-light text-sm">{t.about.experienceText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-sand">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`bg-ivory text-center py-14 px-6 reveal reveal-delay${i > 0 ? `-${Math.min(i, 3)}` : ""}`}>
              <p className="font-serif text-5xl md:text-6xl font-light text-dark mb-3">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
