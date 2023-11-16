import { apiRoot } from './apiRoot.js';
import { isNodeEnv } from './config/environment.js';

const getProducts = () => {
  return apiRoot.products().get().execute();
}

const retrieveProducts = (data) => {
  return getProducts()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

if (isNodeEnv === 'production') {
  retrieveProducts();
}

export { retrieveProducts };
