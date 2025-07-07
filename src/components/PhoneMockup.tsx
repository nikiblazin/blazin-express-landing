
import { useState, useEffect } from "react";
import { fashionPosts } from "@/data/fashionPosts";
import { StatusBar } from "./phone/StatusBar";
import { SideActions } from "./phone/SideActions";
import { ContentOverlay } from "./phone/ContentOverlay";
import { ProductBar } from "./phone/ProductBar";
import { BottomNavigation } from "./phone/BottomNavigation";

export const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fashionPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-white/20">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
          
          <StatusBar />

          {/* Feed Content */}
          <div className="pt-8 h-full overflow-hidden">
            {fashionPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="absolute inset-0 pt-8 transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateY(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0.3
                }}
              >
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Top-right Trend indicator */}
                <div className="absolute top-4 right-4 flex flex-col items-center">
                  <div className="bg-white/90 rounded-full px-3 py-1 mb-2">
                    <span className="text-black text-xs font-semibold">Trend</span>
                  </div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>

                <SideActions likes={post.likes} comments={post.comments} />
                <ContentOverlay 
                  username={post.username} 
                  title={post.title} 
                  description={post.description} 
                />
                <ProductBar items={post.items} />
              </div>
            ))}
          </div>

          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};
