import { z } from 'zod';

export const createUserInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export type CreateUserInput = z.infer<typeof createUserInputSchema>;
