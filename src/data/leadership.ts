export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const leadership: Leader[] = [
  {
    id: "rajesh-sharma",
    name: "Rajesh Sharma",
    role: "Chairman & Founder",
    bio: "With over 35 years of experience in real estate development, Rajesh Sharma founded Aristone Group with a vision to create living spaces that stand the test of time. His commitment to quality and innovation has transformed Mumbai's skyline and set new benchmarks in luxury living.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Managing Director",
    bio: "Priya brings a fresh perspective to Aristone's legacy, combining modern design sensibilities with sustainable practices. Under her leadership, Aristone has embraced green building technologies and smart home innovations, shaping the future of urban development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
  },
  {
    id: "vikram-mehta",
    name: "Vikram Mehta",
    role: "Chief Architect",
    bio: "An award-winning architect with international acclaim, Vikram leads our design philosophy. His creations blend timeless elegance with functional brilliance, ensuring every Aristone project becomes an architectural landmark.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
  },
];
