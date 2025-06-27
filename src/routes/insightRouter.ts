import { Router } from 'express';
import { getInsights } from '../controllers/insightController';
import { ROUTES } from '../constants';

const router = Router();
router.get(ROUTES.USERS + '/:userId', getInsights);
export default router;
