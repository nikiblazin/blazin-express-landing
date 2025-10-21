import { useState, useEffect } from "react";
import fit1 from "@/assets/fit1.png";
import fit2 from "@/assets/fit2.png";
import fit3 from "@/assets/fit3.png";
import fit4 from "@/assets/fit4.png";
import fit5 from "@/assets/fit5.png";
import fit6 from "@/assets/fit6.png";
import fit7 from "@/assets/fit7.png";
import fit8 from "@/assets/fit8.png";

const fitImages = [fit1, fit2, fit3, fit4, fit5, fit6, fit7, fit8];

export const FitsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % fitImages.length;
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative">
      {fitImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 px-4 flex items-center justify-center"
          style={{
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 200ms ease-in-out',
            pointerEvents: currentIndex === index ? 'auto' : 'none',
          }}
        >
          <div style={{ 
            width: '100%', 
            maxWidth: '480px', 
            margin: '0 auto' 
          }}>
            <div 
              style={{ 
                position: 'relative',
                width: '100%',
                paddingBottom: '133.33%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                clipPath: 'inset(0 round 24px)',
                WebkitClipPath: 'inset(0 round 24px)',
              }}
            >
              <img
                src={image}
                alt={`Fit ${index + 1}`}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  WebkitBorderRadius: '24px',
                  MozBorderRadius: '24px',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
