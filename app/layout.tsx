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
    default: "AI Business Operating System India | CRM & Automation Platform | Lamrik Labs",
    template: "%s | Lamrik Labs",
  },
  description:
    "Lamrik Business OS™ is an AI-powered CRM, WhatsApp automation, AI voice agent and analytics infrastructure built for real estate, healthcare and D2C businesses in India.",
  keywords: [
    "Lamrik Labs",
    "business operating system India",
    "CRM automation platform",
    "real estate CRM India",
    "healthcare CRM software India",
    "D2C CRM platform",
    "WhatsApp automation platform",
    "AI voice agents for business",
    "Linkrcap",
    "product studio",
    "digital platforms",
    "Hyderabad",
    "India",
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
    title: "AI Business Operating System India | CRM & Automation Platform | Lamrik Labs",
    description:
      "Lamrik Business OS™ is an AI-powered CRM, WhatsApp automation, AI voice agent and analytics infrastructure built for real estate, healthcare and D2C businesses in India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamrik Business OS™ — AI-Powered CRM & Automation Platform for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Operating System India | CRM & Automation Platform | Lamrik Labs",
    description:
      "Lamrik Business OS™ is an AI-powered CRM, WhatsApp automation, AI voice agent and analytics infrastructure built for real estate, healthcare and D2C businesses in India.",
    images: ["/og-image.png"],
    creator: "@lamriklabs",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://lamrik.com",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
  description: "AI Systems & Platform Company — Product Studio",
  publisher: {
    "@type": "Organization",
    name: "Lamrik Labs Pvt Ltd",
  },
};

// JSON-LD for SoftwareApplication (Lamrik Business OS)
const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lamrik Business OS™",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI-powered CRM, lead capture, WhatsApp automation, AI voice agent and analytics platform built for real estate, healthcare and D2C businesses in India.",
  offers: {
    "@type": "Offer",
    category: "CRM & Automation Platform",
  },
  creator: {
    "@type": "Organization",
    name: "Lamrik Labs Pvt Ltd",
  },
};

// JSON-LD for Service (Business Automation Deployment)
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Automation & CRM Deployment",
  provider: {
    "@type": "Organization",
    name: "Lamrik Labs Pvt Ltd",
    url: "https://lamrik.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "End-to-end deployment of AI-powered business operating systems including CRM, WhatsApp automation, AI voice agents, and analytics dashboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
