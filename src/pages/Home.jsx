import React from 'react';
import Hero from '../components/home/Hero';
import Fleet from '../components/home/Fleet';
import Packages from '../components/home/Packages';
import CustomizedBanner from '../components/home/CustomizedBanner';
import Destinations from '../components/home/Destinations';
import WhyChooseUs from '../components/home/WhyChooseUs';

// 1. Keep the LocalSEO component here
const LocalSEO = () => (
  <section className="py-12 bg-gray-50 border-t border-gray-100">
    <div className="page-container px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Service Hubs Column */}
        <div className="space-y-4">
          <h3 className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Service Hubs</h3>
          <p className="text-gray-900 font-bold text-lg">24/7 Pickup & Drop Available</p>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>• Tirupati Railway Station & Alipiri</li>
            <li>• Renigunta Airport (Tirupati Airport)</li>
            <li>• Chennai International Airport (MAA)</li>
            <li>• Bangalore Airport (BLR) transfers</li>
          </ul>
        </div>

        {/* Pilgrimage Locations Column */}
        <div className="space-y-4">
          <h3 className="text-brand-orange font-bold uppercase tracking-wider text-sm">Major Pilgrimage Routes</h3>
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

      {/* Trust Line */}
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
      <Hero />
      <Fleet />
      <Packages />
      <CustomizedBanner />
      <Destinations />
      <WhyChooseUs />
      <LocalSEO /> 
    </>
  );
};

export default Home;