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
    default: "Carrz Car Care | Premium Doorstep Car Detailing in Nagpur",
    template: "%s | Carrz Car Care Nagpur",
  },
  description: "Nagpur's #1 professional doorstep car cleaning, interior deep detailing, and premium ceramic coating services. Book your slot today for a showroom shine at home.",
  keywords: ["car washing nagpur", "doorstep car detailing nagpur", "carrz car care", "ceramic coating nagpur", "car wash at home nagpur", "interior deep cleaning nagpur", "car polish nagpur"],
  authors: [{ name: "Carrz Car Care" }],
  creator: "Carrz Car Care",
  publisher: "Carrz Car Care",
  alternates: {
    canonical: 'https://carrzcare.in',
  },
  openGraph: {
    title: "Carrz Car Care | Premium Doorstep Car Detailing in Nagpur",
    description: "Professional doorstep car cleaning, detailing, and ceramic coating services in Nagpur. Book your slot today for a showroom shine at home.",
    url: "https://carrzcare.in",
    siteName: "Carrz Car Care",
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
    title: "Carrz Car Care Nagpur",
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
    name: 'Carrz Car Care',
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
      areaServed: 'Nagpur',
      availableLanguage: ['English', 'Hindi', 'Marathi']
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
