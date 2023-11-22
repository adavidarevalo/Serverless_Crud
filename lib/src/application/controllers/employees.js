import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
console.log('🚀 ~ file: employees.ts:5 ~ prisma:', prisma);
export const getUserList = async () => {
    const users = await prisma.user.findMany();
    return users;
};
export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user;
};
export const deleteUser = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id,
        },
    });
    return user;
};
//# sourceMappingURL=employees.js.map