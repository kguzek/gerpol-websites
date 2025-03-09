import type { Service } from "@/lib/types";
import { ServiceCard } from "@/components/services/service-card";

import { Heading } from "../heading";

const SERVICES: Service[] = [
  // {
  //   label: "Umbau altersgerechter Bäder/Dusche umbauen",
  //   image:
  //     "https://cdn1.site-media.eu/images/975%2C1684x1126%2B3%2B0/2343567/modern-bathroom-interior-combined-with-toilet-shower-room-and-toilet-are-covered",
  // },
  // {
  //   label: "Innenarchitektur & Raumgestaltung",
  //   image: "https://cdn1.site-media.eu/images/975/2342574/engineering-concept.jpg",
  // },

  {
    label: "Auf- & Abbau von IKEA Küchen & Arbeitsplatten",
    image:
      "https://cdn1.site-media.eu/images/975/2343501/interior-design-construction-of-a-kitchen-with-cooker-extractor.jpg",
  },

  {
    label: "IKEA Möbelaufbau und Möbelabbau (Fertigteilmöbel)",
    image:
      "https://cdn1.site-media.eu/images/975/2342580/the-young-man-tries-himself-to-fold-his-coffee-table-and-stools.jpg",
  },
  {
    label: "IKEA Küchenplanung",
    image: "https://cdn1.site-media.eu/images/975/2343450/kchenplanung.jpg",
  },
  // ikea

  {
    label: "Badfliesen, Fliesenspiegel und Wände fliesen",
    image:
      "https://cdn1.site-media.eu/images/976/2343456/man-installing-ceramic-tile.jpg",
  },
  {
    label: "Fenster und Türen einbauen und austauschen",
    image:
      "https://cdn1.site-media.eu/images/975%2C1194x798%2B0%2B289/2343453/carpenter-mounting-a-new-window.jpg",
  },
  {
    label: "Armaturen anschließen und tauschen",
    image: "https://cdn1.site-media.eu/images/975/2343492/installation-of-drain.jpg",
  },
  // {
  //   label: "Bodenfliesen verlegen",
  //   image:
  //     "https://cdn1.site-media.eu/images/975/2343558/master-bath-with-oak-wood-cabinetry.jpg",
  // },
  // {
  //   label: "Planung und Beratung",
  //   image:
  //     "https://cdn1.site-media.eu/images/975/2343504/team-of-successful-young-architects-and-business-partners-having-a-meeting-on-a-",
  // },
  // {
  //   label: "Planung, Beratung und Ausführung von Badsanierungen",
  //   image: "https://cdn1.site-media.eu/images/975/2343510/badsanierung.jpg",
  // },
  // {
  //   label:
  //     "Badsanierung und -renovierung Duschkabinen und Badewannen einbauen, anschließen & austauschen",
  //   image: "https://cdn1.site-media.eu/images/976/2343498/badsanierung.jpg",
  // },
];

export function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Unsere Leistungen</Heading>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16">
        {SERVICES.map((service) => (
          <ServiceCard key={service.label} service={service} />
        ))}
      </div>
    </div>
  );
}
