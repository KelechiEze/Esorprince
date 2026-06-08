
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
        At the Junction of <br className="hidden md:block" />
        Strategy, Design & <span className="text-primary">Execution</span>
      </h2>

      <div data-gsap-stagger className="space-y-6">
        <p className="text-gray-500 dark:text-[#999] text-xs md:text-sm leading-loose font-normal">
          Samuel Johnson is a Digital Marketing Strategist with nearly a decade of experience helping brands grow, build communities, and drive meaningful engagement online. He is the co-founder of Well to Fit, a multi-platform health and wellness brand with a community of 200,000+ built through strategic content, consistent storytelling, and audience-first thinking across Instagram, Facebook, TikTok, and YouTube.
        </p>
        <p className="text-gray-500 dark:text-[#999] text-xs md:text-sm leading-loose font-normal">
          His work sits at the intersection of strategy, design, and execution. Whether you’re a growing business that needs a conversion-focused website or a personal brand ready to make a strong first impression, Samuel builds with both aesthetics and outcomes in mind. When you work with Samuel, you’re not just getting a designer, you’re getting a strategist who understands how your website fits into the bigger picture of your brand.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
