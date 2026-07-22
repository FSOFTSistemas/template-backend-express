import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { healthRouter } from './modules/health/health.route';
import { swaggerSpecification } from './config/swagger';

export const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecification));
app.use(healthRouter);
