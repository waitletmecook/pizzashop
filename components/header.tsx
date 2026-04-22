import Image from "next/image";

export function Header() {
  const categories = [
    { name: "Пицца", active: true },
    { name: "Паста", active: false },
    { name: "Супы", active: false },
    { name: "Салаты", active: false },
    { name: "Напитки", active: false },
    { name: "Десерты", active: false },
    { name: "Бакалея", active: false },
    { name: "Антипасти", active: false },
    { name: "Акции", active: false },
    { name: "Комбо", active: false },
    { name: "Контакты", active: false },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <a href="/" className="flex-shrink-0">
            <Image 
              src="/logo.svg" 
              alt="Fibo Pizza" 
              width={80} 
              height={60} 
              priority
            />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#F3F3F7] text-[#696F7A] text-[11px] font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Заказать звонок
          </button>
          
          <a 
            href="tel:84993918449" 
            className="flex items-center justify-center text-xl font-black"
            style={{ 
              width: '215px', 
              height: '32px', 
              color: '#F7D22D',
              opacity: 1 
            }}
          >
            8 499 391-84-49
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex items-center gap-8 border-t border-gray-50">
          <nav className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <a 
                key={cat.name} 
                href="#" 
                className={`text-[13px] font-black uppercase tracking-widest transition-colors whitespace-nowrap ${
                  cat.active ? "text-[#F2C94C]" : "text-[#2D2D2D] hover:text-[#F2C94C]"
                }`}
              >
                {cat.name}
              </a>
            ))}
          </nav>

          <button className="bg-[#F3F3F7] text-[#696F7A] text-[11px] font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
}