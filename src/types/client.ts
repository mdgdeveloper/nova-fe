import { Transaction } from "./transaction";

export interface Client {
  client_id: number;
  fist_name: string;
  last_naeme: string;
  phone_number?: string;
  email?: string;
  created_at: string;
  Transactions?: Transaction[];
}