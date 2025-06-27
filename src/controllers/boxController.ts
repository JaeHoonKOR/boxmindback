import { Request, Response } from 'express';
import { boxSchema } from '../validators/boxValidator';
import { prisma } from '../prisma';

export const createBox = async (req: Request, res: Response) => {
  try {
    const { userId, name } = boxSchema.parse(req.body);
    const count = await prisma.box.count({ where: { userId } });
    if (count >= 2) {
      return res.status(400).json({ error: 'Box limit reached' });
    }
    const box = await prisma.box.create({ data: { userId, name } });
    res.json({ boxId: box.id });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getBoxes = async (req: Request, res: Response) => {
  try {
    const userId = boxSchema.shape.userId.parse(req.params.userId);
    const boxes = await prisma.box.findMany({ where: { userId } });
    res.json(boxes);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
