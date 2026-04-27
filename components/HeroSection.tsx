
import React from 'react';
import { Home, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const mainContainer = nextSection.closest('main');
      if (window.innerWidth >= 1024 && mainContainer) {
        mainContainer.scrollTo({
          top: nextSection.offsetTop,
          behavior: 'smooth'
        });
      } else {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-[80vh] lg:min-h-screen flex flex-col justify-center py-10 lg:py-10 max-w-2xl mx-auto overflow-hidden">
      <div 
        data-gsap-animate="fade-right" 
        className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
      >
        <Home size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">Introduce</span>
      </div>

      <h1 
        data-gsap-animate="fade-up" 
        data-gsap-delay="0.2"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 lg:mb-8 tracking-tight text-[#1a1a1a] dark:text-white"
      >
        Meet <span className="text-primary">{PERSONAL_INFO.name}</span>, <br />
        Production Assistant & Production Executive
      </h1>

      <p 
        data-gsap-animate="fade-up" 
        data-gsap-delay="0.4"
        className="text-gray-500 dark:text-[#999] text-sm md:text-base max-w-md leading-relaxed mb-8 lg:mb-14"
      >
        {PERSONAL_INFO.summary}
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 sm:gap-0 mt-2">
        <div data-gsap-stagger className="flex gap-10 lg:gap-14">
          <div data-gsap-animate="scale-in">
            <div className="text-4xl lg:text-5xl font-normal text-primary mb-1 tracking-tighter">7+</div>
            <div className="text-gray-400 dark:text-[#666] text-[9px] uppercase tracking-[2px] font-medium">Years in <br/> Admin & Media</div>
          </div>
          <div data-gsap-animate="scale-in" data-gsap-delay="0.1">
            <div className="text-4xl lg:text-5xl font-normal text-primary mb-1 tracking-tighter">100+</div>
            <div className="text-gray-400 dark:text-[#666] text-[9px] uppercase tracking-[2px] font-medium">Projects <br/> Assisted</div>
          </div>
        </div>

        <div 
          onClick={scrollToNext}
          data-gsap-animate="spin-in"
          data-gsap-delay="0.6"
          className="relative w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center cursor-pointer group self-end sm:self-auto"
        >
          <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] uppercase tracking-[3px] fill-gray-400 dark:fill-[#666] group-hover:fill-black dark:group-hover:fill-white transition-colors">
              <textPath href="#circlePath">My Projects • My Projects • </textPath>
            </text>
          </svg>
          <ArrowDown size={24} className="text-[#1a1a1a] dark:text-white group-hover:translate-y-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
