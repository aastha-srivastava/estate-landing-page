
import { Property } from '../types/property';

export const featuredProperties: Property[] = [
  {
    id: "prop-001",
    title: "Luxurious Waterfront Penthouse",
    description: "Breathtaking penthouse with panoramic ocean views, featuring premium finishes, a private rooftop terrace, and exclusive access to resort-style amenities. This rare offering combines sophisticated design with an unrivaled waterfront lifestyle in the heart of a vibrant coastal community.",
    price: 4750000,
    pricePerSqFt: 1850,
    location: "Miami Beach, FL",
    address: "100 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    zipCode: "33139",
    country: "USA",
    bedrooms: 4,
    bathrooms: 4.5,
    size: 3850,
    lotSize: 0,
    yearBuilt: 2020,
    propertyType: "penthouse",
    status: "for-sale",
    featured: true,
    amenities: [
      "Ocean Views", "Private Elevator", "Wine Cellar", "Smart Home Technology",
      "Private Pool", "24/7 Concierge", "Fitness Center", "Spa"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop001",
    agent: {
      id: "agent-001",
      name: "Sophia Rodriguez",
      phone: "(305) 555-7890",
      email: "sophia@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    createdAt: "2023-11-15T12:00:00Z",
    updatedAt: "2024-03-20T15:30:00Z"
  },
  {
    id: "prop-002",
    title: "Modern Architectural Masterpiece",
    description: "Striking contemporary residence showcasing bold architectural lines, walls of glass, and seamless indoor-outdoor living spaces. This masterpiece of modern design offers an open concept floor plan, chef's kitchen, and resort-style backyard with infinity pool, all within a prestigious gated community.",
    price: 7250000,
    pricePerSqFt: 1425,
    location: "Beverly Hills, CA",
    address: "150 Sunset Boulevard",
    city: "Beverly Hills",
    state: "CA",
    zipCode: "90210",
    country: "USA",
    bedrooms: 5,
    bathrooms: 6,
    size: 6350,
    lotSize: 12000,
    yearBuilt: 2018,
    propertyType: "house",
    status: "for-sale",
    featured: true,
    amenities: [
      "Infinity Pool", "Home Theater", "Wine Cellar", "Smart Home Technology",
      "Gourmet Kitchen", "Outdoor Kitchen", "Fire Pit", "4-Car Garage"
    ],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=2013&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=2065&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop002",
    agent: {
      id: "agent-002",
      name: "James Mitchell",
      phone: "(310) 555-1234",
      email: "james@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    createdAt: "2023-10-05T14:15:00Z",
    updatedAt: "2024-02-18T09:45:00Z"
  },
  {
    id: "prop-003",
    title: "Elegant Historic Brownstone",
    description: "Meticulously restored historic brownstone combining original architectural details with modern luxury. This refined residence features herringbone hardwood floors, ornate fireplaces, a state-of-the-art chef's kitchen, and a private garden oasis in one of the city's most prestigious neighborhoods.",
    price: 6850000,
    pricePerSqFt: 2200,
    location: "Upper East Side, NY",
    address: "45 East 70th Street",
    city: "New York",
    state: "NY",
    zipCode: "10021",
    country: "USA",
    bedrooms: 4,
    bathrooms: 3.5,
    size: 3500,
    lotSize: 2200,
    yearBuilt: 1890,
    propertyType: "house",
    status: "for-sale",
    featured: true,
    amenities: [
      "Original Hardwood Floors", "Ornate Fireplaces", "Chef's Kitchen", "Wine Cellar",
      "Private Garden", "Library", "Home Office", "Smart Home Technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1981&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687120-9e4bbefc8d23?q=80&w=2070&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop003",
    agent: {
      id: "agent-003",
      name: "Emily Thompson",
      phone: "(212) 555-6789",
      email: "emily@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
    },
    createdAt: "2023-12-10T10:30:00Z",
    updatedAt: "2024-03-05T16:20:00Z"
  },
  {
    id: "prop-004",
    title: "Contemporary Beachfront Villa",
    description: "Ultimate beachfront luxury villa with direct ocean access, offering expansive living areas with floor-to-ceiling windows framing spectacular seascapes. This tropical paradise features multiple terraces, an infinity pool that blends with the horizon, and thoughtfully designed spaces for entertainment and relaxation.",
    price: 8950000,
    pricePerSqFt: 1950,
    location: "Malibu, CA",
    address: "3200 Pacific Coast Highway",
    city: "Malibu",
    state: "CA",
    zipCode: "90265",
    country: "USA",
    bedrooms: 6,
    bathrooms: 7,
    size: 6800,
    lotSize: 15000,
    yearBuilt: 2017,
    propertyType: "villa",
    status: "for-sale",
    featured: false,
    amenities: [
      "Private Beach Access", "Infinity Pool", "Outdoor Kitchen", "Wine Cellar",
      "Home Cinema", "Fitness Room", "Sauna", "Smart Home Technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop004",
    agent: {
      id: "agent-002",
      name: "James Mitchell",
      phone: "(310) 555-1234",
      email: "james@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    createdAt: "2023-09-20T11:45:00Z",
    updatedAt: "2024-01-15T14:10:00Z"
  },
  {
    id: "prop-005",
    title: "Sophisticated Urban Loft",
    description: "Exceptional converted warehouse loft showcasing industrial-chic aesthetics with soaring ceilings, exposed brick, and original timber beams. This sophisticated urban residence offers an expansive open-concept living space, gourmet kitchen, and designer finishes throughout, all in a vibrant downtown location.",
    price: 3250000,
    pricePerSqFt: 1580,
    location: "Tribeca, NY",
    address: "75 Franklin Street",
    city: "New York",
    state: "NY",
    zipCode: "10013",
    country: "USA",
    bedrooms: 2,
    bathrooms: 2.5,
    size: 2800,
    lotSize: 0,
    yearBuilt: 1920,
    propertyType: "apartment",
    status: "for-sale",
    featured: false,
    amenities: [
      "Exposed Brick Walls", "Original Timber Beams", "Chef's Kitchen", "Smart Home Technology",
      "Private Terrace", "Building Gym", "Doorman", "Bike Storage"
    ],
    images: [
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609347744407-54789e4a06df?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594540637720-9b14672fab65?q=80&w=1974&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop005",
    agent: {
      id: "agent-004",
      name: "Michael Chen",
      phone: "(212) 555-4321",
      email: "michael@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    createdAt: "2024-01-05T13:20:00Z",
    updatedAt: "2024-04-01T10:15:00Z"
  },
  {
    id: "prop-006",
    title: "Mediterranean-Inspired Estate",
    description: "Exquisite Mediterranean-inspired estate situated on lush, manicured grounds with sweeping mountain vistas. This grand residence features an elegant interior with high ceilings, travertine floors, and custom woodwork, complemented by resort-style outdoor living spaces including a pool, spa, and summer kitchen.",
    price: 5950000,
    pricePerSqFt: 1250,
    location: "Scottsdale, AZ",
    address: "12500 Mountain View Road",
    city: "Scottsdale",
    state: "AZ",
    zipCode: "85259",
    country: "USA",
    bedrooms: 5,
    bathrooms: 5.5,
    size: 6500,
    lotSize: 35000,
    yearBuilt: 2015,
    propertyType: "house",
    status: "for-rent",
    featured: false,
    amenities: [
      "Resort-Style Pool", "Outdoor Kitchen", "Wine Cellar", "Home Theater",
      "Gourmet Kitchen", "Guest Casita", "4-Car Garage", "Smart Home Technology"
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ],
    virtualTour: "https://example.com/virtualtour/prop006",
    agent: {
      id: "agent-001",
      name: "Sophia Rodriguez",
      phone: "(305) 555-7890",
      email: "sophia@estateelegance.com",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
    },
    createdAt: "2023-11-30T16:40:00Z",
    updatedAt: "2024-02-25T09:30:00Z"
  }
];
