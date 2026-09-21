import Card from "@/components/Card";
import React from "react";
import { Cards } from "@/data/Cards";
export default function Blogs() {
  return (
    <div className="flex gap-4 items-center justify-center my-10 px-5">
      <Card items={Cards[0]} />
      <Card items={Cards[1]} />
      <Card items={Cards[2]} />
    </div>
  );
}
