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
  width = undefined,
  height = 300,
  className = "cursor-pointer rounded-md",
}: {
  src: StaticImageData | string;
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
      <DialogContent>
        <DialogTitle>{alt}</DialogTitle>
        <DialogDescription className="grid place-items-center">
          <Image
            src={src}
            alt={alt}
            width={undefined}
            height={undefined}
            className="rounded-md"
          />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
