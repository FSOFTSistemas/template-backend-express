import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void {
  if (error instanceof z.ZodError) {
    response.status(400).json({
      error: 'Validation Error',
      issues: error.issues,
    });
    return;
  }

  console.error('[Global Error Handler]', error);
  response.status(500).json({ error: 'Internal Server Error' });
}
