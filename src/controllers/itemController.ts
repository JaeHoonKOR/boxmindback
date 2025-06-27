import { Request, Response } from 'express';
import { itemSchema } from '../validators/itemValidator';
import { prisma } from '../prisma';

export const createItem = async (req: Request, res: Response) => {
  try {
    const data = itemSchema.parse(req.body);
    const count = await prisma.item.count({ where: { boxId: data.boxId } });
    if (count >= 50) {
      return res.status(400).json({ error: 'Item limit reached' });
    }
    const item = await prisma.item.create({ data });
    res.json({ itemId: item.id });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const boxId = itemSchema.shape.boxId.parse(req.params.boxId);
    const items = await prisma.item.findMany({ where: { boxId } });
    res.json(items);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
