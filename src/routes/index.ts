import { Router } from 'express';
import registerRoute from './register';
import boxRoute from './box';
import itemRoute from './item';
import insightRoute from './insight';

const router = Router();
router.use(registerRoute);
router.use('/box', boxRoute);
router.use('/item', itemRoute);
router.use('/insights', insightRoute);

export default router;
