import React, { useState } from 'react';
import { Clock, Star, MapPin, ChevronRight } from 'lucide-react';
import PackageBookingModal from './PackageBookingModal';

const allPackages = [
  { id: 1, title: 'Tirumala Quick Tour', duration: '1 Day', isPopular: true, places: ['Tirumala temple', 'Varaha Swamy temple', 'Japali', 'Papanasam', 'Aakasha ganga', 'Venugopala swamy temple'], image: '/images/1-package.webp' },
  { id: 2, title: 'Tirupati City Tour', duration: '1 Day', places: ['Padmavathi temple', 'Govindharaja temple', 'Kapila theertham', 'Iskon temple', 'Srinivasa Mangapuram', 'Vakula matha'], image: '/images/2-package.webp' },
  { id: 3, title: 'Divine Duo Tour', duration: '2 Days', isPopular: true, places: ['Tirumala temple', 'Varaha Swamy temple', 'Japali', 'Papanasam', 'Aakasha ganga', 'Venugopala swamy temple', 'Padmavathi temple', 'Sri Kalahasti temple'], image: '/images/3-package.webp' },
  { id: 4, title: 'Golden Temple Special', duration: '2 Days', places: ['Golden Temple', 'Kanipakam', 'Tiruvannamalai', 'Kanchipuram', 'Tiruttani', 'Tirupati Drop'], image: '/images/4-package.webp' },
  { id: 5, title: 'Tirupati & Tamil Nadu', duration: '3 Days', places: ['Padmavathi temple', 'Govindharaja temple', 'Kapila theertham', 'Iskon temple', 'Srinivasa Mangapuram', 'Vakula matha', 'Golden Temple', 'Kanipakam', 'Tiruvannamalai', 'Kanchipuram', 'Tiruttani'], image: '/images/5-package-1.webp' },
  { id: 6, title: 'Panchalinga Shiva Tour', duration: '3 Days', places: ['Sri Kalahasti temple', 'Kanchipuram', 'Chidambaram', 'Sri Ranganatha temple', 'Tiruvannamalai'], image: '/images/6-package.webp' },
  { id: 7, title: 'South Heritage Glimpse', duration: '4 Days', places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Tanjavur', 'Kumbakonam'], image: '/images/kanchipuram.webp' },
  { id: 8, title: 'Pure Tamil Nadu Yatra', duration: '5 Days', places: ['Madurai', 'Rameswaram', 'Palani', 'Kanyakumari', 'Thiruchendur'], image: '/images/Kanyakumari.webp' },
  { id: 9, title: 'South India Highlights', duration: '6 Days', places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Tanjavur', 'Kumbakonam', 'Madurai', 'Rameswaram'], image: '/images/trivandrum.webp' },
  { id: 10, title: 'The Grand South Yatra', duration: '1 Week', isPopular: true, places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Madurai', 'Rameswaram', 'Kanyakumari', 'Munnar', 'Ooty'], image: '/images/South-india-packages.webp' },
];

const PackageCard = ({ pkg, onBook }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only 4 places initially, then all if expanded
  const displayedPlaces = isExpanded ? pkg.places : pkg.places.slice(0, 4);

  return (
    <div className="bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden group h-full">
      {/* Image Section */}
      <div className="h-48 md:h-52 overflow-hidden relative">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
          onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Kottidi+Travels'}}
        />
        {pkg.isPopular && (
          <div className="absolute top-3 left-3 bg-brand-orange text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-lg uppercase">
            <Star size={10} className="inline mr-1 fill-white"/> Popular
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg flex items-center gap-1.5 border border-white/10">
          <Clock size={12} className="text-brand-orange"/>
          <span className="text-[10px] font-bold text-white">{pkg.duration}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-3">{pkg.title}</h3>
        
        {/* Places Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5 min-h-[50px]">
          {displayedPlaces.map((place, i) => (
            <span key={i} className="text-[9px] bg-gray-50 text-gray-500 px-2 py-1 rounded-md border border-gray-100 flex items-center gap-1 animate-fadeIn">
              <MapPin size={8} className="text-brand-orange" /> {place}
            </span>
          ))}
          
          {pkg.places.length > 4 && (
            <button 
              onClick={(e) => {
                e.stopPropagation(); // Prevents triggering other clicks
                setIsExpanded(!isExpanded);
              }}
              className="text-[9px] text-brand-orange font-bold px-1 hover:underline focus:outline-none"
            >
              {isExpanded ? "Show Less" : `+ ${pkg.places.length - 4} More`}
            </button>
          )}
        </div>

        <button 
          onClick={() => onBook(pkg)} 
          className="w-full mt-auto bg-brand-orange text-white text-xs font-bold py-3.5 rounded-xl hover:bg-orange-600 transition shadow-md flex items-center justify-center gap-2 active:scale-95"
        >
          Book Package <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filtered = activeFilter === 'All' ? allPackages : allPackages.filter(p => p.duration.includes(activeFilter));

  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="page-container px-4">
        
        <div className="text-center mb-10">
          <span className="text-brand-orange font-bold uppercase text-[10px] tracking-widest">Divine Yatras</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">Tour Packages</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-8 hide-scrollbar justify-start md:justify-center">
          {['All', '1 Day', '2 Days', '3 Days', '1 Week'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all whitespace-nowrap border ${
                activeFilter === cat 
                ? 'bg-brand-orange border-brand-orange text-white shadow-md' 
                : 'bg-white border-gray-200 text-gray-500 hover:border-brand-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} onBook={setSelectedPackage} />
          ))}
        </div>
      </div>

      <PackageBookingModal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        selectedPackage={selectedPackage || {}} 
      />
    </section>
  );
};

export default Packages;