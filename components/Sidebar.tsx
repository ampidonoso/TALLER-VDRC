
import React from 'react';
import { NavItem, Section } from '../types';

interface SidebarProps {
  items: NavItem[];
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, activeSection, onNavigate }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white p-6 hidden lg:flex flex-col z-50">
      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-bold text-slate-900">V</div>
        <h1 className="text-xl font-bold tracking-tight">VDRC<span className="text-emerald-400">.</span></h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
              activeSection === item.id 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 translate-x-1' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="pt-6 border-t border-slate-800 text-xs text-slate-500">
        <p>© 2025 Vicente Donoso</p>
        <p>Productividad Digital Pro</p>
      </div>
    </aside>
  );
};

export default Sidebar;
