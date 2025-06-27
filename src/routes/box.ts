import { Router } from 'express';
import { createBox, getBoxes } from '../controllers/boxController';

const router = Router();
router.post('/', createBox);
router.get('/:userId', getBoxes);
export default router;
