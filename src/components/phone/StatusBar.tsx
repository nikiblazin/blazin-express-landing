
export const StatusBar = () => {
  return (
    <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-white text-xs z-10">
      <span>9:41</span>
      <div className="flex gap-1">
        <div className="w-4 h-2 bg-white rounded-sm"></div>
        <div className="w-1 h-2 bg-white rounded-sm"></div>
        <div className="w-6 h-2 bg-white rounded-sm"></div>
      </div>
    </div>
  );
};
