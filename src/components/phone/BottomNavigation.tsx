
import { Home, Search, Plus, Heart, User } from "lucide-react";

export const BottomNavigation = () => {
  return (
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
  );
};
