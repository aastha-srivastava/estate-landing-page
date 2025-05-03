
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-estate-navy relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-estate-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-estate-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let our expert team guide you through the process of finding your perfect home
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/properties" className="bg-white text-estate-navy px-8 py-4 rounded-lg font-semibold hover:bg-estate-gold hover:text-white transition-colors">
              Browse Properties
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-estate-navy transition-colors">
              Contact an Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
