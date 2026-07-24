import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    category: 'Booking & Payments',
    items: [
      { q: 'How do I book a vehicle with Kottidi Travels?', a: 'You can book by calling +91 8143015558, sending a WhatsApp message, or using the instant booking form on our website. We recommend booking 24-48 hours in advance for guaranteed availability.' },
      { q: 'What payment methods do you accept?', a: 'We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfers, and card payments. For outstation trips, a 50% advance is required to confirm the booking.' },
      { q: 'Can I cancel or modify my booking?', a: 'Yes, cancellations made 12 hours before pickup are fully refundable. Late cancellations may incur a nominal charge. Modifications are subject to vehicle availability.' },
    ]
  },
  {
    category: 'Vehicles & Fleet',
    items: [
      { q: 'What types of vehicles do you offer?', a: 'We offer Innova Crysta (6-7 seater), Toyota Innova (6-7 seater), Tempo Traveller (12-17 seater), Force Urbania (12-16 seater luxury), Swift Dzire (4-5 seater), Maruti Ertiga (6-7 seater), and Toyota Fortuner (6-7 seater VIP).' },
      { q: 'Are your vehicles air-conditioned?', a: 'Yes, all our vehicles are fully air-conditioned and well-maintained. Each vehicle undergoes regular servicing and sanitization.' },
      { q: 'Do you provide child seats?', a: 'Yes, child seats are available on request. Please mention this requirement at the time of booking so we can arrange it.' },
    ]
  },
  {
    category: 'Tirupati Travel Guide',
    items: [
      { q: 'How far is Tirupati Airport from the city?', a: 'Tirupati Airport (Renigunta) is approximately 15 km from the city center. Our driver will be waiting at the arrival gate with a name board. Travel time is about 25-30 minutes.' },
      { q: 'Do you provide Tirumala darshan packages?', a: 'Yes, we offer comprehensive Tirumala darshan packages including temple visits to Tirumala, Varaha Swamy temple, Japali, Papanasam, and more. We can also assist with darshan ticket booking information.' },
      { q: 'Can you arrange pickup from Chennai Airport to Tirupati?', a: 'Absolutely! We provide Chennai Airport to Tirupati transfers. The journey takes approximately 3-4 hours via NH71. We also offer Bangalore Airport transfers.' },
    ]
  },
  {
    category: 'Outstation & Tours',
    items: [
      { q: 'Which destinations do you cover for outstation trips?', a: 'We cover all major South India destinations including Srikalahasti, Kanipakam, Vellore Golden Temple, Chennai, Pondicherry, Tiruvannamalai, Kanchipuram, Madurai, Rameswaram, Kanyakumari, and more.' },
      { q: 'How are outstation trip charges calculated?', a: 'Outstation trips are charged per kilometer with a minimum distance per day. Charges include fuel, tolls, and state permits. Driver’s food and accommodation are included in the package.' },
      { q: 'Do you offer customized tour packages?', a: 'Yes, we specialize in customized itineraries. Whether you want a spiritual tour, family vacation, or corporate trip, we can design a package that matches your needs and budget.' },
    ]
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...faqs.map(f => f.category)];

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>FAQ - Kottidi Travels Tirupati | Car Rental & Taxi Service</title>
        <meta name="description" content="Find answers to common questions about car rental, taxi service, booking, payments, and pilgrimage tours in Tirupati. Kottidi Travels FAQ." />
        <link rel="canonical" href="https://kottiditravelstirupati.in/faq" />
      </Helmet>

      <div className="bg-white pt-20 pb-20 min-h-screen">
        {/* Hero Header */}
        <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark py-20 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="page-container relative z-10">
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs">Got Questions?</span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
              Everything you need to know about our services, booking process, and travel tips.
            </p>
          </div>
        </div>

        <div className="page-container py-16">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? 'bg-brand-orange border-brand-orange text-white shadow-lg shadow-orange-200'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-8">
            {filteredFaqs.map((faqGroup, groupIdx) => (
              <div key={groupIdx}>
                {activeCategory === 'All' && (
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-1 h-6 bg-brand-orange rounded-full inline-block"></span>
                    {faqGroup.category}
                  </h3>
                )}
                <div className="space-y-3">
                  {faqGroup.items.map((item, itemIdx) => {
                    const globalIndex = `${groupIdx}-${itemIdx}`;
                    const isOpen = openIndex === globalIndex;
                    return (
                      <div 
                        key={itemIdx}
                        className={`bg-white rounded-2xl border transition-all duration-300 ${
                          isOpen 
                            ? 'border-brand-orange/30 shadow-lg shadow-orange-50' 
                            : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                        }`}
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                        >
                          <span className="font-bold text-gray-900 text-sm md:text-base pr-4">{item.q}</span>
                          <ChevronDown 
                            size={18} 
                            className={`text-brand-orange shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <p className="px-5 md:px-6 pb-5 md:pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-10 text-center border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Our team is available 24/7 to help you with any queries about your travel plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="tel:8143015558" 
                className="px-8 py-3.5 bg-brand-orange text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition text-sm"
              >
                Call +91 8143015558
              </a>
              <a 
                href="https://wa.me/918143015558" 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;