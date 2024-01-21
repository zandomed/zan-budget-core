import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CommonModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
