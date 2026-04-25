
import React, { useEffect, useRef } from 'react';

interface BackgroundControllerProps {
  type: string;
  primaryColor: string;
}

const BackgroundController: React.FC<BackgroundControllerProps> = ({ type, primaryColor }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 40, g: 233, b: 140 };
    };

    const rgb = hexToRgb(primaryColor);
    const colorStr = (opacity: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

    const draw = () => {
      time += 0.005; // Slower, smoother time progression
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      switch (type) {
        case 'Earth Lines Sphere': {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const radius = Math.min(canvas.width, canvas.height) * 0.3;
          ctx.strokeStyle = colorStr(0.15);
          ctx.lineWidth = 1;

          // Latitudes
          for (let i = 0; i < 15; i++) {
            const angle = (i / 15) * Math.PI;
            const rLat = radius * Math.sin(angle);
            const yLat = radius * Math.cos(angle);
            
            ctx.beginPath();
            ctx.ellipse(centerX, centerY + yLat, rLat, rLat * 0.2, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          // Longitudes
          for (let i = 0; i < 8; i++) {
            const lonAngle = (i / 8) * Math.PI + (time * 2);
            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(lonAngle)), radius, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
          break;
        }

        case '3D Abstract Ball': {
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const orbitRadius = 150;
          
          for (let i = 0; i < 6; i++) {
            const angle = time * 3 + (i * Math.PI * 2) / 6;
            const x = centerX + Math.cos(angle) * orbitRadius;
            const y = centerY + Math.sin(angle * 0.5) * orbitRadius;
            const size = 60 + Math.sin(time * 5 + i) * 30;

            const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
            grad.addColorStop(0, colorStr(0.2));
            grad.addColorStop(1, 'transparent');
            
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        }

        case 'Water Waves': {
          ctx.lineWidth = 1.5;
          for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.strokeStyle = colorStr(0.1 + i * 0.02);
            const yBase = canvas.height * (0.3 + i * 0.1);
            ctx.moveTo(0, yBase);
            for (let x = 0; x < canvas.width; x += 5) {
              const y = yBase + Math.sin(x * 0.003 + time * 10 + i) * 40;
              ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          break;
        }

        case 'Liquids Wavy': {
          // Optimized Liquid/Plasma effect
          const step = 40; // Larger step for performance
          for (let x = 0; x < canvas.width; x += step) {
            for (let y = 0; y < canvas.height; y += step) {
              const dx = x / canvas.width - 0.5;
              const dy = y / canvas.height - 0.5;
              const dist = Math.sqrt(dx * dx + dy * dy);
              
              const v = Math.sin(dist * 10 - time * 20) + 
                        Math.sin(x * 0.01 + time * 15) + 
                        Math.sin(y * 0.01 + time * 10);
              
              const alpha = Math.max(0, (v + 3) / 12); // Normalize and scale
              if (alpha > 0.05) {
                ctx.fillStyle = colorStr(alpha * 0.2);
                ctx.fillRect(x, y, step, step);
              }
            }
          }
          break;
        }

        case 'Simple Strings': {
          ctx.lineWidth = 0.8;
          const points = 12;
          for (let i = 0; i < points; i++) {
            ctx.beginPath();
            ctx.strokeStyle = colorStr(0.15);
            
            const startX = (Math.sin(time * 2 + i) * 0.5 + 0.5) * canvas.width;
            const startY = (Math.cos(time * 1.5 + i * 0.5) * 0.5 + 0.5) * canvas.height;
            const endX = (Math.cos(time * 3 + i * 2) * 0.5 + 0.5) * canvas.width;
            const endY = (Math.sin(time * 2.5 + i * 1.5) * 0.5 + 0.5) * canvas.height;
            
            ctx.moveTo(startX, startY);
            ctx.bezierCurveTo(
              canvas.width / 2, canvas.height / 2,
              canvas.width / 3, canvas.height / 3,
              endX, endY
            );
            ctx.stroke();
          }
          break;
        }

        case 'Solid Color': {
          // Subtle radial glow to show the mode is active
          const grad = ctx.createRadialGradient(
            canvas.width / 2, canvas.height / 2, 0,
            canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.8
          );
          grad.addColorStop(0, colorStr(0.03));
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          break;
        }

        default:
          break;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type, primaryColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 opacity-50"
    />
  );
};

export default BackgroundController;
