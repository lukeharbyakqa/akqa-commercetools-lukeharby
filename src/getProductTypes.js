import { apiRoot } from './apiRoot.js';
import { isNodeEnv } from './config/environment.js';

const getProductTypes = () => {
  return apiRoot.productTypes().get().execute();
}

const retrieveProductTypes = (data) => {
  return getProductTypes()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

if (isNodeEnv === 'production') {
  retrieveProductTypes();
}

export { retrieveProductTypes };
