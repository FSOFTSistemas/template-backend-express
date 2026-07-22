import type { Request, Response } from 'express';
import { createSafeUser } from './users.service';
import { createUserInputSchema } from './users.schema';

export async function createUser(request: Request, response: Response): Promise<void> {
  const data = createUserInputSchema.parse(request.body);
  const user = await createSafeUser(data);
  
  response.status(201).json(user);
}
