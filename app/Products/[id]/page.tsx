// app/Products/[id]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getProduct } from "@/services/products";

import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { productsDetail } from "@/utils/type";

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const { lang } = useLanguage();
  const t = dictionary[lang];

  const [product, setProduct] = useState<productsDetail | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const id = Number(params.id);
    if (isNaN(id)) {
      setNotFound(true);
      return;
    }

    getProduct(id)
      .then((data) => {
        const result = Array.isArray(data) ? data[0] : data;
        if (!result) {
          setNotFound(true);
        } else {
          setProduct(result);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setNotFound(true);
      });
  }, [params.id]);

  if (notFound) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <p className="text-red-500">
          {lang === "fa" ? "محصول یافت نشد" : "Product not found"}
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <p>{lang === "fa" ? "در حال بارگذاری..." : "Loading..."}</p>
      </div>
    );
  }

  const title = lang === "fa" ? product.name_fa : product.name_en;
  const description =
    lang === "fa" ? product.description_fa : product.description_en;

  return (
    <div className="w-full h-[95%] px-15 py-20">
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm hover:text-gray-400"
      >
        {lang === "fa" ? "← بازگشت" : "← Back"}
      </button>
      <div className="rounded-lg bg-products w-full h-full flex flex-col overflow-hidden gap-5 bg-product shadow-2xl">
        <div className="relative w-full h-150 shrink-0 rounded-lg overflow-hidden bg-gray-200">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name_en}
              fill
              className="object-c0ver"
              sizes="175px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              بدون عکس
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-2xl font-bold mb-2 text-foreground">
            {lang === "fa" ? product.name_fa : product.name_en}
          </h3>

          <p className="text-sm text-foreground flex-1 mb-4 ">
            {lang === "fa" ? product.description_fa : product.description_en}
          </p>
        </div>
      </div>
    </div>
  );
}
