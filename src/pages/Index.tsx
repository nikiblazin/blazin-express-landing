
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { DownloadButtons } from "@/components/DownloadButtons";
import { ArrowDown, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        {/* Main Content */}
        <div className="text-center z-10 max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-4 text-white">
              BLAZIN
            </h1>
            <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              XPRESS YOURSELF
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed mb-8">
              Hop into the dopest fashion network where you can xpress your style, vibe with the trendsetters, 
              spark inspo and snag your fashion fix - all delivered in 3 hours or less in NY!
            </p>
            <p className="text-lg md:text-xl text-white font-semibold">
              Get BLAZIN on your phone and squad up with our it fashion crew!
            </p>
          </div>

          {/* Download Buttons */}
          <DownloadButtons />

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <PhoneMockup />
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Mobile Phone Section */}
      <div className="lg:hidden py-20 px-4">
        <div className="flex justify-center">
          <PhoneMockup />
        </div>
        {/* "With ❤️ from NY" centered below mockup */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm">With</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span className="text-sm">from NY</span>
          </div>
        </div>
      </div>

      {/* Desktop - "With ❤️ from NY" centered below mockup */}
      <div className="hidden lg:block absolute right-8 top-1/2 transform -translate-y-1/2 translate-y-80">
        <div className="flex items-center gap-2 text-white justify-center">
          <span className="text-sm">With</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span className="text-sm">from NY</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">Get your fashion fix delivered in 3 hours or less in NYC</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🔥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Trending Styles</h3>
              <p className="text-gray-400">Discover the latest fashion trends from top creators</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">💫</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Squad Goals</h3>
              <p className="text-gray-400">Connect with fashion creators and build your network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to get BLAZIN?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of fashion creators who are already expressing themselves on BLAZIN
        </p>
        <DownloadButtons />
      </div>
    </div>
  );
};

export default Index;
