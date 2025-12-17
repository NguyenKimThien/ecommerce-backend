/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from '@prisma/client';
import { Role } from 'generated/prisma/enums';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const user = await prisma.user.create({
    data: {
      email: 'user@test.com',
      password: '123456', // sau này hash
      name: 'Test User',
      role: Role.USER,
    },
  });
}
main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
