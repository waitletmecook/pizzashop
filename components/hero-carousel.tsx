// src/components/hero-carousel.tsx

"use client";
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BANNERS = [
  { id: 1, src: "/banners/banner-1.png", alt: "Слайс за 149р" },
  { id: 2, src: "/banners/banner-2.png", alt: "Fibo Pasta Bar" },
  { id: 3, src: "/banners/banner-3.png", alt: "Торты на заказ" },
];

export function HeroCarousel() {
  return (
    <section className="w-full py-6 overflow-hidden">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-[1440px] mx-auto"
      >
        <CarouselContent className="-ml-4">
          {BANNERS.map((banner, index) => (
            <CarouselItem key={banner.id} className="pl-4 md:basis-1/2 lg:basis-[60%]">
              {/* ПОЛНОСТЬЮ ИСПРАВЛЕННЫЙ БЛОК ОБЕРТКИ */}
              {/* Убрана фиксированная высота. Контейнер теперь гибкий. */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full rounded-[40px] overflow-hidden transition-all duration-300 bg-transparent">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                  className="object-cover" // ВЕРНУЛИ cover, чтобы картинка заполнила всё
                  priority={index === 0} // Оптимизация для первого слайда
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Стилизуем кнопки навигации (необязательно, но улучшает UX) */}
        <CarouselPrevious className="hidden md:flex left-8 bg-white/60 hover:bg-white text-black border-none h-12 w-12 rounded-full" />
        <CarouselNext className="hidden md:flex right-8 bg-white/60 hover:bg-white text-black border-none h-12 w-12 rounded-full" />
      </Carousel>
    </section>
  );
}