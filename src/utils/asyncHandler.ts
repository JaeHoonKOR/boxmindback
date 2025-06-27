import { Request, Response, NextFunction } from 'express';
import { logError } from './logger';

export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    logError(err, req);
    next(err);
  }
};
