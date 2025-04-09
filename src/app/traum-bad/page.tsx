import type { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import imageBathroom from "@public/images/traum-bad/bathroom_new.jpg";
import imageAfter01a from "@public/images/traum-bad/comparisons/after-01a.jpeg";
import imageAfter01b from "@public/images/traum-bad/comparisons/after-01b.jpeg";
import imageAfter02a from "@public/images/traum-bad/comparisons/after-02a.jpeg";
import imageAfter02b from "@public/images/traum-bad/comparisons/after-02b.jpeg";
import imageAfter03a from "@public/images/traum-bad/comparisons/after-03a.jpeg";
import imageAfter03b from "@public/images/traum-bad/comparisons/after-03b.jpeg";
import imageAfter04a from "@public/images/traum-bad/comparisons/after-04a.jpeg";
import imageAfter04b from "@public/images/traum-bad/comparisons/after-04b.jpeg";
import imageAfter05a from "@public/images/traum-bad/comparisons/after-05a.jpeg";
import imageAfter05b from "@public/images/traum-bad/comparisons/after-05b.jpeg";
import imageAfter06a from "@public/images/traum-bad/comparisons/after-06a.jpeg";
import imageAfter06b from "@public/images/traum-bad/comparisons/after-06b.jpeg";
import imageAfter07a from "@public/images/traum-bad/comparisons/after-07a.jpeg";
import imageAfter08a from "@public/images/traum-bad/comparisons/after-08a.jpeg";
import imageBefore01a from "@public/images/traum-bad/comparisons/before-01a.jpeg";
import imageBefore01b from "@public/images/traum-bad/comparisons/before-01b.jpeg";
import imageBefore02a from "@public/images/traum-bad/comparisons/before-02a.jpeg";
import imageBefore02b from "@public/images/traum-bad/comparisons/before-02b.jpeg";
import imageBefore03a from "@public/images/traum-bad/comparisons/before-03a.jpeg";
import imageBefore03b from "@public/images/traum-bad/comparisons/before-03b.jpeg";
import imageBefore04a from "@public/images/traum-bad/comparisons/before-04a.jpeg";
import imageBefore05a from "@public/images/traum-bad/comparisons/before-05a.jpeg";
import imageBefore06a from "@public/images/traum-bad/comparisons/before-06a.jpeg";
import imageBefore06b from "@public/images/traum-bad/comparisons/before-06b.jpeg";
import imageBefore07a from "@public/images/traum-bad/comparisons/before-07a.jpeg";
import imageBefore08a from "@public/images/traum-bad/comparisons/before-08a.jpeg";
import imageBefore08b from "@public/images/traum-bad/comparisons/before-08b.jpeg";
import imageUncompared01 from "@public/images/traum-bad/uncompared/after-01.jpeg";
import imageUncompared02 from "@public/images/traum-bad/uncompared/after-02.jpeg";
import imageUncompared03 from "@public/images/traum-bad/uncompared/after-03.jpeg";

import { ClickableImage } from "@/components/clickable-image";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";

const COMPARISONS = [
  { before: [imageBefore01a, imageBefore01b], after: [imageAfter01a, imageAfter01b] },
  { before: [imageBefore02a, imageBefore02b], after: [imageAfter02a, imageAfter02b] },
  { before: [imageBefore03a, imageBefore03b], after: [imageAfter03a, imageAfter03b] },
  { before: [imageBefore04a], after: [imageAfter04a, imageAfter04b] },
  { before: [imageBefore05a], after: [imageAfter05a, imageAfter05b] },
  { before: [imageBefore06a, imageBefore06b], after: [imageAfter06a, imageAfter06b] },
  { before: [imageBefore07a], after: [imageAfter07a] },
  { before: [imageBefore08a, imageBefore08b], after: [imageAfter08a] },
];

function ComparisonSide({
  images,
  before = false,
}: {
  images: StaticImageData[];
  before?: boolean;
}) {
  return (
    <div className="mx-3 mt-6 max-w-md">
      <h3 className="text-accent mb-2 text-center text-xl uppercase">
        {before ? "Vorher" : "Nachher"}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(0,_1fr))] place-items-center gap-2">
        {images.map((image, index) => (
          <ClickableImage
            key={`comparison-${before ? "before" : "after"}-${index}`}
            src={image}
            alt={`${before ? "Vorher" : "Nachher"} Foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function TraumBad() {
  return (
    <div>
      <div className="my-10 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
        <ClickableImage src={imageBathroom} alt="Duschkabine" width={320} height={400} />
        <div className="relative max-w-lg">
          <Heading>Seniorengerechte Badezimmer</Heading>
          <h3 className="mb-1 pt-2 font-semibold">
            Umbau von Badewanne zu Dusche und Duschen zu Dusche
          </h3>
          <p className="space-y-2 text-sm sm:text-base">
            Barrierefreiheit verdient bei der Renovierung oder Neugestaltung eines
            Badezimmers Beachtung. Neben der Erleichterung des Alltags für Menschen mit
            Behinderung hat das drei Gründe. Erstens erhöht eine barrierefreie
            Badezimmergestaltung die Chancen, im Alter möglichst lange in der eigenen
            Wohnung bleiben zu können. Zweitens muss ein barrierefreies Bad nicht mehr
            nach Krankenhaus oder Seniorenheim aussehen, sondern kann im ganz normalen,
            modernen Stil gestaltet werden und jedem, der es benutzt, mehr Komfort bieten.
            Drittens wird die barrierefreie Umgestaltung unter Umständen auch dann vom
            Staat gefördert, wenn noch keine akute Notwendigkeit dafür vorliegt.
          </p>
          <Button asChild className="mt-4" variant="outline">
            <Link href="/KfW-Foerderung_455_m_Links_Maerz_2017.pdf">KfW Förderung</Link>
          </Button>
        </div>
      </div>
      <div className="mb-20 grid w-full place-items-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {COMPARISONS.map((comparison, index) => (
            <Fragment key={`comparison-${index}`}>
              <ComparisonSide images={comparison.before} before />
              <ComparisonSide images={comparison.after} />
            </Fragment>
          ))}
        </div>
      </div>
      <Heading>Weitere Nachher-Eindrücke</Heading>
      <div className="mt-10 flex w-full justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[imageUncompared01, imageUncompared02, imageUncompared03].map(
            (image, index) => (
              <ClickableImage
                key={`uncompared-${index}`}
                src={image}
                alt={`Nachher-Eindrücke Foto ${index + 1}`}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
