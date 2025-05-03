
import { ArrowRight, Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePropertiesStore } from '../../store/propertiesStore';

const FeaturedProperties = () => {
  const { properties } = usePropertiesStore();
  const featuredProperties = properties.filter(property => property.featured).slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Featured Properties</h2>
          <Link to="/properties" className="text-estate-navy hover:text-estate-gold flex items-center transition-colors">
            <span className="mr-2">View All Properties</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.length > 0 ? (
            featuredProperties.map((property) => (
              <div key={property.id} className="property-card bg-white">
                <div className="relative">
                  <Link to={`/property/${property.id}`}>
                    <img 
                      src={property.images[0]} 
                      alt={property.title} 
                      className="w-full h-64 object-cover"
                    />
                  </Link>
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
                  <Link to={`/property/${property.id}`} className="block">
                    <h3 className="text-xl font-bold text-estate-navy mb-2 hover:text-estate-gold transition-colors">
                      {property.title}
                    </h3>
                  </Link>
                  <p className="text-estate-gray mb-4">{property.location}</p>
                  <div className="flex justify-between mb-6">
                    <span className="text-estate-gold text-xl font-bold">${property.price.toLocaleString()}</span>
                    {property.pricePerSqFt && (
                      <span className="text-estate-gray text-sm">${property.pricePerSqFt}/sq ft</span>
                    )}
                  </div>
                  <div className="flex justify-between text-estate-gray border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <Bed size={18} className="mr-2" />
                      <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="flex items-center">
                      <Bath size={18} className="mr-2" />
                      <span>{property.bathrooms} Baths</span>
                    </div>
                    <div className="flex items-center">
                      <Square size={18} className="mr-2" />
                      <span>{property.size} sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-estate-gray text-lg">No featured properties available.</p>
              <Link to="/admin" className="text-estate-navy hover:text-estate-gold mt-2 inline-block">
                Go to admin panel to add featured properties
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
