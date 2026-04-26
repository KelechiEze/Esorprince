
import React, { useState, useEffect, useRef } from 'react';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundController from './components/BackgroundController';
import Preloader from './components/Preloader';
import ThemeToggle from './components/ThemeToggle';
import { NAV_ITEMS, PERSONAL_INFO } from './constants';
import { X, Menu as MenuIcon, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

import { gsap as gsapModule } from 'gsap';
import { ScrollTrigger as ScrollTriggerModule } from 'gsap/ScrollTrigger';

const THEME_COLORS = [
  { name: 'Mint', value: '#28e98c' },
  { name: 'Yellow', value: '#e4af12' },
  { name: 'Orange', value: '#fe6f1d' },
  { name: 'Cyan', value: '#14c5fd' },
  { name: 'Grey', value: '#c0c0c0' },
  { name: 'Blue', value: '#1338f3' },
  { name: 'Red', value: '#f31313' },
  { name: 'Pink', value: '#ff99cc' },
];

const BACKGROUNDS = [
  'Earth Lines Sphere',
  '3D Abstract Ball',
  'Water Waves',
  'Liquids Wavy',
  'Solid Color',
  'Simple Strings',
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#28e98c');
  const [bgType, setBgType] = useState('Earth Lines Sphere');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Sync theme with document class
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Update CSS Variable for primary color
    document.documentElement.style.setProperty('--primary', primaryColor);
    
    // Helper to get RGB from hex for shadow opacity
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? 
        `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
        '40, 233, 140';
    };
    document.documentElement.style.setProperty('--primary-rgb', hexToRgb(primaryColor));
  }, [primaryColor]);

  useEffect(() => {
    const activeGsap = (window as any).gsap || gsapModule;
    const activeScrollTrigger = (window as any).ScrollTrigger || ScrollTriggerModule;

    if (activeGsap && activeScrollTrigger) {
      activeGsap.registerPlugin(activeScrollTrigger);
      const animElements = document.querySelectorAll('[data-gsap-animate]');
      
      animElements.forEach((el) => {
        const animation = el.getAttribute('data-gsap-animate') || 'fade-up';
        const delay = parseFloat(el.getAttribute('data-gsap-delay') || '0');
        const scroller = window.innerWidth >= 1024 ? mainRef.current : window;

        let fromVars: any = { opacity: 0 };
        let toVars: any = { 
          opacity: 1, 
          duration: 1, 
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            scroller: scroller,
            toggleActions: "play none none none"
          }
        };

        switch (animation) {
          case 'fade-up':
            fromVars.y = 40;
            toVars.y = 0;
            break;
          case 'fade-down':
            fromVars.y = -40;
            toVars.y = 0;
            break;
          case 'fade-left':
            fromVars.x = 40;
            toVars.x = 0;
            break;
          case 'fade-right':
            fromVars.x = -40;
            toVars.x = 0;
            break;
          case 'scale-in':
            fromVars.scale = 0.8;
            toVars.scale = 1;
            break;
          case 'spin-in':
            fromVars.rotation = -15;
            fromVars.scale = 0.9;
            toVars.rotation = 0;
            toVars.scale = 1;
            break;
        }

        activeGsap.fromTo(el, fromVars, toVars);
      });

      const containers = document.querySelectorAll('[data-gsap-stagger]');
      containers.forEach((container) => {
        const children = container.querySelectorAll(':scope > *');
        const scroller = window.innerWidth >= 1024 ? mainRef.current : window;

        activeGsap.fromTo(children, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              start: "top 85%",
              scroller: scroller,
              toggleActions: "play none none none"
            }
          }
        );
      });
    }

    return () => {
      if (activeScrollTrigger) {
        activeScrollTrigger.getAll().forEach((t: any) => t.kill());
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.innerWidth >= 1024 && mainRef.current) {
        mainRef.current.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-[#f5f5f5] dark:bg-[#000] text-[#1a1a1a] dark:text-white relative flex flex-col lg:flex-row overflow-x-hidden selection:bg-[var(--primary)] selection:text-black transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Dynamic Animated Background Controller */}
        <BackgroundController type={bgType} primaryColor={primaryColor} />

        {/* Mobile Header */}
        {/* Mobile Header - Logo and Controls */}
        <div className="lg:hidden fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[70] pointer-events-none">
          <div className="pointer-events-auto bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 dark:border-[#333] shadow-lg">
            <span className="text-lg font-bold tracking-tight text-[#1a1a1a] dark:text-white">{PERSONAL_INFO.name}</span>
          </div>
          <div className="flex items-center gap-3 pointer-events-auto">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-12 h-12 bg-white dark:bg-[#333] hover:bg-gray-100 dark:hover:bg-[#444] border border-black/10 dark:border-[#444] rounded-full flex items-center justify-center text-black dark:text-white transition-all active:scale-90 shadow-lg"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>

      <SidebarLeft onConfigClick={() => setIsConfigOpen(true)} />

      <main 
        ref={mainRef}
        className="flex-1 lg:ml-[380px] lg:mr-[100px] lg:h-screen lg:overflow-y-auto relative scroll-smooth z-10"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-6 mt-10 lg:mt-0 pb-10">
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <AboutSection />
          </section>
          <section id="resume">
            <ResumeSection />
          </section>
          <section id="services">
            <ServicesSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="portfolio">
            <PortfolioSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
          <Footer />
        </div>
      </main>

      <SidebarRight onMenuToggle={() => setIsMenuOpen(true)} theme={theme} toggleTheme={toggleTheme} />

      {/* Configuration Modal */}
      <div 
        className={`fixed inset-0 z-[120] transition-opacity duration-300 ${isConfigOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsConfigOpen(false)}></div>
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-xl bg-white dark:bg-[#191919] shadow-2xl transform transition-transform duration-500 flex flex-col ${isConfigOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 lg:p-12 flex-1 overflow-y-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-normal text-[#1a1a1a] dark:text-white">Configuration</h2>
              <button onClick={() => setIsConfigOpen(false)} className="text-gray-400 dark:text-white hover:text-primary transition-colors">
                <X size={32} />
              </button>
            </div>

            <div className="space-y-16">
              {/* Colors */}
              <section>
                <h3 className="text-[10px] uppercase tracking-[3px] font-bold text-gray-400 dark:text-[#666] mb-8">Colors</h3>
                <div className="flex flex-wrap gap-5">
                  {THEME_COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setPrimaryColor(color.value)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 relative ${primaryColor === color.value ? 'scale-125 ring-2 ring-primary/50 dark:ring-white/50 ring-offset-4 ring-offset-white dark:ring-offset-[#191919]' : 'hover:scale-110'}`}
                      style={{ backgroundColor: color.value }}
                    >
                      {primaryColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* 3D Shapes / Backgrounds */}
              <section>
                <h3 className="text-[10px] uppercase tracking-[3px] font-bold text-gray-400 dark:text-[#666] mb-8">Three Dimensional Shapes</h3>
                <div className="grid grid-cols-2 gap-y-6 gap-x-12">
                  {BACKGROUNDS.map((bg) => (
                    <button
                      key={bg}
                      onClick={() => setBgType(bg)}
                      className={`text-left text-sm font-bold tracking-tight transition-colors ${bgType === bg ? 'text-primary underline underline-offset-8' : 'text-[#1a1a1a] dark:text-white hover:text-primary'}`}
                    >
                      {bg}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Menu (Overlay) */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-[340px] bg-white dark:bg-[#191919] shadow-2xl transform transition-transform duration-500 p-10 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-gray-400 dark:text-[#999] text-xs font-medium uppercase tracking-[3px]">Menu</h3>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 dark:text-white hover:text-primary transition-colors">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 flex-1 overflow-y-auto pr-4 custom-scrollbar">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-4 text-lg font-light text-gray-400 dark:text-[#666] hover:text-primary transition-colors text-left group"
              >
                <span className="group-hover:text-primary">{item.icon}</span>
                <span className="text-[#1a1a1a] dark:text-white font-medium group-hover:text-primary transition-colors">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-10 border-t border-black/10 dark:border-[#333]">
            <p className="text-gray-400 dark:text-[#666] text-[10px] uppercase tracking-[3px] mb-6">Social</p>
            <div className="flex gap-4">
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-[#666] hover:text-primary transition-colors">
                 <Linkedin size={18} />
               </a>
               <a href="#" className="text-gray-400 dark:text-[#666] hover:text-primary transition-colors"><Instagram size={18} /></a>
               <a href="#" className="text-gray-400 dark:text-[#666] hover:text-primary transition-colors"><Twitter size={18} /></a>
               <a href="#" className="text-gray-400 dark:text-[#666] hover:text-primary transition-colors"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
