import express from 'express';
import routes from './routes';
import { apiKeyAuth } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(apiKeyAuth);
app.use('/api', routes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
