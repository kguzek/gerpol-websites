import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";

import { Heading } from "../heading";
import { Button } from "../ui/button";
import { Contact } from "./contact";
import { ContactForm } from "./contact-form";

export function Footer({
  contactFromEmail,
  ctaText,
  ctaLabel,
  ctaUrl,
  showBwbBadge = false,
}: {
  contactFromEmail: string;
  ctaLabel: string;
  ctaText: string;
  ctaUrl: string;
  showBwbBadge?: boolean;
}) {
  return (
    <div id="contact" className="mt-12 px-4 sm:px-10 md:px-28">
      <div className="text-center">
        <p>{ctaText}</p>
        <Button asChild variant="outline" className="my-4">
          <Link href={ctaUrl}>{ctaLabel}</Link>
        </Button>
      </div>
      <Heading>Kontakt aufnehmen</Heading>
      <div className="mt-6 mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <address className="my-4 grid grid-cols-1 gap-2 space-y-6 text-sm not-italic sm:grid-cols-2 md:flex md:flex-col">
          <div className="flex items-center gap-1 sm:col-span-2 md:col-span-1">
            <House className="text-accent" /> Gerpol Consulting UG (haftungsbeschränkt)
          </div>
          <Contact />
          {showBwbBadge && (
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/bwb-logo.svg"
                  alt="Berliner Wasserbetriebe"
                  width={120}
                  height={40}
                  className="dark:invert"
                />
              </div>
              <span className="text-muted-foreground text-xs">IU-Nr. 00020131</span>
            </div>
          )}
        </address>
        <ContactForm fromEmail={contactFromEmail} />
      </div>
      <hr className="border-accent absolute left-0 w-full" />
      <footer className="mb-2 pt-2 text-center">
        Erstellt mit 🤍 von{" "}
        <Link
          href="https://www.guzek.uk"
          className="text-accent transition-all duration-300 hover:underline"
        >
          Konrad Guzek
        </Link>
      </footer>
    </div>
  );
}
