import { Router } from 'express';
import { registerUser } from '../controllers/userController';
import { ROUTES } from '../constants';

const router = Router();
router.post(ROUTES.REGISTER, registerUser);
export default router;
