import { Expose } from 'class-transformer';

import { User } from '@/users/domain/entities/user';

export class UserFindAllSerializer {
  constructor(private user: User) {}

  @Expose()
  get id() {
    return this.user.id;
  }

  @Expose()
  get firstName() {
    return this.user.firstName;
  }

  @Expose()
  get lastName() {
    return this.user.lastName;
  }

  @Expose()
  get email() {
    return this.user.email;
  }

  @Expose()
  get fullName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }
}
