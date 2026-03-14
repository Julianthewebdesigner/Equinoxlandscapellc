export type ServiceCard = {
  title: string;
  description: string;
  image: string;
};

export const services: ServiceCard[] = [
  {
    title: "Landscape Design",
    image: "/images/service-card-section/landscapedesignservicecard.jpeg",
    description:
      "Retaining walls, fence installation, gazebos, and full backyard design solutions that bring the entire outdoor space together.",
  },
  {
    title: "Landscape Services",
    image: "/images/service-card-section/landscapeservices.jpeg",
    description:
      "Cleanups, bark installation, gravel installation, trimming, pruning, and general landscape maintenance to keep properties looking sharp and well cared for.",
  },
  {
    title: "Pavers",
    image: "/images/service-card-section/pavers.jpeg",
    description:
      "Paver installation for driveways, patios, walkways, and backyard spaces built with durability, structure, and visual appeal.",
  },
  {
    title: "Turf / Grass Installation",
    image: "/images/service-card-section/turf-grass.jpeg",
    description:
      "Sod installation and turf installation for clean, fresh, low-maintenance lawn areas that upgrade the look and usability of a property.",
  },
];
