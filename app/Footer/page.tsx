"use client";

import FooterList from "@/components/FooterList";
import FooterMap from "@/components/FooterMap";
import { FooterLists } from "@/data/FooterLists";
import { useLanguage } from "@/contexts/LanguageContext";
import { dictionary } from "@/data/dictionary";
import Image from "next/image";

const imageUrls = [
  "/icons8-github-100.png",
  "/icons8-instagram-100.png",
  "/icons8-linkedin-100.png",
];

export default function Footer() {
  const { lang } = useLanguage();
  const t = dictionary[lang];

  return (
    <div className="pt-5">
      <div className="flex items-center px-2 py-2">
        <FooterMap />
        <FooterList items={FooterLists[0]} />
        <FooterList items={FooterLists[1]} />
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="flex items-center justify-around">
        <p className="text-sm">{t.footer.copyright}</p>
        <div className="flex gap-3">
          <Image src={imageUrls[0]} alt="github" width={50} height={50} />
          <Image src={imageUrls[1]} alt="instagram" width={50} height={50} />
          <Image src={imageUrls[2]} alt="linkedin" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
