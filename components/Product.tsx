import { getProducts } from "@/services/products";
import Image from "next/image";
export default async function Product() {
  try {
    const Products = await getProducts();

    console.log("Products response:", Products); // این را در ترمینال سرور ببین

    if (!Array.isArray(Products) || Products.length === 0) {
      return <div className="text-red-500">هیچ محصولی پیدا نشد</div>;
    }

    return (
      <div className="flex gap-4 items-center justify-center">
        {Products.map((product) => (
          <div className="rounded-lg bg-products w-full h-full flex flex-col overflow-hidden gap-5">
            {/* عکس */}
            <div className="relative w-full h-26 shrink-0 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name_en}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* محتوای متن + دکمه */}
            <div className="flex flex-col flex-1 p-4">
              <h3 className="text-2xl font-bold text-right mb-2 text-foreground">
                {product.name_en}
              </h3>

              <p className="text-sm text-foreground flex-1 mb-4 bg-cards">
                {product.category}
              </p>

              <div className="flex justify-center mt-auto">
                <button className="rounded-lg bg-button px-4 py-2 text-sm w-full max-w-25">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div className="text-red-500">خطا در دریافت دسته‌بندی‌ها</div>;
  }
}
