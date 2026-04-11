import React from 'react';

const destinations = [
  { name: 'Tirumala', image: '/images/tirumala.webp' },
  { name: 'Srikalahasti', image: '/images/srikalahasti.webp' },
  { name: 'Arunachalam', image: '/images/arunachalam.webp' },
  { name: 'Kanipakam', image: '/images/kanipakam.webp' },
];

const Destinations = () => {
  return (
    <section className="py-16 bg-white">
      <div className="page-container">
        <div className="text-center mb-10">
          <span className="text-brand-orange font-bold uppercase text-xs tracking-wider">Explore</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Popular Spiritual Destinations</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((dest, idx) => (
            <div key={idx} className="group relative rounded-[2rem] overflow-hidden aspect-square shadow-md hover:shadow-xl transition duration-500 cursor-pointer">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                onError={(e) => {e.target.src = 'https://placehold.co/400x400?text=No+Image'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 p-6 w-full text-center">
                  <h3 className="text-white text-lg md:text-xl font-bold">{dest.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;