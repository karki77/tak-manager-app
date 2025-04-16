// 
// import express from 'express';
// import { registerUser, loginUser } from '../Controllers/userController';
// import { validateRequest } from '../middleware/validation';
// import { userSchema } from '../schemas/userSchema';

// const router = express.Router();

// router.post('/register', validateRequest(userSchema), registerUser);
// router.post('/login', validateRequest(userSchema), loginUser);

// export default router;
import express from 'express';
import { registerUser } from '../Controllers/userController';
import { validateRequest } from '../middleware/validation';
import  {CreateUserSchema}from '../schemas/userSchema';
const router = express.Router();

router.post('/register', validateRequest(CreateUserSchema), registerUser);

export default router;