
import { Button } from "@/components/ui/button";

export const DownloadButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
      <Button 
        className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-6 rounded-2xl text-lg font-semibold flex items-center gap-3 hover:scale-105 w-full sm:w-auto"
        onClick={() => window.open('https://apps.apple.com/', '_blank')}
      >
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">🍎</span>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-600">Download on the</div>
          <div className="font-bold">App Store</div>
        </div>
      </Button>

      <Button 
        className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-6 rounded-2xl text-lg font-semibold flex items-center gap-3 hover:scale-105 w-full sm:w-auto"
        onClick={() => window.open('https://play.google.com/', '_blank')}
      >
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">▶</span>
        </div>
        <div className="text-left">
          <div className="text-xs text-gray-600">Get it on</div>
          <div className="font-bold">Google Play</div>
        </div>
      </Button>
    </div>
  );
};
