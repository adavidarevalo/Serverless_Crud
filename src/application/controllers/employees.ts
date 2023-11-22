/** @format */
import { PrismaClient } from '@prisma/client';
import { IUser } from '../interface/user';

const prisma = new PrismaClient();
console.log('🚀 ~ file: employees.ts:5 ~ prisma:', prisma);

export const getUserList = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const createUser = async (data: IUser) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
};
