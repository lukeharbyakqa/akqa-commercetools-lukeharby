import dotenv from "dotenv";
import { ClientBuilder } from "@commercetools/sdk-client-v2";
// import { createClient } from "@commercetools/sdk-client-v2";
// import { createAuthMiddlewareForClientCredentialsFlow } from "@commercetools/sdk-middleware-auth";
// import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";

dotenv.config();

const projectKey = process.env.PROJECT_KEY;
const scopes = [process.env.SCOPES];
const clientID = process.env.CLIENT_ID;
const secret = process.env.SECRET;
const apiURL = process.env.API_URL;
const authURL = process.env.AUTH_URL;

// Configure authMiddlewareOptions
const authMiddlewareOptions = {
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
const httpMiddlewareOptions = {
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

console.log(ctpClient);
