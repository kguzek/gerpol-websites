import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { Footer } from "@/components/footer";
import { Banner } from "@/components/navigation/banner";
import { DAS_PROFITEAM, DAS_PROFITEAM_URL, TRAUM_BAD_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Machulec - IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr | Das Profiteam",
  description:
    "Wenn Sie einen guten Fachmann für Fliesen, Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
  metadataBase: new URL(DAS_PROFITEAM_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: {
      url: "/images/das-profiteam/og-image.png",
      width: 1200,
      height: 630,
      alt: "IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr",
      type: "image/png",
    },
    title:
      "Das Profiteam – IKEA Möbelmontage, Küchenbau, Fliesenarbeiten & mehr | Machulec Gerpol",
    description:
      "Wenn Sie einen guten Fachmann für Fliesen, Bad Komplettsanierung, Renovierung oder Küchenplanung in Berlin suchen, dann sind Sie bei uns genau richtig.",
    siteName: "Machulec – Das Profiteam",
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

export default function DasProfiteamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner title="Das Profiteam" />
      <main className="grow px-4 sm:px-10 md:px-28">{children}</main>
      <Footer
        contactFromEmail={`Das Profiteam <das-profiteam@${DAS_PROFITEAM}>`}
        ctaText="Suchen Sie einen Spezialisten für die Badrenovierung?"
        ctaLabel="Besuchen Traum Bad"
        ctaUrl={TRAUM_BAD_URL}
      />
      <Script
        defer
        src="https://analytics.guzek.uk/script.js"
        data-website-id="586cb49b-d30f-4223-90e3-9e3a345f9685"
      ></Script>
    </>
  );
}
