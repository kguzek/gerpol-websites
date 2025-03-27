import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Banner } from "@/components/navigation/banner";
import { TRAUM_BAD } from "@/lib/constants";

const PRODUCTION_URL = `https://${TRAUM_BAD}`;

export const metadata: Metadata = {
  title:
    "Traum Bad – Professionelle Badsanierung & Renovierung in Berlin | Ihr Experte für Traumbäder",
  description:
    "Von der schnellen Badewannen-Reparatur bis zur Komplettsanierung: Wir verwandeln Ihr Badezimmer in eine Wohlfühl-Oase mit festen Preisen und deutschlandweitem Service.",
  metadataBase: new URL(PRODUCTION_URL),
  openGraph: {
    images: {
      url: "/og-image-traumbad.png",
      width: 1200,
      height: 630,
      alt: "Modernes Badezimmer mit hochwertiger Sanitärausstattung",
      type: "image/png",
    },
    title: "Traum Bad – Individuelle Badezimmergestaltung in Berlin | Machulec Gerpol",
    description:
      "Professionelle Badrenovierung mit 3D-Planung, festen Preisen und deutschlandweitem Service - Ihr Partner für Traumbäder seit 1995",
    siteName: "Traum Bad - Badsanierung Berlin",
  },
  keywords: [
    "Badsanierung Berlin",
    "Badrenovierung",
    "Traumbad Gestaltung",
    "Badezimmer Komplettumbau",
    "Wasserschaden Reparatur",
    "Barrierefreies Bad",
    "3D Badplanung",
    "Fliesenarbeiten Berlin",
    "Sanitärinstallation",
    "Badezimmer Modernisierung",
  ],
};

export default function TraumBadLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner title="Traum Bad" />
      <main className="grow px-4 sm:px-10 md:px-28">{children}</main>
    </>
  );
}
