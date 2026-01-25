import React, { useState } from 'react';
import { Clock, ChevronDown } from 'lucide-react';

const allPackages = [
  { id: 1, title: 'Tirupati Local', duration: '1 Day', price: '₹2,500', places: ['Tirumala', 'Padmavathi'], image: '/images/tirumala.jpg' },
  { id: 2, title: 'Tirumala & Kalahasti', duration: '1 Day', price: '₹3,200', places: ['Tirumala', 'Srikalahasti'], image: '/images/kalahasti.jpg' },
  { id: 3, title: 'Golden Temple', duration: '2 Days', price: '₹7,000', places: ['Vellore', 'Kanipakam'], image: '/images/vellore.jpg' },
  { id: 4, title: 'Spiritual Triangle', duration: '2 Days', price: '₹7,500', places: ['Arunachalam', 'Kanchipuram'], image: '/images/arunachalam.jpg' },
  { id: 5, title: 'Chennai & Pondy', duration: '3 Days', price: '₹12,500', places: ['Chennai', 'Pondicherry'], image: '/images/chennai.jpg' },
  { id: 6, title: 'South India Tour', duration: '1 Week', price: '₹28,000', places: ['Madurai', 'Rameswaram'], image: '/images/south-india.jpg' },
];

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? allPackages : allPackages.filter(p => p.duration.includes(activeFilter));

  const handleBook = (pkg) => {
    window.open(`https://wa.me/919493015558?text=I'm interested in ${pkg.title} (${pkg.duration})`, '_blank');
  };

  return (
    <section id="packages" className="py-16 md:py-20 bg-gray-50">
      <div className="page-container">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-brand-orange font-bold uppercase text-xs tracking-wider">Popular Tours</span>
            <h2 className="text-3xl font-bold text-gray-900">Our Packages</h2>
          </div>
          
          <div className="relative w-full md:w-56">
            <select 
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:border-brand-orange font-medium cursor-pointer text-sm"
            >
              <option value="All">All Durations</option>
              <option value="1 Day">1 Day Trips</option>
              <option value="2 Days">2 Days Trips</option>
              <option value="3 Days">3 Days Trips</option>
              <option value="1 Week">1 Week Trips</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border border-gray-100 overflow-hidden flex flex-col group">
              <div className="h-44 overflow-hidden relative">
                <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                    onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found'}}
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center">
                  <Clock size={10} className="mr-1"/> {pkg.duration}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.places.map((p,i) => (
                    <span key={i} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">{p}</span>
                  ))}
                </div>
                <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-50">
                  <span className="text-xl font-bold text-brand-orange">{pkg.price}</span>
                  <button onClick={() => handleBook(pkg)} className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-orange transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;