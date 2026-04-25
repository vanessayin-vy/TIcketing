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
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const handleBook = (event: any) => {
    setSelectedEvent(event);
    setCurrentPage('Tickets');
  };

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
                return <Discover onBook={handleBook} />;
              case 'Search':
                return <SearchPage onBook={handleBook} />;
              case 'Insights':
                return <Journal />;
              case 'Calendar':
                return <SearchPage onBook={handleBook} />;
              case 'Tickets':
                return <Tickets event={selectedEvent} onBack={() => setCurrentPage('Discover')} />;
              default:
                return <Discover onBook={handleBook} />;
            }
          })()}
        </motion.div>
      </AnimatePresence>
    );
  };

  // The Ticket selection page replaces the whole layout for focus
  if (currentPage === 'Tickets') {
    return <Tickets event={selectedEvent} onBack={() => setCurrentPage('Discover')} />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary/20">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
