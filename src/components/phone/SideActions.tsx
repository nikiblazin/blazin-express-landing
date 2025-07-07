
import { Heart } from "lucide-react";

interface SideActionsProps {
  likes: string;
  comments: string;
}

export const SideActions = ({ likes, comments }: SideActionsProps) => {
  return (
    <div className="absolute right-4 bottom-32 flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <button className="w-12 h-12 bg-transparent flex items-center justify-center">
          <Heart className="w-7 h-7 text-white fill-red-500" />
        </button>
        <span className="text-white text-xs font-semibold">{likes}</span>
      </div>
      <div className="flex flex-col items-center">
        <button className="w-12 h-12 bg-transparent flex items-center justify-center">
          <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
            <span className="text-black text-sm">💬</span>
          </div>
        </button>
        <span className="text-white text-xs font-semibold">{comments}</span>
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
  );
};
