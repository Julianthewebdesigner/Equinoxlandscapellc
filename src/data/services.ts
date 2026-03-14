export type ServiceFeature = { title: string; description: string };
export type ServiceProcess = { step: string; title: string; body: string };

export type ServiceCard = {
  title: string;
  description: string;
  image: string;
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  pageContent: {
    tagline: string;
    intro: string;
    features: ServiceFeature[];
    process: ServiceProcess[];
  };
};

export const services: ServiceCard[] = [
  {
    title: "Landscape Design",
    slug: "landscape-design",
    image: "/images/service-card-section/landscapedesignservicecard.jpeg",
    description:
      "Retaining walls, fence installation, gazebos, and full backyard design solutions that bring the entire outdoor space together.",
    seo: {
      title:
        "Landscape Design Seattle WA | Retaining Walls, Gazebos & Backyard Design | Equinox Landscape LLC",
      description:
        "Expert landscape design in Seattle & Kent, WA. Equinox Landscape LLC designs and installs retaining walls, fences, gazebos, garden beds, and complete backyard transformations. Licensed & insured. Free estimates — call (206) 418-8749.",
      keywords:
        "landscape design Seattle WA, backyard design Kent WA, retaining wall installation Seattle, fence installation King County, gazebo installation Seattle, outdoor landscape design Seattle, custom backyard design Kent, landscape designer King County WA",
    },
    pageContent: {
      tagline: "Your Vision, Built From the Ground Up",
      intro:
        "Equinox Landscape transforms your outdoor space into a thoughtfully designed environment that balances beauty, function, and lasting quality. From initial concept to final installation, Julian and the team handle every detail of your landscape design project with precision and care.",
      features: [
        {
          title: "Full Backyard Design",
          description:
            "Custom layouts tailored to your space, lifestyle, and vision.",
        },
        {
          title: "Retaining Walls",
          description:
            "Structurally sound walls that add dimension and prevent erosion.",
        },
        {
          title: "Fence Installation",
          description:
            "Privacy and decorative fencing for every style and budget.",
        },
        {
          title: "Gazebos & Pergolas",
          description:
            "Custom outdoor structures for shade, entertaining, and charm.",
        },
        {
          title: "Garden Bed Design",
          description:
            "Planting plans and garden beds designed for year-round color and appeal.",
        },
        {
          title: "Drainage Solutions",
          description:
            "Proper grading and drainage systems to protect your property long-term.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Consultation",
          body: "We meet on-site, listen to your vision, and assess your property in detail.",
        },
        {
          step: "02",
          title: "Design Planning",
          body: "We develop a layout and design plan tailored to your goals and budget.",
        },
        {
          step: "03",
          title: "Material Selection",
          body: "We guide you through material and plant selections that match your style.",
        },
        {
          step: "04",
          title: "Installation",
          body: "Our crew executes the design with craftsmanship and close attention to detail.",
        },
      ],
    },
  },
  {
    title: "Landscape Services",
    slug: "landscape-services",
    image: "/images/service-card-section/landscapeservices.jpeg",
    description:
      "Cleanups, bark installation, gravel installation, trimming, pruning, and general landscape maintenance to keep properties looking sharp and well cared for.",
    seo: {
      title:
        "Landscape Maintenance Seattle WA | Bark, Gravel, Trimming & Cleanups | Equinox Landscape LLC",
      description:
        "Year-round landscape maintenance in Seattle & Kent, WA. Seasonal cleanups, bark and mulch installation, gravel, tree trimming, pruning, and recurring maintenance plans. Equinox Landscape LLC. Call (206) 418-8749 for a free estimate.",
      keywords:
        "landscape maintenance Seattle WA, lawn cleanup Kent WA, bark installation Seattle, tree trimming King County, pruning Seattle, landscape services Renton WA, seasonal cleanup Seattle, gravel installation Kent WA, mulch installation Seattle",
    },
    pageContent: {
      tagline: "Year-Round Property Maintenance & Care",
      intro:
        "A well-maintained property starts with consistent, professional care. Equinox Landscape provides reliable maintenance services that keep your lawn, plants, and outdoor areas in top condition throughout every season — so you never have to worry about the upkeep.",
      features: [
        {
          title: "Spring & Fall Cleanups",
          description:
            "Deep seasonal cleanups to refresh your property and prepare for what's next.",
        },
        {
          title: "Bark & Mulch Installation",
          description:
            "Fresh bark and mulch to insulate plants, suppress weeds, and sharpen curb appeal.",
        },
        {
          title: "Gravel Installation",
          description:
            "Clean, durable gravel for pathways, beds, and low-maintenance areas.",
        },
        {
          title: "Tree & Shrub Trimming",
          description:
            "Expert shaping and trimming to keep plants healthy and attractive.",
        },
        {
          title: "Pruning",
          description:
            "Targeted pruning to promote healthy growth and maintain structure.",
        },
        {
          title: "Ongoing Maintenance Plans",
          description:
            "Scheduled recurring service so your property always looks its best.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Property Assessment",
          body: "We evaluate the current condition of your landscape and identify priorities.",
        },
        {
          step: "02",
          title: "Custom Service Plan",
          body: "We build a tailored plan — one-time or recurring — based on your needs.",
        },
        {
          step: "03",
          title: "Scheduled Service",
          body: "Our crew arrives on schedule and completes all work with care.",
        },
        {
          step: "04",
          title: "Quality Check",
          body: "We walk the property before leaving to ensure everything looks right.",
        },
      ],
    },
  },
  {
    title: "Pavers",
    slug: "pavers",
    image: "/images/service-card-section/pavers.jpeg",
    description:
      "Paver installation for driveways, patios, walkways, and backyard spaces built with durability, structure, and visual appeal.",
    seo: {
      title:
        "Paver Installation Seattle WA | Driveways, Patios & Walkways | Equinox Landscape LLC",
      description:
        "Premium paver installation in Seattle & Kent, WA. Driveways, patios, walkways, backyard paver spaces, and retaining walls built to last under Seattle's weather. Equinox Landscape LLC. Free estimates — call (206) 418-8749.",
      keywords:
        "paver installation Seattle WA, driveway pavers Kent WA, patio pavers Seattle, walkway installation King County, hardscape contractor Seattle, patio installation Kent WA, paver contractor Renton, backyard pavers Auburn WA",
    },
    pageContent: {
      tagline: "Precision-Built Surfaces That Last for Decades",
      intro:
        "Pavers transform driveways, patios, and outdoor living spaces into polished, durable surfaces that hold up under Seattle's weather while elevating the entire property. Equinox Landscape delivers expert paver installation with proper base preparation and a finished result built to last.",
      features: [
        {
          title: "Driveway Pavers",
          description:
            "Strong, attractive driveway installations built to handle daily traffic and weather.",
        },
        {
          title: "Patio Installation",
          description:
            "Custom patio designs that extend your living space into the outdoors.",
        },
        {
          title: "Walkways & Pathways",
          description:
            "Clean, defined paths that add flow and function throughout your property.",
        },
        {
          title: "Backyard Paver Spaces",
          description:
            "Outdoor entertainment areas, sitting areas, and fire pit surrounds.",
        },
        {
          title: "Edging & Borders",
          description:
            "Clean borders that define spaces and give your landscape a finished look.",
        },
        {
          title: "Retaining Wall Pavers",
          description:
            "Structural paver walls that hold soil and add visual dimension to slopes.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Site Assessment",
          body: "We evaluate the area, check drainage, and plan the layout and dimensions.",
        },
        {
          step: "02",
          title: "Design & Materials",
          body: "We help you choose paver style, color, and pattern to complement your home.",
        },
        {
          step: "03",
          title: "Excavation & Base Prep",
          body: "Proper excavation and compacted base installation ensures a lasting result.",
        },
        {
          step: "04",
          title: "Install & Finish",
          body: "Pavers are set, leveled, and finished with jointing sand and sealer.",
        },
      ],
    },
  },
  {
    title: "Turf / Grass Installation",
    slug: "turf-grass-installation",
    image: "/images/service-card-section/turf-grass.jpeg",
    description:
      "Sod installation and turf installation for clean, fresh, low-maintenance lawn areas that upgrade the look and usability of a property.",
    seo: {
      title:
        "Sod & Turf Installation Seattle WA | Artificial Grass & Lawn Services | Equinox Landscape LLC",
      description:
        "Professional sod and artificial turf installation in Seattle & Kent, WA. Complete lawn renovation, soil preparation, grading, and installation for residential properties. Equinox Landscape LLC. Call (206) 418-8749 for a free estimate.",
      keywords:
        "sod installation Seattle WA, artificial turf Kent WA, lawn installation King County, turf installation Seattle, grass installation Renton WA, lawn renovation Auburn, artificial grass Seattle, sod company King County WA",
    },
    pageContent: {
      tagline: "Lush, Low-Maintenance Lawns Built to Impress",
      intro:
        "Whether you want the natural look of fresh sod or the year-round perfection of artificial turf, Equinox Landscape installs lawns that look great from day one. We handle everything from soil preparation and grading to final installation and edging — so you get a clean, beautiful result every time.",
      features: [
        {
          title: "Sod Installation",
          description:
            "Fresh, high-quality sod installed correctly for fast establishment and a lush result.",
        },
        {
          title: "Artificial Turf",
          description:
            "Premium synthetic turf that stays green, clean, and beautiful year-round.",
        },
        {
          title: "Lawn Renovation",
          description:
            "Full lawn rebuilds for properties that need a clean, fresh start.",
        },
        {
          title: "Soil Prep & Grading",
          description:
            "Proper grading and soil amendment for even, healthy lawn growth.",
        },
        {
          title: "Drainage Solutions",
          description:
            "Built-in drainage to prevent standing water and protect your lawn long-term.",
        },
        {
          title: "Edging & Clean Borders",
          description:
            "Crisp, clean edges that separate lawn from beds and hardscape areas.",
        },
      ],
      process: [
        {
          step: "01",
          title: "Soil Assessment",
          body: "We evaluate soil conditions and drainage before any installation begins.",
        },
        {
          step: "02",
          title: "Prep & Grading",
          body: "Old material is removed, soil is amended, and the ground is graded level.",
        },
        {
          step: "03",
          title: "Installation",
          body: "Sod or turf is laid with precision — seams aligned, edges clean and tight.",
        },
        {
          step: "04",
          title: "Post-Install Care",
          body: "We walk you through watering, settling, and maintenance to ensure success.",
        },
      ],
    },
  },
];
