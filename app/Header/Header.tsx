"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./header.css";
import LanguageSelector from "@/components/languageSelector";
const HeaderItem = [
  { headerData: "محصولات", headerLink: "#" },
  { headerData: "دسته بندی", headerLink: "#" },
  { headerData: "تماس با ما", headerLink: "#" },
  { headerData: "تماس با ما", headerLink: "#" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 580);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center justify-between px-3 py-2 headerlisting ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="logo rounded-full">
        <Link href="./">
          <Image
            src="/logo.jpg"
            alt="AmirLogo"
            width={50}
            height={50}
            className="rounded-sm"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-3 headerlist">
        {HeaderItem.map((item, id) => (
          <Link href={item.headerLink} key={id}>
            <p className="text-base">{item.headerData}</p>
          </Link>
        ))}
      </div>
      <LanguageSelector />
    </div>
  );
}
