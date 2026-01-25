import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 bg-brand-bg overflow-hidden">
      <div className="page-container flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-5 md:space-y-6 z-10 text-center lg:text-left">
          <div className="inline-block bg-orange-100 text-brand-orange px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-wider uppercase mb-1">
            #1 Travel Service in Tirupati
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2]">
            Your Spiritual <br className="hidden md:block"/>
            Journey Starts <span className="text-brand-orange">Here</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Experience comfortable and reliable travel services to Tirumala, Tirupati, and sacred temples. Professional drivers & affordable packages.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <a href="#fleet" className="px-6 py-3.5 bg-brand-orange text-white rounded-xl font-bold text-sm shadow-lg hover:bg-orange-700 transition w-full sm:w-auto">
              Book Your Ride
            </a>
            <Link to="/contact" className="px-6 py-3.5 bg-white border border-gray-200 text-gray-900 rounded-xl font-bold text-sm hover:border-brand-orange transition w-full sm:w-auto">
              Contact Us
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 pt-4 border-t border-gray-100 mt-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-orange"/>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-xs">Safe Travel</h4>
                <p className="text-[10px] text-gray-500 uppercase">Verified Drivers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-brand-orange"/>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-xs">Any Group Size</h4>
                <p className="text-[10px] text-gray-500 uppercase">7 - 42 Seaters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image - Local File */}
        <div className="flex-1 w-full relative px-2 md:px-0">
          <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl h-[280px] md:h-[450px] relative z-0">
            <img 
              src="/images/hero.jpg" 
              alt="Tirumala Temple Hills" 
              className="w-full h-full object-cover"
              onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1623933671813-b541a4a42b18?w=800'}} // Fallback if image missing
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;