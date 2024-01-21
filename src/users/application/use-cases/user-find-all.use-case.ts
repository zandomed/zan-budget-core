import { Injectable } from '@nestjs/common';

import { UseCase } from '@/common/shared/application/interfaces/use-case';
import { User } from '@/users/domain/entities/user';
import { UsersRepo } from '@/users/domain/repositories/users.repo';

type UserFindAllUseCaseResponse = User[];

@Injectable()
export class UserFindAllUseCase
  implements UseCase<void, UserFindAllUseCaseResponse>
{
  constructor(private readonly usersRepo: UsersRepo) {}

  async run(): Promise<UserFindAllUseCaseResponse> {
    return await this.usersRepo.findAll();
  }
}
