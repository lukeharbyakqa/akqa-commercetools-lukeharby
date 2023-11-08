import { createClient } from '@commercetools/sdk-client';
import { authMiddleware, httpMiddleware } from '../config/middleware.js';

const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});

export { client }
