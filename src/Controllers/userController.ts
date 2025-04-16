// import { Request, Response } from 'express';
// import { registerUserService, findUserByEmail } from '../services/userService';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// export const registerUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await findUserByEmail(email);
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await registerUserService({ email, password: hashedPassword });

//     res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (err: any) {
//     res.status(400).json({ error: err.errors || err.message });
//   }
// };

// export const loginUser = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const user = await findUserByEmail(email);
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', {
//       expiresIn: '1d',
//     });

//     res.json({ token });
//   } catch (err: any) {
//     res.status(500).json({ error: err.errors || err.message });
//   }
// };

import { Request, Response } from 'express';
import { createUser } from '../services/userService';

export const registerUser = (req: Request, res: Response) => {
  const { id, email, password } = req.body;
  
  createUser({ id, email, password })
    .then(user => {
      res.status(201).json({ user, message: 'User created successfully' });
    })
    .catch(error => {
      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'Email already exists' });
      }
      
      console.error('Error in controller:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

