
import React from 'react';
import { Grid } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  size: 'large' | 'small';
}

const PortfolioSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Dangote Cement Brand Visuals',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      tags: ['Video', 'Graphics', 'Digital DMS'],
      size: 'large',
    },
    {
      id: 2,
      title: 'Theboomshow Football Podcast',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop',
      tags: ['Audio Production', 'Guest Relations'],
      size: 'small',
    },
    {
      id: 3,
      title: 'Leadway Assurance Campaign',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      tags: ['Marketing', 'Branding'],
      size: 'small',
    },
    {
      id: 4,
      title: 'Eureka Media Ad Shoots',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
      tags: ['Logistics', 'Equipment Setup'],
      size: 'large',
    },
  ];

  return (
    <section id="portfolio" className="lg:min-h-screen flex flex-col justify-center py-10 lg:py-24 max-w-2xl mx-auto overflow-hidden">
      {/* Badge */}
      <div data-gsap-animate="fade-right" className="flex items-center gap-2 border border-[#333] rounded-full px-4 py-1.5 w-fit mb-6 lg:mb-10">
        <Grid size={12} className="text-[#999]" />
        <span className="text-[9px] uppercase tracking-[2px] font-medium text-white">Portfolio</span>
      </div>

      {/* Heading */}
      <h2 data-gsap-animate="fade-up" className="text-3xl md:text-4xl font-normal leading-tight mb-8 lg:mb-14 tracking-tight">
        Featured <span className="text-primary">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div data-gsap-stagger className="space-y-8 lg:space-y-10">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <div 
              className={`relative overflow-hidden rounded-[25px] transition-all duration-500 mb-4 lg:mb-5 bg-[#222] ${
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
                    className="bg-white text-black px-3 lg:px-3.5 py-1 lg:py-1.5 rounded-full text-[9px] lg:text-[10px] font-bold tracking-tight shadow-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Project Title */}
            <h3 className="text-lg lg:text-2xl font-light text-white group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
