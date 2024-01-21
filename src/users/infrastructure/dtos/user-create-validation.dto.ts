import { IsEmail, IsNotEmpty } from 'class-validator';

import { UserCreateDTO } from '@/users/domain/dtos/user-create.dto';

export class UserCreateValidationDto implements UserCreateDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
}
