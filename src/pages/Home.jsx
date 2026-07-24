import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <div className="w-full bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b border-orange-200 py-3 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-center text-center">
        <a 
          href="tel:8143015558" 
          onClick={trackBannerCall}
          className="bg-gradient-to-r from-brand-orange to-orange-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 animate-pulse shadow-lg text-sm sm:text-base hover:shadow-xl transition-shadow"
        >
          📞 CALL NOW: 8143015558
        </a>
      </div>
    </div>
  );

  const LocalSEO = () => (
    <section className="py-12 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-brand-orange font-bold uppercase tracking-wider text-sm">Our Service Hubs</h3>
            <p className="text-gray-900 font-bold text-lg">24/7 Pickup & Drop Available</p>
            <ul className="text-gray-600 text-sm space-y-2">
              <li className="flex items-center gap-2">📍 Tirupati Railway Station & Alipiri</li>
              <li className="flex items-center gap-2">✈️ Renigunta Airport (Tirupati Airport)</li>
              <li className="flex items-center gap-2">🏙️ Chennai International Airport (MAA)</li>
              <li className="flex items-center gap-2">🏙️ Bangalore Airport (BLR) transfers</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-brand-orange font-bold uppercase tracking-wider text-sm">Major Pilgrimage Routes</h3>
            <p className="text-gray-900 font-bold text-lg">South India Temple Tours</p>
            <div className="flex flex-wrap gap-2">
              {["Tirumala Darshan", "Srikalahasti", "Kanipakam", "Golden Temple Vellore", "Arunachalam", "Thiruvannamalai", "Kanchipuram", "Madurai", "Rameswaram"].map((tag) => (
                <span key={tag} className="bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[11px] text-gray-500 font-medium hover:border-brand-orange hover:text-brand-orange transition-colors">
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
    <>
      <Helmet>
        <title>Kottidi Travels Tirupati | Best Car Rental & Taxi Service in Tirupati</title>
        <meta name="description" content="Kottidi Travels Tirupati offers premium car rental, taxi services & pilgrimage tour packages. Innova, Tempo Traveller, Dzire. 24/7 service from Tirupati Airport, Railway Station & Bus Stand. Book now!" />
        <link rel="canonical" href="https://kottiditravelstirupati.in/" />
      </Helmet>
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
    </>
  );
};

export default Home;
