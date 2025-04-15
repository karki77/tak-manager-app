import { z } from "zod";

export const createProjectSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Project name is required"),
    description: z.string().min(5, "Description must be at least 5 characters long"),
    dueDate: z.string().datetime({ message: "Invalid due date format" }).optional(),
  }),
});

export const updateProjectSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Project name is required").optional(),
    description: z.string().min(5, "Description must be at least 5 characters long"),
    dueDate: z.string().datetime({ message: "Invalid due date format" }).optional(),
  }),
});
