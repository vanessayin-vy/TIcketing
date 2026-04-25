/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Discover from './pages/Discover';
import SearchPage from './pages/Search';
import Journal from './pages/Journal';
import Tickets from './pages/Tickets';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Discover');

  const renderPage = () => {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {(() => {
            switch (currentPage) {
              case 'Discover':
                return <Discover />;
              case 'Search':
                return <SearchPage />;
              case 'Journal':
                return <Journal />;
              case 'Calendar':
                return <SearchPage />;
              case 'Tickets':
                return <Tickets />;
              default:
                return <Discover />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  // The Ticket selection page has a specific simplified layout
  if (currentPage === 'Tickets') {
    return <Tickets />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />

      {/* Quick Access to Tickets (for demo purposes) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => setCurrentPage('Tickets')}
          className="bg-[#00416B] text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-secondary transition-all"
        >
          DEMO: BOOK TICKETS
        </button>
      </div>
    </div>
  );
}
