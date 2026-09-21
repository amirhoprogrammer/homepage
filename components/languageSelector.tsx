"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("english");

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium transition-colors"
      >
        Language
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-32 bg-gray-200 rounded-md shadow-md overflow-hidden z-50">
          <button
            onClick={() => {
              setSelectedLang("persian");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
              selectedLang === "persian" ? "bg-gray-300 font-medium" : ""
            }`}
          >
            persian
          </button>

          <button
            onClick={() => {
              setSelectedLang("english");
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-300 transition-colors ${
              selectedLang === "english" ? "bg-gray-300 font-medium" : ""
            }`}
          >
            english
          </button>
        </div>
      )}
    </div>
  );
}
