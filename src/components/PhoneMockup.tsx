import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const fashionPosts = [
  {
    id: 1,
    username: "@FashionGuru",
    image: "/lovable-uploads/632ef365-b505-409b-918b-d4b739bfffc2.png",
    title: "Minimalist autumn look",
    description: "#minimal #cozy #fall",
    likes: "1,924",
    comments: "124",
    items: [
      { name: "Wool Coat", price: "$129" },
      { name: "Leather Boots", price: "$95" }
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

          {/* App Header - Centered tabs */}
          <div className="absolute top-12 left-0 right-0 z-10 bg-black/90 backdrop-blur-sm p-4">
            <div className="flex items-center justify-center gap-8">
              <span className="text-white font-semibold text-lg border-b-2 border-white pb-1">For You</span>
              <span className="text-white/60 font-semibold text-lg">Following</span>
            </div>
          </div>

          {/* Feed Content */}
          <div className="pt-24 h-full overflow-hidden">
            {fashionPosts.map((post, index) => (
              <div 
                key={post.id} 
                className="absolute inset-0 pt-24 transition-transform duration-500 ease-in-out"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                
                {/* User Info */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                  </div>
                  <span className="text-white font-semibold text-sm">{post.username}</span>
                </div>

                {/* Side Actions */}
                <div className="absolute right-4 bottom-40 flex flex-col gap-6">
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </button>
                    <span className="text-white text-xs mt-1">{post.likes}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💬</span>
                    </button>
                    <span className="text-white text-xs mt-1">{post.comments}</span>
                  </div>
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">↗</span>
                  </button>
                  <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">🔖</span>
                  </button>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{post.description}</p>
                  
                  {/* Shopping Items */}
                  <div className="flex gap-3 mb-4">
                    {post.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-black/60 backdrop-blur-sm rounded-xl p-3 min-w-[120px]">
                        <div className="w-16 h-16 bg-white/20 rounded-lg mb-2"></div>
                        <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                        <p className="text-white/80 text-xs">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4">
            <div className="flex justify-around items-center">
              <div className="w-6 h-6 bg-white rounded-sm"></div>
              <div className="w-6 h-6 border-2 border-white/60 rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black text-lg font-bold">+</span>
              </div>
              <Heart className="w-6 h-6 text-white/60" />
              <div className="w-6 h-6 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - only bottom-left circle remains */}
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/60 rounded-full animate-pulse"></div>
    </div>
  );
};
