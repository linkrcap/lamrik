import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lamrik.com"),
  title: {
    default: "Lamrik Labs — Technology Holding Company & Product Studio",
    template: "%s | Lamrik Labs",
  },
  description:
    "Lamrik Labs Pvt Ltd is a technology holding company headquartered in Hyderabad, India. We design, incubate, and scale digital platforms for creators, communities, and institutions.",
  keywords: [
    "Lamrik Labs",
    "technology holding company",
    "product studio",
    "digital platforms",
    "Hyderabad",
    "India",
    "Linkrcap",
    "startup incubation",
    "platform development",
    "digital ecosystems",
  ],
  authors: [{ name: "Lamrik Labs Pvt Ltd" }],
  creator: "Lamrik Labs",
  publisher: "Lamrik Labs Pvt Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lamrik.com",
    siteName: "Lamrik Labs",
    title: "Lamrik Labs — Technology Holding Company & Product Studio",
    description:
      "We design, incubate, and scale digital platforms for creators, communities, and institutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamrik Labs — Designing the Digital Platforms of Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamrik Labs — Technology Holding Company & Product Studio",
    description:
      "We design, incubate, and scale digital platforms for creators, communities, and institutions.",
    images: ["/og-image.png"],
    creator: "@lamriklabs",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://lamrik.com",
  },
};

// JSON-LD Structured Data for Organization
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lamrik Labs Pvt Ltd",
  alternateName: "Lamrik Labs",
  url: "https://lamrik.com",
  logo: "https://lamrik.com/logo.png",
  description:
    "A technology holding company and product studio that designs, incubates, and scales digital platforms.",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@lamrik.com",
    contactType: "business inquiries",
  },
  sameAs: [
    "https://linkedin.com/company/lamriklabs",
    "https://twitter.com/lamriklabs",
  ],
  // Subsidiary/Product
  owns: {
    "@type": "WebApplication",
    name: "Linkrcap",
    url: "https://www.linkrcap.com/",
    description: "Transform ideas into reality through innovation sprints, prototype building, and structured incubation pathways.",
    applicationCategory: "BusinessApplication",
  },
};

// JSON-LD for WebSite (helps with sitelinks in search)
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lamrik Labs",
  url: "https://lamrik.com",
  description: "Technology Holding Company & Product Studio",
  publisher: {
    "@type": "Organization",
    name: "Lamrik Labs Pvt Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
