import { Request } from 'express';

export const logError = (err: any, req: Request) => {
  const userId = (req.params.userId || req.body.userId || 'unknown') as string;
  console.error(
    `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} userId=${userId} -`,
    err
  );
};
