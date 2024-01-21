import { Global, Module } from '@nestjs/common';

import { PrismaService } from './infrastructure/prisma/prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class DatabaseModule {}
