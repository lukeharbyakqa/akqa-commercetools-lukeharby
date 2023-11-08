import {
  createRequestBuilder,
  features,
} from '@commercetools/api-request-builder';
import { client } from './helpers/createClient.js';
import { options } from './config/options.js';

const config = {
  projectKey: options.projectKey,
  customServices: {
    users: {
      type: 'users',
      endpoint: '/users',
      features: [features.query, features.queryOne],
    },
  },
};

export const requestBuilder = createRequestBuilder(config);

const channelsUri = requestBuilder.channels
  .where('key = "foo"')
  .perPage(1)
  .withVersion(3)
  .build();

const channelsRequest = {
  uri: channelsUri,
  method: 'GET',
}

client.execute(channelsRequest)
  .then(result => console.log(result))
  .catch(error => console.log(error));
