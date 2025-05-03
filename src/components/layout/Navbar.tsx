
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-estate-navy font-serif">Estate<span className="text-estate-gold">Elegance</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-estate-darkgray hover:text-estate-gold transition-colors">Home</Link>
          <Link to="/properties" className="text-estate-darkgray hover:text-estate-gold transition-colors">Properties</Link>
          <Link to="/about" className="text-estate-darkgray hover:text-estate-gold transition-colors">About</Link>
          <Link to="/contact" className="text-estate-darkgray hover:text-estate-gold transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-estate-navy p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg absolute w-full animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-estate-darkgray hover:text-estate-gold transition-colors">Home</Link>
            <Link to="/properties" onClick={toggleMenu} className="text-estate-darkgray hover:text-estate-gold transition-colors">Properties</Link>
            <Link to="/about" onClick={toggleMenu} className="text-estate-darkgray hover:text-estate-gold transition-colors">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-estate-darkgray hover:text-estate-gold transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
