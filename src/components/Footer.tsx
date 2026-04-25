export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-bold tracking-tighter text-primary font-sans">
          Ticketing<span className="text-secondary">SG</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-10">
          {['TOS', 'Privacy', 'Support', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-[10px] font-black text-gray-400 hover:text-secondary transition-all uppercase tracking-[0.2em]">
              {item}
            </a>
          ))}
        </nav>

        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-60">
          © 2024 TicketingSG. Art of the Experience.
        </div>
      </div>
    </footer>
  );
}
