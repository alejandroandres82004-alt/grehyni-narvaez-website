"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CruzDiezStrip from "@/components/CruzDiezStrip";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <CruzDiezStrip />
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
}
