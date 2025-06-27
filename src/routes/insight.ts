import { Router } from 'express';
import { getInsights } from '../controllers/insightController';

const router = Router();
router.get('/:userId', getInsights);
export default router;
