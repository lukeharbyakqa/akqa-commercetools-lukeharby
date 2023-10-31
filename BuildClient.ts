const dontenv = require("dotenv");

dontenv.config();

import fetch from "node-fetch";
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from "@commercetools/sdk-client-v2";

const projectKey = process.env.PROJECT_KEY;
const scopes = [process.env.SCOPES];
const clientID = process.env.CLIENT_ID;
const secret = process.env.SECRET;
const apiURL = process.env.API_URL;
const authURL = process.env.AUTH_URL;

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `${authURL}`,
  projectKey: `${projectKey}`,
  credentials: {
    clientId: `${clientID}`,
    clientSecret: `${secret}`,
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `${apiURL}`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(`${projectKey}`) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();
