import type { RoleName } from './enums';
import type { User } from './user';

/**  
 * Represents the "Role" model from Prisma schema.  
 */
export interface Role {
  role_id: number;
  role_name: RoleName;
  Users?: User[];
}  