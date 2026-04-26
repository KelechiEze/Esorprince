
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/10 hover:bg-white/10 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 transition-all active:scale-95 shadow-sm group"
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            <Moon size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, rotate: 45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -20, rotate: -45, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-black"
          >
            <Sun size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
