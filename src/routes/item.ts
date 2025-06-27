import { Router } from 'express';
import { createItem, getItems } from '../controllers/itemController';

const router = Router();
router.post('/', createItem);
router.get('/:boxId', getItems);
export default router;
