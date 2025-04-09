import type { StaticImageData } from "next/image";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ClickableImage({
  src,
  alt,
  width,
  height = 300,
  className = "cursor-pointer rounded-md",
}: {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image src={src} alt={alt} width={width} height={height} className={className} />
      </DialogTrigger>
      <DialogContent className="md:max-w-fit">
        <DialogTitle>{alt}</DialogTitle>
        <DialogDescription className="grid place-items-center">
          <Image src={src} alt={alt} className="rounded-md" />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
