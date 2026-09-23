export const dictionary = {
  fa: {
    nav: {
      products: "محصولات",
      categories: "دسته بندی",
      contact: "تماس با ما",
      about: "درباره ما",
    },
    hero: {
      viewProduct: "مشاهده محصول",
      allProducts: "همه محصولات",
    },
    card: { moreInfo: "اطلاعات بیشتر" },
    aboutMe: {
      title: "درباره ما",
      text2:
        "به فروشگاه ما خوش آمدید؛ جایی برای انتخاب و خرید مطمئن انواع ابزارآلات باکیفیت",
      text: "ما با هدف فراهم کردن دسترسی آسان به ابزارهای حرفه‌ای و کاربردی، مجموعه‌ای متنوع از ابزارآلات دستی، برقی، صنعتی و تجهیزات مورد نیاز کارگاه‌ها و پروژه‌های مختلف را گردآوری کرده‌ایم. تلاش ما این است که شما بتوانید بدون نیاز به جست‌وجوی طولانی، ابزار مورد نیاز خود را با اطلاعات کامل و مقایسه مناسب انتخاب و خریداری کنید",
      bestQuality: "بالاترین کیفیت با قیمت مناسب",
      support: "پشتیبانی ۲۴ ساعته",
      shipping: "ارسال به همه جا",
    },
    footer: { copyright: "© تمامی حقوق محفوظ است. ۲۰۲۶" },
    common: {
      noCategories: "هیچ دسته‌بندی‌ای پیدا نشد",
      noProducts: "هیچ محصولی پیدا نشد",
      errorCategories: "خطا در دریافت دسته‌بندی‌ها",
      errorProducts: "خطا در دریافت محصولات",
    },
  },
  en: {
    nav: {
      products: "Products",
      categories: "Categories",
      contact: "Contact Us",
      about: "About Us",
    },
    hero: {
      viewProduct: "View Product",
      allProducts: "All Products",
    },
    card: { moreInfo: "More Info" },
    aboutMe: {
      title: "About Us",
      text2:
        "Welcome to our store — a reliable place to choose and buy quality tools",
      text: "With the goal of providing easy access to professional and practical tools, we've gathered a diverse collection of hand tools, power tools, industrial tools, and equipment needed for workshops and various projects. We aim to let you choose and purchase what you need with complete information, without long searching.",
      bestQuality: "Top Quality at a Fair Price",
      support: "24-Hour Support",
      shipping: "Nationwide Shipping",
    },
    footer: { copyright: "© Copyright 2026. All Rights Reserved." },
    common: {
      noCategories: "No categories found",
      noProducts: "No products found",
      errorCategories: "Error fetching categories",
      errorProducts: "Error fetching products",
    },
  },
} as const;

export type Lang = keyof typeof dictionary;
