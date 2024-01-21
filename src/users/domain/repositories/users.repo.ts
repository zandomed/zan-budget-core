import { UserCreateDTO } from '../dtos/user-create.dto';
import { User } from '../entities/user';

export abstract class UsersRepo {
  abstract create(body: UserCreateDTO): Promise<User>;
  abstract findAll(): Promise<User[]>;
  abstract findById(id: string): Promise<User | null>;
  // abstract findByEmail(email: string): Promise<User | null>;
  // abstract update(user: User): void;
  // abstract remove(id: string): void;
}
