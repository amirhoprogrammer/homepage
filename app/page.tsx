import Image from "next/image";
import Hero from "./Hero/Hero";
import Aboutme from "./Aboutme/page";
import Blogs from "./Blogs/page";
import Footer from "./Footer/page";
import Categories from "./Categories/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <Aboutme />
      <Blogs />
      <Footer />
    </div>
  );
}
