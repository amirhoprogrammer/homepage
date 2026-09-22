import FooterList from "@/components/FooterList";
import FooterMap from "@/components/FooterMap";
import { FooterLists } from "@/data/FooterLists";
import Image from "next/image";
const imageUrl = [
  "/icons8-github-100.png",
  "/icons8-instagram-100.png",
  "/icons8-linkedin-100.png",
];
export default function Footer() {
  return (
    <div className=" pt-5">
      <div className="flex items-center justify-end px-2 py-2">
        <FooterMap />
        <FooterList items={FooterLists[0]} />
        <FooterList items={FooterLists[1]} />
      </div>
      <div className="border-t-2 border-black"></div>
      <div className="flex items-center justify-around">
        <p className="text-sm">©Copyright 2026. All Rights Reserved.</p>
        <div className="flex gap-3">
          <Image src={imageUrl[0]} alt={"github"} width={50} height={50} />
          <Image src={imageUrl[1]} alt={"instagram"} width={50} height={50} />
          <Image src={imageUrl[2]} alt={"linkdin"} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
