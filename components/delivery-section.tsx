import Image from "next/image";
import { Timer, Smartphone, Smile, MapPin } from "lucide-react";

export const DeliverySection = () => {
  const features = [
    {
      icon: <Timer className="w-[32px] h-[32px] text-[#2D2D2D]" />,
      title: "30 минут",
      desc: "Среднее время доставки"
    },
    {
      icon: <Smartphone className="w-[32px] h-[32px] text-[#2D2D2D]" />,
      title: "Трекинг",
      desc: "Следите за заказом в приложении"
    },
    {
      icon: <Smile className="w-[32px] h-[32px] text-[#2D2D2D]" />,
      title: "Свежесть",
      desc: "Только свежие ингредиенты"
    },
    {
      icon: <MapPin className="w-[32px] h-[32px] text-[#2D2D2D]" />,
      title: "Зоны",
      desc: "Доставляем по всей Москве"
    }
  ];

  return (
    <section className="w-full bg-[#E3ECF5] py-16 mt-20">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {features.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-[24px] p-5 flex flex-col items-center text-center shadow-sm"
              style={{ width: '255px', height: '132px' }}
            >
              <div className="mb-3">
                {item.icon}
              </div>
              <h4 className="text-[14px] font-black uppercase text-[#2D2D2D] leading-tight">
                {item.title}
              </h4>
              <p className="text-[11px] font-bold text-[#828282] uppercase mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div 
            className="relative overflow-hidden shadow-md"
            style={{ 
              width: '1110px', 
              height: '322px', 
              borderRadius: '14px' 
            }}
          >
            <Image 
              src="/map.jpg" 
              alt="Зона доставки"
              fill
              className="object-cover"
              sizes="1110px"
            />
          </div>
        </div>

      </div>
    </section>
  );
};