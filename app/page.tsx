import Image from "next/image";
import Hero from "./Hero/Hero";
import Aboutme from "./Aboutme/page";
import Blogs from "./Blogs/page";
import Footer from "./Footer/page";
import Categories from "./Categories/page";
import Products from "./Products/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Categories />
      <Products />
      <Aboutme />
      <Blogs />
      <Footer />
    </div>
  );
}
