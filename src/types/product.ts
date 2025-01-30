
export interface Product {
  type: 'product';
  product_id: number;
  name: string;
  description?: string;
  image_url: string;
  price: string;
  cost: string;
  // Supplier not implemented in v1.0
  // supplier_id?: number;
  category_id?: number;
  subcategory_id?: number;
}