import { Request, Response } from 'express';
import { boxSchema } from '../validators/boxValidator';
import { prisma } from '../prisma';
import { LIMITS, ERROR_MESSAGES } from '../constants';
import { asyncHandler } from '../utils/asyncHandler';

export const createBox = asyncHandler(async (req: Request, res: Response) => {
  const { userId, name } = boxSchema.parse(req.body);
  const count = await prisma.box.count({ where: { userId } });
  if (count >= LIMITS.BOXES_PER_USER) {
    return res.status(400).json({ error: ERROR_MESSAGES.BOX_LIMIT_REACHED });
  }
  const box = await prisma.box.create({ data: { userId, name } });
  res.json({ boxId: box.id });
});

export const getBoxes = asyncHandler(async (req: Request, res: Response) => {
  const userId = boxSchema.shape.userId.parse(req.params.userId);
  const boxes = await prisma.box.findMany({ where: { userId } });
  res.json(boxes);
});
