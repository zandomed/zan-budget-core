import { Module } from '@nestjs/common';

import ConfigModule from '@/config';
import DatabaseModule from '@/database';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
