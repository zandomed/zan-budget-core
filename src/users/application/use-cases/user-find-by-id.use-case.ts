import { Injectable } from '@nestjs/common';

import { UseCase } from '@/common/shared/application/interfaces/use-case';
import { User } from '@/users/domain/entities/user';
import { UsersRepo } from '@/users/domain/repositories/users.repo';

type UserFindByIdUseCaseRequest = string;

type UserFindByIdUseCaseResponse = User | null;

@Injectable()
export class UserFindByIdUseCase
  implements UseCase<UserFindByIdUseCaseRequest, UserFindByIdUseCaseResponse>
{
  constructor(private readonly usersRepo: UsersRepo) {}

  async run(
    id: UserFindByIdUseCaseRequest
  ): Promise<UserFindByIdUseCaseResponse> {
    return await this.usersRepo.findById(id);
  }
}
