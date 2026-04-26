
import React from 'react';
import { Layers, Camera, Video, Briefcase } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const specializations = [
    {
      title: 'Content Creation',
      description: 'Producing high-quality photos, videos, and infographics aligned with modern brand values.',
      projectCount: 45,
      icon: <Camera size={20} className="text-primary" />,
    },
    {
      title: 'Production Assistance',
      description: 'Managing logistics for shoots, booking locations, coordinating talent, and setting up equipment.',
      projectCount: 32,
      icon: <Video size={20} className="text-primary" />,
    },
    {
      title: 'Office Administration',
      description: 'Streamlining administrative processes, managing office operations, and supporting executive staff.',
      projectCount: 15,
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
      <h2 data-gsap-animate="fade-up" className="text-3xl md:text-4xl font-normal leading-tight mb-8 lg:mb-12 tracking-tight text-[#1a1a1a] dark:text-white">
        My <span className="text-primary">Specializations</span>
      </h2>

      {/* Services Cards */}
      <div data-gsap-stagger className="space-y-4 lg:space-y-5">
        {specializations.map((service, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white dark:bg-transparent border border-black/10 dark:border-[#333] hover:border-primary rounded-[25px] p-6 lg:p-8 transition-all duration-300 shadow-sm dark:shadow-none"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-2 lg:space-y-3">
                <h3 className="text-xl md:text-2xl font-light text-[#1a1a1a] dark:text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-[#999] text-xs md:text-sm max-w-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-2 lg:pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] dark:text-white border-b border-transparent group-hover:border-primary transition-all duration-300 cursor-pointer">
                    {service.projectCount} Projects
                  </span>
                </div>
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
