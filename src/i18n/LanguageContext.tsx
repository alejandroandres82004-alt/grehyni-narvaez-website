"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import es from "./es";
import en from "./en";

type Language = "es" | "en";
type Dictionary = typeof es;

interface LanguageContextType {
  lang: Language;
  t: Dictionary;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const dictionaries = { es, en };

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("es");

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    document.documentElement.lang = newLang;
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "es" ? "en" : "es";
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
