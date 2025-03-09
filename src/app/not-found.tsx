import Link from "next/link";
import { BrickWall, Construction } from "lucide-react";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 lg:mt-24">
      <Heading>Nicht Gefunden</Heading>
      <p className="flex items-center justify-center gap-4 text-3xl">
        <BrickWall className="text-accent" /> 404 Seite nicht gefunden{" "}
        <Construction className="text-accent" />
      </p>
      <Button variant="outline" asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}
