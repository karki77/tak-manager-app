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
import { registerUser, loginUser } from '../Controllers/userController';
import { validateRequest } from '../middleware/validation';
import { registerUserSchema, loginUserSchema } from '../schemas/userSchema';

const router = express.Router();

router.post('/register', validateRequest(registerUserSchema), registerUser);
router.post('/login', validateRequest(loginUserSchema), loginUser); //

export default router;
