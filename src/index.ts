import express from 'express';
import routes from './routes';
import { apiKeyAuth } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import { ROUTES } from './constants';

const app = express();
app.use(express.json());
app.use(apiKeyAuth);
app.use(ROUTES.API_ROOT, routes);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
