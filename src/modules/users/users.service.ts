/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repositoties';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}
  findAllUsers() : unknown{
    return this.userRepo.getAllUsers();
  }

  getUserById(id : number){
    return this.userRepo.getUserById(id);
  }
}
