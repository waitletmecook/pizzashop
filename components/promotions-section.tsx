import Image from "next/image";
import { Button } from "@/components/ui/button";

export const PromotionsSection = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-black text-center mb-10 text-[#2D2D2D]">
        Наши <span className="text-[#F2C94C]">акции</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="relative h-[420px] bg-[#F3F3F7] rounded-[32px] overflow-hidden group cursor-pointer">
          <Image 
            src="/promo/largecake.png" 
            alt="Акция большая"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="relative h-[200px] bg-[#F3F3F7] rounded-[24px] overflow-hidden group cursor-pointer">
              <Image 
                src="/promo/smallcake.png" 
                alt="Акция маленькая" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button className="bg-[#F2C94C] hover:bg-[#e6bf43] text-black font-bold px-12 py-7 rounded-full uppercase text-xs transition-all shadow-md active:scale-95">
          Все акции
        </Button>
      </div>
    </section>
  );
};