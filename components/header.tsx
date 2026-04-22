export function Header() {
  const categories = ["Пицца", "Паста", "Супы", "Салаты", "Напитки", "Десерты"];
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black uppercase tracking-tighter">Fibo<span className="text-[#FFD200]">.</span></span>
          <nav className="hidden md:flex gap-6">
            {categories.map(cat => (
              <a key={cat} href="#" className="font-medium hover:text-[#FFD200] transition-colors">{cat}</a>
            ))}
          </nav>
        </div>
        <div className="font-bold text-lg">8 499 391-84-49</div>
      </div>
    </header>
  );
}