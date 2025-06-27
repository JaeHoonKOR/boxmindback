import { z } from 'zod';
export const itemSchema = z.object({
  boxId: z.string().uuid(),
  name: z.string().min(1),
  category: z.string().min(1),
  imageUrl: z.string().url().optional(),
  barcode: z.string().optional(),
  purchaseDate: z.string().optional(),
  expiryDate: z.string().optional(),
  lastUsedDate: z.string().optional(),
});
