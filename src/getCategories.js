import { apiRoot } from './apiRoot.js';
import { isNodeEnv } from './config/environment.js';

const getCategories = () => {
  console.log(apiRoot.productTypes().get());
  return apiRoot
    .productTypes()
    .get()
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

const retrieveCategories = (data) => {
  return getCategories()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

if (isNodeEnv) {
  getCategories();
  // retrieveCategories();
}

export { retrieveCategories };
