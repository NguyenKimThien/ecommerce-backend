import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { UserRepository } from './users.repositoties';

@Module({
  controllers: [UsersController],
  providers: [UsersService,PrismaService,UserRepository],
})
export class UsersModule {}
