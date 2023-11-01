import dotenv from "dotenv";
import { createClient } from "@commercetools/sdk-client-v2";
import { createAuthMiddlewareForClientCredentialsFlow } from "@commercetools/sdk-middleware-auth";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";

dotenv.config();

const projectKey = process.env.PROJECT_KEY;
const scopes = [process.env.SCOPES];
const clientID = process.env.CLIENT_ID;
const secret = process.env.SECRET;
const apiURL = process.env.API_URL;
const authURL = process.env.AUTH_URL;

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: authURL,
  projectKey,
  credentials: {
    clientId: clientID,
    clientSecret: secret,
  },
  scopes: scopes,
});

const httpMiddleware = createHttpMiddleware({
  host: apiURL,
});

export const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
});

console.log(ctpClient);
