
import React from 'react';
import { FileText, Camera, ShieldCheck, Users, Clock, Lightbulb, MessageSquare, Monitor } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Project Management',
      percentage: 95,
      icon: <ShieldCheck size={36} />,
    },
    {
      name: 'Videography',
      percentage: 90,
      icon: <Camera size={36} />,
    },
    {
      name: 'Cinematography',
      percentage: 88,
      icon: <Camera size={36} />,
    },
    {
      name: 'Customer Service',
      percentage: 92,
      icon: <Users size={36} />,
    },
    {
      name: 'Time Management',
      percentage: 96,
      icon: <Clock size={36} />,
    },
    {
      name: 'Leadership',
      percentage: 90,
      icon: <Lightbulb size={36} />,
    },
    {
      name: 'Communication',
      percentage: 94,
      icon: <MessageSquare size={36} />,
    },
    {
      name: 'Microsoft Office',
      percentage: 98,
      icon: <Monitor size={36} />,
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
      <h2 data-gsap-animate="fade-up" className="text-3xl md:text-4xl font-normal leading-tight mb-8 lg:mb-14 tracking-tight text-[#1a1a1a] dark:text-white">
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
              <div className="text-2xl md:text-3xl font-light text-primary">
                {skill.percentage}%
              </div>
            </div>
            <span className="text-gray-400 dark:text-[#999] text-[10px] lg:text-[11px] font-medium uppercase tracking-wider">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
