import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/shared/prisma/validation.pipe';
import { SignInDTO } from './dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  login(@Body(new ValidationPipe()) request : SignInDTO) {
    try {
      return 1;
    }catch (error) {
      console.log(error);
    }
  }
}
