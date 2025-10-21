import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";
import { DownloadButtons } from "@/components/DownloadButtons";
import { ArrowDown, Heart } from "lucide-react";
import CounterAnimation from "@/components/CounterAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 min-h-screen pt-8 pb-12">
        {/* Main Headline with BLAZIN */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-black text-white mb-2 tracking-wider">BLAZIN</h1>
          <h2 className="font-bold leading-tight text-white whitespace-nowrap" style={{ fontSize: '39px' }}>
            Your drip. Your vibe.
          </h2>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center mb-8">
          <PhoneMockup />
        </div>

        {/* Description Text */}
        <div className="text-center mb-8">
          <p className="text-white font-semibold mb-8" style={{ fontSize: '26px' }}>
            Tap in. Cop fast. 3h drop (NYC).
          </p>
        </div>

        {/* Drops delivered text - moved lower and made larger on mobile */}
        <div className="flex justify-center mt-8 mb-0">
          <span className="text-base font-bold text-white text-center">
            🔥 <CounterAnimation targetNumber={10000} />+ drops delivered across the city.
          </span>
        </div>
      </div>

      {/* Floating Get the app button - Mobile only */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent z-50">
        <Button 
          className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 py-6 rounded-full text-lg font-semibold"
          onClick={() => window.open('https://apps.apple.com/', '_blank')}
        >
          Get the app
        </Button>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:block relative min-h-screen flex flex-col items-center justify-center px-4 pt-48">
        {/* Main Content - moved down even further with pt-48 instead of pt-32 */}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white whitespace-nowrap">
              Your drip. Your vibe.
            </h2>
            <p className="text-white font-semibold" style={{ fontSize: '26px' }}>
              Tap in. Cop fast. 3h drop (NYC).
            </p>
          </div>

          {/* Download Buttons */}
          <div className="mb-20">
            <DownloadButtons variant="buttons" />
          </div>

          {/* Scroll Indicator - positioned 2cm (50px) below download buttons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <PhoneMockup />
          {/* Drops delivered text */}
          <div className="flex justify-center mt-2 mb-0">
            <span className="text-sm font-bold text-white text-center">
              🔥 <CounterAnimation targetNumber={10000} />+ drops delivered across the city.
            </span>
          </div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-0 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">📲</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scroll it</h3>
              <p className="text-gray-400">Catch the vibe. Keep it moving.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Shop it</h3>
              <p className="text-gray-400">Spot the fit. Make it yours.</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-white transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-black">🔥</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Drop it</h3>
              <p className="text-gray-400">Drop your fit. Get love. Start trends.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="py-20 px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to get BLAZIN?</h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Built for fashion obsessives, by fashion insiders.
          Join the next wave of style legends and own your look.
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
