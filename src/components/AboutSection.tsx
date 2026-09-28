"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSiteSettings } from "@/sanity/useSanity";
import useReveal from "./useReveal";

export default function AboutSection() {
  const { t } = useLanguage();
  const settings = useSiteSettings();
  useReveal();

  const stats = [
    { value: settings.statProjects, label: t.about.stats.projects },
    { value: settings.statClients, label: t.about.stats.clients },
    { value: settings.statYears, label: t.about.stats.years },
    { value: settings.statCities, label: t.about.stats.cities },
  ];

  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-32">
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

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-sand">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-ivory text-center py-14 px-6">
              <p className="font-serif text-5xl md:text-6xl font-light text-dark mb-3">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
