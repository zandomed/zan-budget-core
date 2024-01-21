import { Expose } from 'class-transformer';

import { User } from '@/users/domain/entities/user';

export class UserCreateSerializer {
  constructor(private user: User) {}

  @Expose()
  get firstName() {
    return this.user.firstName;
  }
}
