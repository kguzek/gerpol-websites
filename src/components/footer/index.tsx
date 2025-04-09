import Link from "next/link";
import { House } from "lucide-react";

import { Heading } from "../heading";
import { Contact } from "./contact";
import { ContactForm } from "./contact-form";

export function Footer({ contactFromEmail }: { contactFromEmail: string }) {
  return (
    <div id="contact" className="mt-12 px-4 sm:px-10 md:px-28">
      <Heading>Kontakt aufnehmen</Heading>
      <div className="mt-6 mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        <address className="grid grid-cols-1 justify-around gap-2 text-sm not-italic sm:grid-cols-2 md:flex md:flex-col">
          <div className="flex items-center gap-1 sm:col-span-2 md:col-span-1">
            <House className="text-accent" /> Gerpol Consulting UG (haftungsbeschränkt)
          </div>
          <Contact />
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
