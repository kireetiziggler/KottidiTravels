import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="page-container grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">Kottidi Travels <span className="text-brand-orange">Tirupati</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 pr-4">
            Your trusted travel partner in Tirupati. We provide comfortable, safe, and reliable vehicle services for pilgrimages, outstation trips, and customized tours.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-brand-orange"><Facebook size={20}/></a>
            <a href="#" className="text-gray-400 hover:text-brand-orange"><Instagram size={20}/></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-brand-orange transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-orange transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-orange transition">Contact Us</Link></li>
            <li><a href="/#packages" className="hover:text-brand-orange transition">Tour Packages</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-brand-orange shrink-0 mt-1"/> 
              <span>Tirupati, Andhra Pradesh, India - 517501</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-brand-orange shrink-0"/> 
              <a href="tel:9493015558" className="hover:text-white">+91 94930 15558</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-brand-orange shrink-0"/>
              <a href="mailto:info@kottiditravels.com" className="hover:text-white">info@kottiditravels.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t border-gray-800 mt-12 pt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Kottidi Travels Tirupati. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;