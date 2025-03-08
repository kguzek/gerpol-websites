import Link from "next/link";
import { Mail, MapPin, Phone, Printer } from "lucide-react";

import { cn } from "@/lib/utils";

export const EMAIL_ADDRESS = "info@machulec.de";

export function Contact({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className="flex items-center gap-1">
        <MapPin className="text-accent" />{" "}
        <div className="flex flex-col gap-x-1 sm:flex-row">
          <span>Germaniapromenade 21,</span>
          <span>12347 Berlin</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Phone className="text-accent" />
        <Link
          href="tel:+4915259672775"
          className="hover:text-accent transition-colors duration-300"
        >
          0152 596 72 775
        </Link>
      </div>
      <div
        className={cn("items-center gap-1", {
          "hidden sm:flex": compact,
          flex: !compact,
        })}
      >
        <Printer className="text-accent" />
        <Link
          href="tel:+493054826707"
          className="hover:text-accent transition-colors duration-300"
        >
          030 54 82 67 07
        </Link>
      </div>
      <div
        className={cn("items-center gap-1", {
          "hidden sm:flex": compact,
          flex: !compact,
        })}
      >
        <Mail className="text-accent" />
        <Link
          href={`mailto:${EMAIL_ADDRESS}`}
          className="hover:text-accent transition-colors duration-300"
        >
          {EMAIL_ADDRESS}
        </Link>
      </div>
    </>
  );
}
