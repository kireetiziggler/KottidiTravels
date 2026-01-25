import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { X, Send } from 'lucide-react';

const BookingModal = ({ isOpen, onClose, selectedVehicle }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [destination, setDestination] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const phone = "919493015558";
    const dateStr = endDate 
      ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` 
      : startDate.toLocaleDateString();

    // Attractive WhatsApp Message Format
    const message = 
      `Hi Kottidi Travels! 👋%0A` +
      `I'm interested in booking a vehicle.%0A%0A` +
      `📋 *BOOKING DETAILS* %0A` +
      `━━━━━━━━━━━━━━━━━━━%0A` +
      `👤 *Name:* ${name}%0A` +
      `🚗 *Vehicle:* ${selectedVehicle.name}%0A` +
      `📅 *Dates:* ${dateStr}%0A` +
      `👥 *Group:* ${adults} Adults, ${children} Kids%0A` +
      `📍 *Trip Plan:* ${destination}%0A` +
      `━━━━━━━━━━━━━━━━━━━%0A` +
      `Please confirm availability and price.`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      
      {/* TRANSPARENT GLASS MODAL */}
      <div className="relative w-full max-w-[340px] glass-transparent rounded-2xl p-5 animate-[fadeIn_0.3s_ease-out]">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">Book {selectedVehicle.name}</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white bg-white/10 rounded-full p-1 transition"><X size={20}/></button>
        </div>

        <div className="space-y-3">
          
          {/* Name Input (New) */}
          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Full Name</label>
             <input 
               type="text" 
               value={name} 
               onChange={(e) => setName(e.target.value)}
               placeholder="Enter your full name"
               className="w-full bg-transparent outline-none text-xs font-semibold text-gray-800 placeholder-gray-400"
             />
          </div>

          {/* Date Picker */}
          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Travel Dates</label>
             <DatePicker 
               selected={startDate} onChange={(u) => {setStartDate(u[0]); setEndDate(u[1])}} 
               startDate={startDate} endDate={endDate} selectsRange minDate={new Date()}
               className="w-full bg-transparent outline-none text-xs font-semibold text-gray-800" placeholderText="Select dates"
             />
          </div>

          {/* Passengers */}
          <div className="grid grid-cols-2 gap-2">
             <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
               <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Adults</label>
               <div className="flex items-center justify-between">
                 <button onClick={()=>setAdults(Math.max(1, adults-1))} className="w-5 h-5 bg-gray-200 rounded text-xs font-bold hover:bg-gray-300">-</button>
                 <span className="font-bold text-sm text-gray-800">{adults}</span>
                 <button onClick={()=>setAdults(adults+1)} className="w-5 h-5 bg-brand-orange text-white rounded text-xs font-bold hover:bg-orange-600">+</button>
               </div>
             </div>
             <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
               <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Kids</label>
               <div className="flex items-center justify-between">
                 <button onClick={()=>setChildren(Math.max(0, children-1))} className="w-5 h-5 bg-gray-200 rounded text-xs font-bold hover:bg-gray-300">-</button>
                 <span className="font-bold text-sm text-gray-800">{children}</span>
                 <button onClick={()=>setChildren(children+1)} className="w-5 h-5 bg-brand-orange text-white rounded text-xs font-bold hover:bg-orange-600">+</button>
               </div>
             </div>
          </div>

          {/* Destination */}
          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Trip Plan / Destination</label>
             <textarea 
               value={destination} onChange={(e) => setDestination(e.target.value)}
               placeholder="Enter pickup & drop details..."
               className="w-full bg-transparent outline-none text-xs resize-none h-12 text-gray-800 placeholder-gray-400"
             />
          </div>

          <button onClick={handleSend} className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-2.5 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 transform active:scale-95 transition">
            <Send size={16}/> Send Inquiry via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;