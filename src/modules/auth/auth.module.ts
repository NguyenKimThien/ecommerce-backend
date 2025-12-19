import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ValidationPipe } from 'src/shared/prisma/validation.pipe';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ValidationPipe],
})
export class AuthModule {}
