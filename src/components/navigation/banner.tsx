import Image from "next/image";

import { Contact } from "@/components/footer/contact";

export function Banner({ title }: { title: string }) {
  return (
    <>
      <div className="text-primary bg-tertiary mb-1 flex min-h-21 flex-col items-center justify-center gap-3 px-4 py-3">
        <h1 className="flex w-fit flex-col items-center gap-1">
          <span className="inline-flex flex-wrap items-end justify-center gap-2 text-center leading-none">
            <span className="text-accent text-3xl leading-none font-semibold">
              Machulec
            </span>
            <span className="text-2xl leading-none">{title}</span>
            <span className="border-accent text-accent inline-flex items-center rounded-full border px-3 py-1 text-sm leading-none font-semibold tracking-wide uppercase">
              Meisterbetrieb
            </span>
          </span>
        </h1>
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/images/bwb-logo.svg"
            alt="Berliner Wasserbetriebe"
            width={170}
            height={56}
            className="dark:invert"
            priority
          />
          <span className="text-muted-foreground text-xs">IU-Nr. 00020131</span>
        </div>
      </div>
      <div className="bg-secondary/70 text-primary hover:bg-secondary/90 sticky top-0 z-10 mb-2 flex h-8 justify-around gap-2 text-xs backdrop-blur-sm transition-colors duration-300 sm:justify-center sm:gap-2 md:gap-10 md:text-sm lg:text-lg">
        <Contact compact animate />
      </div>
    </>
  );
}
