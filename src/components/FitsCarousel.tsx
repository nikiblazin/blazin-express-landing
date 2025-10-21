import { useEffect, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollAmount += scrollSpeed;
      
      // Reset when we've scrolled through half the content (since it's duplicated)
      if (scrollAmount >= scrollContainer.scrollHeight / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollTop = scrollAmount;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
      <div
        ref={scrollRef}
        className="h-full overflow-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Duplicate images for seamless loop */}
          {[...fitImages, ...fitImages].map((image, index) => (
            <div key={index} className="flex-shrink-0 px-4">
              <div className="relative aspect-[3/4] w-full max-w-[280px] md:max-w-[320px] mx-auto">
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
    </div>
  );
};
