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
        // بسته به این‌که API آرایه برمی‌گردونه یا یه آبجکت تنها:
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
    //<div className="max-w-4xl mx-auto px-4 py-10">
    //  <button
    //    onClick={() => router.back()}
    //    className="mb-6 text-sm text-gray-500 hover:text-gray-800"
    //  >
    //    {lang === "fa" ? "← بازگشت" : "← Back"}
    //  </button>

    //  <div className="flex flex-col md:flex-row gap-8">
    //    {/*<div className="relative w-full md:w-1/2 h-80 rounded-lg overflow-hidden">
    //      <Image
    //        src={product.image}
    //        alt={title}
    //        fill
    //        className="object-cover"
    //        sizes="(max-width: 768px) 100vw, 50vw"
    //      />
    //    </div>*/}

    //    <div className="flex-1">
    //      <h1 className="text-3xl font-bold mb-4 text-end">{title}</h1>
    //      <p className="text-base leading-relaxed text-end">{description}</p>
    //    </div>
    //  </div>
    //</div>
    <div className="flex gap-4 items-center justify-center w-[75%] h-[75%] px-15 py-20">
      <button
        onClick={() => router.back()}
        className="mb-6 text-sm text-gray-500 hover:text-gray-800"
      >
        {lang === "fa" ? "← بازگشت" : "← Back"}
      </button>
      <div className="rounded-lg bg-products w-full h-full flex flex-col overflow-hidden gap-5 bg-product shadow-2xl">
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

          <p className="text-sm text-foreground flex-1 mb-4 ">
            {lang === "fa" ? product.description_fa : product.description_en}
          </p>
        </div>
      </div>
    </div>
  );
}
