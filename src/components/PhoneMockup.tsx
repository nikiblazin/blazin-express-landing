
import { useState, useEffect } from "react";

const fashionPosts = [
  {
    id: 1,
    username: "@stylegoddess",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop",
    title: "Vintage Denim Vibes ✨",
    price: "$89",
    likes: "2.3k"
  },
  {
    id: 2,
    username: "@urbanchic",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=400&fit=crop",
    title: "Street Style Essential 🔥",
    price: "$156",
    likes: "4.1k"
  },
  {
    id: 3,
    username: "@minimalist_queen",
    image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=300&h=400&fit=crop",
    title: "Clean Lines & Comfort 💫",
    price: "$203",
    likes: "1.8k"
  },
  {
    id: 4,
    username: "@boldandbeautiful",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=300&h=400&fit=crop",
    title: "Statement Piece Alert! ⚡",
    price: "$278",
    likes: "5.2k"
  },
  {
    id: 5,
    username: "@trendsetter_nyc",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=400&fit=crop",
    title: "NYC Street Fashion 🏙️",
    price: "$134",
    likes: "3.7k"
  }
];

export const PhoneMockup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fashionPosts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
          
          {/* Status Bar */}
          <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-white text-xs z-10">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* App Header */}
          <div className="absolute top-12 left-0 right-0 z-10 bg-black/90 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-bold text-lg">BLAZIN</h2>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Feed Content */}
          <div className="pt-24 h-full">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${currentIndex * 100}%)` }}
            >
              {fashionPosts.map((post, index) => (
                <div key={post.id} className="h-full relative">
                  {/* Background Image */}
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                      <span className="font-semibold">{post.username}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-cyan-400">{post.price}</span>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          ❤️ {post.likes}
                        </span>
                        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Side Actions */}
                  <div className="absolute right-4 bottom-32 flex flex-col gap-6">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      ❤️
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      💬
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      📤
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      🛍️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4">
            <div className="flex justify-around">
              <div className="flex flex-col items-center">
                <span className="text-lg">🏠</span>
                <span className="text-xs text-cyan-400">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg">🔍</span>
                <span className="text-xs text-gray-400">Discover</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg">➕</span>
                <span className="text-xs text-gray-400">Post</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg">💬</span>
                <span className="text-xs text-gray-400">Messages</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg">👤</span>
                <span className="text-xs text-gray-400">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  );
};
