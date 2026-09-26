"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors"
      >
        {lang === "fa" ? "زبان" : "Language"}
      </button>
      {isOpen && (
        <div className="absolute top-full inset-e-0 mt-1 w-32 bg-gray-200 rounded-md shadow-md overflow-hidden z-50">
          <button
            onClick={() => {
              setLang("fa");
              setIsOpen(false);
            }}
            className={`w-full text-end px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
              lang === "fa" ? "bg-gray-300 font-medium" : ""
            }`}
          >
            فارسی
          </button>
          <button
            onClick={() => {
              setLang("en");
              setIsOpen(false);
            }}
            className={`w-full text-start px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
              lang === "en" ? "bg-gray-300 font-medium" : ""
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
