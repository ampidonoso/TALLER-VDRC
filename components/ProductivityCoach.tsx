
import React, { useState } from 'react';
import { getProductivityAdvice } from '../services/geminiService';

const ProductivityCoach: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!task.trim()) return;
    setLoading(true);
    const advice = await getProductivityAdvice(task);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 glass-morphism rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
          <div className="bg-emerald-700 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Mentor IA Productividad</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="p-4 max-h-[400px] overflow-y-auto space-y-4">
            <p className="text-xs text-slate-500 italic">"La tecnología no es el fin, sino el medio para liberar tu potencial humano."</p>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400">¿Qué quieres optimizar hoy?</label>
              <textarea 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Ej: Gestionar mis correos de clientes..."
                className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none h-20"
              />
            </div>

            <button 
              onClick={handleAsk}
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Pensando...' : 'Obtener Estrategia'}
            </button>

            {response && (
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{response}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-xl hover:bg-emerald-700 hover:scale-110 transition-all active:scale-95 group"
        >
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium text-sm">IA Coach</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ProductivityCoach;
