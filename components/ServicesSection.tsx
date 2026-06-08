
import React from 'react';
import { Layers, Globe, TrendingUp, Briefcase } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const specializations = [
    {
      title: 'Digital Marketing Strategy',
      description: 'Developing data-driven, multi-platform growth roadmaps to scale audience reach, brand awareness, and user engagement.',
      projectCount: 54,
      icon: <TrendingUp size={20} className="text-primary" />,
    },
    {
      title: 'Conversion-Focused Websites',
      description: 'Designing and building fast, visually polished, and high-converting websites optimized for both aesthetics and results.',
      projectCount: 42,
      icon: <Globe size={20} className="text-primary" />,
    },
    {
      title: 'Brand Storytelling & Content',
      description: 'Crafting content guidelines, narrative strategies, and social media campaigns built for sustainable community growth.',
      projectCount: 88,
      icon: <Briefcase size={20} className="text-primary" />,
    },
  ];

  return (
    <section id="services" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      {/* Services Badge */}
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <Layers size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">Services</span>
      </div>

      {/* Heading */}
      <h2 data-gsap-animate="fade-up" className="text-2xl md:text-3xl font-normal leading-tight mb-6 lg:mb-10 tracking-tight text-[#1a1a1a] dark:text-white">
        My <span className="text-primary">Specializations</span>
      </h2>

      {/* Services Cards */}
      <div data-gsap-stagger className="space-y-4 lg:space-y-5">
        {specializations.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white dark:bg-transparent border border-black/10 dark:border-[#333] hover:border-primary rounded-[25px] p-6 lg:p-7 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-2 lg:space-y-3">
                <h3 className="text-lg md:text-xl font-light text-[#1a1a1a] dark:text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-[#999] text-xs max-w-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="hidden sm:block">
                {service.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
