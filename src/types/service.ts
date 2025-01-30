export interface Service {
  type: 'service';
  service_id: number;
  name: string;
  description?: string;
  image_url?: string;
  price: string;
  cost: string;
  category_id?: number;
  subcategory_id?: number;
}