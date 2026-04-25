
import React from 'react';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface SidebarRightProps {
  onMenuToggle?: () => void;
}

const SidebarRight: React.FC<SidebarRightProps> = ({ onMenuToggle }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex w-[100px] h-screen fixed right-0 top-0 flex-col items-center justify-between py-10 z-50 pointer-events-none">
      {/* Menu Hamburger - Reduced size and added space from edge */}
      <button 
        onClick={onMenuToggle}
        className="w-11 h-11 border border-[#333] rounded-full flex items-center justify-center text-[#666] hover:text-white hover:border-white transition-all bg-black/50 backdrop-blur-sm pointer-events-auto"
      >
        <Menu size={18} />
      </button>

      {/* Vertical Nav - Moved slightly left for 'space' feel */}
      <div className="flex flex-col gap-6 items-center p-4 border border-[#333] rounded-full bg-black/80 backdrop-blur-md pointer-events-auto mr-4 shadow-xl">
        {NAV_ITEMS.map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            className="w-8 h-8 flex items-center justify-center text-[#666] hover:text-primary transition-all duration-300 group relative"
            title={item.label}
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute right-12 bg-[#333] text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="h-14 w-14" /> {/* Spacer */}
    </div>
  );
};

export default SidebarRight;
