import type { Role } from '@/types/role';
import type { Employee } from '@/types/employee';

/**  
 * Represents the "User" model from Prisma schema.  
 */
export interface User {
  user_id: number;
  employee_id?: number;
  username: string;
  password_hash: string;
  role_id?: number;
  created_at: string;
  Employee?: Employee;
  Role?: Role;
}  