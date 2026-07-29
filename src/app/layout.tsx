import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themia.com.tr"),
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
  },
  title: "The Mia Store & Cafe | Şanlıurfa'nın Premium Yaşam Alanı",
  description:
    "The Mia Store & Cafe; Şanlıurfa Haliliye'de kadim kültür, nitelikli İtalyan kahve sanatı, 450 m² lüks iç mimari ve gurme patisserie lezzetlerini buluşturuyor.",
  keywords: [
    "The Mia Şanlıurfa",
    "The Mia Store Cafe",
    "Şanlıurfa premium kafe",
    "Haliliye kahve mekanları",
    "Şanlıurfa en iyi kafe",
    "artisan kahve Şanlıurfa",
    "San Sebastian Cheesecake Şanlıurfa",
    "Şanlıurfa tatlı cafe",
    "Haliliye buluşma alanı",
  ],
  authors: [{ name: "The Mia Şanlıurfa" }],
  creator: "The Mia Şanlıurfa",
  publisher: "The Mia Şanlıurfa",
  alternates: {
    canonical: "https://themia.com.tr",
  },
  openGraph: {
    title: "The Mia Store & Cafe | Şanlıurfa'nın Premium Yaşam Alanı",
    description:
      "Kadim kültür ile modern gastronomi disiplininin buluştuğu rafine sosyal buluşma noktası.",
    url: "https://themia.com.tr",
    siteName: "The Mia Şanlıurfa",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "The Mia Şanlıurfa Store & Cafe Atmosphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mia Store & Cafe | Şanlıurfa",
    description:
      "Nitelikli kahve sanatı, İtalyan fırıncılığı ve 450 m² lüks mimari.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
    ],
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

// JSON-LD Structured Data Schema for LocalBusiness / CafeOrCoffeeShop
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "The Mia Store & Cafe",
  image:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
  "@id": "https://themia.com.tr/#cafe",
  url: "https://themia.com.tr",
  telephone: "+904143130000",
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Atatürk Bulvarı No: 142/A",
    addressLocality: "Haliliye",
    addressRegion: "Şanlıurfa",
    postalCode: "63000",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.1674,
    longitude: 38.7955,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "01:00",
    },
  ],
  servesCuisine: ["Coffee", "Artisan Bakery", "Patisserie", "Cold Brew"],
  hasMenu: "https://themia.com.tr/#lezzetler",
  currenciesAccepted: "TRY",
  paymentAccepted: "Cash, Credit Card, Contactless",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#1A1615] antialiased selection:bg-[#C85A32] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
