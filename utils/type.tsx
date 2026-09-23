export interface Carditem {
  alt: string;
  imageUrl: string;
  title_fa: string;
  title_en: string;
  description_fa: string;
  description_en: string;
}
export interface FooterItems {
  title_fa: string;
  title_en: string;
  listItems_fa: string[];
  listItems_en: string[];
}

export interface productsDetail {
  category: number;
  name_en: string;
  name_fa: string;
  description_en: string;
  description_fa: string;
  image: string;
}

export interface category {
  id: number;
  name_en: string;
  name_fa: string;
  created: string;
}
