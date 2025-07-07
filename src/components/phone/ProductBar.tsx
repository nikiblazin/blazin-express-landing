
interface Product {
  name: string;
  price: string;
  image?: string;
}

interface ProductBarProps {
  items: Product[];
}

export const ProductBar = ({ items }: ProductBarProps) => {
  return (
    <div className="absolute bottom-12 left-2 right-2">
      <div className="bg-white rounded-xl p-3">
        <div className="flex gap-2 overflow-x-auto">
          {items.map((item, itemIndex) => (
            <div key={itemIndex} className="flex-shrink-0 w-24">
              <div className="w-20 h-20 bg-gray-100 rounded-lg mb-2 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-black text-xs font-semibold truncate">{item.name}</h4>
              <p className="text-gray-600 text-xs font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
