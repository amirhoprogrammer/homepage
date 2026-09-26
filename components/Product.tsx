// components/Product.tsx
"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { productsDetail } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(2);
      else setItemsPerPage(4);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return itemsPerPage;
}

export default function Product() {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  const [products, setProducts] = useState<productsDetail[] | null>(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProducts([]);
      });
  }, []);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  if (products === null) return null;
  if (products.length === 0) {
    return <div className="text-red-500">{t.common.errorProducts}</div>;
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const visibleProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <div className="relative px-8 sm:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleProducts.map((product, id) => (
          <div
            key={page * itemsPerPage + id}
            className="rounded-lg bg-products w-full h-auto min-h-105 sm:h-150 flex flex-col overflow-hidden gap-5 bg-cards"
          >
            <div className="relative w-full h-40 sm:h-50 shrink-0 rounded-lg overflow-hidden bg-gray-200">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name_en}
                  fill
                  className="object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                  بدون عکس
                </div>
              )}
            </div>
            <div className="flex flex-col flex-1 p-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">
                {lang === "fa" ? product.name_fa : product.name_en}
              </h3>
              <p className="text-sm text-foreground flex-1 mb-4 bg-cards">
                {lang === "fa"
                  ? product.description_fa
                  : product.description_en}
              </p>
              <div className="flex justify-center mt-auto">
                <Link
                  href={`/Products/${page * itemsPerPage + id + 1}`}
                  className="rounded-lg bg-button px-4 py-2 text-sm w-full max-w-30"
                >
                  {t.card.moreInfo}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <>
          <button
            onClick={prevPage}
            dir="ltr"
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextPage}
            dir="ltr"
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full transition"
          >
            <ChevronRight size={18} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? "bg-button" : "bg-gray-300"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
