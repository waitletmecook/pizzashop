import Image from "next/image";

const CATEGORIES = [
  { id: 1, name: "Пицца", price: 120, image: "/category/category.png" },
  { id: 2, name: "Пицца", price: 450, image: "/category/category.png" },
  { id: 3, name: "Пицца", price: 450, image: "/category/category.png" },
  { id: 4, name: "Пицца", price: 450, image: "/category/category.png" }, 
];

export function CategoryBar() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Новинки</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
        {CATEGORIES.map((cat) => (
          <div 
            key={cat.id} 
            className="flex items-center gap-30 bg-white min-w-55 p-3 rounded-[24px] shadow-sm hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-[#FFD200]"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-50">
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                sizes="56px" 
                className="object-cover" 
              />
            </div>
            
            <div>
              <p className="font-bold text-[15px] leading-tight">{cat.name}</p>
              <p className="text-[#FFD200] font-bold text-sm">от {cat.price} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}