import { FEATURED_EVENTS, Event } from '../types';
import EventCard from '../components/EventCard';
import { ArrowRight, Search, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface DiscoverProps {
  onBook: (event: Event) => void;
}

export default function Discover({ onBook }: DiscoverProps) {
  const categories = [
    { title: 'Classical & Symphony', description: 'Immerse yourself in orchestral masterpieces.', image: 'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=2070&auto=format&fit=crop', large: true, tag: 'Curated' },
    { title: 'Theatre & Dance', image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Exhibitions', image: 'https://images.unsplash.com/photo-1491243513677-3cad3db384a3?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Jazz & Contemporary', image: 'https://images.unsplash.com/photo-1543840950-0a2599723ec5?q=80&w=1974&auto=format&fit=crop', large: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pb-20"
    >
      {/* Hero */}
      <motion.section variants={itemVariants} className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-5/12 space-y-10">
          <div className="space-y-6">
            <h1 className="font-serif text-6xl md:text-7xl text-primary leading-[0.9] tracking-tighter mb-4">
              Your stage <br/>
              <span className="text-secondary italic">awaits.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
              Discover Singapore's most prestigious cultural events, from world-class symphonies to boundary-pushing exhibitions.
            </p>
          </div>
          
          <div className="w-full bg-white shadow-2xl shadow-blue-900/5 rounded-2xl p-2 flex items-center border border-gray-100 focus-within:ring-4 ring-secondary/10 transition-all">
            <Search className="text-gray-400 ml-4" size={20} />
            <input 
              className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 outline-none text-gray-800 placeholder:text-gray-400 font-medium"
              placeholder="Search artists, events, or venues..."
            />
            <button className="bg-primary hover:bg-[#003150] text-white px-8 py-4 rounded-xl font-bold transition-all transform active:scale-95">
              Search
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1.5 rounded-lg">
              <TrendingUp size={14} className="text-secondary" />
              Trending
            </div>
            <div className="flex flex-wrap gap-2">
              {['Symphony', 'Ballet', 'Art Week'].map(tag => (
                <button key={tag} className="text-primary hover:text-secondary px-2 py-1 rounded-md text-xs font-bold transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 relative group">
          <div className="aspect-[4/5] md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop" 
              alt="Theatre" 
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 z-0" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10 z-0" />
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section variants={itemVariants} className="max-w-7xl mx-auto px-4 md:px-10 py-16">
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-2">
            <h2 className="font-serif text-4xl text-primary">Explore</h2>
            <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[0.2em]">Curated Categories</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden shadow-lg block h-full ${cat.large ? 'md:col-span-2' : ''}`}
            >
               <img src={cat.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cat.title} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
               <div className="absolute bottom-0 left-0 p-10">
                 {cat.tag && <span className="inline-block bg-white text-primary text-[10px] font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-[0.1em]">{cat.tag}</span>}
                 <h3 className="font-serif text-3xl text-white mb-2 leading-tight">{cat.title}</h3>
                 {cat.description && <p className="text-white/70 text-sm max-w-xs line-clamp-2">{cat.description}</p>}
               </div>
               <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ArrowRight size={20} />
                </div>
               </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Highlights */}
      <motion.section variants={itemVariants} className="max-w-7xl mx-auto px-4 md:px-10 py-24">
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
          <div className="space-y-2">
            <h2 className="font-serif text-4xl text-primary">In the Spotlight</h2>
            <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[0.2em]">Selected Highlights</p>
          </div>
          <button className="group text-secondary hover:text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all">
            Full Calendar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURED_EVENTS.map(event => (
            <EventCard key={event.id} event={event} onBook={onBook} />
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
