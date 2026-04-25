import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  variant?: 'grid' | 'bento';
  onBook?: (event: Event) => void;
}

export default function EventCard({ event, variant = 'grid', onBook }: EventCardProps) {
  if (variant === 'bento') {
     return (
       <motion.article 
         whileHover={{ y: -4 }}
         className="bg-white flex flex-col overflow-hidden group border border-gray-200 hover:shadow-xl transition-all duration-300"
       >
         <div className="aspect-video relative overflow-hidden bg-gray-100">
           <img 
             src={event.image} 
             alt={event.title}
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
           />
           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold uppercase text-gray-800">
             {event.category}
           </div>
         </div>
         <div className="p-6 flex flex-col flex-grow gap-4">
           <div>
             <h2 className="font-serif text-2xl text-primary mb-1">{event.title}</h2>
             <p className="text-gray-500 flex items-center gap-2 text-sm italic">
               <Calendar size={16} /> {event.date}
             </p>
           </div>
           
           {event.note && (
             <div className="bg-gray-50 p-3 border-l-2 border-primary mt-2">
               <p className="text-sm italic text-gray-700">"{event.note}"</p>
             </div>
           )}

           <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
             <span className="font-semibold text-gray-900">From ${event.price}</span>
             <button 
               onClick={() => onBook?.(event)}
               className="bg-secondary hover:bg-[#0061a2] text-white px-6 py-2 text-sm font-semibold transition-colors rounded-sm"
             >
               Book Tickets
             </button>
           </div>
         </div>
       </motion.article>
     );
  }

  return (
    <motion.article 
      whileHover={{ y: -4 }}
      className="flex flex-col group cursor-pointer"
      onClick={() => onBook?.(event)}
    >
      <div className="aspect-video rounded-lg overflow-hidden mb-4 shadow-sm bg-gray-100">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-100 text-gray-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            {event.category}
          </span>
          <span className="text-xs text-gray-400">{event.date}</span>
        </div>
        <h3 className="font-serif text-xl text-primary leading-tight group-hover:text-secondary transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-500 text-sm flex-grow">{event.location}</p>
        <div className="pt-2 border-t border-gray-100 mt-auto">
          <p className="text-sm text-gray-900">From <span className="font-semibold">${event.price}</span></p>
        </div>
      </div>
    </motion.article>
  );
}
