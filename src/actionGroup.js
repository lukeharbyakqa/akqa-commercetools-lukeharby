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

const categoriesRequest = {
  uri: `/categories/${before.id}`,
  method: 'POST',
  body: JSON.stringify({ version: before.version, actions }),
}

client.execute(categoriesRequest)
  .then(result => console.log(result))
  .catch(error => console.log(error));
