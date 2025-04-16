

// src/schemas/userSchema.ts
import { z } from 'zod';

// userSchema.ts
export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});