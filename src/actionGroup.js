import { createSyncCategories } from '@commercetools/sync-actions';
import apiRoot from './apiRoot.js';

const syncCategories = createSyncCategories();

const before = {
  name: { en: 'My Category' }
}
const now = {
  name: { en: 'My Category', de: 'Meine Kategorie' }
}

const actions = syncCategories.buildActions(now, before)

const categoriesRequest = {
  uri: `/categories/${before.id}`,
  method: 'POST',
  body: JSON.stringify({ version: before.version, actions }),
}

// This seems to log the same data as
// const getEndPoint = () => {} from index.js file
apiRoot.get().execute(categoriesRequest)
  .then(result => console.log(result))
  .catch(error => console.log(error));
