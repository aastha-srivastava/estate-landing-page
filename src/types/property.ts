
import { singleAgent } from './agent';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  pricePerSqFt?: number;
  location: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  lotSize?: number;
  yearBuilt: number;
  propertyType: 'apartment' | 'house' | 'villa' | 'penthouse' | 'commercial';
  status: 'for-sale' | 'for-rent' | 'sold' | 'pending';
  featured: boolean;
  amenities: string[];
  images: string[];
  virtualTour?: string;
  video?: string;
  agent: {
    id: string;
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Helper function to get agent info for properties
export const getAgentInfo = () => {
  return {
    id: singleAgent.id,
    name: singleAgent.name,
    phone: singleAgent.phone,
    email: singleAgent.email,
    photo: singleAgent.photo
  };
};
