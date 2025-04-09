import Image from "next/image";
import Link from "next/link";

import type { Service } from "@/lib/types";

export function ServiceCard({
  service: { image, label },
  priority,
}: {
  service: Service;
  priority: boolean;
}) {
  return (
    <Link href="#contact" title={label} className="w-full max-w-[420px]">
      <Image
        src={image}
        alt={label}
        className="rounded-t-sm"
        placeholder="blur"
        priority={priority}
      />
      <p className="bg-accent text-secondary line-clamp-2 rounded-b-sm px-2 py-1 text-center text-sm font-light">
        {label}
      </p>
    </Link>
  );
}
