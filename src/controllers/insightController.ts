import { Request, Response } from 'express';
import { generateInsights } from '../services/insight';
import { z } from 'zod';
import { asyncHandler } from '../utils/asyncHandler';

export const getInsights = asyncHandler(async (req: Request, res: Response) => {
  const userId = z.string().uuid().parse(req.params.userId);
  const data = await generateInsights(userId);
  res.json(data);
});
