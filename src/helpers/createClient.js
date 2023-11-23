import { createClient } from '@commercetools/sdk-client';
import { createLoggerMiddleware } from '@commercetools/sdk-middleware-logger';
import { authMiddleware, httpMiddleware } from '../config/middleware.js';

const client = createClient({
  middlewares: [
    authMiddleware,
    createLoggerMiddleware(),
    httpMiddleware,
    createLoggerMiddleware(),
  ],
});

export { client }
