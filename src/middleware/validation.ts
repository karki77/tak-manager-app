// import { AnyZodObject } from "zod";
// import { NextFunction, Request, Response } from "express";

// export const validateRequest = (schema: AnyZodObject) => 
//    (req: Request, res: Response, next: NextFunction) => {
//     try {
//         schema.parse({
//             body: req.body,
//             params: req.params,
//             query: req.query,
//         });
//         next();
//     } catch (error) {
//       return res.status(400).json({
//         message: "Validation error",
//         errors: (error as any).errors,
//       });
//     }
//   };




// import { Request, Response, NextFunction } from 'express';
// import { ZodSchema } from 'zod';

// export const validateRequest = (schema: ZodSchema<any>) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     try {
//       schema.parse(req.body);
//       next(); // this is important, lets the request move forward
//     } catch (err: any) {
//       return res.status(400).json({
//         error: err.errors || 'Invalid request data'
//       });
//     }
//   };
// };



import { Request, Response, NextFunction, RequestHandler } from 'express';
import { AnyZodObject } from 'zod';

export const validateRequest = (schema: AnyZodObject): RequestHandler => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ error: result.error.format() });
      return;
    }

    // Optionally attach parsed data to req.body
    req.body = result.data;
    next();
  };
};
