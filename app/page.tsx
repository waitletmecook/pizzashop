import { getProducts } from "@/lib/api";
import { ProductCard } from "@/components/product-card";
import { CatalogPagination } from "@/components/catalog-pagination";
import { HeroCarousel } from "@/components/hero-carousel";
import { CategoryBar } from "@/components/category-bar";
import { PromotionsSection } from "@/components/promotions-section"; // Импортируем новый блок

export default async function Home({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const { items, totalPages } = await getProducts(currentPage, 8);

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <HeroCarousel />
      <CategoryBar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-10 text-[#191919]">Пицца</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <CatalogPagination currentPage={currentPage} totalPages={totalPages} />
        <PromotionsSection />
      </main>
    </div>
  );
}