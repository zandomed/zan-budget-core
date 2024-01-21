import { Module } from '@nestjs/common';

import { UserCreateUseCase } from './application/use-cases/user-create.use-case';
import { UserFindAllUseCase } from './application/use-cases/user-find-all.use-case';
import { UserFindByIdUseCase } from './application/use-cases/user-find-by-id.use-case';
import { UsersRepo } from './domain/repositories/users.repo';
import { UsersPrismaRepoAdapter } from './infrastructure/adapters/users-prisma.repo.adapter';
import { UsersHttpController } from './infrastructure/controllers/users-http.controller';

@Module({
  controllers: [UsersHttpController],
  providers: [
    {
      provide: UsersRepo,
      useClass: UsersPrismaRepoAdapter
    },
    UserCreateUseCase,
    UserFindAllUseCase,
    UserFindByIdUseCase
  ]
})
export class UsersModule {}
