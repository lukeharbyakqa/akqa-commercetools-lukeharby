import { apiRoot } from './apiRoot.js';
import { isNodeEnv } from './config/environment.js';

const getExtentions = () => {
  return apiRoot.extensions().get().execute();
}

const retrieveExtensions = (data) => {
  return getExtentions()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

if (isNodeEnv === 'production') {
  retrieveExtensions();
}

export { retrieveExtensions };
