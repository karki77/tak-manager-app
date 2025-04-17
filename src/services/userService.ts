// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@prisma/client'; // Adjust the import path as necessary
const prisma = new PrismaClient();

interface CreateUserParams {
    id: string;
    email: string;
    password: string;
}

export const createUser = async ({ id, email, password }: CreateUserParams) => {
    return await prisma.user.create({
        data: {
            id,
            email,
            password,
        },
    });
};

export const findUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email },
    });
};

// };