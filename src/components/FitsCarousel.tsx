import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 600, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {fitImages.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 px-4 flex items-center justify-center"
            >
              <div className="w-full max-w-[480px] mx-auto">
                <div 
                  className="relative w-full rounded-[24px] overflow-hidden"
                  style={{ 
                    paddingBottom: '133.33%',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <img
                    src={image}
                    alt={`Fit ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};