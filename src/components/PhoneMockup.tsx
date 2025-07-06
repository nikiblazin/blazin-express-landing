
import { useState, useEffect } from "react";

const fashionPosts = [
  {
    id: 1,
    username: "@FashionGuru",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=600&fit=crop",
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
              <div className="flex gap-6">
                <span className="text-white font-semibold text-lg border-b-2 border-white pb-1">Neked</span>
                <span className="text-gray-400 font-semibold text-lg">Követés</span>
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
                  
                  {/* User Info */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold text-sm">{post.username}</span>
                  </div>

                  {/* Side Actions */}
                  <div className="absolute right-4 bottom-40 flex flex-col gap-6">
                    <div className="flex flex-col items-center">
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">♡</span>
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
                    <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                    
                    {/* Shopping Items */}
                    <div className="flex gap-3 mb-4">
                      {post.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-black/60 backdrop-blur-sm rounded-xl p-3 min-w-[120px]">
                          <div className="w-16 h-16 bg-gray-600 rounded-lg mb-2"></div>
                          <h4 className="text-white text-sm font-semibold">{item.name}</h4>
                          <p className="text-gray-300 text-xs">{item.price}</p>
                        </div>
                      ))}
                    </div>
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
                <span className="text-xs text-white">Home</span>
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
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
    </div>
  );
};
