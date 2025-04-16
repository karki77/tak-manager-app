import { Router } from 'express';
import { handleLogin, handleRegister } from '../Controllers/userController';

const router = Router();

router.post('/register', handleRegister);
router.post('/login', handleLogin);

export default router;
