import { createSafeUser } from './users.service';

describe('createSafeUser', () => {
  it('returns a user without exposing the password', () => {
    const result = createSafeUser({
      email: 'user@example.com',
      password: 'secure-password',
    });

    expect(result).toEqual({ email: 'user@example.com' });
  });
});
