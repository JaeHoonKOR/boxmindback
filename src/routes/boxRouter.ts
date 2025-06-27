import { Router } from 'express';
import { createBox, getBoxes } from '../controllers/boxController';
import { ROUTES } from '../constants';

const router = Router();
router.post('/', createBox);
router.get(ROUTES.USERS + '/:userId', getBoxes);
export default router;
