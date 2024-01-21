import { PartialType } from '@nestjs/mapped-types';

import { UserCreateValidationDto } from './user-create-validation.dto';

export class UpdateUserDto extends PartialType(UserCreateValidationDto) {}
