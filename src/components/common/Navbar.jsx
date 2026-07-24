import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-brand-orange font-bold" : "text-gray-600 hover:text-brand-orange";

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-sm shadow-sm h-20 flex items-center">
      <div className="page-container w-full flex justify-between items-center gap-2">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-1.5 md:gap-2 group min-w-0">
          <div className="group-hover:scale-105 transition shrink-0">
            <img 
              src="/images/logo.webp" 
              alt="Kottidi Travels Logo" 
              className="h-10 md:h-12 w-auto max-w-[60px] md:max-w-none object-contain" 
            />
          </div>
          <div className="min-w-0 shrink">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-tight font-sans whitespace-nowrap">
              Kottidi Travels <br className="md:hidden" /><span className="text-brand-orange">Tirupati</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 font-medium">
          <Link to="/" className={`px-3 lg:px-4 py-2 rounded-lg transition-colors ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`px-3 lg:px-4 py-2 rounded-lg transition-colors ${isActive('/about')}`}>About</Link>
          <Link to="/faq" className={`px-3 lg:px-4 py-2 rounded-lg transition-colors ${isActive('/faq')}`}>FAQ</Link>
          <Link to="/blog" className={`px-3 lg:px-4 py-2 rounded-lg transition-colors ${isActive('/blog')}`}>Blog</Link>
          <Link to="/contact" className={`px-3 lg:px-4 py-2 rounded-lg transition-colors ${isActive('/contact')}`}>Contact</Link>
          <Link to="/contact" className="ml-2 px-5 py-2.5 bg-brand-orange text-white rounded-xl hover:bg-orange-700 transition shadow-md hover:shadow-lg text-sm font-bold">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700 shrink-0 p-1" aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t md:hidden shadow-lg z-[110]">
          <div className="flex flex-col p-6 space-y-5 font-medium text-base text-center">
            <Link to="/" onClick={()=>setIsOpen(false)} className={`${isActive('/')} py-1`}>Home</Link>
            <Link to="/about" onClick={()=>setIsOpen(false)} className={`${isActive('/about')} py-1`}>About Us</Link>
            <Link to="/faq" onClick={()=>setIsOpen(false)} className={`${isActive('/faq')} py-1`}>FAQ</Link>
            <Link to="/blog" onClick={()=>setIsOpen(false)} className={`${isActive('/blog')} py-1`}>Blog</Link>
            <Link to="/contact" onClick={()=>setIsOpen(false)} className={`${isActive('/contact')} py-1`}>Contact Us</Link>
            <hr className="border-gray-100" />
            <Link 
              to="/contact" 
              onClick={()=>setIsOpen(false)} 
              className="w-full bg-brand-orange text-white font-bold py-3.5 rounded-xl shadow-lg text-sm"
            >
              📞 Book Now
            </Link>
            <div className="flex gap-3 justify-center">
              <a href="tel:8143015558" className="flex items-center gap-2 text-gray-600 hover:text-brand-orange text-sm py-1">
                <Phone size={16} /> Call
              </a>
              <a href="https://wa.me/918143015558" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-green-600 text-sm py-1">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
