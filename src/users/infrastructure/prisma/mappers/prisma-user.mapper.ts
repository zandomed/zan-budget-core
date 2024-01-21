import { User as PrismaUser } from '@prisma/client';

import { User } from '@/users/domain/entities/user';
export class PrismaUserMapper {
  private constructor() {
    throw new Error(
      'PrismaUserMapper is a static class and should not be instantiated'
    );
  }

  public static toDomain(userPrismaData: PrismaUser): User {
    return new User({
      ...userPrismaData
    });
  }
}
