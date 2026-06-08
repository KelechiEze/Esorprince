
import React from 'react';
import { FileText, Camera, Users, MessageSquare, Monitor, TrendingUp, Globe, Layers, Compass } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Brand Strategy',
      percentage: 95,
      icon: <Compass size={36} />,
    },
    {
      name: 'Web Design & CRO',
      percentage: 90,
      icon: <Monitor size={36} />,
    },
    {
      name: 'Social Growth',
      percentage: 96,
      icon: <Users size={36} />,
    },
    {
      name: 'Storytelling',
      percentage: 94,
      icon: <MessageSquare size={36} />,
    },
    {
      name: 'SEO Strategy',
      percentage: 88,
      icon: <Globe size={36} />,
    },
    {
      name: 'Paid Advertising',
      percentage: 85,
      icon: <TrendingUp size={36} />,
    },
    {
      name: 'Content Direction',
      percentage: 92,
      icon: <Camera size={36} />,
    },
    {
      name: 'Campaign Management',
      percentage: 93,
      icon: <Layers size={36} />,
    },
  ];

  return (
    <section id="skills" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      {/* Badge */}
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <FileText size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">My Skills</span>
      </div>

      {/* Heading */}
      <h2 data-gsap-animate="fade-up" className="text-2xl md:text-3xl font-normal leading-tight mb-6 lg:mb-10 tracking-tight text-[#1a1a1a] dark:text-white">
        My <span className="text-primary">Advantages</span>
      </h2>

      {/* Grid of skill items */}
      <div data-gsap-stagger className="grid grid-cols-2 md:grid-cols-4 gap-x-4 lg:gap-x-5 gap-y-6 lg:gap-y-10">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 lg:gap-4 group">
            <div className="w-full aspect-[4/5] md:aspect-[3/4] rounded-[50px] border border-black/10 dark:border-[#333] bg-white dark:bg-transparent flex flex-col items-center justify-center gap-4 lg:gap-6 hover:border-primary transition-all duration-300 shadow-sm dark:shadow-none">
              <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 text-[#1a1a1a] dark:text-white">
                {React.cloneElement(skill.icon as any, { className: 'text-current' })}
              </div>
              <div className="text-xl md:text-2xl font-light text-primary">
                {skill.percentage}%
              </div>
            </div>
            <span className="text-gray-400 dark:text-[#999] text-[9px] lg:text-[10px] font-medium uppercase tracking-wider">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
