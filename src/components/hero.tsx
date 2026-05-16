import Image from "next/image";

import heroImage from "@/assets/gerpol-hero.jpeg";

export function Hero() {
  return (
    <section className="my-2 px-4 sm:px-10 md:px-28 lg:my-10">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg">
        <Image
          src={heroImage}
          alt="Machulec Gerpol Hero"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
