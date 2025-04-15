import { AnyZodObject } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateRequest = (schema: AnyZodObject) => 
   (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        next();
    } catch (error) {
      return res.status(400).json({
        message: "Validation error",
        errors: (error as any).errors,
      });
    }
  };
