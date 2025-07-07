
interface ContentOverlayProps {
  username: string;
  title: string;
  description: string;
}

export const ContentOverlay = ({ username, title, description }: ContentOverlayProps) => {
  return (
    <div className="absolute bottom-20 left-4 right-16 text-white">
      <h3 className="font-bold text-lg mb-1">{username}</h3>
      <p className="text-white text-sm mb-4">{title}</p>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
};
