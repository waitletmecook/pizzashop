import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

          <div className="flex flex-col gap-8 max-w-xl">
            <div className="flex items-center">
              <Image 
                src="/logo.svg" 
                alt="Fibo Logo" 
                width={120} 
                height={40} 
                className="h-auto w-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#191919] font-bold hover:text-[#FFD200] transition-colors duration-200">
                  Калорийность и состав
                </a>
                <div className="flex flex-col gap-2">
                  <span className="text-[#191919] font-bold text-xs uppercase tracking-wider">
                    Мы в соцсетях
                  </span>
                  <div className="flex gap-4">
                    <a href="#" className="text-[#828282] font-bold hover:text-[#FFD200] transition-colors duration-200">
                      ВКонтакте
                    </a>
                    <a href="#" className="text-[#828282] font-bold hover:text-[#FFD200] transition-colors duration-200">
                      Telegram
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#191919] font-bold hover:text-[#FFD200] transition-colors duration-200">
                  Правовая информация
                </a>
                <div className="text-[#828282] font-medium leading-relaxed">
                  Москва ул. Проспект<br />
                  Вернадского 86В
                </div>
              </div>
            </div>
            
            <p className="text-[#828282] text-sm font-medium mt-4">
              Все права защищены © 2026
            </p>
          </div>

          <div className="flex flex-col items-end gap-6">
            
            <div className="flex flex-col items-center gap-4 w-[424px]">
              <h3 className="text-[#191919] font-black uppercase text-center text-sm tracking-wide">
                Остались вопросы? А мы всегда на связи:
              </h3>

              <div className="flex flex-col gap-3 w-full">
                <div className="flex gap-3 h-[50px]">
                  <div className="w-[100px] border border-[#E0E0E0] rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group">
                    <Image 
                      src="/socialmedia/vk.svg" 
                      alt="ВКонтакте"
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="w-[200px] border border-[#E0E0E0] rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group">
                    <Image 
                      src="/socialmedia/email.svg" 
                      alt="Написать нам"
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>

                  <div className="w-[100px] border border-[#E0E0E0] rounded-[12px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all group">
                    <Image 
                      src="/socialmedia/max.svg" 
                      alt="Telegram"
                      width={24}
                      height={24}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full h-[50px] rounded-[12px] border-[#E0E0E0] font-bold text-[#191919] hover:bg-gray-50 uppercase text-[11px] tracking-widest"
                >
                  Написать нам
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-end mt-2">
              <a href="tel:84993918449" className="text-[32px] font-[700] text-[#F7D22D] leading-none mb-3">
                8 499 391-84-49
              </a>
              <Button className="bg-[#F3F3F7] hover:bg-[#E0E0E0] text-[#191919] font-bold rounded-full px-10 py-6 transition-all uppercase text-[11px] tracking-widest">
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};