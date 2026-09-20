import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import DemoBanner from "@/components/DemoBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ADDRESS, BRAND, CITY, DEMO_MODE, EMAIL, POSTAL_CODE, SERVICE_AREA, SITE_URL, STREET } from "@/lib/infos";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const TITLE = `${BRAND} — Chauffage, climatisation et bornes de recharge à Montpellier`;
const DESCRIPTION =
  "Artisan à Montpellier : installation de pompes à chaleur, climatisation et chauffage (RGE QualiPAC, QualiPV), et de bornes de recharge pour véhicules électriques (certifié IRVE). Garantie décennale.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${BRAND}` },
  description: DESCRIPTION,
  // Démo : pas d'indexation tant que le site n'est pas livré.
  robots: DEMO_MODE ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: BRAND,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: BRAND,
  url: SITE_URL,
  telephone: "+33622728682",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET,
    postalCode: POSTAL_CODE,
    addressLocality: CITY,
    addressCountry: "FR",
  },
  areaServed: SERVICE_AREA,
  description: `${BRAND} — chauffage, climatisation, pompes à chaleur et bornes de recharge IRVE. ${ADDRESS}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <DemoBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
