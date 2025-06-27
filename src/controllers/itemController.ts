import { Request, Response } from 'express';
import { itemSchema } from '../validators/itemValidator';
import { prisma } from '../prisma';
import { LIMITS, ERROR_MESSAGES } from '../constants';
import { asyncHandler } from '../utils/asyncHandler';

export const createItem = asyncHandler(async (req: Request, res: Response) => {
  const data = itemSchema.parse(req.body);
  const count = await prisma.item.count({ where: { boxId: data.boxId } });
  if (count >= LIMITS.ITEMS_PER_BOX) {
    return res.status(400).json({ error: ERROR_MESSAGES.ITEM_LIMIT_REACHED });
  }
  const item = await prisma.item.create({ data });
  res.json({ itemId: item.id });
});

export const getItems = asyncHandler(async (req: Request, res: Response) => {
  const boxId = itemSchema.shape.boxId.parse(req.params.boxId);
  const items = await prisma.item.findMany({ where: { boxId } });
  res.json(items);
});
