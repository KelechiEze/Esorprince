
import React from 'react';
import { User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <User size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">About</span>
      </div>

      <h2 data-gsap-animate="fade-up" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mb-6 lg:mb-10 tracking-tight text-[#1a1a1a] dark:text-white">
        From Engineering to <br className="hidden md:block" />
        Creative <span className="text-primary">Production</span>
      </h2>

      <div data-gsap-stagger className="space-y-6">
        <p className="text-gray-500 dark:text-[#999] text-xs md:text-sm leading-loose font-normal">
          With a solid foundation in Oil and Gas Engineering, I've transitioned my analytical 
          and structural thinking into the world of creative production and digital content creation. 
          Today, I specialize in managing office operations and supporting executive staff while 
          simultaneously producing high-impact visual content for organizations like Dangote Cement.
        </p>
        <p className="text-gray-500 dark:text-[#999] text-xs md:text-sm leading-loose font-normal">
          I'm highly organized, detail-oriented, and perpetually focused on streamlining processes. 
          Whether it's coordinating logistics for media shoots or managing administrative tasks, 
          I ensure everything runs smoothly and efficiently to contribute to company growth.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
