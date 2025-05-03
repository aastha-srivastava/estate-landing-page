
import { Key, Home, User, Heart, MapPin, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Property Listings",
      description: "Access our exclusive portfolio of luxury properties across prime locations."
    },
    {
      icon: User,
      title: "Expert Agents",
      description: "Work with knowledgeable agents specializing in luxury real estate markets."
    },
    {
      icon: Key,
      title: "Buying & Selling",
      description: "Comprehensive support throughout your property transaction journey."
    },
    {
      icon: MapPin,
      title: "Property Valuation",
      description: "Accurate market appraisals and property valuations by our experts."
    },
    {
      icon: Heart,
      title: "Personalized Search",
      description: "Custom property searches tailored to your specific requirements."
    },
    {
      icon: Shield,
      title: "Legal Support",
      description: "Assistance with all legal aspects of your property transaction."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-estate-gray max-w-3xl mx-auto text-lg">
            We provide a comprehensive range of real estate services designed to meet the needs of our discerning clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow group">
              <div className="mb-6 inline-block p-4 bg-estate-navy text-white rounded-lg group-hover:bg-estate-gold transition-colors">
                <service.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-estate-navy mb-4">{service.title}</h3>
              <p className="text-estate-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
