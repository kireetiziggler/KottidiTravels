import React, { useState } from 'react';
import { Clock, ChevronDown, Star, MapPin } from 'lucide-react';
import PackageBookingModal from './PackageBookingModal';

const allPackages = [
  { id: 1, title: 'Tirumala Quick Tour', duration: '1 Day', isPopular: true, places: ['Tirumala temple', 'Varaha Swamy temple', 'Japali', 'Papanasam', 'Aakasha ganga', 'Venugopala swamy temple'], image: '/images/1-package.webp' },
  { id: 2, title: 'Tirupati City Tour', duration: '1 Day', places: ['Padmavathi temple', 'Govindharaja temple', 'Kapila theertham', 'Iskon temple', 'Srinivasa Mangapuram', 'Vakula matha'], image: '/images/2-package.webp' },
  { id: 3, title: 'Divine Duo Tour', duration: '2 Days', isPopular: true, places: ['Tirumala temple', 'Varaha Swamy temple', 'Japali', 'Papanasam', 'Aakasha ganga', 'Venugopala swamy temple', 'Padmavathi temple', 'Sri Kalahasti temple'], image: '/images/3-package.webp' },
  { id: 4, title: 'Golden Temple Special', duration: '2 Days', places: ['Golden Temple', 'Kanipakam', 'Tiruvannamalai', 'Kanchipuram', 'Tiruttani', 'Tirupati Drop'], image: '/images/4-package.webp' },
  { id: 5, title: 'Tirupati & Tamil Nadu', duration: '3 Days', places: ['Padmavathi temple', 'Govindharaja temple', 'Kapila theertham', 'Iskon temple', 'Srinivasa Mangapuram', 'Vakula matha', 'Golden Temple', 'Kanipakam', 'Tiruvannamalai', 'Kanchipuram', 'Tiruttani'], image: '/images/5-package-1.webp' },
  { id: 6, title: 'Panchalinga (Five Shiva Temples)', duration: '3 Days', places: ['Sri Kalahasti temple', 'Kanchipuram', 'Chidambaram', 'Sri Ranganatha temple', 'Tiruvannamalai'], image: '/images/6-package.webp' },
  { id: 7, title: 'South Heritage Glimpse', duration: '4 Days', places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Tanjavur', 'Kumbakonam', 'Sri Kalahasti temple', 'Kanchipuram', 'Tiruttani', 'Chidambaram'], image: '/images/kanchipuram.webp' },
  { id: 8, title: 'Pure Tamil Nadu Yatra', duration: '5 Days', places: ['Madurai', 'Rameswaram', 'Palani', 'Kanyakumari', 'Thiruchendur'], image: '/images/Kanyakumari.webp' },
  { id: 9, title: 'South India Highlights', duration: '6 Days', places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Tanjavur', 'Kumbakonam', 'Sri Kalahasti temple', 'Kanchipuram', 'Tiruttani', 'Chidambaram', 'Madurai', 'Rameswaram', 'Palani', 'Kanyakumari', 'Thiruchendur', 'Trivandrum', 'Alleppey', 'Kochi', 'Guruvayur', 'Munnar'], image: '/images/trivandrum.webp' },
  { id: 10, title: 'The Grand South Yatra', duration: '1 Week', isPopular: true, places: ['Kanipakam', 'Kanchipuram', 'Golden Temple', 'Arunachalam', 'Sri Ranganatha temple', 'Tanjavur', 'Kumbakonam', 'Sri Kalahasti temple', 'Kanchipuram', 'Tiruttani', 'Chidambaram', 'Madurai', 'Rameswaram', 'Palani', 'Kanyakumari', 'Thiruchendur', 'Trivandrum', 'Alleppey', 'Kochi', 'Guruvayur', 'Munnar', 'Ooty', 'Kodaikanal'], image: '/images/South-india-packages.webp' },
];

const PackageCard = ({ pkg, onBook }) => {
  const [showAllPlaces, setShowAllPlaces] = useState(false);
  const visiblePlaces = showAllPlaces ? pkg.places : pkg.places.slice(0, 5);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group">
      {/* Image Section */}
      <div className="h-52 overflow-hidden relative">
        <img 
          src={pkg.image} 
          alt={`${pkg.title} - Travels from Tirupati to ${pkg.places[0]}`}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
          onError={(e) => {e.target.src = 'https://placehold.co/600x400?text=Kottidi+Travels'}}
        />
        {pkg.isPopular && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center shadow-lg uppercase tracking-tight">
            <Star size={10} className="mr-1 fill-white"/> Most Popular
          </div>
        )}
        <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg flex items-center border border-white/20">
          <Clock size={12} className="mr-1.5 text-orange-400"/> {pkg.duration}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{pkg.title}</h3>
        
        <div className="flex flex-wrap gap-1.5 mb-6">
          {visiblePlaces.map((place, i) => (
            <span key={i} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100 font-medium flex items-center">
              <MapPin size={8} className="mr-1 text-gray-400" /> {place}
            </span>
          ))}
          
          {pkg.places.length > 5 && (
            <button 
              onClick={() => setShowAllPlaces(!showAllPlaces)}
              className="text-[10px] text-orange-600 font-extrabold px-2 py-1 hover:bg-orange-50 rounded-md transition-colors"
            >
              {showAllPlaces ? "Show Less" : `+${pkg.places.length - 5} More`}
            </button>
          )}
        </div>

        <div className="mt-auto">
          <button 
            onClick={() => onBook(pkg)} 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] active:scale-[0.98]"
          >
            Book This Package
          </button>
        </div>
      </div>
    </div>
  );
};

const Packages = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filtered = activeFilter === 'All' ? allPackages : allPackages.filter(p => p.duration.includes(activeFilter));

  return (
    <section id="packages" className="py-16 md:py-20 bg-gray-50">
      <div className="page-container max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <span className="text-orange-600 font-bold uppercase text-xs tracking-wider">Top Rated Tours</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">Our Tour Packages</h2>
          </div>
          
          <div className="relative w-full md:w-64">
            <select 
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-semibold cursor-pointer text-sm"
            >
              <option value="All">All Durations</option>
              <option value="1 Day">1 Day Trips</option>
              <option value="2 Days">2 Days Trips</option>
              <option value="3 Days">3 Days Trips</option>
              <option value="4 Days">4 Days Trips</option>
              <option value="5 Days">5 Days Trips</option>
              <option value="6 Days">6 Days Trips</option>
              <option value="1 Week">1 Week Trips</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
              <ChevronDown size={18} />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((pkg) => (
              <PackageCard 
                key={pkg.id} 
                pkg={pkg} 
                onBook={setSelectedPackage} 
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-500">No matching packages. Try "All Durations".</p>
            </div>
          )}
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