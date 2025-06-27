import { Request, Response, NextFunction } from 'express';
import { ERROR_MESSAGES, HEADERS } from '../constants';

export const apiKeyAuth = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers[HEADERS.API_KEY];
  if (key !== process.env.API_KEY) {
    return res.status(401).json({ error: ERROR_MESSAGES.INVALID_API_KEY });
  }
  next();
};
