import cron from 'node-cron';
import { prisma } from '../prisma';

export const startReminderJob = () => {
  cron.schedule('0 8 * * *', async () => {
    // TODO: check items and send email reminders
    console.log('Running reminder job');
  });
};
