
export interface Agent {
  id: string;
  name: string;
  photo: string;
  position: string;
  bio: string;
  phone: string;
  email: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  experience: number;
  specialties: string[];
  languages: string[];
}

export const singleAgent: Agent = {
  id: "agent-001",
  name: "Ajay Kumar Srivastava",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  position: "Luxury Property Specialist",
  bio: "With over 15 years of experience in the luxury real estate market, Ajay specializes in high-end properties and exclusive listings. His exceptional negotiation skills and extensive network make him one of the most successful agents in the region.",
  phone: "(305) 555-7890",
  email: "ajay@estateelegance.com",
  socialMedia: {
    facebook: "https://facebook.com/ajaykumarsrivastava",
    twitter: "https://twitter.com/ajaykumarsrivastava",
    instagram: "https://instagram.com/ajaykumarsrivastava",
    linkedin: "https://linkedin.com/in/ajaykumarsrivastava"
  },
  experience: 15,
  specialties: ["Luxury Properties", "Waterfront Homes", "International Clients"],
  languages: ["English", "Hindi"]
};
