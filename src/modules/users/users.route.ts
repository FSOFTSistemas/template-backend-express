import { Router } from 'express';
import { createUser } from './users.controller';

export const usersRouter = Router();

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Creates a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       201:
 *         description: The user was created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *       400:
 *         description: Validation error
 */
usersRouter.post('/users', createUser);
