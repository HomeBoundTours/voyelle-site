import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://voyelle.com";
const SITE_NAME = "Voyelle";
const DEFAULT_TITLE = "Voyelle | Custom Trip Planning & Travel Itineraries";
const DEFAULT_DESCRIPTION =
  "Custom, done-for-you travel itineraries. Voyelle researches, designs, and organizes personalized trips — honeymoons, family vacations, adventures and more — so you just travel. Start planning today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "custom travel itinerary",
    "travel planner",
    "trip planning service",
    "honeymoon planning",
    "family vacation planning",
    "travel advisor",
    "personalized itinerary",
    "done-for-you travel",
    "Voyelle",
  ],
  authors: [{ name: "Voyelle" }],
  creator: "Voyelle",
  publisher: "Voyelle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Voyelle — The world, thoughtfully arranged.",
    description:
      "Remarkable trips, without the work of planning one. Expertly researched, beautifully organized itineraries delivered ready to travel.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Voyelle — The world, thoughtfully arranged.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voyelle — The world, thoughtfully arranged.",
    description:
      "Remarkable trips, without the work of planning one. Itineraries delivered ready to travel.",
    images: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${SITE_URL}/#org`,
      name: "Voyelle",
      url: SITE_URL,
      email: "aaron3534@outlook.com",
      description:
        "Full-service travel planning studio offering custom, done-for-you itineraries — researched, designed, and organized so clients just travel.",
      slogan: "The world, thoughtfully arranged.",
      logo: `${SITE_URL}/assets/logo_primary.png`,
      image: `${SITE_URL}/assets/logo_primary.png`,
      priceRange: "$$",
      areaServed: { "@type": "Place", name: "Worldwide" },
      knowsAbout: [
        "Custom travel itineraries",
        "Honeymoon planning",
        "Family vacation planning",
        "Adventure travel planning",
        "Trip budgeting",
        "Concierge travel",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "Trip Spark",
          description:
            "A 60-minute consult and one-page personalized recommendations for do-it-yourself travelers.",
          price: "150",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Signature Itinerary",
          description:
            "Full custom day-by-day itinerary plus a trip planner and budget. You book it.",
          price: "75",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "75",
            priceCurrency: "USD",
            unitText: "per day",
          },
        },
        {
          "@type": "Offer",
          name: "Voyelle Concierge",
          description:
            "Everything in Signature plus full reservation and booking management and on-trip support.",
          price: "1500",
          priceCurrency: "USD",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Voyelle",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <meta name="theme-color" content="#0E3B3A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="absolute top-[-100px] left-4 z-[9999] inline-flex items-center gap-2 rounded-full text-sm font-semibold px-5 py-2.5 focus:top-4"
          style={{ background: "#0E3B3A", color: "#F6F1E7", transition: "top 0.2s" }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
