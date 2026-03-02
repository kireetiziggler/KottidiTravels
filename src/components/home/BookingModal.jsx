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
    
    const formatDate = (date) => {
      if (!date) return '';
      return date.toLocaleDateString('en-GB');
    };

    const dateStr = endDate 
      ? `${formatDate(startDate)} to ${formatDate(endDate)}` 
      : formatDate(startDate);

    // Message Logic: Normal text, No Bold stars, Proper Spacing
    const iconWave = "👋 ";
    const iconCheck = "✅ ";
    const iconUser = "👤 ";
    const iconCar = "🚗 ";
    const iconCalendar = "📅 ";
    const iconGroup = "👥 ";
    const iconMap = "📍 ";
    const separator = "---------------------------";

    const message = `Hi Kottidi Travels! ${iconWave}\n\n` +
      `I'm interested in booking a vehicle.\n\n` +
      `${iconCheck} BOOKING DETAILS\n` +
      `${separator}\n\n` +
      `${iconUser} Name: ${name}\n\n` +
      `${iconCar} Vehicle: ${selectedVehicle.name}\n\n` +
      `${iconCalendar} Dates: ${dateStr}\n\n` +
      `${iconGroup} Group: ${adults} Adults, ${children} Kids\n\n` +
      `${iconMap} Trip Plan: ${destination || 'Not provided'}\n\n` +
      `${separator}\n\n` +
      `Please confirm availability and price.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    
    // 1. Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // 2. RESET FORM DATA
    setName('');
    setStartDate(new Date());
    setEndDate(null);
    setAdults(1);
    setChildren(0);
    setDestination('');

    // 3. CLOSE MODAL (Optional but recommended for better UX)
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      
      <div className="relative w-full max-w-[340px] glass-transparent rounded-2xl p-5 animate-[fadeIn_0.3s_ease-out]">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">Book {selectedVehicle.name}</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white bg-white/10 rounded-full p-1 transition">
            <X size={20}/>
          </button>
        </div>

        <div className="space-y-3">
          
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

          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Travel Dates</label>
             <DatePicker 
               selected={startDate} 
               onChange={(u) => {setStartDate(u[0]); setEndDate(u[1])}} 
               startDate={startDate} 
               endDate={endDate} 
               selectsRange 
               minDate={new Date()}
               className="w-full bg-transparent outline-none text-xs font-semibold text-gray-800" 
               placeholderText="Select dates"
             />
          </div>

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

          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Trip Plan / Destination</label>
             <textarea 
               value={destination} 
               onChange={(e) => setDestination(e.target.value)}
               placeholder="Enter pickup & drop details..."
               className="w-full bg-transparent outline-none text-xs resize-none h-12 text-gray-800 placeholder-gray-400 font-semibold"
             />
          </div>

          <button 
            onClick={handleSend} 
            className="w-full bg-brand-orange hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 transform active:scale-95 transition"
          >
            <Send size={16}/> Send Inquiry via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;