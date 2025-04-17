

// src/schemas/userSchema.ts
import { z } from 'zod';

export const registerUserSchema = z.object({
  body: z.object({
    id: z.string().uuid({ message: 'Invalid ID format' }),
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

export const loginUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password is required'),
  }),
});
