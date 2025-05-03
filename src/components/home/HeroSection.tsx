
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/properties?location=${location}&type=${propertyType}&price=${priceRange}`);
  };

  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury home exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-estate-navy bg-opacity-50"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Find Your Dream Luxury Property
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Discover exceptional properties that reflect your lifestyle and aspirations
          </p>
          
          {/* Search form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium text-estate-darkgray">
                  Location
                </label>
                <select 
                  id="location" 
                  className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option value="">Any Location</option>
                  <option value="los-angeles">Los Angeles, CA</option>
                  <option value="new-york">New York, NY</option>
                  <option value="miami">Miami, FL</option>
                  <option value="chicago">Chicago, IL</option>
                  <option value="san-francisco">San Francisco, CA</option>
                </select>
              </div>
              
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
              
              <div className="flex items-end">
                <button type="submit" className="w-full bg-estate-navy text-white py-2 px-4 rounded flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all">
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
