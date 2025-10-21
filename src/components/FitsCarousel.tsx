import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {fitImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-[280px] md:basis-[320px]">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={image}
                  alt={`Fit ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl shadow-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
