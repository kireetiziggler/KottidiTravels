import React, { useState } from 'react';
import BookingModal from './BookingModal';
import { Check } from 'lucide-react';

const vehicles = [
  { 
    id: 1, name: 'Toyota Innova', badge: '6-7 Seaters', 
    image: '/images/innova.jpg', 
    desc: 'Perfect for small families and groups. Comfortable and spacious.',
    features: ['AC', 'Comfortable Seating', 'Luggage Space', 'Music System']
  },
  { 
    id: 2, name: 'Tempo Traveller', badge: '12-17 Seaters', 
    image: '/images/tempo.jpg', 
    desc: 'Ideal for medium-sized groups traveling together.',
    features: ['AC', 'Push Back Seats', 'Large Luggage Space', 'LED TV']
  },
  { 
    id: 3, name: '42 Seater Bus', badge: '42 Seaters', 
    image: '/images/bus.jpg', 
    desc: 'Best for large groups, corporate tours, and events.',
    features: ['AC', 'Reclining Seats', 'Entertainment System', 'Rest Room']
  },
];

const Fleet = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <section id="fleet" className="py-16 bg-white">
      <div className="page-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Our Fleet</h2>
          <p className="text-gray-500 mt-2 text-sm">Choose from our wide range of well-maintained vehicles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-card hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found'}}
                />
                <span className="absolute top-3 right-3 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                  {vehicle.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{vehicle.desc}</p>
                <div className="space-y-2 mb-5 flex-1">
                  {vehicle.features.map((f, i) => (
                    <div key={i} className="flex items-center text-xs font-medium text-gray-700">
                      <div className="bg-orange-100 p-0.5 rounded-full mr-2 text-brand-orange"><Check size={10} strokeWidth={3}/></div>{f}
                    </div>
                  ))}
                </div>
                <button onClick={() => setSelectedVehicle(vehicle)} className="w-full bg-brand-orange text-white text-sm font-bold py-3 rounded-xl hover:bg-orange-700 transition shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal isOpen={!!selectedVehicle} onClose={() => setSelectedVehicle(null)} selectedVehicle={selectedVehicle || {}} />
    </section>
  );
};

export default Fleet;