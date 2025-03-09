"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function ContactPhone({ animate = false }: { animate?: boolean }) {
  const scroll = useScroll();

  return (
    <div
      className={cn("flex items-center gap-1", {
        "relative top-1 animate-bounce": animate && scroll.y === 0,
      })}
    >
      <Phone className="text-accent" />
      <Link
        href="tel:+4915259672775"
        className={cn("hover:text-accent transition-colors [transition-duration:300ms]", {
          "animate-pulse-accent": animate && scroll.y > 0,
        })}
      >
        0152 596 72 775
      </Link>
    </div>
  );
}
