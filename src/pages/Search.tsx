import { SEARCH_RESULTS } from '../types';
import EventCard from '../components/EventCard';
import { Search as SearchIcon, X, Calendar, Check, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function SearchPage() {
  const [query, setQuery] = useState('Symphony');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20"
    >
      <section className="max-w-3xl mb-12">
        <h1 className="font-serif text-3xl text-primary mb-6">Find Your Next Experience</h1>
        <div className="relative w-full">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input 
            className="w-full pl-14 pr-12 py-5 bg-white border-b-2 border-gray-200 focus:border-secondary transition-all outline-none text-lg font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for events, venues, or notes..."
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
            <X size={24} />
          </button>

          {/* Suggestions Dropdown Mock */}
          <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-b-lg border border-gray-100 z-10 overflow-hidden">
            <ul className="py-2">
              <li className="px-4 py-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                <span className="text-gray-300">🕒</span>
                <span className="text-gray-800"><strong>Symphony</strong> in the Park Notes</span>
              </li>
              <li className="px-4 py-4 hover:bg-gray-50 cursor-pointer flex items-center gap-3">
                <span className="text-gray-300">📅</span>
                <span className="text-gray-800">London <strong>Symphony</strong> Orchestra</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-10">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</h3>
            <div className="flex flex-col gap-3">
               {['Theatre', 'Music & Concerts', 'Exhibitions', 'Workshops'].map((cat) => (
                 <label key={cat} className="flex items-center gap-3 group cursor-pointer">
                   <div className={`w-5 h-5 rounded flex items-center justify-center transition-all ${cat === 'Music & Concerts' ? 'bg-primary border-primary' : 'border-2 border-gray-300 group-hover:border-primary'}`}>
                      {cat === 'Music & Concerts' && <Check size={14} className="text-white" />}
                   </div>
                   <span className="text-gray-700">{cat}</span>
                 </label>
               ))}
            </div>
          </div>

          <div className="h-px bg-gray-100 w-full" />

          <div>
             <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Date</h3>
             <div className="flex flex-col gap-3">
               {['Any Date', 'This Weekend', 'Next 30 Days'].map((date) => (
                 <label key={date} className="flex items-center gap-3 group cursor-pointer">
                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${date === 'Any Date' ? 'border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                      {date === 'Any Date' && <div className="w-2 h-2 rounded-full bg-primary" />}
                   </div>
                   <span className="text-gray-700">{date}</span>
                 </label>
               ))}
             </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-grow">
          <div className="flex justify-between items-end pb-3 border-b border-gray-100 mb-8">
            <p className="text-gray-500">Showing <span className="text-primary font-semibold">12</span> results for "{query}"</p>
            <button className="text-xs font-bold text-gray-400 flex items-center gap-1 hover:text-primary transition-colors">
              SORT BY: DATE <ChevronDown size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SEARCH_RESULTS.map(event => (
              <EventCard key={event.id} event={event} variant="bento" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
