import { z } from 'zod';

export const projectSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  deadline: z.string().datetime().optional(),
  visibility: z.enum(['public', 'private']).optional()
});

