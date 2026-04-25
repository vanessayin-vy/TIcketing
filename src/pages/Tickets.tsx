import { ArrowLeft, Calendar, MapPin, Plus, Minus, Info, ArrowRight, Warning } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Tickets() {
  const [counts, setCounts] = useState({ standard: 0, child: 0, senior: 0 });
  const [selectedSection, setSelectedSection] = useState('Circle 1');

  const updateCount = (type: keyof typeof counts, delta: number) => {
    setCounts(prev => ({ ...prev, [type]: Math.max(0, prev[type] + delta) }));
  };

  const prices = { standard: 85, child: 45, senior: 65 };
  const subtotal = Object.entries(counts).reduce((sum, [type, count]) => sum + (count * prices[type as keyof typeof prices]), 0);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20"
    >
      <header className="border-b border-gray-100 py-6 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          <button className="flex items-center gap-2 text-gray-900 hover:text-secondary group transition-colors">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm">Back to Event</span>
          </button>
          <div className="font-serif text-2xl text-primary">Cultural Concierge</div>
          <div className="w-10"></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 space-y-16">
        {/* Header content */}
        <section className="flex flex-col md:flex-row gap-8 justify-between items-end border-b border-gray-100 pb-10">
          <div className="space-y-6 max-w-2xl">
            <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Family Concert
            </span>
            <h1 className="font-serif text-5xl text-gray-900 leading-tight">The Nutcracker Ballet</h1>
            <div className="space-y-3 text-lg text-gray-500">
               <p className="flex items-center gap-2"><Calendar size={20} /> Saturday, December 14, 2024 • 2:00 PM</p>
               <p className="flex items-center gap-2"><MapPin size={20} /> Esplanade Theatre, Singapore</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total ({Object.values(counts).reduce((a, b) => a + b, 0)} Tickets)</p>
             <p className="font-serif text-4xl text-gray-900">${subtotal.toFixed(2)}</p>
          </div>
        </section>

        {/* Selection Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           {/* Left: Map */}
           <div className="lg:col-span-8 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col min-h-[600px]">
              <div className="p-6 border-b border-gray-100 bg-gray-50/30 flex justify-between items-center">
                <h2 className="font-serif text-2xl text-gray-900">Select Section</h2>
                <div className="flex gap-2">
                   <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"><Plus size={18} /></button>
                   <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"><Minus size={18} /></button>
                </div>
              </div>

              <div className="flex-grow relative bg-gray-50/50 p-12 flex flex-col items-center justify-center">
                 {/* Mock Seating Visual */}
                 <div className="w-full max-w-2xl flex flex-col items-center gap-6">
                    {/* Stage */}
                    <div className="w-2/3 h-16 bg-gray-200 rounded-b-[40px] flex items-center justify-center border-b-4 border-gray-300 shadow-sm">
                       <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Stage</span>
                    </div>

                    {/* Sections */}
                    <div className="w-full space-y-4">
                       <motion.button 
                         whileHover={{ scale: 1.01 }}
                         onClick={() => setSelectedSection('Premium Stalls')}
                         className={`w-3/4 mx-auto py-12 rounded-t-[120px] border-2 transition-all flex flex-col items-center ${selectedSection === 'Premium Stalls' ? 'bg-primary border-primary text-white' : 'bg-blue-50/30 border-blue-100 text-blue-900'}`}
                       >
                         <span className="font-serif text-2xl">Premium Stalls</span>
                         <span className="text-xs mt-1 opacity-70">From $120</span>
                       </motion.button>

                       <motion.button 
                         whileHover={{ scale: 1.01 }}
                         onClick={() => setSelectedSection('Circle 1')}
                         className={`w-full py-10 rounded-2xl border-2 transition-all flex flex-col items-center ${selectedSection === 'Circle 1' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-blue-50/10 border-blue-100 text-blue-600'}`}
                       >
                         <span className="font-serif text-2xl">Circle 1</span>
                         <span className="text-xs mt-1 opacity-70">From $85</span>
                       </motion.button>

                       <motion.button 
                         whileHover={{ scale: 1.01 }}
                         onClick={() => setSelectedSection('Circle 2')}
                         className={`w-full py-8 rounded-2xl border-2 transition-all flex flex-col items-center ${selectedSection === 'Circle 2' ? 'bg-gray-800 border-gray-800 text-white' : 'bg-gray-100 border-gray-200 text-gray-500'}`}
                       >
                         <span className="font-serif text-2xl">Circle 2</span>
                         <span className="text-xs mt-1 opacity-70">From $65</span>
                         <div className="flex items-center gap-1 mt-2 text-red-500">
                           <span className="text-[10px] font-bold uppercase">Limited Seats</span>
                         </div>
                       </motion.button>
                    </div>
                 </div>
              </div>

              {/* Legend */}
              <div className="p-6 bg-white border-t border-gray-100 flex flex-wrap gap-8 justify-center">
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-blue-50 border border-blue-200" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium ($120)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-blue-100 border border-blue-300" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Standard ($65-$85)</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300" />
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Limited Availability</span>
                 </div>
              </div>
           </div>

           {/* Right: Pricing Sidebar */}
           <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-xl sticky top-28">
                 <h3 className="font-serif text-2xl text-gray-900 border-b border-gray-100 pb-6 mb-8">{selectedSection} Selected</h3>
                 
                 <div className="space-y-8 mb-10">
                    {[
                      { type: 'standard', label: 'Standard', desc: '', price: prices.standard },
                      { type: 'child', label: 'Child', desc: '(Under 12)', price: prices.child },
                      { type: 'senior', label: 'Senior', desc: '(65+)', price: prices.senior }
                    ].map(ticket => (
                      <div key={ticket.type} className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-gray-800">{ticket.label} <span className="font-normal text-gray-400 ml-1 text-sm">{ticket.desc}</span></p>
                          <p className="text-gray-500 text-sm">${ticket.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                           <button 
                             onClick={() => updateCount(ticket.type as any, -1)}
                             className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                           >
                             <Minus size={16} />
                           </button>
                           <div className="w-12 h-10 flex items-center justify-center font-bold text-gray-900 bg-gray-50/50">
                             {counts[ticket.type as keyof typeof counts]}
                           </div>
                           <button 
                             onClick={() => updateCount(ticket.type as any, 1)}
                             className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                           >
                             <Plus size={16} />
                           </button>
                        </div>
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 border-t border-gray-100 space-y-2 mb-8">
                    <div className="flex justify-between items-end">
                       <span className="text-gray-500 font-medium">Subtotal</span>
                       <span className="font-serif text-3xl text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <p className="text-right text-[10px] font-bold text-gray-400 uppercase tracking-widest">Taxes & fees calculated at checkout</p>
                 </div>

                 <button 
                   disabled={subtotal === 0}
                   className="w-full py-4 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#00416B] transition-all disabled:opacity-30 disabled:cursor-not-allowed group shadow-lg"
                 >
                   Proceed to Payment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
                 <div className="mt-6 text-center">
                   <button className="text-[10px] font-bold text-gray-400 hover:text-secondary uppercase tracking-widest underline underline-offset-4">View Seating Chart PDF</button>
                 </div>
              </div>
           </div>
        </div>

        {/* Info Module */}
        <section className="bg-gray-50 p-10 rounded-2xl border border-gray-200 space-y-8">
           <h4 className="font-serif text-2xl text-gray-900 flex items-center gap-3">
             <Info className="text-secondary" /> Important Information for Families
           </h4>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-3">
                 <p className="font-bold text-gray-800">Child Admission Policy</p>
                 <p className="text-gray-500 leading-relaxed">Children under the age of 4 are not admitted to this performance. All children aged 4 and above must hold a valid ticket. Booster seats are available upon request at the cloakroom.</p>
              </div>
              <div className="space-y-3">
                 <p className="font-bold text-gray-800">Accessibility</p>
                 <p className="text-gray-500 leading-relaxed">Wheelchair accessible seating is available in the Stalls and Circle 1. Please select the dedicated wheelchair icon on the map or contact our concierge line for assistance.</p>
              </div>
           </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-4 md:px-10 py-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 tracking-widest uppercase">
         <div>© 2024 Cultural Concierge. All rights reserved.</div>
         <div className="flex gap-8">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Contact Support</a>
         </div>
      </footer>
    </motion.div>
  );
}
