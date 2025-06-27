import { Router } from 'express';
import { createItem, getItems } from '../controllers/itemController';
import { ROUTES } from '../constants';

const router = Router();
router.post('/', createItem);
router.get(ROUTES.BOX + '/:boxId', getItems);
export default router;
