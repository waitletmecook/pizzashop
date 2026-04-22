import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew: boolean | null;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden rounded-[32px] border-none shadow-none hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-4 pt-6">
        <div className="relative aspect-square mb-4 overflow-hidden">
          <Image
            src={`/${product.image}`}
            alt={product.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <h3 className="font-bold text-xl mb-2 text-[#191919] leading-tight">
          {product.name}
        </h3>
        <p className="text-sm text-[#707070] line-clamp-3 mb-4">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <span className="font-extrabold text-xl text-[#191919]">
          от {product.price} ₽
        </span>
        <Button 
          className="bg-[#FFD200] hover:bg-[#F5C800] text-black font-bold rounded-full px-6 transition-transform active:scale-95"
        >
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}