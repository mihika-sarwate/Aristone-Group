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
  documents?: { title: string; url: string }[];
}

// Mira Road Projects (7)
const miraRoadProjects: Project[] = [
  {
    id: "aristone-bay",
    name: "Hyde Park",
    location: "Mira Road West",
    region: "Mira Road",
    status: "Ongoing",
    description: "To be updated soon",
    fullDescription: "To be updated soon",
    image: "/images/projects/stock-02.jpg",
    height: "To be updated soon",
    units: "To be updated soon",
    area: "To be updated soon",
    configurations: ["To be updated soon"],
    amenities: [
      { icon: "Clock", label: "To be updated soon" }
    ],
    locationAdvantages: [
      { title: "To be updated soon", description: "To be updated soon" }
    ],
    brochureUrl: "",
    mapImage: "/images/projects/stock-12.jpg",
    documents: [
      { title: "Environment clearance", url: "/documents/Aristone Builders  SIA_MH_INFRA2_574980_2026_1223623483_-signed.pdf" }
    ],
  },
];

// Palghar Projects (3)
const palgharProjects: Project[] = [];

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
