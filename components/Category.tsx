"use client";

import { useEffect, useState } from "react";
import { getCategories } from "@/services/category";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import { category } from "@/utils/type";
import "../app/Categories/category.css";

export default function Category() {
  const { lang } = useLanguage();
  const t = dictionary[lang];
  const [categories, setCategories] = useState<category[] | null>(null);

  useEffect(() => {
    getCategories()
      .then((data) => setCategories(Array.isArray(data) ? data : []))
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setCategories([]);
      });
  }, []);

  if (categories === null) return null;
  if (categories.length === 0) {
    return <div className="text-red-500">{t.common.errorCategories}</div>;
  }

  return (
    <div className="flex gap-4 items-center justify-center categories">
      {categories.map((cat) => (
        <div
          className="rounded-2xl bg-categories p-2 w-40 flex items-center justify-center"
          key={cat.id}
        >
          {lang === "fa" ? cat.name_fa : cat.name_en}
        </div>
      ))}
    </div>
  );
}
