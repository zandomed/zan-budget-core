import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post
} from '@nestjs/common';

import { Serializer } from '@/common/shared/infrastructure/decorators/serializer';
import { UserCreateUseCase } from '@/users/application/use-cases/user-create.use-case';
import { UserFindAllUseCase } from '@/users/application/use-cases/user-find-all.use-case';
import { UserFindByIdUseCase } from '@/users/application/use-cases/user-find-by-id.use-case';

import { UserCreateValidationDto } from '../dtos/user-create-validation.dto';
import { UserCreateSerializer } from '../serializers/user-create.serializer';
import { UserFindAllSerializer } from '../serializers/user-find-all.serializer';
import { UserFindByIdSerializer } from '../serializers/user-find-by-id.serializer';

@Controller('users')
export class UsersHttpController {
  constructor(
    private readonly userCreateUseCase: UserCreateUseCase,
    private readonly userFindAllUseCase: UserFindAllUseCase,
    private readonly userFindById: UserFindByIdUseCase
  ) {}

  @Post()
  @Serializer(UserCreateSerializer)
  create(@Body() createUserDto: UserCreateValidationDto) {
    return this.userCreateUseCase.run(createUserDto);
  }

  @Get()
  @Serializer(UserFindAllSerializer, { multiple: true })
  findAll() {
    return this.userFindAllUseCase.run();
  }

  @Get(':id')
  @Serializer(UserFindByIdSerializer)
  async findById(@Param('id') id: string) {
    const user = await this.userFindById.run(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
