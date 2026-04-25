import { ArrowLeft, Calendar, MapPin, Plus, Minus, Info, ArrowRight, ShieldCheck, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import { Event } from '../types';

interface TicketsProps {
  event: Event | null;
  onBack: () => void;
}

export default function Tickets({ event, onBack }: TicketsProps) {
  const [counts, setCounts] = useState({ standard: 0, child: 0, senior: 0 });
  const [selectedSection, setSelectedSection] = useState('Circle 1');

  // fallback event if none provided (for direct access)
  const displayEvent = event || {
    id: '0',
    title: "Select an Event",
    category: "Event",
    date: "TBD",
    location: "Select Venue",
    price: "0",
    image: ""
  };

  const updateCount = (type: keyof typeof counts, delta: number) => {
    setCounts(prev => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  const prices = useMemo(() => {
    const base = parseInt(displayEvent.price) || 85;
    return {
      standard: base,
      child: Math.floor(base * 0.6),
      senior: Math.floor(base * 0.8)
    };
  }, [displayEvent.price]);

  const totalTickets = Object.values(counts).reduce((a, b) => a + b, 0);
  const subtotal = Object.entries(counts).reduce((sum, [type, count]) => sum + (count * prices[type as keyof typeof prices]), 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20 bg-white"
    >
      <header className="border-b border-gray-100 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-900 hover:text-secondary group transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-xs uppercase tracking-widest">Return</span>
          </button>
          
          <div className="text-xl font-bold tracking-tighter text-primary font-sans">
            Ticketing<span className="text-secondary">SG</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
              <ShieldCheck size={14} /> Secure Checkout
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 space-y-16">
        {/* Header content */}
        <section className="flex flex-col md:flex-row gap-10 justify-between items-end border-b border-gray-100 pb-12">
          <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="bg-primary/5 text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
                {displayEvent.category}
              </span>
              <div className="h-px w-8 bg-gray-200" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Book Now</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-gray-900 leading-[0.9] tracking-tight">{displayEvent.title}</h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
               <p className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg"><Calendar size={18} className="text-secondary" /> {displayEvent.date}</p>
               <p className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg"><MapPin size={18} className="text-secondary" /> {displayEvent.location}</p>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-3xl min-w-[240px] shadow-2xl shadow-blue-900/20 transform rotate-2">
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 opacity-50">Current Selection</p>
             <div className="flex justify-between items-baseline mb-4">
                <p className="text-2xl font-serif">{totalTickets} <span className="text-xs font-sans font-normal opacity-60">Tickets</span></p>
                <p className="text-3xl font-serif text-secondary">${subtotal.toFixed(2)}</p>
             </div>
             <div className="h-px bg-white/10 mb-4" />
             <p className="text-[10px] font-medium text-white/40 uppercase tracking-widest">{selectedSection}</p>
          </div>
        </section>

        {/* Selection Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           {/* Left: Map */}
           <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="font-serif text-3xl text-gray-900">Seating Plan</h2>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Interactive Seat Map</p>
                </div>
                <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-white hover:border-gray-200 transition-all active:scale-95 shadow-sm"><Plus size={18} /></button>
                   <button className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-white hover:border-gray-200 transition-all active:scale-95 shadow-sm"><Minus size={18} /></button>
                </div>
              </div>

              <div className="bg-gray-50/50 border border-gray-100 rounded-[40px] overflow-hidden p-12 md:p-20 relative min-h-[600px] flex flex-col items-center justify-center">
                 {/* Stage */}
                 <div className="w-full max-w-sm h-12 bg-white rounded-b-[60px] flex items-center justify-center border-x border-b border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.02)] mb-16">
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">Theatre Stage</span>
                 </div>

                 {/* Sections */}
                 <div className="w-full max-w-xl space-y-4">
                    <motion.button 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedSection('Premium Stalls')}
                      className={`w-4/5 mx-auto py-16 rounded-t-[140px] border-2 transition-all flex flex-col items-center shadow-lg transform ${selectedSection === 'Premium Stalls' ? 'bg-primary border-primary text-white scale-[1.02]' : 'bg-white border-gray-100 text-gray-900 hover:border-secondary/20'}`}
                    >
                      <span className="font-serif text-3xl">Premium Stalls</span>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-2 opacity-50">Best Acoustics</p>
                      <span className="text-sm font-bold mt-4 opacity-70">${prices.standard + 40}</span>
                    </motion.button>

                    <div className="grid grid-cols-2 gap-4 w-full">
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setSelectedSection('Circle 1')}
                        className={`py-12 rounded-3xl border-2 transition-all flex flex-col items-center shadow-md ${selectedSection === 'Circle 1' ? 'bg-secondary border-secondary text-white scale-[1.02]' : 'bg-white border-gray-100 text-gray-900 hover:border-secondary/20'}`}
                      >
                        <span className="font-serif text-2xl">Circle 1</span>
                        <span className="text-xs font-bold mt-2 opacity-70">${prices.standard}</span>
                      </motion.button>

                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setSelectedSection('Circle 2')}
                        className={`py-12 rounded-3xl border-2 transition-all flex flex-col items-center shadow-md ${selectedSection === 'Circle 2' ? 'bg-gray-800 border-gray-800 text-white scale-[1.02]' : 'bg-white border-gray-100 text-gray-900 hover:border-secondary/20'}`}
                      >
                        <span className="font-serif text-2xl">Circle 2</span>
                        <span className="text-xs font-bold mt-2 opacity-70">${prices.senior}</span>
                      </motion.button>
                    </div>
                 </div>

                 {/* Legend */}
                 <div className="absolute bottom-8 flex gap-8">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary" />
                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Premium</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-secondary" />
                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Standard</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-gray-200" />
                       <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Available</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Right: Pricing Sidebar */}
           <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-gray-100 rounded-[40px] p-10 shadow-2xl shadow-blue-900/5 sticky top-32">
                 <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Ticket size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-gray-900">{selectedSection}</h3>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Configure Tickets</p>
                    </div>
                 </div>
                 
                 <div className="space-y-10 mb-10">
                    {[
                      { type: 'standard', label: 'Adult Standard', price: prices.standard },
                      { type: 'child', label: 'Child (Under 12)', price: prices.child },
                      { type: 'senior', label: 'Senior Citizen', price: prices.senior }
                    ].map(ticket => (
                      <div key={ticket.type} className="flex justify-between items-center group">
                        <div className="space-y-0.5">
                          <p className="font-bold text-gray-900 group-hover:text-secondary transition-colors">{ticket.label}</p>
                          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">${ticket.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                           <button 
                             onClick={() => updateCount(ticket.type as any, -1)}
                             className="w-10 h-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all"
                           >
                             <Minus size={16} />
                           </button>
                           <div className="w-10 h-10 flex items-center justify-center font-black text-gray-900">
                             {counts[ticket.type as keyof typeof counts]}
                           </div>
                           <button 
                             onClick={() => updateCount(ticket.type as any, 1)}
                             className="w-10 h-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all"
                           >
                             <Plus size={16} />
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-gray-100 space-y-4 mb-10">
                    <div className="flex justify-between items-center">
                       <span className="text-gray-900 font-bold uppercase text-[10px] tracking-widest">Total Pay</span>
                       <span className="font-serif text-4xl text-primary">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                      <ShieldCheck size={14} className="text-green-500" />
                      Encrypted Checkout with Stripe
                    </div>
                 </div>

                 <button 
                   disabled={subtotal === 0}
                   className="w-full py-5 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed group shadow-xl shadow-blue-900/10 active:scale-[0.98]"
                 >
                   Confirm Selection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </div>
        </div>

        {/* Info Module */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-20">
           <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 space-y-6">
              <h4 className="font-serif text-2xl text-gray-900 flex items-center gap-3">
                <Info size={24} className="text-secondary" /> Terms & Conditions
              </h4>
              <div className="space-y-4">
                 <div className="space-y-1">
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-900">Cancellation Policy</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Tickets are non-refundable. Exchange for credit is available up to 48 hours before the event starts.</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-bold text-xs uppercase tracking-widest text-gray-900">Arrival Instructions</p>
                    <p className="text-gray-500 text-sm leading-relaxed">Please arrive 30 minutes before showtime. Late seating is subject to house management discretion.</p>
                 </div>
              </div>
           </div>

           <div className="bg-primary p-12 rounded-[40px] text-white space-y-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                <h4 className="font-serif text-3xl leading-tight">Need a bespoke <br/>experience?</h4>
                <p className="text-white/70 text-sm max-w-xs font-medium">Join our Patron Circle for private lounges, first-access to events, and meet-and-greets.</p>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl shadow-black/20">
                  Upgrade Membership
                </button>
              </div>
              <div className="absolute top-0 right-0 p-8 z-0">
                <Ticket size={120} className="text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
              </div>
           </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 md:px-10 py-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">© 2024 TicketingSG • Art of the Experience</div>
         <div className="flex gap-10">
            <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Support</a>
            <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-[0.2em] transition-colors">Careers</a>
         </div>
      </footer>
    </motion.div>
  );
}
