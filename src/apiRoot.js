import dotenv from "dotenv";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { createAuthForClientCredentialsFlow, createHttpClient } from "@commercetools/sdk-client-v2";
import clientObject from "./client.js";
import { options } from "./options.js";

dotenv.config();

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

function getClient(options) {
  const client = clientObject.withProjectKey(options.projectKey).withMiddleware(createAuthForClientCredentialsFlow(authMiddlewareOptions)).withMiddleware(createHttpClient(httpMiddlewareOptions)).withUserAgentMiddleware().build();
  return client;
}

const apiRoot = createApiBuilderFromCtpClient(getClient(options)).withProjectKey({ projectKey: options.projectKey });

console.log(apiRoot);

export default apiRoot;
