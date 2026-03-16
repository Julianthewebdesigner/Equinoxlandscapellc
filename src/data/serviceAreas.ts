export type ServiceAreaHighlight = {
  title: string;
  description: string;
};

export type ServiceAreaFAQ = {
  question: string;
  answer: string;
};

export type ServiceAreaData = {
  city: string;
  slug: string;
  state: string;
  county: string;
  zip: string;
  lat: number;
  lng: number;
  description: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: string;
  highlights: ServiceAreaHighlight[];
  localNote: string;
  faq: ServiceAreaFAQ[];
  nearbyAreas: string[];
};

export const serviceAreas: ServiceAreaData[] = [
  {
    city: "Kent",
    slug: "kent",
    state: "WA",
    county: "King County",
    zip: "98032",
    lat: 47.3809,
    lng: -122.2348,
    description: "Kent, WA is home base for Equinox Landscape LLC — we know every neighborhood in this city.",
    seo: {
      title: "Landscaping Services Kent WA | Equinox Landscape LLC — Locally Based",
      description: "Equinox Landscape LLC is based in Kent, WA. Professional landscape design, paver installation, sod, cleanups & hardscaping for Kent homeowners. Licensed & insured. Free estimates — call (206) 418-8749.",
      keywords: "landscaping Kent WA, landscape design Kent Washington, paver installation Kent WA, sod installation Kent, lawn care Kent WA, landscape contractor Kent, backyard design Kent, hardscaping Kent WA, turf installation Kent",
    },
    hero: {
      headline: "Kent's Premier Landscaping Company",
      subheadline: "Locally based in Kent, WA — we know your neighborhood, your soil, and your climate.",
    },
    intro: "Equinox Landscape LLC is proudly based right here in Kent, WA. That means we're not a company driving two hours to your property — we live in this community, understand the local soil conditions, and know exactly how Pacific Northwest weather affects your landscape. From full backyard transformations and paver installations to seasonal cleanups and sod, we deliver premium results to Kent homeowners at every price point.",
    highlights: [
      {
        title: "Deep Local Knowledge",
        description: "We're based in Kent. We understand the local clay soils, the rainfall patterns, and what plants and hardscape materials hold up best here.",
      },
      {
        title: "Fast Response Times",
        description: "Being local means faster estimates, quicker start dates, and crews that aren't commuting from across the region.",
      },
      {
        title: "All Services Available",
        description: "Landscape design, pavers, sod installation, turf, bark, gravel, cleanups — everything under one roof.",
      },
      {
        title: "Free Estimates",
        description: "We offer free, no-obligation on-site estimates for all Kent properties. Call or fill out our form to get started.",
      },
    ],
    localNote: "We serve all Kent neighborhoods including Benson Hill, Panther Lake, East Hill, Meridian, and the downtown Kent Valley. No project is too big or too small.",
    faq: [
      {
        question: "Do you serve all of Kent, WA?",
        answer: "Yes — we serve all Kent neighborhoods and zip codes, including 98030, 98031, 98032, 98042, and surrounding areas. We're based in Kent so we're always close by.",
      },
      {
        question: "What landscaping services do you offer in Kent?",
        answer: "We offer landscape design, retaining walls, fence installation, paver driveways and patios, sod and artificial turf installation, bark and gravel, tree trimming, seasonal cleanups, and full backyard redesigns.",
      },
    ],
    nearbyAreas: ["Renton", "Auburn", "Federal Way", "Covington"],
  },
  {
    city: "Seattle",
    slug: "seattle",
    state: "WA",
    county: "King County",
    zip: "98101",
    lat: 47.6062,
    lng: -122.3321,
    description: "Premium landscaping for Seattle homes — from Capitol Hill to West Seattle and beyond.",
    seo: {
      title: "Landscaping Services Seattle WA | Equinox Landscape LLC | Free Estimates",
      description: "Professional landscaping in Seattle, WA. Custom landscape design, paver patios & driveways, sod & artificial turf, retaining walls, and seasonal maintenance. Equinox Landscape LLC. Call (206) 418-8749.",
      keywords: "landscaping Seattle WA, landscape design Seattle, paver patio Seattle, retaining wall Seattle, sod installation Seattle WA, artificial turf Seattle, backyard design Seattle, landscape contractor Seattle, hardscaping Seattle WA",
    },
    hero: {
      headline: "Premium Landscaping for Seattle Homes",
      subheadline: "From Capitol Hill to West Seattle — Equinox Landscape designs and builds outdoor spaces that stand out.",
    },
    intro: "Seattle homeowners expect more from their outdoor spaces — and Equinox Landscape delivers. We bring the same premium design thinking and meticulous installation standards to Seattle projects that we bring to every job. Whether you're in a Craftsman bungalow in Ballard, a contemporary home on Capitol Hill, or a waterfront property in West Seattle, we design and build landscapes that match your home's character and your lifestyle.",
    highlights: [
      {
        title: "Premium Design Standards",
        description: "Seattle properties deserve thoughtful design. We create custom layouts tailored to your home's architecture and your personal style.",
      },
      {
        title: "Paver Expertise",
        description: "Paver patios, driveways, and walkways built to handle Seattle's wet winters — proper base prep is everything.",
      },
      {
        title: "Year-Round Maintenance",
        description: "Ongoing maintenance plans to keep your Seattle property looking sharp through every season.",
      },
      {
        title: "Licensed & Insured",
        description: "Fully licensed and insured for all Seattle landscaping work. You're protected on every project.",
      },
    ],
    localNote: "We serve all Seattle neighborhoods including Ballard, Capitol Hill, West Seattle, Beacon Hill, Columbia City, Rainier Beach, Northgate, Queen Anne, and Magnolia.",
    faq: [
      {
        question: "Do you do landscaping work in Seattle proper?",
        answer: "Yes — we regularly work throughout Seattle. We're based in nearby Kent and serve Seattle neighborhoods across the city, from North Seattle to West Seattle.",
      },
      {
        question: "Can you handle Seattle's wet weather in your paver installs?",
        answer: "Absolutely. All our paver installations include proper base compaction and drainage planning specifically designed for Seattle's high rainfall environment. Our installs are built to last decades.",
      },
    ],
    nearbyAreas: ["Renton", "Kent", "Des Moines", "Federal Way"],
  },
  {
    city: "Renton",
    slug: "renton",
    state: "WA",
    county: "King County",
    zip: "98057",
    lat: 47.4829,
    lng: -122.2171,
    description: "Serving Renton homeowners with full-service landscaping, pavers, and property transformations.",
    seo: {
      title: "Landscaping Services Renton WA | Pavers, Sod & Design | Equinox Landscape",
      description: "Expert landscaping in Renton, WA. Landscape design, paver installation, sod & turf, retaining walls, cleanups & more. Equinox Landscape LLC — serving Renton and King County. Free estimates. (206) 418-8749.",
      keywords: "landscaping Renton WA, landscape design Renton, paver installation Renton, sod installation Renton WA, retaining wall Renton, landscape contractor Renton Washington, lawn care Renton WA, backyard design Renton",
    },
    hero: {
      headline: "Renton's Landscaping & Hardscaping Specialists",
      subheadline: "Professional landscape design, pavers, turf, and maintenance for Renton homeowners.",
    },
    intro: "Renton's mix of established neighborhoods and newer developments means every property has its own unique landscaping needs. Equinox Landscape serves Renton homeowners with custom landscape design, paver installation, sod and turf, retaining walls, and seasonal maintenance. Whether your backyard needs a full transformation or just a quality cleanup, our team shows up, communicates clearly, and gets it done right.",
    highlights: [
      {
        title: "Retaining Walls",
        description: "Renton's hilly terrain often calls for retaining walls. We build structurally sound walls that look great and hold for years.",
      },
      {
        title: "Paver Driveways & Patios",
        description: "Custom paver installs that elevate your curb appeal and add real value to your Renton property.",
      },
      {
        title: "Seasonal Cleanups",
        description: "Spring and fall cleanups to keep your Renton property neat and healthy year-round.",
      },
      {
        title: "New Construction Ready",
        description: "We work with newly built Renton homes to design and install complete landscapes from scratch.",
      },
    ],
    localNote: "We serve all of Renton including The Landing, Kennydale, Highlands, Talbot Hill, Fairwood, and the South Renton area.",
    faq: [
      {
        question: "Do you install retaining walls in Renton?",
        answer: "Yes — retaining walls are one of our specialties. Renton's varying terrain makes them common, and we build walls in concrete block, natural stone, and other materials to suit your property and budget.",
      },
      {
        question: "How quickly can you start a landscaping project in Renton?",
        answer: "Typically we can provide a free estimate within a few days of contact and schedule work within 1–3 weeks depending on our current workload and your project scope.",
      },
    ],
    nearbyAreas: ["Kent", "Seattle", "Auburn", "Covington"],
  },
  {
    city: "Auburn",
    slug: "auburn",
    state: "WA",
    county: "King County",
    zip: "98001",
    lat: 47.3073,
    lng: -122.2285,
    description: "Full-service landscaping for Auburn, WA — from sod installs to complete backyard designs.",
    seo: {
      title: "Landscaping Services Auburn WA | Equinox Landscape LLC | Free Estimates",
      description: "Professional landscaping in Auburn, WA. Paver driveways & patios, sod installation, landscape design, retaining walls, and seasonal cleanups. Equinox Landscape LLC. Call (206) 418-8749 for a free estimate.",
      keywords: "landscaping Auburn WA, landscape design Auburn Washington, paver installation Auburn WA, sod installation Auburn, lawn care Auburn WA, retaining wall Auburn, backyard design Auburn, hardscaping Auburn WA",
    },
    hero: {
      headline: "Auburn WA Landscaping You Can Count On",
      subheadline: "Full backyard designs, pavers, sod, retaining walls, and cleanups for Auburn homeowners.",
    },
    intro: "Auburn is a growing community with a wide range of residential property styles — from newer subdivisions in Lea Hill to established neighborhoods near downtown. Equinox Landscape serves Auburn homeowners with quality landscaping services that are priced fairly and executed with care. We handle everything from initial design consultations and paver installations to sod, turf, bark, and seasonal maintenance.",
    highlights: [
      {
        title: "New Home Landscapes",
        description: "Many Auburn properties are new builds. We design and install complete landscapes for brand-new homes starting from bare ground.",
      },
      {
        title: "Paver Patios & Walkways",
        description: "Expand your outdoor living space with custom paver designs built for Auburn's weather.",
      },
      {
        title: "Bark & Gravel",
        description: "Fresh bark and clean gravel installations to sharpen any Auburn property's appearance quickly.",
      },
      {
        title: "Honest Pricing",
        description: "We provide transparent, itemized estimates so Auburn homeowners know exactly what they're paying for.",
      },
    ],
    localNote: "We serve all Auburn areas including Lea Hill, West Hill, downtown Auburn, Auburn Junction, and neighborhoods along the Green River Valley.",
    faq: [
      {
        question: "Do you install sod or artificial turf in Auburn?",
        answer: "Yes — we install both. Sod gives you a natural lawn, while artificial turf is great for low-maintenance areas or homes with kids and pets. We'll help you decide which is right for your Auburn property.",
      },
      {
        question: "Can you do a full backyard design project in Auburn?",
        answer: "Absolutely. We offer complete backyard transformation services including design consultation, grading, retaining walls, hardscape, planting, and lawn installation. We handle the entire project.",
      },
    ],
    nearbyAreas: ["Kent", "Federal Way", "Renton", "Covington"],
  },
  {
    city: "Federal Way",
    slug: "federal-way",
    state: "WA",
    county: "King County",
    zip: "98003",
    lat: 47.3223,
    lng: -122.3126,
    description: "Serving Federal Way homeowners with quality landscaping, hardscaping, and property care.",
    seo: {
      title: "Landscaping Services Federal Way WA | Equinox Landscape LLC",
      description: "Professional landscaping in Federal Way, WA. Paver installation, sod & turf, landscape design, seasonal cleanups & more. Equinox Landscape LLC. Licensed & insured. Free estimates — call (206) 418-8749.",
      keywords: "landscaping Federal Way WA, landscape design Federal Way, paver installation Federal Way, sod installation Federal Way WA, lawn care Federal Way, landscape contractor Federal Way Washington, hardscaping Federal Way",
    },
    hero: {
      headline: "Federal Way Landscaping & Hardscaping",
      subheadline: "Premium landscape design, pavers, turf, and maintenance for Federal Way properties.",
    },
    intro: "Federal Way homeowners trust Equinox Landscape for reliable, quality landscaping services that deliver real results. From complete backyard redesigns with custom pavers and planting to straightforward seasonal cleanups and bark installations, we show up on time, communicate throughout, and finish every job to a standard we're proud of. Julian personally oversees every project.",
    highlights: [
      {
        title: "Complete Backyard Redesigns",
        description: "We transform neglected or outdated Federal Way backyards into beautiful, functional outdoor spaces.",
      },
      {
        title: "Turf & Sod Installation",
        description: "Fresh lawns installed correctly — proper grading, soil prep, and clean edges every time.",
      },
      {
        title: "Cleanup & Maintenance",
        description: "Seasonal cleanups and ongoing maintenance plans for Federal Way homeowners who want a consistently sharp-looking property.",
      },
      {
        title: "Personal Attention",
        description: "Julian personally reviews every Federal Way project to ensure the result matches what was promised.",
      },
    ],
    localNote: "We serve all Federal Way neighborhoods including Twin Lakes, Dash Point, Steel Lake, Westway, and the Five Mile Lake area.",
    faq: [
      {
        question: "Do you offer recurring lawn maintenance in Federal Way?",
        answer: "Yes — we offer ongoing maintenance plans that can include trimming, pruning, bark replenishment, seasonal cleanups, and more. We'll build a plan around what your property needs.",
      },
      {
        question: "How much does a paver patio cost in Federal Way?",
        answer: "Paver patio costs vary based on size, paver style, and site conditions. We offer free on-site estimates and will walk you through all pricing before any work begins. Most residential patios fall between $8,000 and $25,000+ depending on scope.",
      },
    ],
    nearbyAreas: ["Seattle", "Kent", "Auburn", "Des Moines"],
  },
  {
    city: "Des Moines",
    slug: "des-moines",
    state: "WA",
    county: "King County",
    zip: "98198",
    lat: 47.4018,
    lng: -122.3243,
    description: "Landscaping and hardscaping services for Des Moines, WA — a waterfront community with character.",
    seo: {
      title: "Landscaping Services Des Moines WA | Equinox Landscape LLC",
      description: "Professional landscaping in Des Moines, WA. Landscape design, paver installation, sod & turf, cleanups & more. Equinox Landscape LLC. Serving Des Moines and King County. Free estimates — (206) 418-8749.",
      keywords: "landscaping Des Moines WA, landscape design Des Moines Washington, paver installation Des Moines WA, sod installation Des Moines, lawn care Des Moines WA, landscape contractor Des Moines King County",
    },
    hero: {
      headline: "Des Moines WA Landscaping Experts",
      subheadline: "Landscape design, hardscaping, and property care for Des Moines homeowners on the Puget Sound.",
    },
    intro: "Des Moines sits right along Puget Sound — a community known for its marina, waterfront parks, and well-kept residential neighborhoods. Equinox Landscape serves Des Moines homeowners with custom landscape design, paver installation, turf and sod, and maintenance services. The coastal proximity means soil conditions and plant selection matter even more here, and we bring the expertise to get it right.",
    highlights: [
      {
        title: "Waterfront-Aware Design",
        description: "Coastal properties need plant selections and drainage solutions that account for salt air and high rainfall. We know what works.",
      },
      {
        title: "Paver Patios & Driveways",
        description: "Upgrade your Des Moines property with precision-built paver surfaces that add lasting value.",
      },
      {
        title: "Drainage Solutions",
        description: "Proper drainage is critical in Des Moines. We design grading and drainage systems that protect your property long-term.",
      },
      {
        title: "Full Landscape Designs",
        description: "From concept to completion — custom backyard designs tailored to your Des Moines property and lifestyle.",
      },
    ],
    localNote: "We serve all of Des Moines including the Marina District, Woodmont, Zenith, and neighborhoods along Marine View Drive.",
    faq: [
      {
        question: "Do you work in Des Moines, WA?",
        answer: "Yes — Des Moines is part of our regular service area. We're based in nearby Kent and frequently work throughout Des Moines on both design and maintenance projects.",
      },
      {
        question: "What plants work best for Des Moines landscaping?",
        answer: "Pacific Northwest natives like rhododendrons, Oregon grape, and Japanese maples do particularly well in Des Moines. We also recommend ornamental grasses and drought-tolerant groundcovers for lower-maintenance areas.",
      },
    ],
    nearbyAreas: ["Federal Way", "Kent", "Seattle", "Auburn"],
  },
  {
    city: "Covington",
    slug: "covington",
    state: "WA",
    county: "King County",
    zip: "98042",
    lat: 47.3593,
    lng: -122.1126,
    description: "Serving Covington and the greater SE King County area with full-service landscaping.",
    seo: {
      title: "Landscaping Services Covington WA | Equinox Landscape LLC | King County",
      description: "Professional landscaping in Covington, WA. Landscape design, pavers, sod, turf, retaining walls & seasonal cleanups for Covington homeowners. Equinox Landscape LLC. Call (206) 418-8749.",
      keywords: "landscaping Covington WA, landscape design Covington Washington, paver installation Covington WA, sod installation Covington, lawn care Covington WA, landscape contractor Covington King County, hardscaping Covington",
    },
    hero: {
      headline: "Covington WA Landscaping Services",
      subheadline: "Quality landscaping, hardscaping, and maintenance for Covington and SE King County.",
    },
    intro: "Covington is one of King County's fastest-growing communities, with many newer homes and developments that need quality landscaping to match. Equinox Landscape serves Covington homeowners with everything from new construction landscape installs to retaining walls, paver patios, sod, and ongoing maintenance. We understand the newer construction landscape and what it takes to take a bare yard and turn it into something exceptional.",
    highlights: [
      {
        title: "New Construction Landscapes",
        description: "We specialize in taking new-build Covington homes from bare dirt to complete, beautiful landscapes.",
      },
      {
        title: "Retaining Walls",
        description: "Many Covington lots have grade changes that call for retaining walls. We build them right.",
      },
      {
        title: "Full Backyard Designs",
        description: "Custom designs that make the most of your Covington property's layout and square footage.",
      },
      {
        title: "Affordable Maintenance",
        description: "Seasonal cleanup and maintenance plans to keep your Covington property looking great all year.",
      },
    ],
    localNote: "We serve Covington and the surrounding SE King County communities including Tahoma, Lake Sawyer, Jenkins Creek, and the Rock Creek area.",
    faq: [
      {
        question: "Do you landscape new construction homes in Covington?",
        answer: "Yes — this is a common request in Covington. We work with homeowners in new developments to design and install complete front and backyard landscapes, starting from a blank slate.",
      },
      {
        question: "Is Covington in your service area?",
        answer: "Absolutely. Covington is a core part of our service area. We're based in nearby Kent and serve all of SE King County, including Covington, regularly.",
      },
    ],
    nearbyAreas: ["Kent", "Renton", "Auburn", "Maple Valley"],
  },
  {
    city: "Maple Valley",
    slug: "maple-valley",
    state: "WA",
    county: "King County",
    zip: "98038",
    lat: 47.3654,
    lng: -122.0465,
    description: "Landscaping and outdoor transformations for Maple Valley — where properties have room to grow.",
    seo: {
      title: "Landscaping Services Maple Valley WA | Equinox Landscape LLC",
      description: "Professional landscaping in Maple Valley, WA. Landscape design, paver installation, sod & turf, retaining walls, and property cleanups. Equinox Landscape LLC. Free estimates — call (206) 418-8749.",
      keywords: "landscaping Maple Valley WA, landscape design Maple Valley Washington, paver installation Maple Valley WA, sod installation Maple Valley, lawn care Maple Valley WA, retaining wall Maple Valley, backyard design Maple Valley",
    },
    hero: {
      headline: "Maple Valley Landscaping & Outdoor Design",
      subheadline: "Big properties, bold transformations — Equinox Landscape serves Maple Valley homeowners.",
    },
    intro: "Maple Valley properties often have generous lot sizes and a natural, forested backdrop — which means the opportunity to create truly stunning outdoor spaces. Equinox Landscape serves Maple Valley homeowners with premium landscape design, paver installation, sod and turf, retaining walls, and maintenance services. We understand how to work with natural terrain and mature trees while creating cohesive, beautiful designs.",
    highlights: [
      {
        title: "Large Lot Expertise",
        description: "Maple Valley properties are often larger. We have the crew, equipment, and experience to tackle big outdoor spaces efficiently.",
      },
      {
        title: "Natural Terrain Integration",
        description: "We design around Maple Valley's natural features — slopes, trees, and drainage — to create cohesive, beautiful results.",
      },
      {
        title: "Paver Driveways & Patios",
        description: "Expansive paver installs that complement larger Maple Valley homes and properties.",
      },
      {
        title: "Retaining Walls",
        description: "Sloped Maple Valley lots often benefit from retaining walls that add usable space and prevent erosion.",
      },
    ],
    localNote: "We serve all of Maple Valley including Lake Wilderness, Hobart, Tahoma School District neighborhoods, and adjacent areas of SE King County.",
    faq: [
      {
        question: "Can you handle large properties in Maple Valley?",
        answer: "Yes — larger properties are actually where we thrive. We have the crew and equipment to tackle big landscape projects and deliver consistent quality across larger acreages.",
      },
      {
        question: "Do you do retaining walls in Maple Valley?",
        answer: "Absolutely. Maple Valley's terrain often has significant grade changes that call for retaining walls. We build walls in various materials and styles to suit your property and aesthetic.",
      },
    ],
    nearbyAreas: ["Covington", "Kent", "Auburn", "Renton"],
  },
];
