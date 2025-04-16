import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userSchema } from '../schemas/userSchema';
const prisma = new PrismaClient();

export const registerUser = async (data: any) => {
  const validated = userSchema.parse(data);
  const existingUser = await prisma.user.findUnique({ where: { email: validated.email } });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(validated.password, 10);
  return await prisma.user.create({
    data: { email: validated.email, password: hashedPassword }
  });
};

export const loginUser = async (data: any) => {
  const validated = userSchema.parse(data);
  const user = await prisma.user.findUnique({ where: { email: validated.email } });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(validated.password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '1d'
  });

  return { token };
};
