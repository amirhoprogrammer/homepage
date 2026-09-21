import FooterList from "@/components/FooterList";
import FooterMap from "@/components/FooterMap";
import { FooterLists } from "@/data/FooterLists";
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
        <div className="flex gap-3"></div>
      </div>
    </div>
  );
}
