import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpecification = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend Template API',
      version: '1.0.0',
      description: 'API documentation for the backend template.',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Local development server',
      },
    ],
  },
  apis: ['src/modules/**/*.route.ts', 'dist/modules/**/*.route.js'],
});
