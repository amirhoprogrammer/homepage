import api from "./api";
import { category } from "@/utils/type";

export const getCategories = async (): Promise<category[]> => {
  const response = await api.get("/products/category/get/");
  return response.data;
};

export const getCategory = async (category_id: number): Promise<category[]> => {
  const response = await api.get(`/products/category/get/${category_id}/`);

  return response.data;
};
