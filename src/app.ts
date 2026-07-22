import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { healthRouter } from './modules/health/health.route';
import { usersRouter } from './modules/users/users.route';
import { swaggerSpecification } from './config/swagger';
import { errorHandler } from './middlewares/error-handler.middleware';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

const apiRouter = express.Router();
apiRouter.use(healthRouter);
apiRouter.use(usersRouter);

app.use('/api/v1', apiRouter);

// 404 Route
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use(errorHandler);
