import request from 'supertest';
import { app } from '../src/app';

jest.mock('../src/config/database', () => ({
  prisma: {},
}));

describe('GET /api/health (e2e)', () => {
  it('returns the API health status and a valid timestamp', async () => {
    const response = await request(app).get('/api/health').expect(200);
    const body = response.body as { status: string; timestamp: string };

    expect(body).toEqual({
      status: 'ok',
      timestamp: expect.any(String) as string,
    });
    expect(Number.isNaN(Date.parse(body.timestamp))).toBe(false);
  });
});
