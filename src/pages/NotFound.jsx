import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Phone, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Kottidi Travels Tirupati</title>
        <meta name="description" content="The page you are looking for does not exist. Return to Kottidi Travels Tirupati homepage." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg mx-auto text-center">
          {/* Large 404 Graphic */}
          <div className="mb-8">
            <span className="text-[120px] md:text-[160px] font-black text-gray-100 leading-none">404</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-500 text-sm md:text-base mb-10 max-w-sm mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/" 
              className="px-8 py-3.5 bg-brand-orange text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition text-sm flex items-center justify-center gap-2"
            >
              <Home size={16} /> Back to Home
            </Link>
            <a 
              href="tel:8143015558" 
              className="px-8 py-3.5 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition text-sm flex items-center justify-center gap-2"
            >
              <Phone size={16} /> Call Us
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400">Searching for something? Try our <Link to="/" className="text-brand-orange font-bold hover:underline">Homepage</Link>.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;