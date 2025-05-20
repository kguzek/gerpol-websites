import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "react-cookie-manager/style.css";
import "./globals.css";

import { AnalyticsProvider } from "@/components/tracking";

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
        <AnalyticsProvider
          translations={{
            title: "Cookie-Einwilligungseinstellungen",
            message:
              "Wir respektieren den Schutz Ihrer Daten. Wählen Sie aus, welche Cookies Sie zulassen möchten. Essenzielle Cookies sind immer aktiviert, da sie für die ordnungsgemäße Funktion der Website benötigt werden.",
            declineButtonText: "Abfall",
            buttonText: "Akzeptieren",
            manageButtonText: "Cookies verwalten",
            manageTitle: "Cookie Einstellungen",
            manageMessage:
              "Unten können Sie Ihre Cookie-Einstellungen verwalten. Essentielle Cookies sind immer aktiviert, da sie für die einwandfreie Funktion der Website erforderlich sind.",
            manageEssentialTitle: "Notwendige",
            manageEssentialSubtitle:
              "Für die einwandfreie Funktion der Webseite erforderlich",
            manageEssentialStatus: "Status: Immer aktiviert",
            manageEssentialStatusButtonText: "Immer aktiv",
            manageAnalyticsTitle: "Analyse",
            manageAnalyticsSubtitle:
              "Helfen Sie uns zu verstehen, wie Besucher mit unserer Website interagieren",
            manageSocialTitle: "Sozial",
            manageSocialSubtitle: "Aktivieren Sie Social Media-Funktionen und das Teilen",
            manageAdvertTitle: "Werbung",
            manageAdvertSubtitle:
              "Personalisieren Sie Werbung und messen Sie deren Leistung",
            manageCancelButtonText: "Abbrechen",
            manageSaveButtonText: "Einstellungen speichern",
          }}
        >
          {children}
          <Toaster />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
