import React from 'react';
import Hero from '../components/home/Hero';
import Fleet from '../components/home/Fleet';
import Packages from '../components/home/Packages';
import CustomizedBanner from '../components/home/CustomizedBanner';
import Destinations from '../components/home/Destinations';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Reviews from '../components/home/Reviews';

const Home = () => {
  // Tracking function for page-specific buttons - Integrated with conversion script
  const trackBannerCall = () => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
  };

  const CallBanner = () => (
    <div className="w-full bg-orange-50 border-b border-orange-200 py-3 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-center text-center">
        <a 
          href="tel:9032264229" 
          onClick={trackBannerCall} // Tracking Hook
          className="bg-[#ff6600] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 animate-pulse shadow-lg text-sm sm:text-base"
        >
          CALL NOW: 9032264229
        </a>
      </div>
    </div>
  );

  const LocalSEO = () => (
    <section className="py-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
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
      </div>
    </section>
  );

  return (
    <div className="w-full">
      <CallBanner />
      <Hero />
      <Fleet />
      <Packages />
      <CustomizedBanner />
      <Destinations />
      <WhyChooseUs />
      <Reviews />
      <LocalSEO /> 
    </div>
  );
};

export default Home;