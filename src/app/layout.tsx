import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Banner } from "@/components/navigation/banner";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Machulec - IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr | Das Profiteam",
  description:
    "Wenn Sie einen guten Fachmann für Fliesen , Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
  openGraph: {
    url: "https://das-profiteam-berlin.de",
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
      "Wenn Sie einen guten Fachmann für Fliesen , Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
    siteName: "Machulec – Das Profiteam",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={cn("font-light antialiased", geistSans.variable, geistMono.variable)}
      >
        <Banner />
        <div className="px-4 sm:px-10 md:px-28">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
