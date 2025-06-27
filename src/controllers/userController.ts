import { Request, Response } from 'express';
import { registerSchema } from '../validators/userValidator';
import { prisma } from '../prisma';
import { asyncHandler } from '../utils/asyncHandler';

export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { email } = registerSchema.parse(req.body);
  const user = await prisma.user.create({ data: { email } });
  res.json({ userId: user.id });
});
