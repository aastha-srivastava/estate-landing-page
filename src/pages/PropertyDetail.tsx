import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Bed, Bath, Square, Calendar, MapPin, Phone, Mail, 
  Heart, Share2, ArrowLeft, ArrowRight, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';
import Layout from '../components/layout/Layout';
import { usePropertiesStore } from '../store/propertiesStore';
import { Property } from '../types/property';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { properties } = usePropertiesStore();
  const [property, setProperty] = useState<Property | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    if (foundProperty) {
      setProperty(foundProperty);
      setActiveImageIndex(0);
    }
    window.scrollTo(0, 0);
  }, [id, properties]);

  const nextImage = () => {
    if (property) {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
    }
  };

  const prevImage = () => {
    if (property) {
      setActiveImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openImageModal = (index: number) => {
    setActiveImageIndex(index);
    setIsImageModalOpen(true);
  };

  if (!property) {
    return (
      <Layout>
        <div className="container-custom py-20 text-center">
          <p className="text-estate-gray text-lg">Loading property details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative h-[60vh] bg-gray-100 overflow-hidden">
        <img 
          src={property.images[activeImageIndex]} 
          alt={`${property.title} - Image ${activeImageIndex + 1}`} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button 
            onClick={prevImage}
            className="bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {property.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeImageIndex ? "bg-estate-gold" : "bg-white"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-estate-navy mb-3 font-serif">{property.title}</h1>
            <p className="text-estate-gray flex items-center mb-2">
              <MapPin size={18} className="mr-2 text-estate-gold" />
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>
            <div className="flex items-center space-x-4 text-estate-gray">
              <span className="flex items-center">
                <Bed size={18} className="mr-2" />
                {property.bedrooms} Beds
              </span>
              <span className="flex items-center">
                <Bath size={18} className="mr-2" />
                {property.bathrooms} Baths
              </span>
              <span className="flex items-center">
                <Square size={18} className="mr-2" />
                {property.size} sq ft
              </span>
              <span className="flex items-center">
                <Calendar size={18} className="mr-2" />
                Built {property.yearBuilt}
              </span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="text-estate-gold text-3xl font-bold mb-2">${property.price.toLocaleString()}</div>
            <div className="flex space-x-3">
              <button 
                onClick={toggleFavorite}
                className={`p-2 rounded-full ${isFavorite ? 'bg-estate-gold text-white' : 'bg-gray-100 text-estate-gray'} hover:bg-estate-gold hover:text-white transition-colors`}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={20} className={isFavorite ? 'fill-white' : ''} />
              </button>
              <button 
                className="p-2 rounded-full bg-gray-100 text-estate-gray hover:bg-estate-navy hover:text-white transition-colors"
                aria-label="Share property"
              >
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-estate-navy mb-4">Property Description</h2>
              <p className="text-estate-gray leading-relaxed mb-4">{property.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div>
                  <h3 className="text-lg font-semibold text-estate-navy mb-3">Property Details</h3>
                  <ul className="space-y-2 text-estate-gray">
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Property Type:</span>
                      <span className="capitalize">{property.propertyType}</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Status:</span>
                      <span className="capitalize">{property.status.replace(/-/g, ' ')}</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Year Built:</span>
                      <span>{property.yearBuilt}</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Lot Size:</span>
                      <span>{property.lotSize ? `${property.lotSize} sq ft` : "N/A"}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-estate-navy mb-3">Additional Details</h3>
                  <ul className="space-y-2 text-estate-gray">
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Bedrooms:</span>
                      <span>{property.bedrooms}</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Bathrooms:</span>
                      <span>{property.bathrooms}</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Interior Size:</span>
                      <span>{property.size} sq ft</span>
                    </li>
                    <li className="flex items-start justify-between">
                      <span className="text-estate-darkgray">Price per sq ft:</span>
                      <span>${property.pricePerSqFt || Math.round(property.price / property.size)}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-estate-navy mb-4">Amenities & Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-estate-gray">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-estate-gold rounded-full mr-3"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-estate-navy mb-4">Property Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="aspect-square cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openImageModal(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${property.title} - Image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-estate-navy mb-4">Location</h2>
              <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY"
                    alt="Property location map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-4 text-estate-gray">
                <MapPin size={18} className="inline-block mr-2 text-estate-gold" />
                {property.address}, {property.city}, {property.state} {property.zipCode}
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={property.agent.photo} 
                    alt={property.agent.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-estate-navy">{property.agent.name}</h3>
                <p className="text-estate-gray">Luxury Property Specialist</p>
                
                <div className="flex justify-center space-x-3 mt-3">
                  <a href="#" className="text-estate-gray hover:text-estate-navy transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="text-estate-gray hover:text-estate-navy transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-estate-gray hover:text-estate-navy transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="text-estate-gray hover:text-estate-navy transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-estate-gray">
                  <Phone size={18} className="mr-3 text-estate-gold" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center text-estate-gray">
                  <Mail size={18} className="mr-3 text-estate-gold" />
                  <span>{property.agent.email}</span>
                </div>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-estate-darkgray">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 mt-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-estate-darkgray">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 mt-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-estate-darkgray">Your Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full p-3 mt-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-estate-darkgray">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-3 mt-1 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-estate-navy"
                    placeholder="I'm interested in this property..."
                    defaultValue={`I'm interested in ${property.title} (${property.id})`}
                  />
                </div>
                <button type="submit" className="w-full bg-estate-navy text-white py-3 px-4 rounded hover:bg-opacity-90 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <button 
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-gray-800"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img 
            src={property.images[activeImageIndex]} 
            alt={`${property.title} - Image ${activeImageIndex + 1}`} 
            className="max-w-[90%] max-h-[90vh] object-contain"
          />
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ArrowLeft size={24} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-estate-navy p-2 rounded-full shadow-lg hover:bg-estate-gold hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ArrowRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeImageIndex ? "bg-estate-gold" : "bg-white"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PropertyDetail;
