import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, PhoneCall } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', phone: '', email: '', date: '', passengers: '', destination: 'Tirupati Local', message: '' 
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Website Inquiry*%0A👤 *Name:* ${formData.name}%0A📱 *Phone:* ${formData.phone}%0A📧 *Email:* ${formData.email}%0A📅 *Date:* ${formData.date}%0A👥 *Pax:* ${formData.passengers}%0A📍 *Package:* ${formData.destination}%0A📝 *Msg:* ${formData.message}`;
    window.open(`https://wa.me/919493015558?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-white pt-10 pb-20">
      <div className="page-container">
        
        {/* Header - Centered & Smaller Fonts */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Contact Us</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            We are here to help you plan your perfect spiritual journey. Reach out to us via phone, email, or visit our office.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Info + Quick Booking Box */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Phone Number</h4>
                  <p className="text-sm text-gray-600 font-medium">+91 94930 15558</p>
                  <p className="text-xs text-green-600 mt-0.5 font-medium">● Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Email Address</h4>
                  <p className="text-sm text-gray-600">info@kottiditravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Our Location</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tirupati, Andhra Pradesh<br/>India - 517501
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-brand-orange shrink-0 mt-1">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Business Hours</h4>
                  <p className="text-sm text-gray-600">Monday - Sunday: 24 Hours</p>
                </div>
              </div>
            </div>

            {/* QUICK BOOKING BOX (Matches Figma "Quick Booking" Section) */}
            <div className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100">
              <h4 className="font-bold text-gray-900 mb-2">Quick Booking</h4>
              <p className="text-xs text-gray-500 mb-5">Need immediate assistance? Reach us directly:</p>
              <div className="space-y-3">
                <a href="tel:9493015558" className="flex items-center justify-center gap-2 w-full bg-brand-orange text-white text-sm font-bold py-3 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-200">
                  <PhoneCall size={16} /> Call Now
                </a>
                <a href="https://wa.me/919493015558" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white text-sm font-bold py-3 rounded-xl hover:bg-green-600 transition shadow-lg shadow-green-100">
                  <MessageSquare size={16} /> WhatsApp Booking
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Detailed Form */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Full Name *</label>
                <input 
                  type="text" required 
                  placeholder="Enter your full name"
                  value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number *</label>
                  <input 
                    type="tel" required 
                    placeholder="+91"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Travel Date</label>
                  <input 
                    type="date" 
                    value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm text-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">No. of Passengers</label>
                  <input 
                    type="number" min="1" placeholder="e.g. 4"
                    value={formData.passengers} onChange={(e) => setFormData({...formData, passengers: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Destination / Package</label>
                <div className="relative">
                  <select 
                    value={formData.destination} 
                    onChange={(e) => setFormData({...formData, destination: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition text-sm appearance-none cursor-pointer"
                  >
                    <option>Tirupati Local Darshan</option>
                    <option>Tirumala & Kalahasti</option>
                    <option>Vellore Golden Temple</option>
                    <option>Chennai / Pondicherry</option>
                    <option>Outstation Trip</option>
                    <option>Airport Pickup/Drop</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Additional Message</label>
                <textarea 
                  rows="3" 
                  placeholder="Any specific requirements?"
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-brand-orange focus:bg-white outline-none transition resize-none text-sm"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-orange text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-700 transition shadow-lg shadow-orange-100 flex items-center justify-center gap-2">
                <Send size={18} /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-20 rounded-3xl overflow-hidden h-[300px] shadow-sm border border-gray-100">
           <iframe 
             title="Location"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124119.5695079632!2d79.32483584852656!3d13.627629235898864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f88620427%3A0xcf4152d1daca0cac!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1706114172403!5m2!1sen!2sin" 
             width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy"
           ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;