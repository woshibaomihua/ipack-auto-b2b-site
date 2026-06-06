import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_INFO } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.domain),
  title: {
    default: `${SITE_INFO.brandName} | ${SITE_INFO.tagline}`,
    template: `%s | ${SITE_INFO.brandName}`
  },
  description: `${SITE_INFO.shortDesc} Specialize in Headlights, Tail Lights, Radiators, and Suspension parts for Toyota, Honda, Suzuki, and Hybrid vehicles.`,
  keywords: "Auto Parts Wholesale, Japanese Car Parts, Hybrid Vehicle Parts, Toyota Prius Parts, Honda Civic Parts, Suzuki Swift Spare Parts, China Auto Parts Supplier, OE Number Auto Parts",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${SITE_INFO.brandName} | Japanese & Hybrid Auto Parts Wholesale`,
    description: SITE_INFO.shortDesc,
    url: SITE_INFO.domain,
    siteName: SITE_INFO.brandName,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": SITE_INFO.brandName,
    "description": SITE_INFO.shortDesc,
    "url": SITE_INFO.domain,
    "logo": `${SITE_INFO.domain}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guangzhou",
      "addressRegion": "Guangdong",
      "addressCountry": "CN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+${SITE_INFO.contact.whatsapp}`,
      "contactType": "sales",
      "email": SITE_INFO.contact.email,
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://ipackauto.en.alibaba.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
