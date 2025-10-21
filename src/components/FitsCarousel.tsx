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
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate images for seamless infinite loop
  const allImages = [...fitImages, ...fitImages];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Reset to beginning when we reach the duplicated section
    if (currentIndex === fitImages.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // Match transition duration
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative">
      <div
        className={`flex flex-col ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {allImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-[500px] md:h-[600px] flex-shrink-0 px-4 flex items-center justify-center"
          >
            <div className="relative aspect-[3/4] w-full max-w-[360px] md:max-w-[480px] mx-auto">
              <img
                src={image}
                alt={`Fit ${(index % fitImages.length) + 1}`}
                className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
