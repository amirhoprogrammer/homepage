"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { productsDetail } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";

export default function Product() {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  const [products, setProducts] = useState<productsDetail[] | null>(null);
  useEffect(() => {
    getProducts()
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  if (products === null) return null;
  if (products.length === 0) {
    return <div className="text-red-500">{t.common.errorProducts}</div>;
  }

  return (
    <div className="flex gap-4 items-center justify-center">
      {products.map((product, id) => (
        <div
          key={id}
          className="rounded-lg bg-products w-full h-full flex flex-col overflow-hidden gap-5 bg-cards"
        >
          <div className="relative w-full h-26 shrink-0 overflow-hidden ">
            {/*<Image
              src={product.image}
              alt={lang === "fa" ? product.name_fa : product.name_en}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />*/}
          </div>

          <div className="flex flex-col flex-1 p-4">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {lang === "fa" ? product.name_fa : product.name_en}
            </h3>

            <p className="text-sm text-foreground flex-1 mb-4 bg-cards">
              {lang === "fa" ? product.description_fa : product.description_en}
            </p>
            <div className="flex justify-center mt-auto">
              <Link
                href={`/Products/${id + 1}`}
                className="rounded-lg bg-button px-4 py-2 text-sm w-full max-w-30"
              >
                {t.card.moreInfo}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
