"use client";

import Image from "next/image";
import { HeaderSlider } from "@/data/HeaderSlider";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const { lang } = useLanguage();
  const t = dictionary[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderSlider.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % HeaderSlider.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + HeaderSlider.length) % HeaderSlider.length
    );

  const slide = HeaderSlider[current];
  const title = lang === "fa" ? slide.title_fa : slide.title_en;
  const description =
    lang === "fa" ? slide.description_fa : slide.description_en;

  return (
    <section className="relative w-full h-[85vh] min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src={slide.imageUrl}
          alt={title}
          fill
          className="no-repeat object-center transition-all duration-700"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="flex gap-10 items-center justify-center w-full">
          <div className="text-white space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              {description}
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition">
                {t.hero.viewProduct}
              </button>
              <button className="border border-white/40 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition">
                {t.hero.allProducts}
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        dir="ltr"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        ‹
      </button>
      <button
        dir="ltr"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        ›
      </button>
    </section>
  );
}
