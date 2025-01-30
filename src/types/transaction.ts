import type { PaymentMethod } from '@/types/enums';
import { Service } from '@/types/service';
import { Product } from '@/types/product';


/**  
 * Represents the "Transaction" model from Prisma schema.  
 */
export interface Transaction {
  transaction_id: number;
  /**  
   * Foreign key references to Client and Employee.  
   */
  client_id: number;
  employee_id: number;
  /**  
   * The sum for the transaction, stored as decimal.  
   */
  total_amount: string;
  payment_method: PaymentMethod;
  created_at: string;
  services: Service[];
  products: Product[];

} 