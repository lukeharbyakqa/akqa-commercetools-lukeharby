import { apiRoot } from './apiRoot.js';
import { isNodeEnv } from './config/environment.js';

const getCarts = () => {
  return apiRoot.carts().get().execute();
}

const retrieveCarts = (data) => {
  return getCarts()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

if (isNodeEnv === 'production') {
  retrieveCarts();
}

export { retrieveCarts };
