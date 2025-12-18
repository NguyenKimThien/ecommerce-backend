import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() 
  getAllUsers(): unknown{
    return this.usersService.findAllUsers();
  }

  @Get("/:id")
  getUserById(@Param('id') id: string) {
    const idNum = parseInt(id, 10);
    if (isNaN(idNum)) {
      throw new Error('Invalid user ID');
    }
    return this.usersService.getUserById(idNum);
  }
}
