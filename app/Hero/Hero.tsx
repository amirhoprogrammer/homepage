"use client";

import Image from "next/image";
import { HeaderSlider } from "@/data/HeaderSlider";
import { useEffect, useState } from "react";
export default function Hero() {
  const [current, setCurrent] = useState(0);

  // عوض شدن خودکار هر ۵ ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HeaderSlider.length);
    }, 5000); // ۵ ثانیه

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HeaderSlider.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + HeaderSlider.length) % HeaderSlider.length
    );
  };

  const slide = HeaderSlider[current];
  return (
    <section className="relative w-full h-[85vh] min-h-screen overflow-hidden bg-black">
      {/* ========== عکس پس‌زمینه (تغییر می‌کنه) ========== */}
      <div className="absolute inset-0">
        <Image
          src={slide.imageUrl}
          alt={slide.title}
          fill
          className=" no-repeat object-center transition-all duration-700"
          priority
          quality={90}
        />
        {/* لایه تیره روی عکس برای خوانایی متن */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="flex gap-10 items-center justify-center w-full">
          {/* متن سمت چپ */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
              {slide.description}
            </p>

            <div className="flex gap-4 pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition">
                مشاهده محصول
              </button>
              <button className="border border-white/40 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition">
                همه محصولات
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* دکمه‌های قبلی و بعدی */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition"
      >
        ›
      </button>
    </section>
  );
}
