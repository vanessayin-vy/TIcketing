export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold text-[#00416B] font-serif">Cultural Concierge</div>
        
        <nav className="flex flex-wrap justify-center gap-6">
          {['Terms of Service', 'Privacy Policy', 'Accessibility', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm font-medium">
              {item}
            </a>
          ))}
        </nav>

        <div className="text-[#00416B] text-sm opacity-60">
          © 2024 Cultural Concierge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
