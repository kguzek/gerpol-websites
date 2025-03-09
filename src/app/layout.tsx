import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Banner } from "@/components/navigation/banner";
import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PRODUCTION_URL = "https://das-profiteam-berlin.de";

export const metadata: Metadata = {
  title:
    "Machulec - IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr | Das Profiteam",
  description:
    "Wenn Sie einen guten Fachmann für Fliesen, Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
  metadataBase: new URL(PRODUCTION_URL),
  openGraph: {
    url: "/",
    images: {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr",
      type: "image/png",
    },
    type: "website",
    locale: "de_DE",
    phoneNumbers: ["0152 596 72 775"],
    emails: ["machulec.gerpol@gmail.com"],
    title:
      "Machulec - IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr | Das Profiteam",
    description:
      "Wenn Sie einen guten Fachmann für Fliesen, Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
    siteName: "Machulec – Das Profiteam",
  },
  alternates: {
    canonical: "/",
  },
  robots: "index, follow",
  creator: "Konrad Guzek",
  authors: {
    name: "Konrad Guzek",
    url: "https://www.guzek.uk",
  },
  keywords: [
    "IKEA Möbelmontage",
    "Küchenbau",
    "Fliesenarbeiten",
    "Bad Komplettsanierung",
    "Renovierung",
    "Küchenplanung",
    "Berlin",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1b98e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={cn(
          "flex flex-col font-light antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <Banner />
        <main className="grow px-4 sm:px-10 md:px-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
