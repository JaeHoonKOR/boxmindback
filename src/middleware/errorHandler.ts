import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES } from '../constants';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err?.name === 'ZodError') {
    return res.status(400).json({ error: err.message });
  }
  console.error(err);
  res.status(500).json({ error: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
};
