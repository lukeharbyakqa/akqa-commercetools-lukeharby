import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { createAuthForClientCredentialsFlow, createHttpClient } from "@commercetools/sdk-client-v2";
import clientObject from "./helpers/clientObject.js";
import { authMiddlewareOptions, httpMiddlewareOptions } from './config/middleware.js'
import { options } from "./config/options.js";

function getClient(options) {
  const client = clientObject.withProjectKey(options.projectKey).withMiddleware(createAuthForClientCredentialsFlow(authMiddlewareOptions)).withMiddleware(createHttpClient(httpMiddlewareOptions)).withUserAgentMiddleware().build();
  return client;
}

const apiRoot = createApiBuilderFromCtpClient(getClient(options)).withProjectKey({ projectKey: options.projectKey });

export default apiRoot;
