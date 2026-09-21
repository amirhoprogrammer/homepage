import React from "react";
import "../globals.css";
const text =
  "ما با هدف فراهم کردن دسترسی آسان به ابزارهای حرفه‌ای و کاربردی، مجموعه‌ای متنوع از ابزارآلات دستی، برقی، صنعتی و تجهیزات مورد نیاز کارگاه‌ها و پروژه‌های مختلف را گردآوری کرده‌ایم. تلاش ما این است که شما بتوانید بدون نیاز به جست‌وجوی طولانی، ابزار مورد نیاز خود را با اطلاعات کامل و مقایسه مناسب انتخاب و خریداری کنید.";
const text2 =
  "به فروشگاه ما خوش آمدید؛ جایی برای انتخاب و خرید مطمئن انواع ابزارآلات باکیفیت.";
export default function Aboutme() {
  return (
    <div className="px-3 py-3">
      <div className="flex justify-end">
        <h2 className="text-3xl font-bold">درباره ما</h2>
      </div>
      <div className="flex flex-row-reverse gap-4">
        <div className="w-[80%]">
          <p className="text-base flex justify-end">{text2}</p>
          <p className="text-base flex justify-end text-justify">{text}</p>
        </div>
        <div className="grid w-[20%]">
          <button className="rounded-lg bg-button text-background">
            بالاترین کیفیت با قیمت مناسب
          </button>
          <div className="flex w-full gap-2 py-2 items-center justify-center">
            <button className="rounded-lg bg-button text-background w-[45%]">
              پشتیبانی 24 ساعته
            </button>
            <button className="rounded-lg bg-button text-background w-[45%]">
              ارسال به همه جا
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
