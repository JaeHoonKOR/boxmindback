import { Request, Response } from 'express';
import { registerSchema } from '../validators/userValidator';
import { prisma } from '../prisma';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email } = registerSchema.parse(req.body);
    const user = await prisma.user.create({ data: { email } });
    res.json({ userId: user.id });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
