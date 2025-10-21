import { Button } from "@/components/ui/button";
import { FitsCarousel } from "@/components/FitsCarousel";
import { DownloadButtons } from "@/components/DownloadButtons";
import { ArrowDown, Heart } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 min-h-screen pt-8 pb-4">
        {/* Main Headline with BLAZIN */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-black text-white mb-2 tracking-wider">BLAZIN</h1>
          <h2 className="font-bold leading-tight text-white" style={{ fontSize: '39px' }}>
            Your daily drop<br />of real style.
          </h2>
        </div>

        {/* Fits Carousel */}
        <div className="mb-8 -mx-4">
          <FitsCarousel />
        </div>

        {/* Description Text */}
        <div className="text-center mb-0">
          <p className="text-white font-semibold mb-4" style={{ fontSize: '26px' }}>
            The fit feed that's actually 🔥
          </p>
        </div>
      </div>

      {/* Floating Get the app button - Mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent z-50">
        <Button 
          className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 py-6 rounded-full text-lg font-semibold relative overflow-hidden group animate-subtle-bounce hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          onClick={() => window.open('https://apps.apple.com/', '_blank')}
        >
          <span className="relative z-10">Get the app</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </Button>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:block relative min-h-screen px-4">
        <div className="max-w-7xl mx-auto h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center items-center z-10">
              <div className="flex flex-col items-center">
                {/* Logo/Brand */}
                <div className="mb-8 text-center">
                  <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-4 text-white">
                    BLAZIN
                  </h1>
                  <div className="w-32 h-1 bg-white rounded-full mx-auto"></div>
                </div>

                {/* Main Headline */}
                <div className="mb-8 text-center">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    Your daily drop<br />of real style.
                  </h2>
                  <p className="text-white font-semibold" style={{ fontSize: '26px' }}>
                    The fit feed that's actually 🔥
                  </p>
                </div>

                {/* Download Buttons */}
                <div>
                  <DownloadButtons variant="buttons" />
                </div>
              </div>
            </div>

            {/* Right Column - Fits Carousel */}
            <div className="z-10">
              <FitsCarousel />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-0 pb-8 lg:pb-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">📲</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scroll it</h3>
              <p className="text-gray-400">Catch the vibe. Keep it real.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Shop it</h3>
              <p className="text-gray-400">See it. Cop it IRL.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 fill-red-500 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Drop it</h3>
              <p className="text-gray-400">Post your fit. Get love.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to get BLAZIN?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          You look fire, btw
        </p>
        <DownloadButtons />

        {/* Privacy Policy & Terms */}
        <div className="flex justify-center gap-8">
          <button 
            className="text-gray-400 hover:text-white transition-colors text-sm"
            onClick={() => console.log('Privacy Policy clicked')}
          >
            Privacy Policy
          </button>
          <button 
            className="text-gray-400 hover:text-white transition-colors text-sm"
            onClick={() => console.log('Terms & Conditions clicked')}
          >
            Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
