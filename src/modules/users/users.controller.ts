import type { Request, Response } from 'express';
import { createSafeUser } from './users.service';
import { ZodError } from 'zod';

export function createUser(request: Request, response: Response): void {
  try {
    const user = createSafeUser(request.body);
    response.status(201).json(user);
  } catch (error) {
    if (error instanceof ZodError) {
      response.status(400).json({ errors: error.issues });
    } else {
      response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
