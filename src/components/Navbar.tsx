import { Search, User } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const navItems = ['Discover', 'Calendar', 'Venues', 'Insights'];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold tracking-tighter text-primary font-sans cursor-pointer group"
          onClick={() => onPageChange('Discover')}
        >
          Ticketing<span className="text-secondary group-hover:text-primary transition-colors">SG</span>
        </div>
        
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`relative py-1 text-sm font-medium tracking-wide transition-all duration-300 ${
                currentPage === item 
                  ? 'text-primary' 
                  : 'text-gray-400 hover:text-primary'
              }`}
            >
              {item}
              {currentPage === item && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            className="text-primary p-2 hover:bg-gray-50 rounded-full transition-colors"
            onClick={() => onPageChange('Search')}
          >
            <Search size={22} />
          </button>
          <button className="text-primary p-2 hover:bg-gray-50 rounded-full transition-colors">
            <User size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
