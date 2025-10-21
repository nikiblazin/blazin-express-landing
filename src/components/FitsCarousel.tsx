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
      setCurrentIndex((prev) => (prev + 1) % fitImages.length);
    }, 2000); // 2 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative">
      {fitImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-700 ease-in-out px-4 flex items-center justify-center"
          style={{
            transform: `translateY(${(index - currentIndex) * 100}%)`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <div className="relative aspect-[3/4] w-full max-w-[360px] md:max-w-[480px] mx-auto">
            <img
              src={image}
              alt={`Fit ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
