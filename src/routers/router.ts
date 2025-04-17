// import express from 'express';
// import { PrismaClient } from '@prisma/client'; // Adjust the import path as necessary

// const router = express.Router();
// const prisma = new PrismaClient();

// // POST route to create a new User
// router.post('', async (req, res) => {
//     const { id, email, password } = req.body;

//     try {
//         const newUser = await prisma.user.create({
//             data: {
//                 id,
//                 email,
//                 password                   
//             },
//         });
//         res.status(201).json({user: newUser, message: 'User created successfully'});
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to create user' });
//     }
// });

// export default router;

import express from 'express';
import { registerUser, loginUser } from '../Controllers/userController';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
