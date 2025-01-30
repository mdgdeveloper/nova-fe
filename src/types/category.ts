import { Product } from "@/types/product";
import { Service } from "@/types/service";

export interface Category {
  category_id: number;
  name: string;
  description?: string;
  image_url?: string;
  Subcategories?: Subcategory[];
  Services?: Service[];
  Products?: Product[];
}

export interface Subcategory {
  subcategory_id: number;
  category_id: number;
  name: string;
  Services?: Service[];
  Products?: Product[];
}