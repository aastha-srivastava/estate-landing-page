
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-estate-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Estate<span className="text-estate-gold">Elegance</span></h3>
            <p className="text-gray-300 mb-4">
              Discover exceptional properties tailored to your lifestyle and aspirations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-estate-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-estate-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-estate-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-estate-gold transition-colors">Home</Link></li>
              <li><Link to="/properties" className="text-gray-300 hover:text-estate-gold transition-colors">Properties</Link></li>
              <li><Link to="/agents" className="text-gray-300 hover:text-estate-gold transition-colors">Agents</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-estate-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-estate-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Properties</h4>
            <ul className="space-y-3">
              <li><Link to="/properties?type=apartment" className="text-gray-300 hover:text-estate-gold transition-colors">Apartments</Link></li>
              <li><Link to="/properties?type=house" className="text-gray-300 hover:text-estate-gold transition-colors">Houses</Link></li>
              <li><Link to="/properties?type=villa" className="text-gray-300 hover:text-estate-gold transition-colors">Villas</Link></li>
              <li><Link to="/properties?type=penthouse" className="text-gray-300 hover:text-estate-gold transition-colors">Penthouses</Link></li>
              <li><Link to="/properties?type=commercial" className="text-gray-300 hover:text-estate-gold transition-colors">Commercial</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-estate-gold mt-1" size={18} />
                <span className="text-gray-300">123 Luxury Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-estate-gold" size={18} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-estate-gold" size={18} />
                <span className="text-gray-300">info@estateelegance.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 EstateElegance. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-estate-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-estate-gold transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-estate-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
