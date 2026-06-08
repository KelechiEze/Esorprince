
import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Settings, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface SidebarLeftProps {
  onConfigClick?: () => void;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ onConfigClick }) => {
  return (
    <div className="w-full lg:w-[380px] h-fit lg:h-screen lg:fixed lg:left-0 top-0 p-4 lg:p-6 z-50 lg:overflow-y-auto custom-scrollbar">
      <div className="bg-white dark:bg-[#191919] border border-black/10 dark:border-[#333] rounded-[30px] p-6 lg:p-8 flex flex-col items-center h-fit lg:min-h-full relative shadow-lg dark:shadow-none">
        
        {/* Header with Logo and Title - Hidden on mobile */}
        <div className="w-full hidden lg:flex justify-between items-start mb-4 lg:mb-6">
          <div className="flex items-center gap-1.5">
             <span className="text-xl font-bold tracking-tight text-[#1a1a1a] dark:text-white">{PERSONAL_INFO.name}</span>
             <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center translate-y-0.5">
               <span className="text-[9px] text-primary font-bold">s</span>
             </div>
          </div>
          <div className="text-right pt-0.5">
            <p className="text-[9px] font-bold leading-tight text-[#1a1a1a] dark:text-white uppercase tracking-wider">Marketing</p>
            <p className="text-[9px] font-bold leading-tight text-[#1a1a1a] dark:text-white uppercase tracking-wider">Strategist</p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full aspect-[1/1.5] rounded-[40px] overflow-hidden mb-6 lg:mb-8 bg-gray-100 dark:bg-[#222] border border-black/5 dark:border-none p-4 py-8 flex items-center justify-center">
          <img 
            src="https://kelechieze.wordpress.com/wp-content/uploads/2026/06/whatsapp-image-2026-06-08-at-15.47.12.jpeg" 
            alt={PERSONAL_INFO.fullName} 
            className="w-full h-full object-contain grayscale brightness-100 dark:brightness-90 transition-transform duration-500 hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-1 mb-6 lg:mb-8">
          <h2 className="text-xs font-normal tracking-tight text-gray-500 dark:text-[#999]">{PERSONAL_INFO.email}</h2>
          <p className="text-[#1a1a1a] dark:text-white text-base font-normal">{PERSONAL_INFO.location}</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 dark:text-[#666] text-[10px] font-medium mb-6 lg:mb-8">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved
        </div>

        {/* Social Icons */}
        <div className="flex gap-2.5 mb-6 lg:mb-8">
          {[
            { Icon: Linkedin, href: PERSONAL_INFO.linkedin },
            { Icon: Instagram, href: (PERSONAL_INFO as any).instagram },
            { Icon: Facebook, href: (PERSONAL_INFO as any).facebook }
          ].map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-black/10 dark:border-[#333] bg-gray-50/50 dark:bg-transparent flex items-center justify-center text-gray-400 dark:text-[#999] hover:text-primary hover:border-primary transition-all duration-300 group"
            >
              <item.Icon size={16} className="transition-transform group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="w-full bg-primary hover:opacity-90 text-black font-bold py-3.5 rounded-full flex items-center justify-center gap-3 transition-all duration-300 uppercase tracking-[2px] text-[11px] shadow-[0_8px_25px_rgba(var(--primary-rgb),0.25)] active:scale-95"
        >
          <Mail size={16} strokeWidth={2.5} />
          Hire Me!
        </a>

        {/* Settings/Config Floating Icon */}
        <div 
          onClick={onConfigClick}
          className="absolute top-10 -left-4 w-9 h-9 bg-white dark:bg-[#191919] border border-black/10 dark:border-[#333] rounded-full flex items-center justify-center text-gray-400 dark:text-[#666] cursor-pointer hover:text-black dark:hover:text-white transition-colors shadow-lg dark:shadow-none z-10"
        >
          <Settings size={16} className="animate-[spin_10s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
