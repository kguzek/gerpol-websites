import type { ImageProps, StaticImageData } from "next/image";
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
  className = "cursor-pointer rounded-md",
  ...props
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
} & ImageProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Image src={src} alt={alt} className={className} {...props} />
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
