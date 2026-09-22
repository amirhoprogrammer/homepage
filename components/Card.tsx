import React from "react";
import { Carditem } from "@/utils/type";
import Image from "next/image";
export default function Card({ items }: { items: Carditem }) {
  return (
    //<div className="rounded-lg bg-cards w-[30%] flex-col">
    //  <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
    //    {/* h-64 رو می‌تونی تغییر بدی (مثلاً h-48 یا h-80) */}
    //    <Image
    //      src={items.imageUrl}
    //      alt={items.alt}
    //      fill
    //      className="object-cover"
    //      sizes="100vw"
    //    />
    //  </div>
    //  <div className="flex flex-col content-around">
    //    <div className="py-2 px-2">
    //      <h3 className="text-2xl font-bold flex items-center justify-end">
    //        {items.title}
    //      </h3>
    //      <p className="text-base flex items-center justify-end">
    //        {items.description}
    //      </p>
    //      <div className="flex items-center justify-center">
    //        <button className="rounded-lg mx-2 my-1 bg-button w-[25%]">
    //          اطلاعات بیشتر
    //        </button>
    //      </div>
    //    </div>
    //  </div>
    //</div>
    <div className="rounded-lg bg-cards w-full h-full flex flex-col overflow-hidden gap-5">
      {/* عکس */}
      <div className="relative w-full h-52 shrink-0 overflow-hidden">
        <Image
          src={items.imageUrl}
          alt={items.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* محتوای متن + دکمه */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-2xl font-bold text-right mb-2 text-foreground">
          {items.title}
        </h3>

        <p className="text-sm text-right text-foreground flex-1 mb-4">
          {items.description}
        </p>

        <div className="flex justify-center mt-auto">
          <button className="rounded-lg bg-button px-4 py-2 text-sm w-full max-w-35">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}
