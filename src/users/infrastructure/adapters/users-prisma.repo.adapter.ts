import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/common/database';
import { UserCreateDTO } from '@/users/domain/dtos/user-create.dto';
import { User } from '@/users/domain/entities/user';
import { UsersRepo } from '@/users/domain/repositories/users.repo';

import { PrismaUserMapper } from '../prisma/mappers/prisma-user.mapper';

@Injectable()
export class UsersPrismaRepoAdapter implements UsersRepo {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id
      }
    });

    if (!user) return null;

    return PrismaUserMapper.toDomain(user);
  }
  async findAll(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();
    return users.map(PrismaUserMapper.toDomain);
  }

  async create(body: UserCreateDTO): Promise<User> {
    const user = await this.prismaService.user.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName
      }
    });

    return PrismaUserMapper.toDomain(user);
  }
  // findById(id: string): Promise<User | null> {
  //   throw new Error('Method not implemented.');
  // }
  // findAll(): Promise<User[]> {
  //   throw new Error('Method not implemented.');
  // }
  // findByEmail(email: string): Promise<User | null> {
  //   throw new Error('Method not implemented.');
  // }
  // update(user: User): void {
  //   throw new Error('Method not implemented.');
  // }
  // remove(id: string): void {
  //   throw new Error('Method not implemented.');
  // }
}
