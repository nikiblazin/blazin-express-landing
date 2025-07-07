import { useState, useEffect } from "react";
import { Heart, Home, Search, Plus, User } from "lucide-react";

const fashionPosts = [
  {
    id: 1,
    username: "@TrendSetter",
    image: "/lovable-uploads/632ef365-b505-409b-918b-d4b739bfffc2.png",
    title: "Gen Z vibes! ✨",
    description: "#genz #streetstyle #trendy",
    likes: "3,157",
    comments: "424",
    items: [
      { name: "Sequin Dress", price: "$149", image: "/lovable-uploads/69d8b2c9-1801-4b49-ab0b-105c7a12c2ff.png" },
      { name: "Statement Earrings", price: "$29", image: "/lovable-uploads/69d8b2c9-1801-4b49-ab0b-105c7a12c2ff.png" },
      { name: "Club Wear", price: "$89", image: "/lovable-uploads/69d8b2c9-1801-4b49-ab0b-105c7a12c2ff.png" }
    ]
  },
  {
    id: 2,
    username: "@StreetStyleQueen",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=600&fit=crop",
    title: "Urban chic vibes",
    description: "#streetstyle #urban #chic",
    likes: "2,341",
    comments: "89",
    items: [
      { name: "Denim Jacket", price: "$85" },
      { name: "White Sneakers", price: "$120" }
    ]
  },
  {
    id: 3,
    username: "@MinimalVibes",
    image: "https://images.unsplash.com/photo-1485518882345-15568b007407?w=300&h=600&fit=crop",
    title: "Clean aesthetic",
    description: "#minimal #clean #aesthetic",
    likes: "1,567",
    comments: "203",
    items: [
      { name: "Cotton Tee", price: "$45" },
      { name: "Black Trousers", price: "$89" }
    ]
  },
  {
    id: 4,
    username: "@BoldFashionista",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=300&h=600&fit=crop",
    title: "Statement pieces",
    description: "#bold #statement #fashion",
    likes: "3,892",
    comments: "156",
    items: [
      { name: "Designer Blazer", price: "$245" },
      { name: "Gold Accessories", price: "$78" }
    ]
  },
  {
    id: 5,
    username: "@NYCStyler",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=600&fit=crop",
    title: "NYC street fashion",
    description: "#nyc #street #fashion",
    likes: "2,678",
    comments: "234",
    items: [
      { name: "Vintage Jacket", price: "$156" },
      { name: "Combat Boots", price: "$134" }
    ]
  }
];

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
          
          {/* Status Bar */}
          <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-white text-xs z-10">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-1 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

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

                {/* Side Actions - Right side icons like in the image */}
                <div className="absolute right-4 bottom-32 flex flex-col gap-4">
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-transparent flex items-center justify-center">
                      <Heart className="w-7 h-7 text-white fill-red-500" />
                    </button>
                    <span className="text-white text-xs font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-transparent flex items-center justify-center">
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black text-sm">💬</span>
                      </div>
                    </button>
                    <span className="text-white text-xs font-semibold">{post.comments}</span>
                  </div>
                  <button className="w-12 h-12 bg-transparent flex items-center justify-center">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">↗</span>
                    </div>
                  </button>
                  <button className="w-12 h-12 bg-transparent flex items-center justify-center">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">🔖</span>
                    </div>
                  </button>
                </div>
                
                {/* Content Overlay - Username and description */}
                <div className="absolute bottom-20 left-4 right-16 text-white">
                  <h3 className="font-bold text-lg mb-1">{post.username}</h3>
                  <p className="text-white text-sm mb-4">{post.title}</p>
                  <p className="text-white/80 text-sm">{post.description}</p>
                </div>
                
                {/* White Product Bar - exactly like in the image */}
                <div className="absolute bottom-12 left-2 right-2">
                  <div className="bg-white rounded-xl p-3">
                    <div className="flex gap-2 overflow-x-auto">
                      {post.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex-shrink-0 w-24">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-black text-xs font-semibold truncate">{item.name}</h4>
                          <p className="text-gray-600 text-xs font-bold">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation - exactly like in the image */}
          <div className="absolute bottom-0 left-0 right-0 bg-black p-4">
            <div className="flex justify-around items-center">
              <Home className="w-6 h-6 text-white" />
              <Search className="w-6 h-6 text-white/60" />
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-black" />
              </div>
              <Heart className="w-6 h-6 text-white/60" />
              <User className="w-6 h-6 text-white/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
