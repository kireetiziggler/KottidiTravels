import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-brand-orange font-bold" : "text-gray-600 hover:text-brand-orange";

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm h-20 flex items-center">
      <div className="page-container w-full flex justify-between items-center">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="group-hover:scale-105 transition">
            {/* Replaced Car icon with logo.webp */}
            <img 
              src="/images/logo.webp" 
              alt="Kottidi Travels Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 leading-none font-sans">
              Kottidi Travels <span className="text-brand-orange">Tirupati</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          {/* Changed Link to /contact */}
          <Link to="/contact" className="px-6 py-2 bg-brand-orange text-white rounded-lg hover:bg-orange-700 transition shadow-md hover:shadow-lg">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t md:hidden shadow-lg">
          <div className="flex flex-col p-6 space-y-4 font-medium text-lg text-center">
            <Link to="/" onClick={()=>setIsOpen(false)} className={isActive('/')}>Home</Link>
            <Link to="/about" onClick={()=>setIsOpen(false)} className={isActive('/about')}>About Us</Link>
            <Link to="/contact" onClick={()=>setIsOpen(false)} className={isActive('/contact')}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;