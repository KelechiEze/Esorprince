
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Reset initial states
    gsap.set(textRef.current, { y: 100, opacity: 0 });
    gsap.set(progressRef.current, { scaleX: 0 });

    tl.to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    })
    .to(progressRef.current, {
      scaleX: 1,
      duration: 2,
      ease: "power2.inOut",
    }, "-=0.5")
    .to(textRef.current, {
      letterSpacing: "20px",
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
    }, "+=0.2")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative overflow-hidden mb-8">
        <h1 
          ref={textRef}
          className="text-4xl md:text-7xl font-bold tracking-[5px] text-white uppercase italic"
        >
          Meet Me
        </h1>
      </div>
      
      <div className="w-48 md:w-64 h-[1px] bg-[#333] relative">
        <div 
          ref={progressRef}
          className="absolute inset-0 bg-primary origin-left scale-x-0"
        />
      </div>

      <div className="absolute top-10 flex items-center gap-2 opacity-50">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] uppercase tracking-[3px] text-white">Esor-Prince Portfolio</span>
      </div>
    </div>
  );
};

export default Preloader;
