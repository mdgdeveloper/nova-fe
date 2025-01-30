import { RoleName } from "./enums";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Employee {
  employee_id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role?: RoleName;
  pin: number;
  created_at: string;
  Transactions?: Transaction[];
  User?: User;
}