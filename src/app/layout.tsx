import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import { Toaster } from "@/components/ui/sonner";
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

export const metadata: Metadata = {
  openGraph: {
    url: "/",
    type: "website",
    locale: "de_DE",
    phoneNumbers: ["0152 596 72 775"],
    emails: ["machulec.gerpol@gmail.com"],
  },
  robots: "index, follow",
  creator: "Konrad Guzek",
  authors: {
    name: "Konrad Guzek",
    url: "https://www.guzek.uk",
  },
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
    <html lang="de" className="scroll-smooth">
      <body
        className={cn(
          "flex flex-col font-light antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        {children}
        <Toaster />
        <Script
          data-collect-dnt="true"
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></Script>
      </body>
    </html>
  );
}
