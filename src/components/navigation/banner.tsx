import Link from "next/link";

import { Contact } from "../footer/contact";
import { Button } from "../ui/button";

export function Banner() {
  return (
    <>
      <div className="mb-1 flex h-21 items-center justify-center gap-10 bg-neutral-100">
        <h1 className="flex w-fit flex-col items-center">
          <span className="text-accent text-3xl font-semibold">Machulec</span>
          <span className="text-2xl">Das Profiteam</span>
        </h1>
        <div className="hidden items-center gap-4 text-xs tracking-wide uppercase sm:flex">
          <Button variant="outline" asChild>
            <Link href="#contact">Start</Link>
          </Button>
          <Link
            href="#contact"
            className="hover:text-accent transition-colors duration-300"
          >
            Leistungen
          </Link>
          <Link
            href="#contact"
            className="hover:text-accent transition-colors duration-300"
          >
            Über Uns
          </Link>
          <Link
            href="#contact"
            className="hover:text-accent transition-colors duration-300"
          >
            Kundenmeinungen
          </Link>
          <Link
            href="#contact"
            className="hover:text-accent transition-colors duration-300"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="bg-background/70 hover:bg-background/90 sticky top-0 z-10 mb-2 flex h-8 justify-around gap-2 text-xs backdrop-blur-sm transition-colors duration-300 sm:justify-center sm:gap-2 md:gap-10 md:text-sm">
        <Contact compact />
      </div>
    </>
  );
}
