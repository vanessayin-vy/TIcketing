import { Undo, Redo, Bold, Italic, Underline, Link as LinkIcon, Image as ImageIcon, Info, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Journal() {
  const [saving, setSaving] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 md:px-10 py-12"
    >
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Event Journal Entry</p>
          <h1 className="font-serif text-5xl text-primary">Swan Lake: The Director's Cut</h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Drafting detailed program notes and artist biographies. Ensure all content meets editorial standards before publishing.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded hover:bg-gray-50 transition-colors">
            Save Draft
          </button>
          <button className="px-6 py-3 bg-secondary text-white font-bold rounded shadow-lg hover:bg-[#0061a2] transition-colors flex items-center gap-2">
            Save & Continue
          </button>
        </div>
      </section>

      <section className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
        {/* Toolbar */}
        <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex flex-wrap items-center gap-6 sticky top-0 z-10">
          <div className="flex items-center border border-gray-200 rounded p-1 gap-1 bg-white">
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors"><Undo size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors"><Redo size={18} /></button>
          </div>
          
          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-200 rounded p-1 bg-white">
            <select className="bg-transparent border-none text-sm font-medium text-gray-600 focus:ring-0 cursor-pointer pr-10">
              <option>Normal Text</option>
              <option>Heading 1</option>
              <option>Heading 2</option>
              <option>Quote</option>
            </select>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-200 rounded p-1 gap-1 bg-white">
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 font-bold"><Bold size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 italic"><Italic size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 underline"><Underline size={18} /></button>
          </div>

          <div className="w-px h-6 bg-gray-200" />

          <div className="flex items-center border border-gray-200 rounded p-1 gap-1 bg-white">
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors"><LinkIcon size={18} /></button>
            <button className="p-2 hover:bg-gray-100 rounded text-gray-600 transition-colors"><ImageIcon size={18} /></button>
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-grow p-12 relative">
          <div 
            className="outline-none text-gray-800 leading-relaxed text-lg max-w-4xl"
            contentEditable
            suppressContentEditableWarning
          >
            <p className="mb-6">
              The upcoming performance of Swan Lake at the Grand Theatre marks a significant departure from traditional interpretations. Directed by the visionary Elena Rostova, this production strips away the opulence of previous decades to focus on the raw emotional core of the narrative.
            </p>
            <p>
              Set against a minimalist backdrop designed by contemporary artist Julian Vance, the choreography demands a level of physical exertion and dramatic intensity rarely seen in classical ballet. The principal dancers...
            </p>
          </div>

          {saving && (
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
               <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 text-center max-w-sm space-y-4">
                  <Loader2 className="animate-spin text-secondary mx-auto" size={48} />
                  <h3 className="font-serif text-2xl text-primary">Formatting Content</h3>
                  <p className="text-gray-500">Processing large text block and applying editorial styles. This will just take a moment.</p>
               </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-gray-100 p-4 flex justify-between items-center text-sm font-medium">
          <div className="flex items-center text-gray-400 gap-2">
            <Info size={18} />
            <span>Autosaved 2 mins ago</span>
          </div>
          <div className="flex gap-1">
            <span className="text-gray-900">450</span>
            <span className="text-gray-400">/ 10,000 characters</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
