import { SEARCH_RESULTS, Event } from '../types';
import EventCard from '../components/EventCard';
import { Search as SearchIcon, X, Check, ChevronDown, Filter } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

interface SearchPageProps {
  onBook: (event: Event) => void;
}

export default function SearchPage({ onBook }: SearchPageProps) {
  const [query, setQuery] = useState('Symphony');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20"
    >
      <section className="max-w-4xl mb-16">
        <div className="space-y-4 mb-10">
          <h1 className="font-serif text-5xl text-primary tracking-tight">Explore the <span className="text-secondary italic">Arts.</span></h1>
          <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[0.2em]">Search & Discovery</p>
        </div>
        
        <div className="relative w-full group">
          <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-secondary transition-colors" size={24} />
          <input 
            className="w-full pl-16 pr-14 py-6 bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-blue-900/5 focus:border-secondary/30 focus:ring-4 ring-secondary/5 transition-all outline-none text-xl font-medium placeholder:text-gray-300"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for events, venues, or notes..."
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          )}

          {/* Suggestions Dropdown Mock */}
          {query.length > 2 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white shadow-2xl rounded-[32px] border border-gray-100 z-10 overflow-hidden"
            >
              <ul className="py-4">
                <li className="px-8 py-4 hover:bg-gray-50 cursor-pointer flex items-center gap-4 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 text-xs font-bold uppercase tracking-widest">SF</div>
                  <div>
                    <p className="text-gray-800 font-bold"><strong>Symphony</strong> in the Park Notes</p>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Journal Entry • Oct 2024</p>
                  </div>
                </li>
                <li className="px-8 py-4 hover:bg-gray-50 cursor-pointer flex items-center gap-4 transition-colors border-t border-gray-50">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary text-xs font-bold uppercase tracking-widest">LS</div>
                  <div>
                    <p className="text-gray-800 font-bold">London <strong>Symphony</strong> Orchestra</p>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Event • Victoria Concert Hall</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-12">
          <div className="bg-gray-50 rounded-[40px] p-10 space-y-10 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between lg:block mb-4 lg:mb-0">
               <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Categories</h3>
               <button className="lg:hidden p-2 bg-white rounded-xl border border-gray-100" onClick={() => setShowFilters(!showFilters)}>
                 <Filter size={18} />
               </button>
            </div>
            
            <div className={`flex flex-col gap-6 ${showFilters ? 'flex' : 'hidden lg:flex'}`}>
               {['Theatre', 'Music & Concerts', 'Exhibitions', 'Workshops'].map((cat) => (
                 <label key={cat} className="flex items-center justify-between group cursor-pointer group">
                   <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">{cat}</span>
                   <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${cat === 'Music & Concerts' ? 'bg-secondary' : 'bg-white border border-gray-200 group-hover:border-secondary/40'}`}>
                      {cat === 'Music & Concerts' && <Check size={14} className="text-white" />}
                   </div>
                 </label>
               ))}
            </div>

            <div className="h-px bg-gray-200 w-full hidden lg:block" />

            <div className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
               <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Date Range</h3>
               <div className="flex flex-col gap-6">
                 {['Any Date', 'This Weekend', 'Next 30 Days'].map((date) => (
                   <label key={date} className="flex items-center gap-4 group cursor-pointer">
                     <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${date === 'Any Date' ? 'border-secondary bg-secondary/5' : 'border-gray-200 bg-white group-hover:border-secondary/40'}`}>
                        {date === 'Any Date' && <div className="w-2.5 h-2.5 rounded-full bg-secondary" />}
                     </div>
                     <span className="text-gray-600 font-medium group-hover:text-primary transition-colors">{date}</span>
                   </label>
                 ))}
               </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-[40px] p-10 text-white space-y-6">
            <h4 className="font-serif text-2xl leading-tight">Can't find a <br/>specific artist?</h4>
            <p className="text-white/50 text-xs font-medium uppercase tracking-[0.1em]">Register for alerts</p>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
              Notify Me
            </button>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-grow">
          <div className="flex justify-between items-center pb-6 border-b border-gray-100 mb-10">
            <div className="flex items-baseline gap-2">
              <p className="text-4xl font-serif text-primary">12</p>
              <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[0.2em]">Events Found</p>
            </div>
            <button className="text-[10px] font-bold text-gray-400 flex items-center gap-2 hover:text-primary transition-all uppercase tracking-widest">
              Sort: Recent <ChevronDown size={14} className="text-secondary" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {SEARCH_RESULTS.map(event => (
              <EventCard key={event.id} event={event} variant="bento" onBook={onBook} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
