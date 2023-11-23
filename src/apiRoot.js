import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import { createAuthForClientCredentialsFlow, createHttpClient } from "@commercetools/sdk-client-v2";
import clientObject from "./helpers/clientObject.js";
import { authMiddlewareOptions, httpMiddlewareOptions } from './config/middleware.js';
import { options } from "./config/options.js";
import { isNodeEnv } from './config/environment.js';

// logger does not seem to work on this call
function getClient(options) {
  const client = clientObject
    .withProjectKey(options.projectKey)
    .withMiddleware(createAuthForClientCredentialsFlow(authMiddlewareOptions))
    .withLoggerMiddleware()
    .withMiddleware(createHttpClient(httpMiddlewareOptions))
    .withLoggerMiddleware()
    .withUserAgentMiddleware()
    .withLoggerMiddleware()
    .build();
  return client;
}

const apiRoot = createApiBuilderFromCtpClient(getClient(options)).withProjectKey({ projectKey: options.projectKey });

const getApiRoot = () => {
  return new Promise(function(resolve, reject) {
      resolve (apiRoot);
  });
};

export const retriveApi = (data) => {
  console.log('retrieveApi');
  return getApiRoot()
    .then(response => {
      data = response;
      console.log(data);
      return data;
    })
    .catch(error => console.log(error));
};

if (isNodeEnv === 'production') {
  retriveApi();
}

export default apiRoot;

export {
  apiRoot,
  getApiRoot
}
