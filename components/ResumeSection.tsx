
import React from 'react';
import { Briefcase } from 'lucide-react';

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      period: '2020 - Present',
      items: [
        { title: 'Co-Founder & Brand Director', company: 'Well to Fit (Wellness Brand & Community)' },
        { title: 'Senior Digital Marketing Consultant', company: 'Freelance & Independent Client Projects' },
      ],
    },
    {
      period: '2017 - 2020',
      items: [
        { title: 'Lead Growth Strategist', company: 'Apex Digital Marketing Agency' },
      ],
    },
    {
      period: '2015 - 2017',
      items: [
        { title: 'Digital Marketing Specialist', company: 'Wellness Media Group' },
      ],
    },
    {
      period: '2011 - 2015',
      items: [
        { title: 'B.S. in Communications & Digital Media', company: 'New York University' },
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
