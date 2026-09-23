"use client";

import React from "react";
import { Carditem } from "@/utils/type";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
export default function Card({ items }: { items: Carditem }) {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  return (
    <div className="rounded-lg bg-cards w-full h-full flex flex-col overflow-hidden gap-5">
      <div className="relative w-full h-52 shrink-0 overflow-hidden">
        <Image
          src={items.imageUrl}
          alt={items.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-2xl font-bold  mb-2 text-foreground">
          {lang === "fa" ? items.title_fa : items.title_en}
        </h3>

        <p className="text-sm  text-foreground flex-1 mb-4">
          {lang === "fa" ? items.description_fa : items.description_en}
        </p>

        <div className="flex justify-center mt-auto">
          <button className="rounded-lg bg-button px-4 py-2 text-sm w-full max-w-35">
            {t.card.moreInfo}
          </button>
        </div>
      </div>
    </div>
  );
}
