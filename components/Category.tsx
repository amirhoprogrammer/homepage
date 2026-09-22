import { getCategories } from "@/services/category";
export default async function Category() {
  try {
    const categories = await getCategories();

    console.log("Categories response:", categories); // این را در ترمینال سرور ببین

    if (!Array.isArray(categories) || categories.length === 0) {
      return <div className="text-red-500">هیچ دسته‌بندی‌ای پیدا نشد</div>;
    }

    return (
      <div className="flex gap-4 items-center justify-center">
        {categories.map((category) => (
          <div
            className="rounded-2xl bg-categories p-2 w-40 flex items-center justify-center"
            key={category.id}
          >
            {category.name_fa}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div className="text-red-500">خطا در دریافت دسته‌بندی‌ها</div>;
  }
}
//import { getCategories } from "@/services/category";

//export default async function Category() {
//  try {
//    const categories = await getCategories();

//    console.log("Categories response:", categories); // این را در ترمینال سرور ببین

//    if (!Array.isArray(categories) || categories.length === 0) {
//      return <div className="text-red-500">هیچ دسته‌بندی‌ای پیدا نشد</div>;
//    }

//    return (
//      <div className="space-y-2">
//        {categories.map((category) => (
//          <div key={category.id}>{category.name}</div>
//        ))}
//      </div>
//    );
//  } catch (error) {
//    console.error("Error fetching categories:", error);
//    return <div className="text-red-500">خطا در دریافت دسته‌بندی‌ها</div>;
//  }
//}
