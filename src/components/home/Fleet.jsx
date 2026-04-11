import React, { useState, useRef } from 'react';
import BookingModal from './BookingModal';
import { Info, Users, Gauge, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const vehicles = [
  { id: 1, name: 'Innova Crysta Rental', badge: '6-7 Seaters', image: '/images/innova_crysta.webp', desc: 'Premium comfort for families visiting Tirumala and Tamil Nadu temples.', localRate: '3,000', outstationRate: '22/KM', mileage: '10 KM/L' },
  { id: 2, name: 'Toyota Innova Taxi', badge: '6-7 Seaters', image: '/images/innova.jpg', desc: 'The most reliable choice for long-distance South India pilgrimage tours.', localRate: '2,500', outstationRate: '20/KM', mileage: '10 KM/L' },
  { id: 3, name: 'Tempo Traveller', badge: '12-17 Seaters', image: '/images/tempo.jpg', desc: 'Perfect for group yatras to Arunachalam, Kanchipuram, and Vellore.', localRate: '3,500', outstationRate: '25/KM', mileage: '7 KM/L' },
  { id: 4, name: 'Force Urbania', badge: '12-16 Seaters', image: '/images/Urbania.webp', desc: 'Next-gen luxury for corporate groups and large family events.', localRate: '6,000', outstationRate: '38/KM', mileage: '7 KM/L' },
  { id: 5, name: 'Swift Dzire Cabs', badge: '4-5 Seaters', image: '/images/Dzire.webp', desc: 'Budget-friendly sedan for quick Tirupati local and airport drops.', localRate: '2,000', outstationRate: '15/KM', mileage: '10 KM/L' },
  { id: 6, name: 'Maruti Ertiga', badge: '6-7 Seaters', image: '/images/Ertiga.webp', desc: 'Economical 7-seater for small families on a spiritual journey.', localRate: '2,500', outstationRate: '20/KM', mileage: '10 KM/L' },
  { id: 7, name: 'Toyota Fortuner', badge: '6-7 Seaters', image: '/images/fortuner.webp', desc: 'VIP travel experience with high-end safety and road presence.', localRate: '7,500', outstationRate: '40/KM', mileage: '8 KM/L' }
];

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const itemWidth = e.target.offsetWidth * 0.85; // Matches the 85vw width
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(newIndex);
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="page-container px-4">
        
        <div className="text-center mb-10">
          <span className="text-brand-orange font-bold uppercase text-[10px] tracking-[0.2em]">Our Fleet & Rates</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">Transparent Pricing</h2>
        </div>
        
        {/* The Swipe Section */}
        <div className="relative group">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-6 gap-5 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible"
          >
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id} 
                className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-[2rem] shadow-xl border border-gray-100 flex flex-col overflow-hidden h-full"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 uppercase">
                    <Users size={12} className="text-brand-orange" /> {vehicle.badge}
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                  <p className="text-[11px] text-gray-400 mb-5 line-clamp-2">{vehicle.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-orange-50/50 p-4 rounded-2xl border border-orange-100 text-center">
                      <span className="block text-[9px] text-gray-500 font-bold uppercase mb-0.5">Rent</span>
                      <span className="text-lg font-extrabold text-gray-900">₹{vehicle.localRate}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                      <span className="block text-[9px] text-gray-500 font-bold uppercase mb-0.5">Outstation</span>
                      <span className="text-lg font-extrabold text-brand-orange">₹{vehicle.outstationRate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-semibold text-gray-700 pb-6 mb-auto">
                      <div className="flex items-center gap-2"><Gauge size={16} className="text-brand-orange"/> Mileage</div>
                      <span className="text-gray-500">{vehicle.mileage}</span>
                  </div>

                  <button 
                    onClick={() => setSelectedVehicle(vehicle)} 
                    className="w-full bg-brand-orange text-white text-sm font-bold py-4 rounded-2xl shadow-lg active:scale-95"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators - Only visible on Mobile */}
          <div className="flex justify-center items-center gap-2 md:hidden mt-2 mb-8">
            {vehicles.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index ? 'w-6 h-1.5 bg-brand-orange' : 'w-1.5 h-1.5 bg-gray-300'
                }`}
                aria-label={`Go to vehicle ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <BookingModal isOpen={!!selectedVehicle} onClose={() => setSelectedVehicle(null)} selectedVehicle={selectedVehicle || {}} />
    </section>
  );
};

export default Fleet;