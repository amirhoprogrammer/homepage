"use client";
import React from "react";
import "../globals.css";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import "./about.css";

export default function Aboutme() {
  const { lang } = useLanguage();
  const t = dictionary[lang].aboutMe;
  return (
    <div className="px-3 py-3 my-5">
      <div className="flex ">
        <h2 className="text-3xl font-bold">{t.title}</h2>
      </div>
      <div className="flex  gap-4 texts">
        <div className="w-[80%]">
          <p className="text-base flex ">{t.text2}</p>
          <p className="text-base flex  text-justify">{t.text}</p>
        </div>
        <div className="grid w-[20%]">
          <button className="rounded-lg bg-button text-background">
            {t.bestQuality}{" "}
          </button>
          <div className="flex w-full gap-2 py-2 items-center justify-center">
            <button className="rounded-lg bg-button text-background w-[45%]">
              {t.support}
            </button>
            <button className="rounded-lg bg-button text-background w-[45%]">
              {t.shipping}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
