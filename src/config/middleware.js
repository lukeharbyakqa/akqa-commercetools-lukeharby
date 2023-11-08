import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth';
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http';
import { options } from './options.js';

// Configure authMiddlewareOptions
const authMiddlewareOptions = {
  host: options.authURL,
  projectKey: options.projectKey,
  credentials: {
    clientId: options.clientID,
    clientSecret: options.secret,
  },
  scopes: options.scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions = {
  host: options.apiURL,
  fetch,
};

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow(authMiddlewareOptions)
const httpMiddleware = createHttpMiddleware(httpMiddlewareOptions);

export {
  authMiddleware,
  httpMiddleware,
  authMiddlewareOptions,
  httpMiddlewareOptions
}
