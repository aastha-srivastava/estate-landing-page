import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowDown, ArrowUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { usePropertiesStore } from '../store/propertiesStore';
import { Property } from '../types/property';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const { properties } = usePropertiesStore();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const locationParam = searchParams.get('location') || '';
    const typeParam = searchParams.get('type') || '';
    const priceParam = searchParams.get('price') || '';
    
    setSearchQuery(locationParam);
    setPropertyType(typeParam);
    setPriceRange(priceParam);
    
    applyFilters();
  }, [searchParams, properties]);

  const applyFilters = () => {
    let filtered = [...properties];
    
    // Filter by search query (location)
    if (searchQuery) {
      filtered = filtered.filter(property => 
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by property type
    if (propertyType) {
      filtered = filtered.filter(property => property.propertyType === propertyType);
    }
    
    // Filter by price range
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(num => parseInt(num, 10));
      if (max) {
        filtered = filtered.filter(property => property.price >= min && property.price <= max);
      } else {
        // Handle cases like "5000000+" where there's no upper limit
        filtered = filtered.filter(property => property.price >= min);
      }
    }
    
    // Filter by bedrooms
    if (bedrooms) {
      const bedroomsNum = parseInt(bedrooms, 10);
      filtered = filtered.filter(property => property.bedrooms >= bedroomsNum);
    }
    
    // Filter by bathrooms
    if (bathrooms) {
      const bathroomsNum = parseInt(bathrooms, 10);
      filtered = filtered.filter(property => property.bathrooms >= bathroomsNum);
    }
    
    // Sort properties
    if (sortBy) {
      filtered.sort((a, b) => {
        if (sortBy === 'price') {
          return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        } else if (sortBy === 'size') {
          return sortOrder === 'asc' ? a.size - b.size : b.size - a.size;
        } else if (sortBy === 'date') {
          return sortOrder === 'asc' 
            ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
        return 0;
      });
    }
    
    setFilteredProperties(filtered);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    applyFilters();
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-estate-navy mb-4 font-serif">Properties</h1>
          <p className="text-estate-gray text-lg mb-8">
            Discover our exclusive collection of luxury properties
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-grow">
                  <input
                    type="text"
                    placeholder="Search by location, address or city..."
                    className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    type="button" 
                    className="flex items-center justify-center space-x-2 bg-estate-navy text-white py-3 px-4 rounded hover:bg-opacity-90 transition-all"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <Filter size={18} />
                    <span>Filters</span>
                  </button>
                  <button type="submit" className="flex items-center justify-center space-x-2 bg-estate-gold text-white py-3 px-4 rounded hover:bg-opacity-90 transition-all">
                    <Search size={18} />
                    <span>Search</span>
                  </button>
                </div>
              </div>
              
              {isFilterOpen && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="space-y-2">
                    <label htmlFor="property-type" className="text-sm font-medium text-estate-darkgray">
                      Property Type
                    </label>
                    <select 
                      id="property-type" 
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="">Any Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="villa">Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="price-range" className="text-sm font-medium text-estate-darkgray">
                      Price Range
                    </label>
                    <select 
                      id="price-range" 
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="">Any Price</option>
                      <option value="0-500000">$0 - $500,000</option>
                      <option value="500000-1000000">$500,000 - $1,000,000</option>
                      <option value="1000000-2000000">$1,000,000 - $2,000,000</option>
                      <option value="2000000-5000000">$2,000,000 - $5,000,000</option>
                      <option value="5000000+">$5,000,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="bedrooms" className="text-sm font-medium text-estate-darkgray">
                      Bedrooms
                    </label>
                    <select 
                      id="bedrooms" 
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="bathrooms" className="text-sm font-medium text-estate-darkgray">
                      Bathrooms
                    </label>
                    <select 
                      id="bathrooms" 
                      className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>
              )}
            </form>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="text-estate-gray">
              {filteredProperties.length} properties found
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort-by" className="text-sm font-medium text-estate-darkgray">
                Sort by:
              </label>
              <select 
                id="sort-by" 
                className="p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  applyFilters();
                }}
              >
                <option value="">Default</option>
                <option value="price">Price</option>
                <option value="size">Size</option>
                <option value="date">Date</option>
              </select>
              <button 
                onClick={toggleSortOrder}
                className="p-2 border border-gray-200 rounded-full hover:bg-gray-100"
                aria-label={sortOrder === 'asc' ? 'Sort ascending' : 'Sort descending'}
              >
                {sortOrder === 'asc' ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="property-card bg-white">
                  <div className="relative">
                    <a href={`/property/${property.id}`}>
                      <img 
                        src={property.images[0]} 
                        alt={property.title} 
                        className="w-full h-64 object-cover"
                      />
                    </a>
                    <div className="absolute top-4 left-4">
                      <span className="bg-estate-navy text-white text-sm px-3 py-1 rounded">
                        {property.status}
                      </span>
                    </div>
                    {property.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-estate-gold text-white text-sm px-3 py-1 rounded">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <a href={`/property/${property.id}`}>
                      <h3 className="text-xl font-bold text-estate-navy mb-2 hover:text-estate-gold transition-colors">
                        {property.title}
                      </h3>
                    </a>
                    <p className="text-estate-gray mb-4">{property.location}</p>
                    <div className="flex justify-between mb-6">
                      <span className="text-estate-gold text-xl font-bold">${property.price.toLocaleString()}</span>
                      {property.pricePerSqFt && (
                        <span className="text-estate-gray text-sm">${property.pricePerSqFt}/sq ft</span>
                      )}
                    </div>
                    <div className="flex justify-between text-estate-gray border-t border-gray-100 pt-4">
                      <div>
                        <span>{property.bedrooms} Beds</span>
                      </div>
                      <div>
                        <span>{property.bathrooms} Baths</span>
                      </div>
                      <div>
                        <span>{property.size} sq ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-estate-gray text-lg">No properties found matching your criteria. Please try different filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
