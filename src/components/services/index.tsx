import imageBathroomTiling from "@public/images/das-profiteam/services/bathroom_tiling.jpg";
import imageFaucetInstallation from "@public/images/das-profiteam/services/faucet_installation.jpg";
import imageIkeaFurnitureAssembly from "@public/images/das-profiteam/services/ikea_furniture_assembly.jpg";
import imageIkeaKitchenConstruction from "@public/images/das-profiteam/services/ikea_kitchen_construction.jpg";
import imageIkeaKitchenPlanning from "@public/images/das-profiteam/services/ikea_kitchen_planning.jpg";
import imageShowerCabinInstallation from "@public/images/das-profiteam/services/shower_cabin_installation.jpg";
import imageSinkInstallation from "@public/images/das-profiteam/services/sink_installation.jpg";
import imageToiletInstallation from "@public/images/das-profiteam/services/toilet_installation.jpg";
import imageWindowInstallation from "@public/images/das-profiteam/services/window_installation.jpg";

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
    image: imageIkeaKitchenConstruction,
  },
  {
    label: "IKEA Möbelaufbau und Möbelabbau (Fertigteilmöbel)",
    image: imageIkeaFurnitureAssembly,
  },
  {
    label: "IKEA Küchenplanung",
    image: imageIkeaKitchenPlanning,
  },
  {
    label: "Badfliesen, Fliesenspiegel und Wände fliesen",
    image: imageBathroomTiling,
  },
  {
    label: "Fenster und Türen einbauen und austauschen",
    image: imageWindowInstallation,
  },
  {
    label: "Armaturen anschließen und tauschen",
    image: imageFaucetInstallation,
  },
  {
    label: "Waschbeckenmontage",
    image: imageSinkInstallation,
  },
  {
    label: "WC-Montage",
    image: imageToiletInstallation,
  },
  {
    label: "Badewannen- und Duschkabinenmontage",
    image: imageShowerCabinInstallation,
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
