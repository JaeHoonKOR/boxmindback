import { Request, Response } from 'express';
import { generateInsights } from '../services/insight';
import { z } from 'zod';

export const getInsights = async (req: Request, res: Response) => {
  try {
    const userId = z.string().uuid().parse(req.params.userId);
    const data = await generateInsights(userId);
    res.json(data);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
