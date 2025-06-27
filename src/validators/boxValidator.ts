import { z } from 'zod';
export const boxSchema = z.object({ userId: z.string().uuid(), name: z.string().min(1) });
