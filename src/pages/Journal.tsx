import { Undo, Redo, Bold, Italic, Underline, Link as LinkIcon, Image as ImageIcon, Info, Loader2, Save, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Journal() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-20"
    >
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="bg-secondary/10 text-secondary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">
              Editorial
            </span>
            <div className="h-px w-8 bg-gray-200" />
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Internal Draft</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-primary leading-[0.9] tracking-tight">Swan Lake: The Director's Cut</h1>
          <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
            Drafting program notes and artist biographies. Review editorial standards before finalizing for publishing.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleSave}
            className="px-8 py-4 border border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2 active:scale-95 shadow-sm"
          >
            <Save size={18} /> Save Draft
          </button>
          <button className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-2xl shadow-blue-900/20 hover:bg-blue-900 transition-all flex items-center gap-2 active:scale-95">
            <Send size={18} /> Publish to Live
          </button>
        </div>
      </section>

      <section className="bg-white rounded-[40px] border border-gray-100 shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col min-h-[600px] relative">
        {/* Toolbar */}
        <div className="border-b border-gray-100 bg-gray-50/50 p-6 flex flex-wrap items-center gap-8 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center border border-gray-100 rounded-xl p-1 gap-1 bg-white shadow-sm">
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all"><Undo size={18} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all"><Redo size={18} /></button>
          </div>
          
          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-100 rounded-xl p-1 bg-white shadow-sm">
            <select className="bg-transparent border-none text-xs font-bold text-gray-600 uppercase tracking-widest focus:ring-0 cursor-pointer pr-10 pl-4 py-2">
              <option>Normal Text</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
              <option>Blockquote</option>
            </select>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-100 rounded-xl p-1 gap-1 bg-white shadow-sm">
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all font-bold"><Bold size={18} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all italic"><Italic size={18} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all underline"><Underline size={18} /></button>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-100 rounded-xl p-1 gap-1 bg-white shadow-sm">
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all"><LinkIcon size={18} /></button>
            <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-primary transition-all"><ImageIcon size={18} /></button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-grow p-16 md:p-24 relative">
          <div 
            className="outline-none text-gray-800 leading-relaxed text-xl max-w-4xl font-serif"
            contentEditable
            suppressContentEditableWarning
          >
            <p className="mb-10 text-2xl leading-snug">
              The upcoming performance of Swan Lake at the Esplanade Theatre marks a significant departure from traditional interpretations. Directed by the visionary Elena Rostova, this production strips away the opulence of previous decades to focus on the raw emotional core of the narrative.
            </p>
            <p className="mb-6">
              Set against a minimalist backdrop designed by contemporary artist Julian Vance, the choreography demands a level of physical exertion and dramatic intensity rarely seen in classical ballet. The principal dancers must navigate a stage transformed into an abstract landscape of light and shadow...
            </p>
            <p>
              In this new vision, the duality of Odette and Odile is not merely a battle between good and evil, but an internal struggle for agency within a confined world. TicketingSG is proud to support this groundbreaking production as part of our Winter Season.
            </p>
          </div>

          <AnimatePresence>
            {saving && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/70 backdrop-blur-md z-20 flex flex-col items-center justify-center"
              >
                <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100 text-center max-w-md space-y-6">
                    <Loader2 className="animate-spin text-secondary mx-auto" size={48} />
                    <h3 className="font-serif text-3xl text-primary">Refining Content</h3>
                    <p className="text-gray-500 font-medium">Applying editorial layout presets and syncing with the TicketingSG cloud. Just a moment.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer info */}
        <div className="border-t border-gray-100 p-8 flex justify-between items-center bg-gray-50/30">
          <div className="flex items-center text-gray-400 gap-2 text-[10px] font-bold uppercase tracking-widest">
            <Info size={16} />
            <span>Autosaved 2 mins ago</span>
          </div>
          <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
            <span className="text-primary underline decoration-secondary decoration-2 underline-offset-4">450 Words</span>
            <span className="text-gray-300">/ Limit 2,000</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
