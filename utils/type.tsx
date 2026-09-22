export interface Carditem {
  alt: string;
  imageUrl: string;
  title: string;
  description: string;
}
export interface FooterItems {
  title: string;
  listItems: string[];
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
