import { assetPath } from "@/lib/assets";

export interface Amenity {
  icon: string;
  label: string;
}

export interface LocationAdvantage {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  location: string;
  region: "Mira Road" | "Palghar";
  status: "Completed" | "Ongoing" | "Upcoming";
  description: string;
  fullDescription?: string;
  image: string;
  galleryImages?: string[];
  height?: string;
  units?: string;
  area?: string;
  configurations?: string[];
  amenities: Amenity[];
  locationAdvantages: LocationAdvantage[];
  brochureUrl?: string;
  mapImage?: string;
}

// Mira Road Projects (7)
const miraRoadProjects: Project[] = [
  {
    id: "aristone-heights",
    name: "Vasudev Paradise",
    location: "Mira Road East",
    region: "Mira Road",
    status: "Completed",
    description: "A 52-storey residential masterpiece offering panoramic views and world-class amenities. Redefining luxury living in Mira Road.",
    fullDescription: "Aristone Heights stands as a testament to architectural excellence in Mira Road East. This 52-storey marvel combines sophisticated design with practical luxury, offering residents an unparalleled living experience. Every detail has been meticulously crafted to ensure comfort, elegance, and functionality.",
    image: "/images/projects/stock-01.jpg",
    height: "52 Floors",
    units: "180 Residences",
    area: "3.5 Acres",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    amenities: [
      { icon: "Waves", label: "Swimming Pool" },
      { icon: "Dumbbell", label: "Gymnasium" },
      { icon: "TreePine", label: "Landscaped Gardens" },
      { icon: "Car", label: "Covered Parking" },
      { icon: "Shield", label: "24/7 Security" },
      { icon: "Gamepad2", label: "Kids Play Area" },
      { icon: "Users", label: "Clubhouse" },
      { icon: "Zap", label: "Power Backup" },
    ],
    locationAdvantages: [
      { title: "Mira Road Station", description: "Just 10 minutes walking distance from the Western Railway Station" },
      { title: "Educational Hub", description: "Top schools and colleges within 2 km radius including Ryan International and St. Xavier's" },
      { title: "Healthcare", description: "Wockhardt Hospital and Bhaktivedanta Hospital within 5 minutes drive" },
      { title: "Shopping & Entertainment", description: "D-Mart, Big Bazaar, and Cinemax multiplex within walking distance" },
      { title: "Mumbai Connectivity", description: "Easy access to Western Express Highway - 35 minutes to Andheri" },
    ],
    brochureUrl: "/brochures/aristone-heights.pdf",
    mapImage: "/images/projects/stock-11.jpg",
  },
  {
    id: "aristone-bay",
    name: "Hyde Park",
    location: "Mira Road West",
    region: "Mira Road",
    status: "Ongoing",
    description: "An iconic waterfront development featuring premium apartments with private terraces and exclusive lifestyle amenities.",
    fullDescription: "Aristone Bay redefines waterfront living in Mira Road West. This iconic development offers premium apartments designed for those who appreciate the finer things in life. With private terraces overlooking serene waters and exclusive amenities, every day feels like a vacation.",
    image: "/images/projects/stock-02.jpg",
    height: "45 Floors",
    units: "120 Residences",
    area: "2.8 Acres",
    configurations: ["3 BHK", "4 BHK"],
    amenities: [
      { icon: "Waves", label: "Infinity Pool" },
      { icon: "Dumbbell", label: "Modern Gym" },
      { icon: "Wine", label: "Lounge Bar" },
      { icon: "Car", label: "Multi-level Parking" },
      { icon: "Shield", label: "Smart Security" },
      { icon: "Leaf", label: "Zen Garden" },
      { icon: "Monitor", label: "Business Center" },
      { icon: "Sparkles", label: "Spa & Wellness" },
    ],
    locationAdvantages: [
      { title: "Creek Views", description: "Unobstructed views of the Mira-Bhayander creek" },
      { title: "Metro Connectivity", description: "Proposed Metro Line 9 station within 500 meters" },
      { title: "Premium Schools", description: "NES International and Hiranandani Foundation School nearby" },
      { title: "IT Hub Access", description: "20 minutes to Mindspace Malad and commercial hubs" },
      { title: "Airport", description: "45 minutes to Chhatrapati Shivaji International Airport" },
    ],
    brochureUrl: "/brochures/aristone-bay.pdf",
    mapImage: "/images/projects/stock-12.jpg",
  },
  {
    id: "aristone-gardens",
    name: "Sai Abhishek",
    location: "Kashimira, Mira Road",
    region: "Mira Road",
    status: "Completed",
    description: "A serene residential enclave surrounded by landscaped gardens. Perfect harmony between nature and modern living.",
    fullDescription: "Aristone Gardens offers a unique living experience where nature meets modernity. Nestled in the heart of Kashimira, this residential enclave is designed for families who value green spaces without compromising on urban conveniences.",
    image: "/images/projects/stock-03.jpg",
    height: "38 Floors",
    units: "200 Residences",
    area: "5.2 Acres",
    configurations: ["1 BHK", "2 BHK", "3 BHK"],
    amenities: [
      { icon: "TreePine", label: "Central Park" },
      { icon: "Waves", label: "Pool Complex" },
      { icon: "Dumbbell", label: "Outdoor Gym" },
      { icon: "Bike", label: "Jogging Track" },
      { icon: "Bird", label: "Bird Sanctuary" },
      { icon: "Tent", label: "Amphitheatre" },
      { icon: "Baby", label: "Creche" },
      { icon: "Heart", label: "Senior Zone" },
    ],
    locationAdvantages: [
      { title: "Temple Proximity", description: "5 minutes from the famous Kashimira temples" },
      { title: "Nature Reserve", description: "Adjacent to protected green belt zone" },
      { title: "School District", description: "Within Mira Road's best school catchment area" },
      { title: "Shopping Hub", description: "Neptune Magnet Mall just 10 minutes away" },
      { title: "Highway Access", description: "Direct access to NH-8 for intercity travel" },
    ],
    brochureUrl: "/brochures/aristone-gardens.pdf",
    mapImage: "/images/projects/stock-13.jpg",
  },
  {
    id: "aristone-plaza",
    name: "Aristone Plaza",
    location: "Beverly Park, Mira Road",
    region: "Mira Road",
    status: "Ongoing",
    description: "A mixed-use development combining luxury residences with premium retail spaces in Mira Road's commercial hub.",
    fullDescription: "Aristone Plaza represents the future of integrated living in Beverly Park. This mixed-use development seamlessly blends luxury residences with premium retail and office spaces, creating a self-sufficient ecosystem for modern urban life.",
    image: "/images/projects/stock-04.jpg",
    height: "60 Floors",
    units: "250 Units",
    area: "4.1 Acres",
    configurations: ["2 BHK", "3 BHK", "Penthouse"],
    amenities: [
      { icon: "Building2", label: "Sky Lounge" },
      { icon: "ShoppingBag", label: "Retail Plaza" },
      { icon: "Coffee", label: "Café Terrace" },
      { icon: "Waves", label: "Rooftop Pool" },
      { icon: "Dumbbell", label: "Premium Gym" },
      { icon: "Briefcase", label: "Co-working Space" },
      { icon: "Utensils", label: "Banquet Hall" },
      { icon: "Cctv", label: "Smart Surveillance" },
    ],
    locationAdvantages: [
      { title: "Commercial Center", description: "Heart of Beverly Park's growing commercial district" },
      { title: "Metro Station", description: "Future Metro Line 9 terminus within walking distance" },
      { title: "Premium Retail", description: "Walking distance to major brand showrooms" },
      { title: "Business District", description: "Emerging as Mira Road's CBD" },
      { title: "Coastal Road", description: "Future coastal road connectivity planned" },
    ],
    brochureUrl: "/brochures/aristone-plaza.pdf",
    mapImage: "/images/projects/stock-14.jpg",
  },
  {
    id: "aristone-residences",
    name: "Aristone Residences",
    location: "Sheetal Nagar, Mira Road",
    region: "Mira Road",
    status: "Completed",
    description: "Exclusive residences offering unparalleled luxury with premium finishes and thoughtful design.",
    fullDescription: "Aristone Residences in Sheetal Nagar represents the pinnacle of residential luxury. Every apartment features premium finishes, thoughtful design elements, and state-of-the-art amenities that cater to discerning homeowners.",
    image: "/images/projects/stock-05.jpg",
    height: "28 Floors",
    units: "56 Residences",
    area: "2.0 Acres",
    configurations: ["3 BHK", "4 BHK", "Duplex"],
    amenities: [
      { icon: "Waves", label: "Private Pool" },
      { icon: "Dumbbell", label: "Personal Training" },
      { icon: "Wine", label: "Wine Cellar" },
      { icon: "Film", label: "Private Theatre" },
      { icon: "Car", label: "Valet Parking" },
      { icon: "Sparkles", label: "Concierge Service" },
      { icon: "Wifi", label: "Smart Home" },
      { icon: "Flower2", label: "Terrace Gardens" },
    ],
    locationAdvantages: [
      { title: "Exclusive Neighborhood", description: "Located in premium Sheetal Nagar locality" },
      { title: "International School", description: "Narayana e-Techno School at walkable distance" },
      { title: "Healthcare", description: "Apollo Clinic and specialty hospitals nearby" },
      { title: "Recreation", description: "Golf driving range and sports complex within 3 km" },
      { title: "Airport Link", description: "Proposed airport express connectivity" },
    ],
    brochureUrl: "/brochures/aristone-residences.pdf",
    mapImage: "/images/projects/stock-15.jpg",
  },
  {
    id: "aristone-towers",
    name: "Aristone Towers",
    location: "Kanakia, Mira Road",
    region: "Mira Road",
    status: "Upcoming",
    description: "Twin towers offering smart homes with cutting-edge technology and sustainable design for the modern family.",
    fullDescription: "Aristone Towers introduces the concept of intelligent living to Kanakia. These twin towers feature smart homes with cutting-edge technology, sustainable design elements, and amenities designed for the modern urban family.",
    image: "/images/projects/stock-06.jpg",
    height: "48 Floors",
    units: "320 Residences",
    area: "6.5 Acres",
    configurations: ["1 BHK", "2 BHK", "3 BHK"],
    amenities: [
      { icon: "Cpu", label: "AI Concierge" },
      { icon: "Leaf", label: "Solar Powered" },
      { icon: "Droplet", label: "Rainwater Harvest" },
      { icon: "Waves", label: "Olympic Pool" },
      { icon: "Dumbbell", label: "CrossFit Zone" },
      { icon: "Gamepad2", label: "Gaming Lounge" },
      { icon: "Dog", label: "Pet Park" },
      { icon: "Zap", label: "EV Charging" },
    ],
    locationAdvantages: [
      { title: "IT Corridor", description: "Near proposed Mira Road IT Park" },
      { title: "Green Certified", description: "IGBC Gold pre-certified project" },
      { title: "School Campus", description: "Multiple CBSE and ICSE schools in vicinity" },
      { title: "Mall Connect", description: "Skybridge to upcoming mega mall" },
      { title: "Highway Junction", description: "At junction of WEH and coastal route" },
    ],
    brochureUrl: "/brochures/aristone-towers.pdf",
    mapImage: "/images/projects/stock-16.jpg",
  },
  {
    id: "aristone-skyline",
    name: "Aristone Skyline",
    location: "Mira-Bhayander Road",
    region: "Mira Road",
    status: "Ongoing",
    description: "A premium township with integrated amenities and commercial spaces. Complete ecosystem for elevated living.",
    fullDescription: "Aristone Skyline is more than just a residential complex—it's a complete township. Located on the Mira-Bhayander stretch, this integrated development offers homes, schools, retail, and recreation all within a secure, planned community.",
    image: "/images/projects/stock-07.jpg",
    height: "42 Floors",
    units: "400 Residences",
    area: "12 Acres",
    configurations: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
    amenities: [
      { icon: "GraduationCap", label: "International School" },
      { icon: "Stethoscope", label: "Health Center" },
      { icon: "ShoppingCart", label: "Supermarket" },
      { icon: "Waves", label: "Multiple Pools" },
      { icon: "Dumbbell", label: "Sports Complex" },
      { icon: "TreePine", label: "Central Park" },
      { icon: "Bus", label: "Shuttle Service" },
      { icon: "Shield", label: "Gated Community" },
    ],
    locationAdvantages: [
      { title: "Township Living", description: "Self-sufficient 12-acre integrated township" },
      { title: "Educational Campus", description: "On-site international school and creche" },
      { title: "Medical Facility", description: "In-campus health center with ambulance service" },
      { title: "Retail Hub", description: "Ground floor retail with daily essentials" },
      { title: "Public Transport", description: "Dedicated bus stop with city bus connectivity" },
    ],
    brochureUrl: "/brochures/aristone-skyline.pdf",
    mapImage: "/images/projects/stock-11.jpg",
  },
];

// Palghar Projects (3)
const palgharProjects: Project[] = [
  {
    id: "aristone-enclave",
    name: "Hill Touch",
    location: "Palghar Town",
    region: "Palghar",
    status: "Completed",
    description: "Thoughtfully designed homes with extensive green spaces and recreational facilities for families seeking tranquility.",
    fullDescription: "Aristone Enclave brings urban luxury to the peaceful environs of Palghar Town. This thoughtfully designed community offers spacious homes, extensive green spaces, and modern amenities, perfect for families seeking a balanced lifestyle away from city chaos.",
    image: "/images/projects/stock-08.jpg",
    height: "15 Floors",
    units: "180 Residences",
    area: "8.0 Acres",
    configurations: ["1 BHK", "2 BHK", "3 BHK"],
    amenities: [
      { icon: "TreePine", label: "Forest Garden" },
      { icon: "Waves", label: "Natural Pool" },
      { icon: "Dumbbell", label: "Open-air Gym" },
      { icon: "Bike", label: "Cycling Track" },
      { icon: "Tent", label: "Camping Zone" },
      { icon: "Bird", label: "Bird Watching" },
      { icon: "Gamepad2", label: "Adventure Park" },
      { icon: "Sunrise", label: "Yoga Deck" },
    ],
    locationAdvantages: [
      { title: "Railway Station", description: "Palghar Railway Station just 5 minutes away" },
      { title: "Natural Beauty", description: "Surrounded by Sahyadri hills and green belt" },
      { title: "Beach Access", description: "Kelva and Shirgaon beaches within 15 minutes" },
      { title: "Educational", description: "Palghar's top schools and colleges in vicinity" },
      { title: "Mumbai Express", description: "Fast trains to Mumbai - 90 minutes to Churchgate" },
    ],
    brochureUrl: "/brochures/aristone-enclave.pdf",
    mapImage: "/images/projects/stock-12.jpg",
  },
  {
    id: "aristone-greens",
    name: "Aristone Greens",
    location: "Boisar, Palghar",
    region: "Palghar",
    status: "Ongoing",
    description: "Eco-friendly township surrounded by nature with sustainable living features and resort-style amenities.",
    fullDescription: "Aristone Greens in Boisar represents our commitment to sustainable luxury. This eco-friendly township is designed for environmentally conscious families who want to live in harmony with nature while enjoying modern comforts and resort-style amenities.",
    image: "/images/projects/stock-09.jpg",
    height: "12 Floors",
    units: "250 Residences",
    area: "15 Acres",
    configurations: ["1 BHK", "2 BHK", "3 BHK", "Villas"],
    amenities: [
      { icon: "Leaf", label: "Organic Farm" },
      { icon: "Droplet", label: "Water Bodies" },
      { icon: "Sun", label: "Solar Village" },
      { icon: "Waves", label: "Lagoon Pool" },
      { icon: "Horse", label: "Equestrian Club" },
      { icon: "TreePine", label: "Nature Trails" },
      { icon: "Tent", label: "Weekend Retreats" },
      { icon: "Flower2", label: "Butterfly Garden" },
    ],
    locationAdvantages: [
      { title: "Industrial Belt", description: "Close to Tarapur MIDC for working professionals" },
      { title: "Connectivity", description: "Boisar station on Western Railway mainline" },
      { title: "Affordability", description: "Premium lifestyle at Palghar prices" },
      { title: "Growth Corridor", description: "Part of NAINA (Navi Mumbai Airport Influence Area)" },
      { title: "Healthcare", description: "Upcoming multi-specialty hospital in vicinity" },
    ],
    brochureUrl: "/brochures/aristone-greens.pdf",
    mapImage: "/images/projects/stock-13.jpg",
  },
  {
    id: "aristone-vista",
    name: "Aristone Vista",
    location: "Virar-Palghar Road",
    region: "Palghar",
    status: "Upcoming",
    description: "Panoramic hilltop residences offering breathtaking views of the Western Ghats and modern luxury living.",
    fullDescription: "Aristone Vista offers a unique living experience on the Virar-Palghar corridor. Perched on elevated terrain, these panoramic residences offer breathtaking views of the Western Ghats while providing all modern amenities for comfortable family living.",
    image: "/images/projects/stock-10.jpg",
    height: "20 Floors",
    units: "160 Residences",
    area: "6 Acres",
    configurations: ["2 BHK", "3 BHK", "4 BHK"],
    amenities: [
      { icon: "Mountain", label: "Valley View Deck" },
      { icon: "Waves", label: "Infinity Edge Pool" },
      { icon: "Dumbbell", label: "Panorama Gym" },
      { icon: "Sunset", label: "Sunset Lounge" },
      { icon: "TreePine", label: "Hill Garden" },
      { icon: "Camera", label: "Photography Zone" },
      { icon: "Wind", label: "Wind Court" },
      { icon: "Star", label: "Stargazing Deck" },
    ],
    locationAdvantages: [
      { title: "Scenic Location", description: "Hilltop location with Western Ghats panorama" },
      { title: "Dual Access", description: "Connected to both Virar and Palghar stations" },
      { title: "Clean Air", description: "Away from pollution, pristine environment" },
      { title: "Investment Value", description: "High appreciation potential in growing region" },
      { title: "Weekend Gateway", description: "Perfect second home for Mumbai residents" },
    ],
    brochureUrl: "/brochures/aristone-vista.pdf",
    mapImage: "/images/projects/stock-14.jpg",
  },
];

const withBasePath = (value?: string) => {
  if (!value) return value;
  return value.startsWith("/") ? assetPath(value) : value;
};

const normalizeProjectPaths = (project: Project): Project => ({
  ...project,
  image: withBasePath(project.image) || project.image,
  mapImage: withBasePath(project.mapImage),
  brochureUrl: withBasePath(project.brochureUrl),
  galleryImages: project.galleryImages?.map((image) => withBasePath(image) || image),
});

export const projects: Project[] = [...miraRoadProjects, ...palgharProjects].map(normalizeProjectPaths);

export const miraRoadProjectsList = miraRoadProjects.map(normalizeProjectPaths);
export const palgharProjectsList = palgharProjects.map(normalizeProjectPaths);
