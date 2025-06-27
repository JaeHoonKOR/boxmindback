import { Router } from 'express';
import userRouter from './userRouter';
import boxRouter from './boxRouter';
import itemRouter from './itemRouter';
import insightRouter from './insightRouter';
import { ROUTES } from '../constants';

const router = Router();
router.use(ROUTES.USERS, userRouter);
router.use(ROUTES.BOX, boxRouter);
router.use(ROUTES.ITEM, itemRouter);
router.use(ROUTES.INSIGHTS, insightRouter);

export default router;
