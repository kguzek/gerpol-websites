import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/types";

export function ServiceCard({ service: { image, label } }: { service: Service }) {
  return (
    <Link href="#contact" title={label} className="w-full max-w-[320px] sm:w-[220px]">
      <Image
        src={image}
        alt={label}
        width={320}
        height={220}
        className="h-auto w-auto rounded-t-sm"
      />
      <p className="bg-accent text-background line-clamp-2 rounded-b-sm px-2 py-1 text-center text-sm font-light">
        {label}
      </p>
    </Link>
  );
}
