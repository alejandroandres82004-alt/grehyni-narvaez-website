import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grehyninarvaezvenezuela.com"),
  title: {
    default: "Grehyni Narvaez | Inversiones Inmobiliarias en Venezuela",
    template: "%s | Grehyni Narvaez",
  },
  description:
    "Más de 10 años de experiencia en bienes raíces de lujo. Descubre oportunidades exclusivas de inversión inmobiliaria en Venezuela. Alma Wellness, Castellana 58, Quarzo Mohedano, SkyPark 360, Promenade 18.",
  keywords: "inversiones, inmobiliaria, Venezuela, propiedades, apartamentos, casas, bienes raíces, Caracas, lujo, Grehyni Narvaez",
  authors: [{ name: "Grehyni Narvaez" }],
  openGraph: {
    title: "Grehyni Narvaez | Inversiones Inmobiliarias en Venezuela",
    description: "Más de 10 años de experiencia en bienes raíces de lujo. Descubre oportunidades exclusivas de inversión inmobiliaria en Venezuela.",
    type: "website",
    locale: "es_VE",
    alternateLocale: "en_US",
    siteName: "Grehyni Narvaez Real Estate",
    url: "https://www.grehyninarvaezvenezuela.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grehyni Narvaez | Real Estate Venezuela",
    description: "Luxury real estate investment opportunities in Venezuela.",
  },
  robots: { index: true, follow: true },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}')`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
