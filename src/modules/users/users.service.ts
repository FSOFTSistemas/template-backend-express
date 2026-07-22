import { createUserInputSchema, type CreateUserInput } from './users.schema';

export interface SafeUser {
  email: string;
}

export function createSafeUser(input: CreateUserInput): SafeUser {
  const user = createUserInputSchema.parse(input);

  return { email: user.email };
}
