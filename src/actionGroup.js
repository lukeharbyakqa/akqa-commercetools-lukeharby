import { createSyncCategories } from '@commercetools/sync-actions';
import { client } from './helpers/createClient.js';

const syncCategories = createSyncCategories();

const before = {
  name: { en: 'My Category' }
};

const now = {
  name: { en: 'My Category', de: 'Meine Kategorie' }
};

const actions = syncCategories.buildActions(now, before);

// before.id returns undefined
const categoriesRequest = {
  uri: `/categories/${before.id}`,
  method: 'POST',
  body: JSON.stringify({ version: before.version, actions }),
}

const execActionsGroup = () => {
  return client.execute(categoriesRequest)
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

const retrieveActionsGroup = (data) => {
  return execActionsGroup()
    .then(response => {
      data = response;
      return data;
  })
  .catch(console.error);
}

// currently returns a 404
export { retrieveActionsGroup };
