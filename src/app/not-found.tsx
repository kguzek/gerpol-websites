import Link from "next/link";
import { notFound } from "next/navigation";
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

/** This is needed to correctly render the nested layout when encountering 404 routes in non-root layouts.
 *
 * By default, only the root layout is applied when the route is not found.
 * When `notFound()` is called explicitly, the specific layout is also applied.
 *
 * @example export { NotFoundThrower as default } from "@/app/not-found"; // use this in [...slug]/page.tsx
 */
export function NotFoundThrower() {
  notFound();
}
