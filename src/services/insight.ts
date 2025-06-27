import { prisma } from '../prisma';

export const generateInsights = async (userId: string) => {
  const topItems = await prisma.$queryRaw`SELECT name FROM items WHERE user_id=${userId} ORDER BY purchase_date LIMIT 5`;
  const unusedItems = await prisma.$queryRaw`SELECT name FROM items WHERE user_id=${userId} AND last_used_date < NOW() - INTERVAL '1 year'`;
  return { topItems, unusedItems };
};
