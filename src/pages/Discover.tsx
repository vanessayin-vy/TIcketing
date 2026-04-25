import { FEATURED_EVENTS } from '../types';
import EventCard from '../components/EventCard';
import { ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Discover() {
  const categories = [
    { title: 'Classical & Symphony', description: 'Immerse yourself in orchestral masterpieces.', image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=2070&auto=format&fit=crop', large: true, tag: 'Curated' },
    { title: 'Theatre & Dance', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Exhibitions', image: 'https://images.unsplash.com/photo-1491243513677-3cad3db384a3?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Jazz & Contemporary', image: 'https://images.unsplash.com/photo-1543840950-0a2599723ec5?q=80&w=1974&auto=format&fit=crop', large: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20"
    >
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-5/12 space-y-8">
          <div className="space-y-4">
            <h1 className="font-serif text-5xl text-primary leading-tight">Curate your<br/>next experience.</h1>
            <p className="text-gray-500 text-lg max-w-md">Discover world-class performances, exclusive exhibitions, and transcendent musical events.</p>
          </div>
          
          <div className="w-full bg-white shadow-xl rounded-lg p-2 flex items-center border border-gray-100 focus-within:border-secondary transition-colors">
            <Search className="text-gray-300 ml-3" size={20} />
            <input 
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-3 outline-none text-gray-800 placeholder:text-gray-400"
              placeholder="Search artists, events, or venues..."
            />
            <button className="bg-primary hover:bg-[#00416B] text-white px-6 py-3 rounded font-semibold transition-colors">
              Search
            </button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest self-center mr-2">Trending:</span>
            {['Symphony', 'Ballet', 'Art Week'].map(tag => (
              <a key={tag} href="#" className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
                {tag}
              </a>
            ))}
          </div>
        </div>

        <div className="w-full md:w-6/12 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop" 
            alt="Theatre" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12">
        <h2 className="font-serif text-3xl text-primary mb-8">Explore by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.01 }}
              href="#"
              className={`group relative rounded-xl overflow-hidden shadow-sm block ${cat.large ? 'md:col-span-2' : ''}`}
            >
               <img src={cat.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={cat.title} />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
               <div className="absolute bottom-0 left-0 p-8">
                 {cat.tag && <span className="inline-block bg-white text-primary text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{cat.tag}</span>}
                 <h3 className="font-serif text-2xl text-white mb-1">{cat.title}</h3>
                 {cat.description && <p className="text-blue-100 text-sm">{cat.description}</p>}
               </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-4">
          <h2 className="font-serif text-3xl text-primary">Upcoming Highlights</h2>
          <a href="#" className="text-secondary hover:text-primary flex items-center gap-1 text-sm font-semibold transition-all">
            View Calendar <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_EVENTS.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
