import { Search, User } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const navItems = ['Discover', 'Calendar', 'Venues', 'Journal'];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 flex justify-between items-center">
        <div 
          className="text-xl font-semibold tracking-tight text-[#00416B] font-serif cursor-pointer"
          onClick={() => onPageChange('Discover')}
        >
          Cultural Concierge
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`pb-1 transition-all duration-300 ${
                currentPage === item 
                  ? 'text-secondary border-b-2 border-secondary' 
                  : 'text-gray-500 hover:text-primary'
              }`}
            >
              {item}
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
