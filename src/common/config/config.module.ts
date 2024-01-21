import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import config from './application/app.config';
import configValidationSchema from './infrastructure/config-validation.schema';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [config],
      validationSchema: configValidationSchema,
      validationOptions: {
        abortEarly: true
      }
    })
  ]
})
export class ConfigModule {}
