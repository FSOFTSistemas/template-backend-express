import { Router } from 'express';
import { getHealth } from './health.controller';

export const healthRouter = Router();

/**
 * @openapi
 * /health:
 *   get:
 *     summary: Checks the API health status
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: The API is available
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - status
 *                 - timestamp
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 */
healthRouter.get('/health', getHealth);
