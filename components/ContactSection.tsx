
import React from 'react';
import { Mail, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      {/* Badge */}
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <Mail size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">Contact</span>
      </div>

      {/* Heading */}
      <h2 data-gsap-animate="fade-up" className="text-2xl md:text-3xl font-normal leading-tight mb-5 lg:mb-8 tracking-tight text-[#1a1a1a] dark:text-white">
        Let's Work <span className="text-primary">Together!</span>
      </h2>

      <h3 data-gsap-animate="fade-up" data-gsap-delay="0.1" className="text-lg lg:text-3xl font-light mb-10 lg:mb-14 hover:text-primary transition-colors text-[#1a1a1a] dark:text-white">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="underline underline-offset-8 decoration-1 decoration-black/10 dark:decoration-[#333] hover:decoration-primary">{PERSONAL_INFO.email}</a>
      </h3>

      <div data-gsap-stagger className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div>
          <p className="text-[9px] uppercase tracking-[3px] text-gray-400 dark:text-[#666] mb-3">Phone</p>
          <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-light text-[#1a1a1a] dark:text-white hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-[3px] text-gray-400 dark:text-[#666] mb-3">Location</p>
          <p className="text-lg font-light text-[#1a1a1a] dark:text-white">{PERSONAL_INFO.location}</p>
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-[3px] text-gray-400 dark:text-[#666] mb-3">Social</p>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-light text-[#1a1a1a] dark:text-white hover:text-primary transition-colors">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
