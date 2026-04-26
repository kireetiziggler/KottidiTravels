import React from 'react';
import Hero from '../components/home/Hero';
import Fleet from '../components/home/Fleet';
import Packages from '../components/home/Packages';
import CustomizedBanner from '../components/home/CustomizedBanner';
import Destinations from '../components/home/Destinations';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Reviews from '../components/home/Reviews';

//New CallBanner Component
const CallBanner = () => {
  return (
    <div className="w-full bg-orange-50 border-b border-orange-200 py-3">
      <div className="max-w-7xl mx-auto px-4 flex justify-center">
        <a 
          href="tel:919493015558"
          className="group relative flex items-center justify-center gap-3 bg-[#ff6600] hover:bg-[#e65c00] text-white px-6 py-3 rounded-full font-bold text-lg md:text-xl shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          {/* Pulsing Effect */}
          <span className="absolute inset-0 rounded-full bg-[#ff6600] animate-ping opacity-20"></span>
          
          <span className="relative flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="tracking-tight uppercase">Call Now: 94930 15558</span>
          </span>
        </a>
      </div>
    </div>
  );
};

// 2. Your LocalSEO component
const LocalSEO = () => (
  <section className="py-12 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-[#ff6600] font-bold uppercase tracking-wider text-sm">Our Service Hubs</h3>
          <p className="text-gray-900 font-bold text-lg">24/7 Pickup & Drop Available</p>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Tirupati Railway Station & Alipiri</li>
            <li>• Renigunta Airport (Tirupati Airport)</li>
            <li>• Chennai International Airport (MAA)</li>
            <li>• Bangalore Airport (BLR) transfers</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-[#ff6600] font-bold uppercase tracking-wider text-sm">Major Pilgrimage Routes</h3>
          <p className="text-gray-900 font-bold text-lg">South India Temple Tours</p>
          <div className="flex flex-wrap gap-2">
            {["Tirumala Darshan", "Srikalahasti", "Kanipakam", "Golden Temple Vellore", "Arunachalam", "Thiruvannamalai", "Kanchipuram", "Madurai", "Rameswaram"].map((tag) => (
              <span key={tag} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-[11px] text-gray-500 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400 italic">
          "Expertly guided spiritual journeys across Andhra Pradesh, Tamil Nadu, and Karnataka with professional multi-language speaking drivers."
        </p>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <CallBanner />
      <Hero />
      <Fleet />
      <Packages />
      <CustomizedBanner />
      <Destinations />
      <WhyChooseUs />
      <Reviews />
      <LocalSEO /> 
    </>
  );
};

export default Home;