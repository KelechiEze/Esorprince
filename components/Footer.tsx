
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-[#333] mt-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-[#666] text-[9px] uppercase tracking-[3px]">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-[#666] hover:text-primary text-[8px] uppercase tracking-[2px] transition-colors">Styleguide</a>
            <a href="#" className="text-[#666] hover:text-primary text-[8px] uppercase tracking-[2px] transition-colors">Licensing</a>
            <a href="#" className="text-[#666] hover:text-primary text-[8px] uppercase tracking-[2px] transition-colors">Changelog</a>
          </div>
          
          <p className="text-[#999] text-[12px] uppercase tracking-[3px] font-medium">
            Built by <a 
              href="https://www.linkedin.com/in/kelechi-joseph-934449340/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-white transition-colors font-bold underline underline-offset-4 decoration-primary/30"
            >
              Kelechi Eze
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
