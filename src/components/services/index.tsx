import imageBathroomTiling from "@public/images/das-profiteam/services/bathroom_tiling.jpg";
import bathtubRenovation from "@public/images/das-profiteam/services/bathtub_renovation.jpg";
import imageFaucetInstallation from "@public/images/das-profiteam/services/faucet_installation.jpg";
import imageGardenPipeInstallation from "@public/images/das-profiteam/services/garden_pipe_installation.jpg";
import imageHeatingSystemInstallation from "@public/images/das-profiteam/services/heating_system_installation.jpg";
import imageShowerCabinInstallation from "@public/images/das-profiteam/services/shower_cabin_installation.jpg";
import imageSinkInstallation from "@public/images/das-profiteam/services/sink_installation.jpg";
import imageToiletInstallation from "@public/images/das-profiteam/services/toilet_installation.jpg";
import imageWaterPipeInstallation from "@public/images/das-profiteam/services/water_pipe_installation.jpg";

import type { Service } from "@/lib/types";
import { ServiceCard } from "@/components/services/service-card";

import { Heading } from "../heading";

const SERVICES: Service[] = [
  { label: "Komplettbad-Umbau und Sanitärarbeiten", image: bathtubRenovation },
  {
    label:
      "Installation von Wasserleitungen, Anschlüssen und Sanitärsystemen für Neubauten, Renovierungen und Modernisierungen",
    image: imageWaterPipeInstallation,
  },
  { label: "Montage von Gartenwasserzählern", image: imageGardenPipeInstallation },
  { label: "Installation von Heizungsanlagen", image: imageHeatingSystemInstallation },
  { label: "Badfliesen, Fliesenspiegel und Wände fliesen", image: imageBathroomTiling },
  { label: "Armaturen anschließen und tauschen", image: imageFaucetInstallation },
  { label: "Waschbeckenmontage", image: imageSinkInstallation },
  { label: "WC-Montage", image: imageToiletInstallation },
  { label: "Badewannen- und Duschkabinenmontage", image: imageShowerCabinInstallation },
];

export function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Unsere Leistungen</Heading>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.label} service={service} priority={index < 3} />
        ))}
      </div>
    </div>
  );
}
