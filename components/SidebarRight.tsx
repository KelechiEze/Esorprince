
import React from 'react';
import { Menu } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ThemeToggle from './ThemeToggle';

interface SidebarRightProps {
  onMenuToggle?: () => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const SidebarRight: React.FC<SidebarRightProps> = ({ onMenuToggle, theme, toggleTheme }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:flex w-[100px] h-screen fixed right-0 top-0 flex-col items-center justify-between py-10 z-50 pointer-events-none">
      {/* Menu Hamburger */}
      <button 
        onClick={onMenuToggle}
        className="w-11 h-11 border border-black/10 dark:border-[#333] rounded-full flex items-center justify-center text-black/60 dark:text-[#666] hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all bg-white/50 dark:bg-black/50 backdrop-blur-sm pointer-events-auto"
      >
        <Menu size={18} />
      </button>

      {/* Vertical Nav */}
      <div className="flex flex-col gap-6 items-center p-4 border border-black/10 dark:border-[#333] rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md pointer-events-auto mr-4 shadow-xl">
        {NAV_ITEMS.map((item) => (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)}
            className="w-8 h-8 flex items-center justify-center text-black/40 dark:text-[#666] hover:text-primary transition-all duration-300 group relative"
            title={item.label}
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute right-12 bg-white dark:bg-[#333] text-black dark:text-white text-[9px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg backdrop-blur-md whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold border border-black/10 dark:border-[#444]">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="pointer-events-auto">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default SidebarRight;
