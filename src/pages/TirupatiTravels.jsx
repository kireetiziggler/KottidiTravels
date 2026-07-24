import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Star, Phone, MessageCircle, ArrowRight, CheckCircle, MapPin, Clock, Award, ThumbsUp } from 'lucide-react';

const TirupatiTravels = () => {
  return (
    <>
      <Helmet>
        <title>Tirupati Travels - Best Car Rental & Taxi Service in Tirupati | Kottidi Travels</title>
        <meta name="description" content="Kottidi Travels is the best Tirupati travels company offering car rental, taxi service, Tirumala darshan packages, airport transfers. 24/7 service. Call +91 8143015558." />
        <meta name="keywords" content="Tirupati travels, car rental Tirupati, taxi service Tirupati, Tirumala darshan package, Tirupati airport taxi, best travels in Tirupati, Kottidi Travels" />
        <link rel="canonical" href="https://kottiditravelstirupati.in/tirupati-travels" />
        <meta property="og:title" content="Tirupati Travels - Best Car Rental & Taxi Service | Kottidi Travels" />
        <meta property="og:description" content="Kottidi Travels is the best Tirupati travels company. 24/7 car rental, taxi, Tirumala darshan packages. Call +91 8143015558." />
        <meta name="twitter:title" content="Tirupati Travels - Best Car Rental & Taxi Service | Kottidi Travels" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Tirupati Travels - Car Rental & Taxi Service",
            "description": "Premium car rental and taxi service in Tirupati for Tirumala darshan, airport transfers, and South India temple tours.",
            "brand": {
              "@type": "Brand",
              "name": "Kottidi Travels"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "2000",
              "highPrice": "7500",
              "offerCount": "7"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "500",
              "bestRating": "5"
            }
          }
          `}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark pt-24 pb-16 md:pt-32 md:pb-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="page-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-brand-orange/30">
                <Star size={14} className="fill-brand-orange" /> Trusted Since 2020
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
                Best <span className="text-gradient">Tirupati Travels</span><br />
                Car Rental & Taxi Service
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Kottidi Travels — your trusted partner for comfortable, safe, and reliable travel across Tirupati, Tirumala, and South India. 24/7 service, verified drivers, affordable packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8143015558" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Phone size={20} /> Call +91 8143015558
                </a>
                <a href="https://wa.me/918143015558" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <MessageCircle size={20} /> WhatsApp Now
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/10">
                <div className="text-center"><div className="text-2xl font-black text-brand-orange">500+</div><div className="text-xs text-gray-400 mt-1">Happy Customers</div></div>
                <div className="text-center"><div className="text-2xl font-black text-brand-orange">7</div><div className="text-xs text-gray-400 mt-1">Vehicle Types</div></div>
                <div className="text-center"><div className="text-2xl font-black text-brand-orange">24/7</div><div className="text-xs text-gray-400 mt-1">Service Available</div></div>
                <div className="text-center"><div className="text-2xl font-black text-brand-orange">4.8★</div><div className="text-xs text-gray-400 mt-1">Google Rating</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="page-container">
            <div className="text-center mb-12">
              <span className="text-brand-orange font-bold uppercase text-xs tracking-[0.2em]">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">Complete Travel Solutions in Tirupati</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MapPin, title: 'Tirupati Airport Transfers', desc: '24/7 pickup & drop from Renigunta Airport. Driver waits with name board. ₹500 onwards.' },
                { icon: Clock, title: 'Tirumala Darshan Packages', desc: 'Complete darshan packages including temple visits. Innova, Dzire, Tempo available.' },
                { icon: Award, title: 'Outstation Trips', desc: 'Chennai, Bangalore, Pondicherry, Madurai, Rameswaram. Per km pricing with fuel included.' },
                { icon: Users, title: 'Group Travel', desc: 'Tempo Traveller 12-17 seater, Force Urbania luxury for family yatras and corporate groups.' },
                { icon: ShieldCheck, title: 'Wedding & Event Cars', desc: 'Premium Fortuner, Innova Crysta for weddings, events, and VIP transportation.' },
                { icon: ThumbsUp, title: 'Customized Tours', desc: 'Personalized South India temple tours designed to match your schedule and budget.' },
              ].map((service, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group hover:border-brand-orange/20">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Preview */}
        <section className="py-16 bg-gray-50">
          <div className="page-container text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Vehicle Fleet</h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">Choose from 7 well-maintained AC vehicles for your journey.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Swift Dzire', seats: '4-5', price: '₹2,000/day' },
                { name: 'Toyota Innova', seats: '6-7', price: '₹2,500/day' },
                { name: 'Innova Crysta', seats: '6-7', price: '₹3,000/day' },
                { name: 'Maruti Ertiga', seats: '6-7', price: '₹2,500/day' },
                { name: 'Tempo Traveller', seats: '12-17', price: '₹3,500/day' },
                { name: 'Force Urbania', seats: '12-16', price: '₹6,000/day' },
                { name: 'Toyota Fortuner', seats: '6-7', price: '₹7,500/day' },
              ].map((v, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-900 text-sm">{v.name}</h4>
                  <p className="text-xs text-gray-400">{v.seats} Seats</p>
                  <p className="text-brand-orange font-bold text-sm mt-2">{v.price}</p>
                </div>
              ))}
            </div>
            <Link to="/#fleet" className="inline-flex items-center gap-2 mt-8 text-brand-orange font-bold text-sm hover:underline">
              View Full Details <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="page-container">
            <div className="bg-gradient-to-r from-brand-orange to-orange-500 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Tirupati Travels Today</h2>
                <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">Call us now for instant booking. We're available 24/7.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:8143015558" className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    <Phone size={20} /> Call +91 8143015558
                  </a>
                  <a href="https://wa.me/918143015558" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TirupatiTravels;