import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rediance Car Care Services | Premium Doorstep Car Detailing in Nagpur",
    template: "%s | Rediance Car Care Services Nagpur",
  },
  description: "Nagpur's #1 professional doorstep car cleaning, interior deep detailing, and premium ceramic coating services. Best doorstep car wash service in Manish Nagar, Narendra Nagar, Besa & all Nagpur areas. Affordable car detailing packages. Book your slot today!",
  keywords: [
    // Core brand & service
    "best doorstep car wash service in Nagpur",
    "best car care services near me",
    "car wash near me Nagpur",
    "car cleaning near me",
    "car wash at home Nagpur",
    "Rediance Car Care Services",

    // Area-specific
    "best doorstep car wash service in Manish Nagar",
    "best doorstep car wash service in Narendra Nagar",
    "car wash Besa", "car wash Hudkeshwar",
    "car detailing Pratap Nagar", "car wash Trimurti Nagar",
    "affordable car detailing services in Manish Nagar",
    "affordable car detailing services in Narendra Nagar",

    // Layman / common searches
    "car dhulai Nagpur", "gaadi dhona Nagpur",
    "car wash price Nagpur", "car wash charges Nagpur",
    "cheap car wash Nagpur", "best car wash Nagpur",
    "car cleaning at home Nagpur", "car wash home service Nagpur",
    "car interior cleaning Nagpur", "car seat cleaning Nagpur",
    "car AC cleaning Nagpur", "car foam wash Nagpur",
    "car polish price Nagpur", "car wax polish Nagpur",
    "ceramic coating price Nagpur", "graphene coating Nagpur",
    "PPF Nagpur", "paint protection film Nagpur",
    "car scratch removal Nagpur", "car buffing Nagpur",
    "bike wash at home Nagpur", "two wheeler wash Nagpur",
    "car wash package Nagpur", "monthly car wash plan Nagpur",
    "car wash subscription Nagpur",
    "waterless car wash Nagpur", "steam car wash Nagpur",
    "car underbody wash Nagpur", "engine cleaning Nagpur",
    "doorstep car detailing nagpur", "car washing nagpur",
    "interior deep cleaning nagpur", "car polish nagpur",
    "doorstep car cleaning Nagpur"
  ],
  authors: [{ name: "Rediance Car Care Services" }],
  creator: "Rediance Car Care Services",
  publisher: "Rediance Car Care Services",
  alternates: {
    canonical: 'https://carrzcare.in',
  },
  openGraph: {
    title: "Rediance Car Care Services | Premium Doorstep Car Detailing in Nagpur",
    description: "Professional doorstep car cleaning, detailing, and ceramic coating services in Nagpur. Book your slot today for a showroom shine at home.",
    url: "https://carrzcare.in",
    siteName: "Rediance Car Care Services",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "Rediance Car Care Services Nagpur",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // JSON-LD Schema for Local Business in Nagpur
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Rediance Car Care Services',
    image: 'https://carrzcare.in/logo.png', // Placeholder
    '@id': 'https://carrzcare.in',
    url: 'https://carrzcare.in',
    telephone: '+917709959881',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dharampeth',
      addressLocality: 'Nagpur',
      addressRegion: 'MH',
      postalCode: '440010',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1458,
      longitude: 79.0882
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '20:00'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+917709959881',
      contactType: 'customer service',
      areaServed: [
        'Nagpur', 'Manish Nagar', 'Besa-Pipla', 'Belatrodi', 'Manewada',
        'Ayodhya Nagar', 'Uday Nagar', 'Hudkeshwar', 'Rameshwari',
        'Omkar Nagar', 'Narendra Nagar', 'Somalwada', 'Chatrapati Nagar',
        'Deo Nagar', 'Khamla', 'Sonegaon', 'Jaitala', 'Lakshmi Nagar',
        'Pratap Nagar', 'Trimurti Nagar', 'Pandey Layout'
      ],
      availableLanguage: ['English', 'Hindi', 'Marathi']
    },
    description: 'Best doorstep car wash and car detailing service in Nagpur. Affordable car care packages in Manish Nagar, Narendra Nagar, Besa, Hudkeshwar and all Nagpur areas.',
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '10000'
    }
  };
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <MobileBottomNav />
      </body>
    </html>
  );
}
