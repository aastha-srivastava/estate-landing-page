
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const features = [
    "Premium property portfolio",
    "Expert property advice",
    "Personalized property search",
    "Exclusive property listings",
    "Seamless buying process",
    "After-purchase support"
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Luxury Real Estate Experts</h2>
            <p className="text-estate-gray mb-6 text-lg">
              At Estate Elegance, we specialize in connecting discerning clients with exceptional properties that 
              match their lifestyle aspirations. Our expert team has over 25 years of experience in the luxury real estate market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-estate-gold" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              <Link to="/about" className="btn-primary">
                About Us
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1628744448838-f4d990000e2d?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury interior" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-8 -left-8 hidden md:block">
              <div className="bg-white shadow-lg rounded-lg p-6 w-60">
                <div className="text-estate-navy font-bold text-4xl mb-2">25+</div>
                <div className="text-estate-gray">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
