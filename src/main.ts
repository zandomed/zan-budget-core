import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';

import { EnvironmentVariables } from '@/common/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const configService = app.get(ConfigService<EnvironmentVariables, true>);
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      excludePrefixes: ['_'],
      enableImplicitConversion: true,
      excludeExtraneousValues: true
    })
  );
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get<number>('port'));
}
bootstrap();
