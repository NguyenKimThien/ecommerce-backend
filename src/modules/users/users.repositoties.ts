import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prismaServive: PrismaService) {}
  async getUserById(id: number) {
    return this.prismaServive.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async getAllUsers () {
    return this.prismaServive.user.findMany();
  }
}
