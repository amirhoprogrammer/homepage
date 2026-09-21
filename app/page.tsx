import Image from "next/image";
import Hero from "./Hero/Hero";
import Aboutme from "./Aboutme/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Aboutme />
    </div>
  );
}
