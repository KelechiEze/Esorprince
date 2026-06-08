import React from 'react';
import { Grid } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  size: 'large' | 'small';
  url: string;
}

const PortfolioSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Well to Fit Digital Community Hub',
      image: '/frot1.jpeg',
      tags: ['Growth Strategy', 'Community Hub', 'Well To Fit'],
      size: 'large',
      url: 'https://welltofit.com/',
    },
    {
      id: 2,
      title: 'Fit & Raw Organic Campaign',
      image: '/frot2.jpeg',
      tags: ['Growth Marketing', 'Storytelling'],
      size: 'small',
      url: 'https://greydient.co/',
    },
    {
      id: 3,
      title: 'Verve Studio Brand Launch',
      image: '/frot3.jpeg',
      tags: ['Conversion Design', 'UI/UX'],
      size: 'small',
      url: 'https://www.medsurgelective.co.uk/',
    },
    {
      id: 4,
      title: 'Aura Media Funnel Optimization',
      image: '/frot4.jpeg',
      tags: ['CRO', 'Marketing Analytics'],
      size: 'large',
      url: 'https://runcheck.online/',
    },
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank'); // Opens in new tab
    // OR use this to open in the same tab:
    // window.location.href = url;
  };

  return (
    <section id="portfolio" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      {/* Badge */}
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-black/10 dark:border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10 bg-white dark:bg-transparent shadow-sm dark:shadow-none">
        <Grid size={12} className="text-gray-400 dark:text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-[#1a1a1a] dark:text-white">Portfolio</span>
      </div>

      {/* Heading */}
      <h2 data-gsap-animate="fade-up" className="text-2xl md:text-3xl font-normal leading-tight mb-6 lg:mb-10 tracking-tight text-[#1a1a1a] dark:text-white">
        Featured <span className="text-primary">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div data-gsap-stagger className="space-y-8 lg:space-y-10">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
            onClick={() => handleProjectClick(project.url)}
          >
            <div 
              className={`relative overflow-hidden rounded-[25px] transition-all duration-500 mb-4 lg:mb-5 bg-gray-100 dark:bg-[#222] border border-black/5 dark:border-none ${
                project.size === 'large' ? 'aspect-[16/9]' : 'aspect-square'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Tags Overlay */}
              <div className="absolute bottom-4 lg:bottom-5 left-4 lg:left-5 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-white text-black px-3 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-[8px] lg:text-[9px] font-bold tracking-tight shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Title */}
            <h3 className="text-base lg:text-xl font-light text-[#1a1a1a] dark:text-white group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;