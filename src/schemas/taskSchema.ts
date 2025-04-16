import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1),
  status: z.enum(['Todo', 'In Progress', 'Done']),
  projectId: z.string()
});

export const taskStatusSchema = z.object({
  status: z.enum(['Todo', 'In Progress', 'Done'])
});
