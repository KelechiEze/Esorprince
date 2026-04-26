
import React from 'react';
import { Briefcase } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      period: 'Mar. 2024 - Present',
      items: [
        { title: 'Content Creator', company: 'Dangote Cement (Media Team)' },
        { title: 'Production Assistant / Office Rep', company: 'Eureka Media' },
      ],
    },
    {
      period: 'Nov. 2024',
      items: [
        { title: 'Production Assistant', company: 'Leadway Assurance' },
      ],
    },
    {
      period: '2023 - 2024',
      items: [
        { title: 'Production Assistant (Content Creator)', company: 'Theboomshow (Football Podcast)' },
      ],
    },
    {
      period: '2018 - 2021',
      items: [
        { title: 'Administration Officer', company: 'Angels Montessori Group of Schools' },
      ],
    },
    {
      period: '2014 - 2017',
      items: [
        { title: 'B.Sc. Oil and Gas Engineering', company: 'All Nations University, Ghana' },
      ],
    },
  ];

  return (
    <section id="resume" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <Briefcase size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">Resume</span>
      </div>

      <h2 data-gsap-animate="fade-up" className="text-3xl md:text-4xl font-normal leading-tight mb-8 lg:mb-14 tracking-tight text-[#1a1a1a] dark:text-white">
        Education & <span className="text-primary">Experience</span>
      </h2>

      <div data-gsap-stagger className="relative border-l border-black/10 dark:border-[#333] ml-2 md:ml-4 pl-8 md:pl-10 space-y-10 lg:space-y-14">
        {experiences.map((group, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[37px] md:-left-[51px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-[#666] group-hover:bg-primary transition-colors duration-300"></div>
            
            <div className="text-gray-500 dark:text-[#999] text-sm mb-3 lg:mb-5 group-hover:text-primary transition-colors duration-300">
              {group.period}
            </div>

            <div className="space-y-6 lg:space-y-8">
              {group.items.map((item, itemIdx) => (
                <div key={itemIdx} className="space-y-1.5">
                  <h3 className="text-xl md:text-2xl font-light text-[#1a1a1a] dark:text-white hover:text-primary transition-colors duration-300 cursor-default">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 dark:text-[#666] text-xs uppercase tracking-wide">
                    {item.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
