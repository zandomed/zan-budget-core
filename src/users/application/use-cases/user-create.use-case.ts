import { Injectable } from '@nestjs/common';

import { UseCase } from '@/common/shared/application/interfaces/use-case';
import { UserCreateDTO } from '@/users/domain/dtos/user-create.dto';
import { User } from '@/users/domain/entities/user';
import { UsersRepo } from '@/users/domain/repositories/users.repo';

interface UserCreateUseCaseRequest extends UserCreateDTO {}

type UserCreateUseCaseResponse = User;

@Injectable()
export class UserCreateUseCase
  implements UseCase<UserCreateUseCaseRequest, UserCreateUseCaseResponse>
{
  constructor(private readonly usersRepo: UsersRepo) {}

  async run(
    request: UserCreateUseCaseRequest
  ): Promise<UserCreateUseCaseResponse> {
    const { email, firstName, lastName } = request;

    const user = await this.usersRepo.create({
      email,
      firstName,
      lastName
    });

    return user;
  }
}
