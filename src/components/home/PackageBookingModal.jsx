import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { X, Send } from 'lucide-react';

const PackageBookingModal = ({ isOpen, onClose, selectedPackage }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const phone = "919493015558";
    const formatDate = (date) => date ? date.toLocaleDateString('en-GB') : '';
    const dateStr = endDate ? `${formatDate(startDate)} to ${formatDate(endDate)}` : formatDate(startDate);

    // Clean Message Logic: No bold stars, clean spacing
    const message = `Hi Kottidi Travels! 👋\n\n` +
      `I'm interested in booking a Tour Package.\n\n` +
      `✅ PACKAGE DETAILS\n` +
      `---------------------------\n\n` +
      `👤 Name: ${name}\n\n` +
      `🗺️ Package: ${selectedPackage.title}\n\n` +
      `⏳ Duration: ${selectedPackage.duration}\n\n` +
      `📅 Travel Dates: ${dateStr}\n\n` +
      `👥 Group: ${adults} Adults, ${children} Kids\n\n` +
      `📝 Requirements: ${notes || 'Standard package'}\n\n` +
      `---------------------------\n\n` +
      `Please confirm availability and best price.`;

    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank');
    
    // Reset and Close
    setName('');
    setStartDate(new Date());
    setEndDate(null);
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="relative w-full max-w-[340px] glass-transparent rounded-2xl p-5 animate-[fadeIn_0.3s_ease-out]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white drop-shadow-md">Book {selectedPackage.title}</h3>
          <button onClick={onClose} className="text-white/80 hover:text-white bg-white/10 rounded-full p-1 transition"><X size={20}/></button>
        </div>

        <div className="space-y-3">
          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Your Name</label>
             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter full name" className="w-full bg-transparent outline-none text-xs font-semibold text-gray-800" />
          </div>

          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Travel Dates</label>
             <DatePicker selected={startDate} onChange={(u) => {setStartDate(u[0]); setEndDate(u[1])}} startDate={startDate} endDate={endDate} selectsRange minDate={new Date()} className="w-full bg-transparent outline-none text-xs font-semibold text-gray-800" placeholderText="Select dates" />
          </div>

          <div className="grid grid-cols-2 gap-2">
             <div className="bg-white/90 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
               <div>
                 <label className="text-[10px] font-bold text-brand-orange uppercase block">Adults</label>
                 <span className="font-bold text-sm text-gray-800">{adults}</span>
               </div>
               <div className="flex gap-1">
                 <button onClick={()=>setAdults(Math.max(1, adults-1))} className="w-5 h-5 bg-gray-200 rounded text-xs font-bold">-</button>
                 <button onClick={()=>setAdults(adults+1)} className="w-5 h-5 bg-brand-orange text-white rounded text-xs font-bold">+</button>
               </div>
             </div>
             <div className="bg-white/90 p-2.5 rounded-xl shadow-sm flex items-center justify-between">
               <div>
                 <label className="text-[10px] font-bold text-brand-orange uppercase block">Kids</label>
                 <span className="font-bold text-sm text-gray-800">{children}</span>
               </div>
               <div className="flex gap-1">
                 <button onClick={()=>setChildren(Math.max(0, children-1))} className="w-5 h-5 bg-gray-200 rounded text-xs font-bold">-</button>
                 <button onClick={()=>setChildren(children+1)} className="w-5 h-5 bg-brand-orange text-white rounded text-xs font-bold">+</button>
               </div>
             </div>
          </div>

          <div className="bg-white/90 p-2.5 rounded-xl shadow-sm">
             <label className="text-[10px] font-bold text-brand-orange uppercase mb-1 block">Special Requests</label>
             <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any specific temples or requirements?" className="w-full bg-transparent outline-none text-xs resize-none h-12 text-gray-800 font-semibold" />
          </div>

          <button onClick={handleSend} className="w-full bg-brand-orange text-white font-bold py-2.5 rounded-xl shadow-lg text-sm flex items-center justify-center gap-2 transform active:scale-95 transition">
            <Send size={16}/> Get Package Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageBookingModal;