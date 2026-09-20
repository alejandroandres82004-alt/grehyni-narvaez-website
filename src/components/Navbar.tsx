"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/propiedades", label: t.nav.properties },
    { href: "/#about", label: t.nav.about, anchor: true },
    { href: "/#contact", label: t.nav.contact, anchor: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[99] transition-all duration-700 ${scrolled ? "nav-glass" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[96px]">
          {/* Logo */}
          <Link href="/" className="group">
            <span className={`font-serif text-[1.7rem] font-light tracking-[0.01em] transition-colors duration-700 ${scrolled ? "text-dark" : "text-white"}`}>
              Grehyni Narvaez
            </span>
          </Link>

          {/* Desktop Nav - Glass pill */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-700 ${scrolled ? "bg-white/50 backdrop-blur-lg border border-black/5" : "bg-white/10 backdrop-blur-md border border-white/10"}`}>
              {links.map((item) => {
                const El = item.anchor ? "a" : Link;
                return (
                  <El
                    key={item.href}
                    href={item.href}
                    className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] transition-all duration-500 ${
                      scrolled
                        ? "text-muted hover:text-dark hover:bg-white/60"
                        : "text-white/70 hover:text-white hover:bg-white/15"
                    }`}
                  >
                    {item.label}
                  </El>
                );
              })}
              <button
                onClick={toggleLang}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.12em] transition-all duration-500 ${
                  scrolled
                    ? "text-accent hover:bg-accent/10"
                    : "text-white/50 hover:text-white hover:bg-white/15"
                }`}
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 transition-colors ${scrolled ? "text-dark" : "text-white"}`}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-current transition-transform duration-500 ${isOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-6 h-[1.5px] bg-current transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-[1.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 bg-dark/95 backdrop-blur-sm flex flex-col items-center justify-center gap-10 transition-all duration-700 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} style={{ paddingTop: 96 }}>
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="font-serif text-3xl font-light text-white/80 hover:text-white transition-colors">
            {item.label}
          </a>
        ))}
        <button onClick={() => { toggleLang(); setIsOpen(false); }} className="text-[11px] uppercase tracking-[0.2em] text-accent mt-4">
          {lang === "es" ? "English" : "Espanol"}
        </button>
      </div>
    </nav>
  );
}
