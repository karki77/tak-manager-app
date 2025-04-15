import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Task title is required"),
    description: z.string().optional(),
    status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]),
    dueDate: z.string().datetime({ message: "Invalid due date format" }).optional(),
    projectId: z.string().min(1,"Invalid project ID "),
  }),
});

export const updateTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Task title is required").optional(),
    description: z.string().optional(),
    status: z.enum(["PENDING", "IN_PROGRESS", "COMPLETED"]).optional(),
    dueDate: z.string().datetime({ message: "Invalid due date format" }).optional(),
    projectId: z.string().min(1,"Invalid project ID "),
  }),
});
