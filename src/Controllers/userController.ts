import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/userService';

export const handleRegister = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Registration failed' });
  }
};

export const handleLogin = async (req: Request, res: Response) => {
  try {
    const { token } = await loginUser(req.body);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Login failed' });
  }
};
